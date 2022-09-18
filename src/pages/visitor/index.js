import {
  View,
  ScrollView,
  Image,
  Dimensions,
  ImageBackground,
  TouchableHighlight,
} from "react-native";
import { Button, Flex, Provider, Text } from "@ant-design/react-native";
import styles from "./styles";
import SizedImage from "@/components/SizedImage";

const { width: ScreenWidth } = Dimensions.get("screen");

function VisitorPage({ navigation }) {
  return (
    <Provider>
      <ScrollView style={styles.main}>
        <Flex justify="center" direction="column" style={{ paddingTop: 130 }}>
          <Image
            source={require("@/assets/imgs/avatar.png")}
            style={styles.photo}
          />
          <View style={{ position: "relative" }}>
            <ImageBackground
              source={require("@/assets/home/info.png")}
              style={styles.info}
            >
              <Flex
                Flex
                justify="center"
                direction="column"
                style={styles.info_text}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    paddingTop: 50,
                    paddingBottom: 10,
                  }}
                >
                  欢迎你，游客
                </Text>
                <Text style={{ fontSize: 13, paddingVertical: 10 }}>
                  Tips：以访客模式登录不会记录答题历史
                </Text>
                <Text style={{ fontSize: 13 }}>您仍然可以自由参与答题</Text>
              </Flex>
            </ImageBackground>
          </View>
        </Flex>
        <Flex justify="center" direction="row">
          <Button
            style={styles.start}
            onPress={() =>
              navigation.navigate("Exam", {
                type: "visitor",
              })
            }
          >
            <Text style={styles.start_text}>开始</Text>
          </Button>
          <Button
            style={styles.review}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={styles.start_text}>登录注册</Text>
          </Button>
        </Flex>
      </ScrollView>
      <SizedImage
        style={styles.bg}
        width={ScreenWidth}
        source={require("@/assets/home/bg.png")}
      />
    </Provider>
  );
}

export default VisitorPage;
