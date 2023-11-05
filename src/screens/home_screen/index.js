import React from 'react';
import { View } from 'react-native';
import CarsList from '../../../src/components/cars_list'; 
import styles from './styles'; 

const HomeScreen = () => (
  <View style={styles.container}>
    <CarsList />
  </View>
);

export default HomeScreen;