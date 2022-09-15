import { useState, useEffect, useCallback } from "react";
import { ScrollView, Image, View, Dimensions, Text } from "react-native";
import {
  List,
  Flex,
  Button,
  Provider,
  Toast,
  DatePicker,
  Picker,
  InputItem,
} from "@ant-design/react-native";
import Storage from "@/utils/storage";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import styles from "./styles";
import { updateUserInfo } from "@/api/user";
const Item = List.Item;

const { height: ScreenHeight } = Dimensions.get("screen");

const ProfilePage = ({ navigation, route }) => {
  const { data, callback } = route.params;

  const gender = [
    { value: 0, label: "请选择" },
    { value: 1, label: "男" },
    { value: 2, label: "女" },
  ];

  const [userInfo, setUserInfo] = useState({
    ...data,
    sex: [data.sex],
  });
  const [inputValue, setInputValue] = useState("");
  const [nickname, setNickname] = useState(userInfo.nickname);

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

  const onBlur = value => {
    setUserInfo({
      ...userInfo,
      nickname: value,
    });
    setInputValue("");
  };
  const onFocus = () => {
    setInputValue(userInfo.nickname);
    setUserInfo({
      ...userInfo,
      nickname: "",
    });
  };

  const logOut = async () => {
    Toast.success("退出成功！", 1);
    await Storage.remove("token");
    setTimeout(() => {
      navigation.navigate("Cover");
    }, 1000);
  };

  const handleUpdate = async () => {
    const res = await updateUserInfo(userInfo);
    if (res.code === 2000) {
      Toast.success("修改成功！", 1);
      callback();
      setTimeout(() => {
        navigation.navigate("Home");
      }, 1000);
    } else Toast.info(res.message, 1);
  };

  return (
    <Provider>
      <View onLayout={onLayoutRootView}>
        <ScrollView
          style={{ backgroundColor: "#eef1f2", height: ScreenHeight }}
        >
          <List renderHeader={" "}>
            <Item
              style={styles.sheet}
              extra={
                <Image
                  source={{
                    uri: userInfo.avatar,
                  }}
                  style={{ width: 29, height: 29 }}
                />
              }
            >
              头像
            </Item>
            <InputItem
              clear
              onChange={value => setInputValue(value)}
              value={inputValue}
              onBlur={onBlur}
              onFocus={onFocus}
              extra={
                <Text style={{ color: "#888888", fontSize: 16 }}>
                  {userInfo.nickname}
                </Text>
              }
            >
              昵称
            </InputItem>
            <Picker
              data={gender}
              cols={1}
              value={userInfo.sex}
              onChange={value => {
                setUserInfo({ ...userInfo, sex: value });
              }}
            >
              <Item style={styles.sheet}>性别</Item>
            </Picker>

            <DatePicker
              value={
                userInfo.birthday ? new Date(userInfo.birthday) : undefined
              }
              mode="date"
              defaultDate={new Date()}
              minDate={new Date(1900, 1, 1)}
              maxDate={new Date()}
              onChange={value => setUserInfo({ ...userInfo, birthday: value })}
              format="YYYY-MM-DD"
            >
              <Item style={styles.sheet}>出生年月</Item>
            </DatePicker>
            <Item style={styles.sheet}>
              <Flex justify="center" direction="row">
                <Button type="primary" onPress={handleUpdate}>
                  保存
                </Button>
                <View style={{ width: 20 }} />
                <Button type="warning" onPress={logOut}>
                  退出登录
                </Button>
              </Flex>
            </Item>
          </List>
        </ScrollView>
      </View>
    </Provider>
  );
};

export default ProfilePage;
