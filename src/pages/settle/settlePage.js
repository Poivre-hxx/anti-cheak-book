import { useEffect, useState } from "react";
import { View, ScrollView, ImageBackground, Text, Image } from "react-native";
import {
  List,
  Flex,
  ActivityIndicator,
  Button,
} from "@ant-design/react-native";
import { submitAnswers } from "@/api/problem";
import styles from "./styles";

const Item = List.Item;

function SettlePage({ navigation, route }) {
  const { type, result } = route.params;
  const [loaded, setLoaded] = useState(false);
  const [info, setInfo] = useState({});

  const handlePress = () => {
    navigation.navigate("Mistakes", {
      data: info,
    });
  };

  useEffect(() => {
    submitAnswers(type, result).then((res) => {
      if (res.code === 2000) {
        setInfo(res.data);
        setTimeout(() => setLoaded(true), 1000);
      }
    });
  }, []);

  return (
    <ScrollView style={{ backgroundColor: "#eef1f2" }}>
      <Flex justify="center">
        <ImageBackground
          style={styles.blue}
          source={require("@/assets/imgs/blue.png")}
        >
          <Flex justify="center" direction="column">
            {/* // 上半部分 */}
            <List style={styles.squareUp}>
              <Item>{!loaded ? "正在计算" : "考试结束"}</Item>
              <Item>
                {!loaded ? (
                  <ActivityIndicator text="正在加载" />
                ) : (
                  <View>
                    <Text style={{ textAlign: "center" }}>
                      您的得分是：{info.score}
                    </Text>
                    <Button
                      type="primary"
                      style={{ marginVertical: 20, marginHorizontal: 10 }}
                      onPress={handlePress}
                    >
                      查看错题
                    </Button>
                  </View>
                )}
              </Item>
            </List>
          </Flex>
        </ImageBackground>
      </Flex>
      <Flex justify="center">
        <Image 
        source={require("../../assets/imgs/bottom.png")} 
        style={styles.bot}
        resizeMode='contain'>
        </Image>
      </Flex>
    </ScrollView>
  );
}

export default SettlePage;
