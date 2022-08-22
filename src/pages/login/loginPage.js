import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { Button, Flex, InputItem } from "@ant-design/react-native";

const SquareUP = (props) => {
  const style = {
    backgroundColor: "#fff",
    borderRadius: 15,
    width: 306,
    height: 174,
    margin: 1,
    marginTop: 100,
  };
  return <View style={style}></View>;
};

const SquareDown = (props) => {
  const style = {
    borderRadius: 15,
    backgroundColor: "#fff",
    width: 306,
    height: 206,
    margin: 1,
    marginTop: 30,
  };
  return (
    <View style={style}>
      <View style={styles.item}>
        <InputItem
          clear
          type="number"
          value=""
          // onChange={(value) => {
          //   this.setState({
          //     number: value,
          //   });
          // }}
          placeholder="zhanghao"
        >
          账号
        </InputItem>
        <InputItem
          clear
          type="password"
          value=""
          // onChange={(value) => {
          //   this.setState({
          //     password: value,
          //   });
          // }}
          placeholder="password"
        >
          密码
        </InputItem>
      </View>
    </View>
  );
};

const Line = (props) => {
  const style = {
    marginTop: 40,
    borderRadius: 9,
    backgroundColor: "#707070",
    margin: 4,
    width: 304,
    height: 1,
  };
  return <View style={style}></View>;
};

const styles = StyleSheet.create({
  head: {
    backgroundColor: "#3851B2",
    height: 80,
    width: 80,
    borderRadius: 50,
    marginBottom: -135,
    marginTop: 30,
    zIndex: 1,
  },
  photo: {
    height: 80,
    width: 80,
    borderRadius: 50,
    marginBottom: 0,
    marginTop: 30,
    marginRight: 0,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    letterSpacing: 5,
    marginTop: 15,
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

function LoginPage({ navigation }) {
  return (
    <ScrollView style={{ backgroundColor: "#eef1f2" }}>
      <Flex justify="center" direction="column">
        <Button
          type="primary"
          style={styles.head}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            source={require("../../assets/imgs/avatar.png")}
            style={styles.photo}
          ></Image>
        </Button>
        <SquareUP />
        <Text style={styles.text}>Welcome Back!</Text>
        <Line />
        <SquareDown />
        <Button
          type="primary"
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          登录
        </Button>
      </Flex>
    </ScrollView>
  );
}
export default LoginPage;
