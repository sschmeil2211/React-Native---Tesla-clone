import React from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import CarItem from "../car_item"
import styles from "./styles";
import cars from "./cars";  

const CarsList = (props) => {
    return(
        <View style={styles.container}>
            <FlatList
                data={cars}
                renderItem={ ({item}) => <CarItem car={item}/> }
                snapToAlignment={"start"}
                showsVerticalScrollIndicator={false}
                decelerationRate={"fast"}
                snapToInterval={Dimensions.get("window").height}
            />
        </View>
    );
};

export default CarsList;