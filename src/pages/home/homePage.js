import React from "react";
import { View, ScrollView, StyleSheet, Image } from "react-native";
import { Button, Flex } from "@ant-design/react-native";

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

const styles = StyleSheet.create({
  head: {
    backgroundColor: "#3851B2",
    height: 80,
    width: 80,
    borderRadius: 50,
    marginBottom: -135,
    marginTop: 50,
    zIndex: 1,
  },
  photo: {
    height: 80,
    width: 80,
    borderRadius: 50,
    marginBottom: 0,
    marginTop: 50,
    marginRight: 10,
  },
  Start: {
    marginTop: 20,
    borderRadius: 9,
    backgroundColor: "#F97163",
    margin: 4,
    width: 156,
    height: 171,
    marginRight: 15,
    marginBottom: 200,
  },
  Review: {
    marginTop: 20,
    borderRadius: 9,
    backgroundColor: "#3851B2",
    margin: 4,
    width: 156,
    height: 171,
    marginLeft: 15,
    marginBottom: 200,
  },
});

function HomePage({ navigation }) {
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
      </Flex>
      <Square2 />
      <Flex justify="center" direction="row">
        <Square3 />
        <Square3 />
        <Square3 />
      </Flex>
      <Line />
      <Flex justify="center" direction="row">
        <Button
          type="primary"
          style={styles.Start}
          onPress={() => navigation.navigate("Exam")}
        >
          开始答题
        </Button>
        <Button type="primary" style={styles.Review}>
          错题查看
        </Button>
      </Flex>
    </ScrollView>
  );
}

export default HomePage;
