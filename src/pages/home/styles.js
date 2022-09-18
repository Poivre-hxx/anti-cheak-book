import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  bg: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 0,
    marginTop: -45,
  },
  main: {
    zIndex: 1,
  },
  head: {
    backgroundColor: "#3851B2",
    height: 80,
    width: 80,
    borderRadius: 50,
    marginBottom: -135,
    marginTop: 110,
    zIndex: 1,
  },
  photo: {
    height: 80,
    width: 80,
    borderRadius: 50,
  },
  start: {
    marginTop: 10,
    borderRadius: 9,
    backgroundColor: "#F97163",
    margin: 4,
    width: 156,
    height: 171,
    marginRight: 15,
    marginBottom: 200,
  },
  start_text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 45,
    flexWrap: "wrap",
  },
  review: {
    marginTop: 10,
    borderRadius: 9,
    backgroundColor: "#3851B2",
    margin: 4,
    width: 156,
    height: 171,
    marginLeft: 15,
    marginBottom: 200,
  },
  info: {
    width: 320,
    height: 200,
    marginTop: 100,
  },
  info_text: {},
  btn: {
    marginVertical: 20,
    borderRadius: 10,
    backgroundColor: "#AFBDF1",
    margin: 1,
    width: 108,
    height: 40,
    marginLeft: 35,
    marginTop: 25,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  btn_text: {
    textAlign: "center",
    fontSize: 23,
    color: "#3F51B0",
    fontWeight: "bold",
  },
  category: {
    margin: 4,
    width: 108,
    height: 108,
  },
  line: {
    marginTop: 20,
    borderRadius: 9,
    backgroundColor: "#707070",
    margin: 4,
    width: 234,
    height: 1,
    marginLeft: 30,
  },
  nickname: {
    fontSize: 18,
    fontWeight: "bold",
    paddingTop: 50,
  },
  username: {
    color: "#566471",
    paddingBottom: 20,
  },
});

export default styles;
