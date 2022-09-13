import { ScrollView, StyleSheet, Image } from "react-native";
import { List, Flex, Button, Provider, Toast } from "@ant-design/react-native";
import Storage from "@/utils/storage";

const Item = List.Item;

const styles = StyleSheet.create({
  sheet: {
    backgroundColor: "#fff",
    height: 60,
  },
});

const ProfilePage = ({ navigation }) => {
  const userInfo = navigation
    .getState()
    .routes.find(route => route.name === "Profile")?.params?.userInfo;

  const logOut = async () => {
    Toast.success("退出成功！", 1);
    await Storage.remove("token");
    setTimeout(() => {
      navigation.navigate("Cover");
    }, 1000);
  };

  return (
    <Provider>
      <ScrollView style={{ backgroundColor: "#eef1f2" }}>
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
          <Item style={styles.sheet} extra={userInfo.nickname}>
            昵称
          </Item>
          <Item style={styles.sheet} extra={userInfo.sex}>
            性别
          </Item>
          <Item style={styles.sheet} extra={userInfo.birthday}>
            出生年月
          </Item>
          <Item>
            <Flex justify="center" direction="row">
              <Button onPress={logOut}>退出登录</Button>
            </Flex>
          </Item>
        </List>
      </ScrollView>
    </Provider>
  );
};

export default ProfilePage;
