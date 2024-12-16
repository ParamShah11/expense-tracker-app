import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Signin() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation()

  function buttonPress1(){
    navigation.navigate('Mainscreen')
  }

  return (
    <View style={styles.main}>
      <View style={styles.halfbackground}>
        <View style={styles.image11}>
          <Image
            source={require('../assets/dollar.png')}
            style={styles.image1}
          />
        </View>
      </View>

      <View style={styles.form}>
        <Text style={styles.headingtext}>Sign-In</Text>
        <Text style={styles.titletext}>If You Already Registered</Text>

        <TextInput
          style={styles.textinput1}
          value={userName}
          placeholder='Enter Your Username'
          onChangeText={setUserName}
          required
        />

        <TextInput
          style={styles.textinput2}
          value={password}
          placeholder='Enter Your Password'
          secureTextEntry={true}
          onChangeText={setPassword}
          required
        />

        <TouchableHighlight style={styles.button} onPress={buttonPress1}>
          <Text style={styles.buttonText}>Sign-In</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },

  halfbackground: {
    backgroundColor: "#fea074",
    height: hp(60),
    width: wp(100),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 29
  },

  image11: {
    marginTop: -110,
    backgroundColor: "#fff",
    height: hp(8),
    width: wp(18),
    paddingHorizontal: 10,
    paddingVertical: 11,
    borderRadius: 9
  },

  image1: {
    height: hp(5),
    width: wp(13),
  },

  form: {
    zIndex: 100,
    backgroundColor: "#fff",
    height: hp(48),
    width: wp(90),
    borderRadius: 29,
    marginTop: hp(-20),
    marginLeft: wp(-1)
  },

  headingtext: {
    fontSize: wp(7),
    marginLeft: wp(34),
    marginTop: wp(5),
  },

  titletext: {
    fontSize: wp(4),
    color: "#a19da2",
    marginLeft: wp(23),
    marginTop: wp(3),
  },

  textinput1: {
    width: wp(70),
    height: hp(5),
    borderColor: "#a19da2",
    borderWidth: 3,
    marginTop: hp(7),
    marginLeft: wp(9),
    borderRadius: 10,
    paddingHorizontal: 10,
  },

  textinput2: {
    width: wp(70),
    height: hp(5),
    borderColor: "#a19da2",
    borderWidth: 3,
    marginTop: hp(4),
    marginLeft: wp(9.4),
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#ef6957",
    height: hp(7),
    width: wp(70),
    marginTop: 20,
    marginLeft: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
});
