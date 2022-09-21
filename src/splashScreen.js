import React, { useState, useEffect, useRef } from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  AppState,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
// import ExpireStorage from './services/auth';


const SplashScreen = ({ navigation }) => {
  //State for ActivityIndicator animation

  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      AsyncStorage.getItem('user_id').then((value) => {
        navigation.replace(
          value === null ? 'login' : 'dashboard'
        )
      },
      );
    }, 3000);
  }, []);


  return (
    <View style={styles.container}>
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#307ecc',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});