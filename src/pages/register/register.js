import { useState, useEffect, useCallback } from "react";
import { Text, View, ScrollView, Image } from "react-native";
import {
  Button,
  Flex,
  InputItem,
  List,
  Provider,
  Toast,
} from "@ant-design/react-native";
import { register } from "@/api/auth";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Storage from "@/utils/storage";
import styles from "./styles";

const RegisterPage = ({ navigation }) => {
  const [username, setUsername] = useState({
    value: "",
    err: false,
  });
  const [password, setPassword] = useState({
    value: "",
    err: false,
  });
  const [passwordAgain, setPasswordAgain] = useState({
    value: "",
    err: false,
  });

  const [fontsLoaded] = useFonts({
    antoutline: require("@ant-design/icons-react-native/fonts/antoutline.ttf"),
  });

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) await SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return;

  const handleClick = async () => {
    if (!username.value || !password.value || !passwordAgain.value) {
      if (!username.value) setUsername({ ...username, err: true });
      if (!password.value) setPassword({ ...password, err: true });
      if (!passwordAgain.value)
        setPasswordAgain({ ...passwordAgain, err: true });
      Toast.fail("表单不能留空！", 1);
      return;
    }
    if (password.value !== passwordAgain.value) {
      Toast.fail("两次输入的密码不一致！", 1);
      setPassword({ ...password, err: true });
      setPasswordAgain({ ...passwordAgain, err: true });
      return;
    }
    setUsername({ ...username, err: false });
    setPassword({ ...password, err: false });
    setPasswordAgain({ ...passwordAgain, err: false });
    const res = await register(username.value, password.value);
    if (res.code === 40001) {
      Toast.fail("当前用户名已被注册", 1);
      setUsername({ ...username, err: true });
    }
    if (res.code === 2000) {
      Toast.success("注册成功！正在为您自动登陆！", 1);
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
              source={require("@/assets/imgs/home.png")}
              style={styles.img}
            ></Image>
            <View style={styles.view1} />
            <Text style={styles.text}>Welcome Back!</Text>
            <View style={styles.line} />
            <View style={styles.view3}>
              <View style={styles.item}>
                <List>
                  <InputItem
                    clear
                    error={username.err}
                    type="text"
                    onChange={value => {
                      setUsername({ value, err: false });
                    }}
                    placeholder="请输入账号"
                  >
                    账号
                  </InputItem>
                  <InputItem
                    clear
                    error={password.err}
                    type="password"
                    onChange={value => {
                      setPassword({ value, err: false });
                    }}
                    placeholder="请输入密码"
                  >
                    密码
                  </InputItem>
                  <InputItem
                    clear
                    error={passwordAgain.err}
                    type="password"
                    onChange={value => {
                      setPasswordAgain({ value, err: false });
                    }}
                    placeholder="请再次输入密码"
                  >
                    重复密码
                  </InputItem>
                </List>
              </View>
            </View>
            <Button type="primary" style={styles.button} onPress={handleClick}>
              注册
            </Button>
          </Flex>
        </ScrollView>
      </View>
    </Provider>
  );
};
export default RegisterPage;
