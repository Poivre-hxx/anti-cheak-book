import React from 'react';
import { View, Text, ScrollView, StyleSheet, ImageBackground } from "react-native";
import { Button, WingBlank, WhiteSpace, Flex } from "@ant-design/react-native";

const Square = (props) => {
  const style = {
    backgroundColor: "#DCDBDB",
    width: 385,
    height: 62,
    margin: 1,
    marginTop: 20,
  };
  return <View style={style}></View>;
};

export default class ProfilePage extends React.Component {
  render() {
    return (
      <ScrollView style={{ backgroundColor: "#eef1f2" }}>
        <Flex justify="center" direction='column' style={{ marginBottom: 500, marginTop: 100}}>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
        </Flex>
      </ScrollView>
    )
  }
}