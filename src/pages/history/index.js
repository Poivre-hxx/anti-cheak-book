import { getUserInfo } from "@/api/user";
import { List, Text, View } from "@ant-design/react-native";
import { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import dayjs from "dayjs";
const Item = List.Item;

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
    <ScrollView
      style={{ flex: 1, backgroundColor: "#f5f5f9" }}
      automaticallyAdjustContentInsets={false}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      <List renderHeader={"考试记录"}>
        {examHistory.map((exam, index) => (
          <Item
            key={index}
            extra={
              <View
                style={{
                  padding: 10,
                  width: 60,
                  height: 60,
                  backgroundColor: "#74D78F",
                  borderRadius: 50,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 17, color: "white" }}>
                  {exam.score}分
                </Text>
              </View>
            }
            onPress={() => {
              navigation.navigate("Mistakes", {
                data: {
                  paper: exam.paper,
                  mistakes: exam.mistakes,
                },
              });
            }}
          >
            <View
              style={{
                margin: 5,
              }}
            >
              <Text style={{ paddingVertical: 0 }}>
                时间：
                {dayjs(exam.createdAt).format("YYYY年M月D日 HH:mm:ss")}
              </Text>
              <Text style={{ paddingTop: 4, fontSize: 12, color: "#A8A9AC" }}>
                {exam.uid}
              </Text>
            </View>
          </Item>
        ))}
      </List>
    </ScrollView>
  );
};

export default History;
