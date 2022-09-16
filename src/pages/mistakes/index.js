import { useEffect, useState } from "react";
import { View, ScrollView, ImageBackground } from "react-native";
import { List, Flex, Text, Checkbox, Button } from "@ant-design/react-native";
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
    let overSelected, missingSelected;
    if (myAnswers) {
      overSelected = difference(myAnswers, correctAnswers);
      missingSelected = difference(correctAnswers, myAnswers);
    }
    const res = problem.options.split(",").map((optionText, _index) => {
      const isCorrect = correctAnswers.indexOf(_index + 1) !== -1;
      const selected = myAnswers?.indexOf(_index + 1) !== -1;
      const isWrong = myAnswers
        ? overSelected.indexOf(_index + 1) !== -1 ||
          missingSelected.indexOf(_index + 1) !== -1
        : false;
      return {
        optionText,
        isCorrect,
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

  if (!loaded) return;

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
                <Item>选项</Item>
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
                      <Checkbox checked={option.isCorrect || option.selected}>
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
