import { useEffect, useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { List, ImagePicker } from "@ant-design/react-native";

const Square = props => {
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
  const [files, setFiles] = useState([{ url: "", id: "" }]);
  const [granted, setGranted] = useState(false);
  const requestCameraPermission = async () => {
    try {
      const _granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: "需要访问相册",
          message: "需要访问相册",
          buttonPositive: "",
        }
      );
      if (_granted === PermissionsAndroid.RESULTS.GRANTED) {
        setGranted(true);
      } else {
        setGranted(false);
      }
    } catch (err) {
      console.warn(err);
    }
  };
  useEffect(() => {
    (async () => {
      if (Platform.OS === "android") {
        await this.requestCameraPermission();
      }
    })();
  }, []);

  const handleFileChange = files => {
    setFiles(files);
  };

  if (Platform.OS === "android" && !granted) {
    return <Text>需要访问相册的权限</Text>;
  }

  return (
    <ScrollView style={{ backgroundColor: "#eef1f2" }}>
      <List renderHeader={" "}>
        <Item
          style={styles.sheet}
          extra={<ImagePicker onChange={handleFileChange} files={files} />}
        >
          头像
        </Item>
        <Item style={styles.sheet}>昵称</Item>
        <Item style={styles.sheet}>性别</Item>
        <Item style={styles.sheet}>出生年月</Item>
      </List>
    </ScrollView>
  );
}

export default ProfilePage;
