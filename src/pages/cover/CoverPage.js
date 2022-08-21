import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
} from "react-native";
import { Button, WingBlank, WhiteSpace, Flex } from "@ant-design/react-native";

const Circle = (props) => {
  const style = {
    borderRadius: 25,
    backgroundColor: "#3851B2",
    width: 62,
    height: 57,
    margin: 1,
  };
  return <View style={style}></View>;
};

const Square = (props) => {
  const style = {
    backgroundColor: "#A1B4FF",
    width: 220,
    height: 320,
    margin: 1,
  };
  return <View style={style}></View>;
};

const styles = StyleSheet.create({
  book: {
    width: 420,
    height: 420,
    marginTop: 30,
    bottom: 0,
  },
  anti: {
    color: "#fff",
    textAlign: "center",
    fontSize: 50,
    letterSpacing: 30,
    marginTop: 100,
    marginLeft: 30,
  },
  text: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    letterSpacing: 8,
    marginTop: 8,
    marginLeft: 5,
  },
  button: {
    backgroundColor: "#F97163",
    margin: 25,
    borderRadius: 15,
    width: 134,
    height: 54,
  },
});

export default class CoverPage extends React.Component {
  render() {
    return (
      <ScrollView style={{ backgroundColor: "#eef1f2" }}>
        <WingBlank size="md" style={{ marginTop: 30 }}>
          <View style={{ marginLeft: 9, marginTop: 30 }}>
            <Circle />
          </View>
          <Flex justify="center">
            <Square />
          </Flex>
        </WingBlank>
        <WingBlank size="lg">
          <Flex justify="center">
            <ImageBackground
              style={styles.book}
              source={require("../../assets/imgs/pages.png")}
            >
              <Flex justify="center" direction="column">
                <Text style={styles.anti}>反诈宝典</Text>
                <Text style={styles.text}>沉浸式体验反诈实例</Text>
              </Flex>
              <Flex direction="row" justify="center">
                <Button type="primary" style={styles.button} onPressOut={()=>this.props.navigation.navigate('/home')}>游客进入</Button>
                <Button type="primary" style={styles.button}>登陆进入</Button>
              </Flex>
            </ImageBackground>
          </Flex>
        </WingBlank>
      </ScrollView>
    );
  }
}
