import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import SvgComponent from '../components/SvgComponent';


export default function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.bannerSvg}>
          <SvgComponent />
        </View>
        <View style={styles.welcomeTextContainer}>
          <Text style={styles.welcomeText}>Welcome to a demonstration of  comproDLS™ MOBILE for Students and Learners. </Text>
          <Text style={styles.welcomeText}>Select Getting started and register to view the various student showcases.</Text>
          <Text style={styles.welcomeText}>For additional details or feedback please log on to www.comprodls.com We love to hear from you! </Text>
        </View>
        <TouchableOpacity style={styles.getStartedButton} onPress={() => navigation.navigate('Login')} >
          <LinearGradient 
            colors={['rgba(132, 53, 235, 0.8)', 'transparent']}
            style={{ borderRadius: 5, padding: 36, alignSelf: "stretch", backgroundColor: "#7214BC" }}>
            <Text style={styles.getStartedButtonText}>GETTING STARTED</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#8435EB'
  },
  bannerSvg: {
    alignItems: 'center'
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
  getStartedButton: {
    alignItems: "center",
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
