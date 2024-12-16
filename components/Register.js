import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default Register = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [rpassword, setRpassword] = useState('');

    const navigation = useNavigation();

    const linkpress = () => {
        navigation.navigate('Signin');
    };

    return (
        <View>
            <View style={styles.halfbackground}>
                <View style={styles.image11}>
                    <Image source={require('../assets/dollar.png')} style={styles.image1} />
                </View>
            </View>

            <View style={styles.form}>
                <Text style={styles.headingtext}>Register</Text>
                <Text style={styles.titletext}>If You Don't Have An Account</Text>

                <TextInput
                    style={styles.textinput1}
                    value={userName}
                    placeholder="Enter Your UserName"
                    onChangeText={setUserName}
                />

                <TextInput
                    style={styles.textinput3}
                    value={email}
                    placeholder="Enter Your Email"
                    onChangeText={setEmail}
                />

                <TextInput
                    style={styles.textinput2}
                    value={password}
                    placeholder="Enter Your Password"
                    secureTextEntry={true}
                    onChangeText={setPassword}
                />
                <TextInput
                    style={styles.textinput4}
                    value={rpassword}
                    placeholder="Confirm Your Password"
                    secureTextEntry={true}
                    onChangeText={setRpassword}
                />

                <TouchableHighlight style={styles.button}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableHighlight>
            </View>

            <View style={styles.bottomText}>
                <Text>Already Have An Account</Text>
                <TouchableHighlight onPress={linkpress} style={styles.link} underlayColor="transparent">
                    <Text style={styles.linkText}>Sign - In</Text>
                </TouchableHighlight>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    halfbackground: {
        backgroundColor: '#525b66',
        height: hp(60),
        width: wp(100),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 29,
    },

    image11: {
        marginTop: -110,
        backgroundColor: '#fff',
        height: hp(8),
        width: wp(18),
        paddingHorizontal: 10,
        paddingVertical: 11,
        borderRadius: 9,
    },

    image1: {
        height: hp(5),
        width: wp(13),
    },

    form: {
        zIndex: 100,
        backgroundColor: '#fff',
        height: hp(62),
        width: wp(90),
        marginTop: hp(-28),
        borderRadius: 29,
        marginLeft: wp(5),
    },

    headingtext: {
        fontSize: wp(7),
        marginLeft: wp(31.7),
        marginTop: wp(5),
    },

    titletext: {
        fontSize: wp(4),
        color: '#a19da2',
        marginLeft: wp(21),
        marginTop: wp(3),
    },

    textinput1: {
        width: wp(70),
        height: hp(5),
        borderColor: '#a19da2',
        borderWidth: 3,
        marginTop: hp(7),
        marginLeft: wp(9),
        borderRadius: 10,
        paddingHorizontal: 10,
    },

    textinput2: {
        width: wp(70),
        height: hp(5),
        borderColor: '#a19da2',
        borderWidth: 3,
        marginTop: hp(4),
        marginLeft: wp(9.4),
        borderRadius: 10,
        paddingHorizontal: 10,
    },

    textinput3: {
        width: wp(70),
        height: hp(5),
        borderColor: '#a19da2',
        borderWidth: 3,
        marginTop: hp(4),
        marginLeft: wp(9.4),
        borderRadius: 10,
        paddingHorizontal: 10,
    },

    textinput4: {
        width: wp(70),
        height: hp(5),
        borderColor: '#a19da2',
        borderWidth: 3,
        marginTop: hp(4),
        marginLeft: wp(9.4),
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: '#ef6957',
        height: hp(7),
        width: wp(70),
        marginTop: 20,
        marginLeft: 34,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        paddingHorizontal: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
    },

    bottomText: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,  
    },

    linkText: {
        color: '#ef6957',
        textDecorationLine: 'underline', 
        marginLeft: 5,  
    },
});
