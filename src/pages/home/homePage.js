import {
  View,
  ScrollView,
  Image,
  Dimensions,
  ImageBackground,
} from "react-native";
import { Button, Flex, Provider, Text } from "@ant-design/react-native";
import { useEffect, useState } from "react";
import { getUserInfo } from "@/api/user";
import styles from "./styles";
import SizedImage from "@/components/SizedImage";

const { width: ScreenWidth } = Dimensions.get("screen");

function HomePage({ navigation }) {
  const [loaded, setLoaded] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  const refresh = async () => {
    const res = await getUserInfo();
    if (res.code === 2000) {
      setUserInfo(res.data.user);
      setLoaded(true);
    }
    // @todo 错误处理
  };

  useEffect(() => {
    refresh();
  }, []);

  if (!loaded) return <View></View>;

  return (
    <Provider>
      <ScrollView style={styles.main}>
        <Flex justify="center" direction="column">
          <Button
            type="primary"
            style={styles.head}
            onPress={() =>
              navigation.navigate("Profile", {
                data: userInfo,
                callback: refresh,
              })
            }
          >
            <Image
              source={
                { url: userInfo.avatar } || require("@/assets/imgs/avatar.png")
              }
              style={styles.photo}
            ></Image>
          </Button>
          <View style={{ position: "relative" }}>
            <ImageBackground
              source={require("@/assets/home/info.png")}
              style={styles.info}
            >
              <Flex
                Flex
                justify="center"
                direction="col"
                style={styles.info_text}
              >
                <Text style={styles.nickname}>
                  {userInfo.nickname || `DefaultUser${userInfo.username}`}
                </Text>
                <Text style={styles.username}>@{userInfo.username}</Text>
                {/* <View style={styles.line}></View> */}
                <Text>最高记录：{userInfo.maxScore}分</Text>
              </Flex>
            </ImageBackground>
          </View>
        </Flex>
        <View style={styles.btn}>
          <Text style={styles.btn_text}>数据分析</Text>
        </View>
        <Flex justify="center" direction="row">
          <ImageBackground
            style={styles.category}
            source={require("@/assets/home/category.png")}
          ></ImageBackground>
          <ImageBackground
            style={styles.category}
            source={require("@/assets/home/category.png")}
          ></ImageBackground>
          <ImageBackground
            style={styles.category}
            source={require("@/assets/home/category.png")}
          ></ImageBackground>
        </Flex>
        <Flex justify="center" direction="row">
          <Button
            style={styles.start}
            onPress={() => navigation.navigate("Exam")}
          >
            <Text style={styles.start_text}>开始</Text>
          </Button>
          <Button style={styles.review}>
            <Text style={styles.start_text}>错题查看</Text>
          </Button>
        </Flex>
      </ScrollView>
      <SizedImage
        style={styles.bg}
        width={ScreenWidth}
        source={require("@/assets/home/bg.png")}
      />
    </Provider>
  );
}

export default HomePage;
