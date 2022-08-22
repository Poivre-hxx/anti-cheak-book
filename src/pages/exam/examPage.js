import React from "react";
import { StyleSheet, View, ScrollView, ImageBackground } from "react-native";
import { List, Flex, Text, Radio, Button } from "@ant-design/react-native";
import msg from "./msg.json";

const Item = List.Item;

// 获取随机数
function ran() {
  return Math.floor(Math.random() * 12);
}
const value = ran();
const SquareUP = (props) => {
  const style = {
    borderRadius: 15,
    backgroundColor: "#fff",
    width: 308,
    height: 218,
    marginTop: 420,
  };
  return (
    <View style={style}>
      <List>
        <Item>题目</Item>
      </List>
      <Text style={styles.title}>{msg[value].title}</Text>
    </View>
  );
};

const SquareDown = (props) => {
  const style = {
    borderRadius: 15,
    backgroundColor: "#fff",
    width: 308,
    height: 283,
    marginTop: 50,
  };
  return (
    <View style={style}>
      <List>
        <Item>选项</Item>
        <Item style={styles.ans} thumb={<Radio defaultChecked={false}>A:{msg[value].A}</Radio>} />
        <Item style={styles.ans} thumb={<Radio defaultChecked={false}>B:{msg[value].B}</Radio>} />
        <Item style={styles.ans} thumb={<Radio defaultChecked={false}>C:{msg[value].C}</Radio>} />
        <Item style={styles.ans} thumb={<Radio defaultChecked={false}>D:{msg[value].D}</Radio>} />
      </List>
    </View>
  );
};

function reRend() {
  ran();
  return (
    <View>
      <SquareUP />
      <SquareDown />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    margin: 5,
    fontSize: 15,
  },
  blue: {
    width: 470,
    height: 430,
    marginTop: -200,
    marginBottom: 1000,
  },
  ans: {
    width: 280,
  },
  button: {
    width: 120,
    height: 40,
    marginTop: -55,
    marginLeft: 150,
  },
});

function ExamPage({ navigation }) {
  return (
    <ScrollView style={{ backgroundColor: "#eef1f2" }}>
      <Flex justify="center">
        <ImageBackground
          style={styles.blue}
          source={require("../../assets/imgs/blue.png")}
        >
          <Flex justify="center" direction="column">
            <SquareUP />
            <SquareDown />
            <Button style={styles.button} onPress={() => reRend()}>
              确认
            </Button>
          </Flex>
        </ImageBackground>
      </Flex>
    </ScrollView>
  );
}

export default ExamPage;
