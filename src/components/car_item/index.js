import React from "react";
import { View, Text, ImageBackground } from 'react-native';
import StylizedButton from "../stylized_buttons";
import styles from "./styles";

const CarItem = (props) => {

    const { name, tagline, taglineCTA, image } = props.car;

    return (
        <View style={styles.carContainer}> 

        <ImageBackground 
            source={image}
            style={styles.carImage}
        />

        <View style={styles.title}>
            <Text style={styles.carName}>{name}</Text>
            <Text style={styles.tagline}>
                {tagline}&nbsp;
                <Text style={styles.taglineCTA}>
                    {taglineCTA}
                </Text>
            </Text>
        </View>

        <View style={styles.buttonsContainer}>
            <StylizedButton 
                type="primary" 
                content={"Custom Order"} 
                onPress={() => {console.warn("Message")}}
            />

            <StylizedButton 
                type="secondary" 
                content={"Existing Inventory"} 
                onPress={() => {console.log("Hola")}}
            />
        </View>
        

        </View>
    );
};

export default CarItem;