import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        position          : "absolute",
        top               : 50,
        zIndex            : 100,
        flexDirection     : "row",
        justifyContent    : "space-between",
        paddingHorizontal : 20,
        width             : "100%"
    },
    logo: {
        width      : 100,
        height     : 20, 
        resizeMode : "contain"
    },
    menu: {
        width  : 25,
        height : 25
    }
});

export default styles;