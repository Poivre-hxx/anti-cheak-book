import { useEffect, useState } from "react";
import { View, ScrollView, ImageBackground } from "react-native";
import { List, Flex, Text, Checkbox, Button } from "@ant-design/react-native";
import { getProblemInfo } from "@/api/user";
import styles from "./styles";

const Item = List.Item;

function SettlePage({ navigation }) {
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

  const Check = () => {
    if (num < 20) {
      setNum((state) => state + 1);

    } else {
      () => navigation.navigate("Settle");
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
                <Item>结束</Item>
              </List>
            </View>
          </Flex>
        </ImageBackground>
      </Flex>
    </ScrollView>
  );
}

export default SettlePage;
