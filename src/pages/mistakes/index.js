import { useEffect, useState } from "react";
import { View, ScrollView, ImageBackground } from "react-native";
import { List, Flex, Text, Checkbox, Button } from "@ant-design/react-native";
import { getPaper } from "@/api/problem";
import styles from "./styles";

const Item = List.Item;

const Mistakes = ({ route }) => {
  const { data } = route.params;
  const paper = data.split(",");
  paper.forEach((id, index) => {
    paper[index] = parseInt(id);
  });

  const [loaded, setLoaded] = useState(false);
  const [problemList, setProblemList] = useState([]);
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex(index + 1);
  };

  useEffect(() => {
    console.log(paper);
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
              <List styles={styles.ans}>
                {problemList[index].options.split(",").map(option => (
                  <Item
                    styles={styles.ans}
                    thumb={<Checkbox styles={styles.ans}>{option}</Checkbox>}
                  ></Item>
                ))}
              </List>
            </View>
            {index === problemList.length - 1 ? (
              <Button style={styles.button} onPress={handleNext} />
            ) : null}
          </Flex>
        </ImageBackground>
      </Flex>
    </ScrollView>
  );
};

export default Mistakes;
