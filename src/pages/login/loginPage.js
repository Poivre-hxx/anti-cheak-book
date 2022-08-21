import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
} from "react-native";
import { Button, WingBlank, WhiteSpace, Flex } from "@ant-design/react-native";

const SquareUP = (props) => {
  const style = {
    borderRadius: 15,
    backgroundColor: "#C0D8E0",
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
  return <View style={style}></View>;
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
  }
});

export default class LoginPage extends React.Component {
  render() {
    return (
      <ScrollView style={{ backgroundColor: "#eef1f2" }}>
        <Flex justify="center" direction="column">
          <SquareUP />
          <Text style={styles.text}>Welcome Back!</Text>
          <Line />
          <SquareDown />
          <Button type="primary" style={styles.button}>登录</Button>
        </Flex>
      </ScrollView>
    )
  }
}