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
import { login } from "@/api/auth";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Storage from "@/utils/storage";
import styles from "./styles";

const RegisterPage = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [usernameErr, setUsernameErr] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState(false);

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
              source={require("@/assets/imgs/home.png")}
              style={styles.img}
            ></Image>
            <View style={styles.view1} />
            <Text style={styles.text}>Welcome Back!</Text>
            <View style={styles.view2} />
            <View style={styles.view3}>
              <View style={styles.item}>
                <List>
                  <InputItem
                    clear
                    error={usernameErr}
                    type="text"
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
export default RegisterPage;
