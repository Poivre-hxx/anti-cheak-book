import { getUserInfo } from "@/api/user";
import { Flex, Text, View } from "@ant-design/react-native";
import { useEffect } from "react";
import { ScrollView } from "react-native";

const History = ({ navigation }) => {
  const [examHistory, setExamHistory] = useState([]);
  const [loaded, setLoaded] = useEffect(false);

  useEffect(() => {
    getUserInfo(true).then(res => {
      if (res.code === 2000) {
        setExamHistory(res.data.user.examHistory);
        setLoaded(true);
      }
    });
  });

  if (!loaded)
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  return (
    <ScrollView style={{ backgroundColor: "#eef1f2" }}>
      <Flex direction="cols" align="center" justify="center">
        {examHistory.map(item => (
          <View>
            <Text>{item.uid}</Text>
          </View>
        ))}
      </Flex>
    </ScrollView>
  );
};

export default History;
