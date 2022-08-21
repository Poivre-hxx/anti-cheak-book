import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Button, WingBlank, WhiteSpace, Flex } from "@ant-design/react-native";

const Square1 = (props) => {
  const style = {
    marginTop: 150,
    borderRadius: 10,
    backgroundColor: "#fff",
    margin: 1,
    width: 327,
    height: 176,
  };
  return <View style={style}></View>;
};

const Square2 = (props) => {
  const style = {
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "#AFBDF1",
    margin: 1,
    width: 108,
    height: 40,
    marginLeft: 30,
  };
  return <View style={style}></View>;
};

const Square3 = (props) => {
  const style = {
    marginTop: 20,
    borderRadius: 9,
    backgroundColor: "#FFF",
    margin: 4,
    width: 108,
    height: 108,
  };
  return <View style={style}></View>;
};

const Line = (props) => {
  const style = {
    marginTop: 20,
    borderRadius: 9,
    backgroundColor: "#707070",
    margin: 4,
    width: 234,
    height: 1,
    marginLeft: 30,
  };
  return <View style={style}></View>;
};

const Start = (props) => {
  const style = {
    marginTop: 20,
    borderRadius: 9,
    backgroundColor: "#F97163",
    margin: 4,
    width: 156,
    height: 171,
    marginLeft: 30,
    marginBottom: 200,
  };
  return <View style={style}></View>;
};
const Review = (props) => {
  const style = {
    marginTop: 30,
    borderRadius: 9,
    backgroundColor: "#3851B2",
    margin: 4,
    width: 156,
    height: 171,
    marginLeft: 30,
    marginBottom: 200,
  };
  return <View style={style}></View>;
};

export default class HomePage extends React.Component {
  render() {
    return (
      <ScrollView style={{ backgroundColor: "#eef1f2" }}>
        <Flex justify="center">
          <Square1 />
        </Flex>
        <Square2 />
        <Flex justify="center" direction="row">
          <Square3 />
          <Square3 />
          <Square3 />
        </Flex>
        <Line />
        <Flex justify="center" direction="row">
          <Start />
          <Review />
          </Flex>
      </ScrollView>
    );
  }
}
