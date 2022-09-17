import { useEffect, useState } from "react";
import { View, ScrollView, ImageBackground } from "react-native";
import { List, Flex, Text, Checkbox, Button } from "@ant-design/react-native";
import { getProblemInfo, updateSubmitInfo } from "@/api/problem";
import styles from "./styles";

const Item = List.Item;
let ans = [];
const answers = [];

function ExamPage({ navigation }) {
  const [loaded, setLoaded] = useState(false);
  const [problemInfo, setProblemInfo] = useState({
    id: "",
    title: "",
    options: "",
    type: "",
  });

  const [num, setNum] = useState(0);

  const refresh = async () => {
    const res = await getProblemInfo();
    if (res.code === 2000) {
      setProblemInfo(res.data.problemList);
      setLoaded(true);
    }
  };

  useEffect(() => {
    refresh();
  }, []);

  if (!loaded) return <View></View>;

  const Title = () => {
    const id = num;
    return <Text style={styles.title}>{problemInfo[id].title}</Text>;
  };

  const Option = () => {
    const id = num;
    let str = problemInfo[id].options;
    let res = str.split(",");
    return (
      <List styles={styles.ans}>
        {res.map((resData, index) => (
          <Item
            key={index}
            styles={styles.ans}
            thumb={
              <Checkbox
                key={index + 1}
                styles={styles.ans}
                onChange={e => {
                  if (e.target.checked === true) {
                    ans.push(index + 1);
                  } else {
                    ans.splice(
                      ans.findIndex(item => item === index + 1),
                      1
                    );
                  }
                }}
              >
                {resData}
              </Checkbox>
            }
          ></Item>
        ))}
      </List>
    );
  };

  const HandleClick = () => {
    let sub = "";
    let i = 0;
    for (i = 0; i < ans.length - 1; i++) {
      for (let j = 0; j < ans.length - 1; j++) {
        if (ans[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    for (i = 0; i < ans.length - 1; i++) {
      sub += ans[i];
      sub += ","
    }
    sub += ans[i];
    answers.push({
      id: problemInfo[num].id,
      answer: sub,
    });
    ans = [];
    setNum(state => state + 1);
  };

  const SubmitAnswers = async () => {
    const res = await updateSubmitInfo(answers);
    // if (res.code === 2000) {
    navigation.navigate("Settle");
    // }
  };

  const Check = () => {
    if (num < 15) {
      return (
        <View>
          <Button style={styles.button} onPress={() => HandleClick()}>
            确认
          </Button>
        </View>
      );
    } else {
      return (
        <Button style={styles.button} onPress={() => SubmitAnswers()}>
          确认
        </Button>
      );
    }
  };

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
              <Title />
            </View>
            {/* // 下半部分 */}
            <View style={styles.squareDown}>
              <List>
                <Item>选项</Item>
              </List>
              <Option />
            </View>
            <Check />
          </Flex>
        </ImageBackground>
      </Flex>
    </ScrollView>
  );
}

export default ExamPage;
