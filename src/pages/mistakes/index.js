import { useEffect, useState } from "react";
import { View, ScrollView, ImageBackground } from "react-native";
import {
  List,
  Flex,
  Text,
  Checkbox,
  Button,
  ActivityIndicator,
} from "@ant-design/react-native";
import { getPaper } from "@/api/problem";
import styles from "./styles";
import { difference } from "@/utils/lodash";
const Item = List.Item;

const Mistakes = ({ route }) => {
  const { data } = route.params;
  const paper = data.paper.split(",").map(el => parseInt(el));
  const mistakesMap = new Map();
  data.mistakes.forEach(mistake => {
    mistakesMap.set(
      mistake.id,
      mistake.myAnswer.split(",").map(el => parseInt(el))
    );
  });
  const [loaded, setLoaded] = useState(false);
  const [problemList, setProblemList] = useState([]);
  const [index, setIndex] = useState(0);

  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (problemList.length === 0) return;
    const problem = problemList[index];
    const correctAnswers = problem.answer.split(",").map(el => parseInt(el));
    const myAnswers = mistakesMap.get(problem.id);

    if (!myAnswers) {
      // 说明这道题做对了
      const res = problem.options.split(",").map((optionText, _index) => ({
        optionText,
        selected: correctAnswers.includes(_index + 1),
        isWrong: false,
      }));
      setOptions(res);
      return;
    }
    const overSelected = difference(myAnswers, correctAnswers);
    const missingSelected = difference(correctAnswers, myAnswers);
    const mistakes = overSelected.concat(missingSelected);
    const res = problem.options.split(",").map((optionText, _index) => {
      // 已选
      const selected = myAnswers?.indexOf(_index + 1) !== -1;
      // 判断对错
      const isWrong = mistakes.includes(_index + 1);

      return {
        optionText,
        selected,
        isWrong,
      };
    });
    setOptions(res);
  }, [problemList, index]);

  useEffect(() => {
    getPaper(paper).then(res => {
      if (res.code === 2000) {
        setProblemList(res.data.problemList);
        setLoaded(true);
      }
    });
  }, []);

  if (!loaded)
    return (
      <View style={{ position: "absolute", top: "50%", left: "50%" }}>
        <ActivityIndicator />
      </View>
    );

  return (
    <ScrollView style={{ backgroundColor: "#eef1f2" }}>
      <Flex justify="center">
        <ImageBackground
          style={styles.blue}
          source={require("@/assets/imgs/blue.png")}
        >
          <Flex justify="center" direction="column">
            {/* // 上半部分 */}
            <View style={styles.squareUp}>
              <List>
                <Item>题目</Item>
              </List>
              <Text style={styles.title}>{problemList[index].title}</Text>
            </View>
            {/* // 下半部分 */}
            <View style={styles.squareDown}>
              <List>
                <Item
                  extra={
                    <View>
                      <Text>
                        第{index + 1}题/共{problemList.length}题
                      </Text>
                    </View>
                  }
                >
                  选项
                </Item>
              </List>
              <Flex direction="column" align="center" justify="center">
                {options.map((option, _index) => {
                  return (
                    <View
                      key={_index}
                      style={{
                        ...styles.ans,
                        backgroundColor: option.isWrong ? "red" : "white",
                      }}
                    >
                      <Checkbox checked={option.selected}>
                        <Text
                          style={{
                            fontSize: 16,
                            color: option.isWrong ? "white" : "black",
                          }}
                        >
                          {option.optionText}
                        </Text>
                      </Checkbox>
                    </View>
                  );
                })}
              </Flex>
              <Flex justify="between">
                {index !== 0 ? (
                  <Button
                    style={styles.button}
                    onPress={() => setIndex(index - 1)}
                  >
                    上一题
                  </Button>
                ) : (
                  <View></View>
                )}
                {index !== problemList.length - 1 ? (
                  <Button
                    style={styles.button}
                    onPress={() => setIndex(index + 1)}
                  >
                    下一题
                  </Button>
                ) : (
                  <View></View>
                )}
              </Flex>
            </View>
          </Flex>
        </ImageBackground>
      </Flex>
    </ScrollView>
  );
};

export default Mistakes;
