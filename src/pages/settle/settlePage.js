import { useEffect, useState } from "react";
import { View, ScrollView, ImageBackground } from "react-native";
import { List, Flex } from "@ant-design/react-native";
import { getProblemInfo } from "@/api/problem";
import styles from "./styles";

const Item = List.Item;

function SettlePage({ navigation }) {
  return (
    <ScrollView style={{ backgroundColor: "#eef1f2" }}>
      <Flex justify="center">
        <ImageBackground
          style={styles.blue}
          source={require("@/assets/imgs/blue.png")}
        >
          <Flex justify="center" direction="column">
            {/* // 上半部分 */}
            <View style={styles.squareUp}>
              <List>
                <Item>结束</Item>
              </List>
            </View>
          </Flex>
        </ImageBackground>
      </Flex>
    </ScrollView>
  );
}

export default SettlePage;
