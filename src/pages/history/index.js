import { getUserInfo } from "@/api/user";
import { Button, Flex, Text, View } from "@ant-design/react-native";
import { useState, useEffect } from "react";
import { ScrollView } from "react-native";

const History = ({ navigation }) => {
  const [examHistory, setExamHistory] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getUserInfo(true).then(res => {
      if (res.code === 2000) {
        setExamHistory(res.data.user.examHistory || []);
        setLoaded(true);
      }
    });
  }, []);

  if (!loaded) return;
  return (
    <ScrollView style={{ backgroundColor: "#eef1f2" }}>
      <Flex direction="cols" align="center" justify="center">
        {examHistory.map((exam, index) => (
          <View key={index}>
            <Text>{exam.uid}</Text>
            <Text>{exam.score}分</Text>
            <Button
              onPress={() => {
                navigation.navigate("Mistakes", { data: exam.paper });
              }}
            ></Button>
          </View>
        ))}
      </Flex>
    </ScrollView>
  );
};

export default History;
