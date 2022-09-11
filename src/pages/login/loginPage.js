import { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import {
  Button,
  Flex,
  InputItem,
  List,
  Provider,
  Toast,
} from "@ant-design/react-native";
import { login } from "../../api/auth";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Storage from "../../utils/storage";

const styles = StyleSheet.create({
  img: {
    marginTop: 50,
    marginBottom: -270,
    height: 250,
    width: 250,
    zIndex: 1,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    letterSpacing: 5,
    marginTop: 20,

    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#3851B2",
    width: 185,
    height: 50,
    marginTop: 30,
    marginBottom: 300,
  },
  item: {
    marginTop: 45,
  },
});

const LoginPage = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [usernameErr, setUsernameErr] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState(false);

  const [fontsLoaded] = useFonts({
    antoutline: require("@ant-design/icons-react-native/fonts/antoutline.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const handleClick = async () => {
    if (!username || !password) {
      if (!username) {
        setUsernameErr(true);
      }
      if (!password) {
        setPasswordErr(true);
      }
      Toast.fail("用户名或密码不能为空！", 1);
      return;
    }
    setUsernameErr(false);
    setPasswordErr(false);
    const res = await login(username, password);
    if (res.code === 40002) {
      Toast.fail("用户不存在！", 1);
      setUsernameErr(true);
      setPasswordErr(true);
    }
    if (res.code === 40003) {
      Toast.fail("密码错误！", 1);
      setPasswordErr(true);
    }
    if (res.code === 2000) {
      Toast.success("登录成功！正在为您跳转", 1);
      Storage.set("token", res.data.token);
      setTimeout(() => navigation.navigate("Home"), 1000);
    }
  };

  return (
    <Provider>
      <View onLayout={onLayoutRootView}>
        <ScrollView style={{ backgroundColor: "#eef1f2" }}>
          <Flex justify="center" direction="column">
            <Image
              source={require("../../assets/imgs/home.png")}
              style={styles.img}
            ></Image>
            <View
              style={{
                backgroundColor: "#fff",
                borderRadius: 15,
                width: 306,
                height: 174,
                margin: 1,
                marginTop: 100,
              }}
            ></View>
            <Text style={styles.text}>Welcome Back!</Text>
            <View
              style={{
                marginTop: 20,
                borderRadius: 9,
                backgroundColor: "#707070",
                margin: 4,
                width: 304,
                height: 1,
              }}
            ></View>
            <View
              style={{
                borderRadius: 15,
                backgroundColor: "#fff",
                width: 306,
                height: 206,
                margin: 1,
                marginTop: 30,
              }}
            >
              <View style={styles.item}>
                <List>
                  <InputItem
                    clear
                    error={usernameErr}
                    type="number"
                    onChange={value => {
                      setUsername(value);
                    }}
                    placeholder="请输入账号"
                  >
                    账号
                  </InputItem>
                  <InputItem
                    clear
                    error={passwordErr}
                    type="password"
                    onChange={value => {
                      setPassword(value);
                    }}
                    placeholder="请输入密码"
                  >
                    密码
                  </InputItem>
                </List>
              </View>
            </View>
            <Button type="primary" style={styles.button} onPress={handleClick}>
              登录
            </Button>
          </Flex>
        </ScrollView>
      </View>
    </Provider>
  );
};
export default LoginPage;
