import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import SvgComponent from '../components/SvgComponent';
import AsyncStorage from '@react-native-community/async-storage';


export default function HomeScreen({ navigation } : { navigation: any}) {
  const [email, setEmail] = useState("loading");
  useEffect(() => {
    isUserAuthenticated()
  }, [])
  const isUserAuthenticated = async () => {
    const token = await AsyncStorage.getItem("token")
    if (token) {
      // fetch('http://10.0.2.2:3000/', {
      fetch('http://192.168.138.1:3000/', {
        headers: new Headers({
          Authorization: "Bearer " + token
        })
      }).then(res => res.json())
        .then(data => {
          Alert.alert("Authenticated " + data.email, JSON.stringify(data));
          setEmail(data.email);
          // navigation.navigate('Dashboard');
        })
    }
  };
  return (
    <ScrollView contentContainerStyle={styles.contentContainerStyle}>
      <View style={styles.container}>
        <View style={styles.alignCenter}>
          <SvgComponent />
          <View style={styles.bannerSvgLine}></View>
        </View>
        <View style={styles.welcomeTextContainer}>
          <Text style={styles.welcomeText}>Welcome to a demonstration of  comproDLS™ MOBILE for Students and Learners. </Text>
          <Text style={styles.welcomeText}>Select Getting started and register to view the various student showcases.</Text>
          <Text style={styles.welcomeText}>For additional details or feedback please log on to www.comprodls.com We love to hear from you! </Text>
        </View>
        <TouchableOpacity style={styles.alignCenter} onPress={() => navigation.navigate('Login')} >
          <LinearGradient
            colors={['rgba(132, 53, 235, 0.8)', 'transparent']}
            style={styles.getStartedButtonGradient}>
            <Text style={styles.getStartedButtonText}>GETTING STARTED</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );

}

const styles = StyleSheet.create({
  contentContainerStyle: {
    flexGrow: 1
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#8435EB'
  },
  alignCenter: {
    alignItems: 'center'
  },
  bannerSvgLine: {
    height: 0.5,
    width: 343,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    top: -218,
  },
  welcomeTextContainer: {
    paddingVertical: 10
  },
  welcomeText: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 18,
    lineHeight: 22,
    textAlign: "center",
    color: "#FFFFFF"
  },
  getStartedButtonGradient: {
    borderRadius: 5,
    padding: 36,
    alignSelf: "stretch",
    backgroundColor: "#7214BC"
  },
  getStartedButtonText: {
    lineHeight: 64,
    color: "#FFFFFF",
    backgroundColor: "#8435EB",
    alignSelf: "stretch",
    textAlign: "center",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4,
  },
});
