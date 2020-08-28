import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image, ScrollView } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <Text style={styles.loginHeading1}>Let’s start exploring</Text>
        <Text style={styles.loginHeading2}>Please sIgn up for access to various demos and showcases for comproDLS™ MOBILE.</Text>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.loginButtonText}>Sign in with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.loginButtonText}>Sign in with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.loginButtonText}>Sign in with Twitter</Text>
        </TouchableOpacity>
        <Text style={styles.disclaimerText}>By continuing you indicate that you’ve read and agree to our <Text>Terms of Service</Text> and <Text>Privacy Policy</Text></Text>
        <Image
          style={styles.footerLogo}
          source={require('../assets/images/footer-logo.png')}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#8435EB'
  },
  
  loginHeading1: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 28,
    lineHeight: 34,
    color: "#FFFFFF",
  },
  loginHeading2: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 16,
    lineHeight: 20,
    color: "#FFFFFF",
  },
  loginButton: {
    borderWidth: 1,
    borderColor: "#FFFFFF",
    borderStyle: "solid",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4,
    alignItems: 'center'
  },
  loginButtonText: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 64,
    textAlign: "center",
    color: "#FFFFFF"
  },
  disclaimerText: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 12,
    lineHeight: 15,
    color: "#FFFFFF",
  },
  footerLogo: {
    height: 120,
    width: 180,
    marginBottom: 40,
    alignSelf: "center"
  },
});
