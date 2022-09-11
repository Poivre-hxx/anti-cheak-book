import { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";
import { Button, WingBlank, Flex, Carousel } from "@ant-design/react-native";
import Storage from "@/utils/storage";

const Circle = props => {
  const style = {
    borderRadius: 25,
    backgroundColor: "#3851B2",
    width: 62,
    height: 57,
    margin: 1,
  };
  return <View style={style}></View>;
};

const styles = StyleSheet.create({
  book: {
    width: 420,
    height: 420,
    marginTop: -50,
    bottom: 0,
  },
  anti: {
    color: "#fff",
    textAlign: "center",
    fontSize: 50,
    letterSpacing: 30,
    marginTop: 150,
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
  wrapper: {
    height: 350,
  },
  graph: {
    height: 350,
    width: 280,
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

function CoverPage({ navigation }) {
  useEffect(() => {
    (async () => {
      const token = await Storage.get("token");
      if (token) navigation.navigate("Home");
    })();
  }, []);

  return (
    <ScrollView style={{ backgroundColor: "#eef1f2" }}>
      <WingBlank size="md" style={{ marginTop: -15 }}>
        <View style={{ marginLeft: 9, marginTop: 30 }}>
          <Circle />
        </View>
        <Flex justify="center">
          <View
            style={{
              width: 280,
              height: 350,
              backgroundColor: "#fff",
              marginTop: 20,
            }}
          >
            {/* 走马灯 */}
            <Carousel
              style={styles.wrapper}
              selectedIndex={0}
              autoplay
              infinite
            >
              <View>
                <Image
                  style={styles.graph}
                  source={require("../../assets/imgs/cover1.png")}
                ></Image>
              </View>
              <View>
                <Image
                  style={styles.graph}
                  source={require("../../assets/imgs/cover2.png")}
                ></Image>
              </View>
              <View>
                <Image
                  style={styles.graph}
                  source={require("../../assets/imgs/cover3.png")}
                ></Image>
              </View>
            </Carousel>
          </View>
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
              <Button
                type="primary"
                style={styles.button}
                onPress={() => navigation.navigate("Home")}
              >
                游客进入
              </Button>

              <Button
                type="primary"
                style={styles.button}
                onPress={() => navigation.navigate("Login")}
              >
                登陆进入
              </Button>
            </Flex>
          </ImageBackground>
        </Flex>
      </WingBlank>
    </ScrollView>
  );
}

export default CoverPage;
