import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { List } from "@ant-design/react-native";

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

const Item = List.Item;

const styles = StyleSheet.create({
  sheet: {
    backgroundColor: "#fff",
    height: 60,
  },
});

function ProfilePage({ navigation }) {
  return (
    <ScrollView style={{ backgroundColor: "#eef1f2" }}>
      <List renderHeader={" "}>
        <Item style={styles.sheet}>头像</Item>
        <Item style={styles.sheet}>昵称</Item>
        <Item style={styles.sheet}>性别</Item>
        <Item style={styles.sheet}>出生年月</Item>
      </List>
    </ScrollView>
  );
}

export default ProfilePage;
