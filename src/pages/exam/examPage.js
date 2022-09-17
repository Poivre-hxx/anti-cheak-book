import { useEffect, useState } from "react";
import { View, ScrollView, ImageBackground } from "react-native";
import { List, Flex, Text, Checkbox, Button } from "@ant-design/react-native";
import { getProblemInfo } from "@/api/problem";
import styles from "./styles";
const Item = List.Item;

const ExamPage = ({ navigation, route }) => {
  const { type } = route.params;
  const [loaded, setLoaded] = useState(false);
  const [problemList, setProblemList] = useState([]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleSubmit = () => {
    const result = answers.map(el => ({
      id: el.id,
      answer: [...el.answer].sort().join(","),
    }));
    navigation.navigate("Settle", { type, result });
  };

  useEffect(() => {
    getProblemInfo(type).then(res => {
      if (res.code === 2000) {
        setProblemList(res.data.problemList);
        setAnswers(
          res.data.problemList.map(problem => ({
            id: problem.id,
            options: problem.options.split(","),
            answer: new Set(),
          }))
        );
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
              <List
                style={{ backgroundColor: "#fff" }}
                renderFooter={
                  <Flex justify="between" style={{ padding: 10 }}>
                    {index !== 0 ? (
                      <Button onPress={() => setIndex(index - 1)}>
                        上一题
                      </Button>
                    ) : (
                      <View />
                    )}
                    {index !== problemList.length - 1 ? (
                      <Button onPress={() => setIndex(index + 1)}>
                        下一题
                      </Button>
                    ) : (
                      <Button type="primary" onPress={handleSubmit}>
                        提交答案
                      </Button>
                    )}
                  </Flex>
                }
              >
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
                {problemList[index].options.split(",").map((option, _index) => (
                  <Item
                    key={_index}
                    style={styles.ans}
                    onPress={() => {
                      const newAnswers = [...answers];
                      newAnswers[index].answer.has(_index + 1)
                        ? newAnswers[index].answer.delete(_index + 1)
                        : newAnswers[index].answer.add(_index + 1);
                      setAnswers(newAnswers);
                    }}
                  >
                    <Checkbox checked={answers[index].answer.has(_index + 1)}>
                      <Text style={{ fontSize: 16 }}>{option}</Text>
                    </Checkbox>
                  </Item>
                ))}
              </List>
            </View>
          </Flex>
        </ImageBackground>
      </Flex>
    </ScrollView>
  );
};

export default ExamPage;
