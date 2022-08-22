import React from "react";
import { StyleSheet, View, ScrollView, ImageBackground } from "react-native";
import { List, Flex, Text, Checkbox, Button } from "@ant-design/react-native";
import msg from "./msg.json";

const Item = List.Item;

const styles = StyleSheet.create({
  squareUp: {
    borderRadius: 15,
    backgroundColor: "#fff",
    width: 308,
    height: 218,
    marginTop: 420,
  },
  squareDown: {
    borderRadius: 15,
    backgroundColor: "#fff",
    width: 308,
    height: 283,
    marginTop: 50,
  },
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

export default class ExamPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: Math.floor(Math.random() * 12),
      status: false,
    };
  }

  handleClick = () => {
    this.setState({
      value: Math.floor(Math.random() * 12),
      status: false,
    });
  };

  render() {
    return (
      <ScrollView style={{ backgroundColor: "#eef1f2" }}>
        <Flex justify="center">
          <ImageBackground
            style={styles.blue}
            source={require("../../assets/imgs/blue.png")}
          >
            <Flex justify="center" direction="column">
              {/* // 上半部分 */}
              <View style={styles.squareUp}>
                <List>
                  <Item>题目</Item>
                </List>
                <Text style={styles.title}>{msg[this.state.value].title}</Text>
              </View>
              {/* // 下半部分 */}
              <View style={styles.squareDown}>
                <List>
                  <Item>选项</Item>
                  <Item
                    style={styles.ans}
                    thumb={
                      <Checkbox key={Math.random()} defaultChecked={this.state.status}>
                        A:{msg[this.state.value].A}
                      </Checkbox>
                    }
                  />
                  <Item
                    style={styles.ans}
                    thumb={
                      <Checkbox key={Math.random()} defaultChecked={this.state.status}>
                        B:{msg[this.state.value].B}
                      </Checkbox>
                    }
                  />
                  <Item
                    style={styles.ans}
                    thumb={
                      <Checkbox key={Math.random()} defaultChecked={this.state.status}>
                        C:{msg[this.state.value].C}
                      </Checkbox>
                    }
                  />
                  <Item
                    style={styles.ans}
                    thumb={
                    <Checkbox key={Math.random()} defaultChecked={this.state.status}>
                        D:{msg[this.state.value].D}
                      </Checkbox>
                    }
                  />
                </List>
              </View>
              <Button style={styles.button} onPress={this.handleClick}>
                确认
              </Button>
            </Flex>
          </ImageBackground>
        </Flex>
      </ScrollView>
    );
  }
}
