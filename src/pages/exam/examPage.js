import React from "react";
import { StyleSheet, View, ScrollView, ImageBackground } from "react-native";
import { List, Flex } from "@ant-design/react-native";

const Item = List.Item;

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
        <Item>答案</Item>
      </List>
    </View>
  );
};

const styles = StyleSheet.create({
  blue: {
    width: 470,
    height: 430,
    marginTop: -200,
    marginBottom: 1000,
  },
});

export default class ExamPage extends React.Component {
  render() {
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
            </Flex>
          </ImageBackground>
        </Flex>
      </ScrollView>
    );
  }
}
