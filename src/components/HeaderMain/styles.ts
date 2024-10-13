import { Dimensions, StyleSheet } from "react-native";
import "../../utils/colors";

// HEADERMAIN
const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  headerMain: {
    height: height * 0.064,
    backgroundColor: "#F1D34A",
  },
  headerOne: {
    backgroundColor: "white",
    width: "80%",
    height: height * 0.064,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "3%",
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  image: {
    width: 30,
    height: 30,
  },
  headerOneView: {
    flexDirection: "row",
    marginLeft: 10,
    alignItems: "center",
    marginHorizontal: 8,
    borderLeftColor: "#F3F2FD",
    borderLeftWidth: 2,
    paddingLeft: 8,
  },
  headerTwo: {
    height: height * 0.064,
    width: "25%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
  },
});

export default styles;
