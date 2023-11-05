import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({ 
    carContainer: {
        width  : "100%",
        height : Dimensions.get("window").height,
    },
    title : {
        marginTop  : "30%",
        width      : "100%",
        alignItems : "center",
    },
    carName: {
        fontSize   : 40,
        fontWeight : "bold",
    },
    tagline: {
        fontSize : 16,
        color    : "#5C5E62"
    },
    taglineCTA: {
        textDecorationLine: "underline", 
    },
    carImage: {
        width      : "100%",
        height     : "100%",
        resizeMode : "cover",
        position   : "absolute"
    },
    buttonsContainer: {
        position : "absolute",
        bottom   : 50,
        width    : "100%"
    }
});

export default styles;