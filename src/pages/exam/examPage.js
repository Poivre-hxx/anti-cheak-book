import { useEffect, useState } from "react";
import { View, ScrollView, ImageBackground } from "react-native";
import { List, Flex, Text, Checkbox, Button } from "@ant-design/react-native";
import { getProblemInfo } from "@/api/user";
import styles from "./styles";

const Item = List.Item;

function ExamPage({ navigation }) {
  const [loaded, setLoaded] = useState(false);
  const [problemInfo, setProblemInfo] = useState({
    id: "",
    title: "",
    options: "",
    type: "",
  });

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

  const Option = () => {
    let str = problemInfo[1].options;
    let res = str.split(",");
    return (
      <List styles={styles.ans}>
        {res.map((resData) => (
          <Item styles={styles.ans} thumb={<Checkbox styles={styles.ans}>{resData}</Checkbox>}>
          </Item>
          ))}
    </List>
    )
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
              <Text style={styles.title}>{problemInfo[0].title}</Text>
            </View>
            {/* // 下半部分 */}
            <View style={styles.squareDown}>
              <List>
                <Item>选项</Item>
              </List>
              <Option />
            </View>
            <Button style={styles.button}>确认</Button>
          </Flex>
        </ImageBackground>
      </Flex>
    </ScrollView>
  );
}

export default ExamPage;
