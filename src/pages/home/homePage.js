import { View, ScrollView, Image } from "react-native";
import {
  Button,
  Flex,
  Provider,
  Toast,
  Text,
  WhiteSpace,
} from "@ant-design/react-native";
import Storage from "@/utils/storage";
import { useEffect, useState } from "react";
import { getUserInfo } from "@/api/user";
import styles from "./styles";

function HomePage({ navigation }) {
  const [loaded, setLoaded] = useState(false);
  const [userInfo, setUserInfo] = useState({
    username: "",
    nickName: "",
    avatar: {
      url: "",
    },
    birthday: "",
    sex: 0,
  });

  useEffect(() => {
    (async () => {
      const res = await getUserInfo();
      if (res.code === 2000) {
        setUserInfo({
          username: res.data.user.username,
          nickName: res.data.user.nickName,
          avatar: {
            url: res.data.user.avatar,
          },
          birthday: res.data.user.birthday,
          sex: res.data.user.sex,
        });
        setLoaded(true);
      }
      // @todo 错误处理
    })();
  }, []);

  const logOut = async () => {
    Toast.success("退出成功！", 1);
    await Storage.remove("token");
    setTimeout(() => {
      navigation.navigate("Cover");
    }, 1000);
  };
  if (!loaded) return <ScrollView></ScrollView>;

  return (
    <Provider>
      <ScrollView style={{ backgroundColor: "#eef1f2" }}>
        <Flex justify="center" direction="column">
          <Button
            type="primary"
            style={styles.head}
            onPress={() => navigation.navigate("Profile")}
          >
            <Image
              source={
                userInfo.avatar || require("../../assets/imgs/avatar.png")
              }
              style={styles.photo}
            ></Image>
          </Button>
          <View style={styles.SquareUP}>
            <Flex Flex justify="center" direction="col">
              <Text style={styles.nickName}>
                {userInfo.nickName || `DefaultUser${userInfo.username}`}
              </Text>
              <Text style={styles.username}>@{userInfo.username}</Text>
              <Text>最高记录：100{}分</Text>
            </Flex>
          </View>
        </Flex>
        <View style={styles.Square2}></View>
        <Flex justify="center" direction="row">
          <View style={styles.Square3}></View>
          <View style={styles.Square3}></View>
          <View style={styles.Square3}></View>
        </Flex>
        <View style={styles.Line}></View>
        <Flex justify="center" direction="row">
          <Button
            type="primary"
            style={styles.Start}
            onPress={() => navigation.navigate("Exam")}
          >
            开始答题
          </Button>
          <Button type="primary" style={styles.Review}>
            错题查看
          </Button>
        </Flex>
        <Flex justify="center" direction="row">
          <Button type="primary" onPress={logOut}>
            退出登录
          </Button>
        </Flex>
      </ScrollView>
    </Provider>
  );
}

export default HomePage;
