import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const HomeScreen = () => {
    const navigation = useNavigation();

    const buttonPress = () => {
        navigation.navigate('Register'); 
    };

    return (
        <View style={styles.view}>
            <Image
                source={require('./assets/homeimage.png')}
                style={styles.i1}
            />

            <View style={styles.box}>
                <Text style={styles.text}>Manage Your Daily Life Expenses</Text>
                <Text style={styles.text1}>
                    Spend Smart is a simple and efficient personal finance
                    management app that allows you to track your daily expenses
                    and income
                </Text>

                <TouchableHighlight style={styles.button} onPress={buttonPress}>
                    <Text style={styles.buttonText}>Click Here To Get Started</Text>
                </TouchableHighlight>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: "#f8edc2",
        flex: 1,
        alignItems: "center"
    },
    i1: {
        marginTop: 160,
        width: wp(80),
        height: hp(40)
    },
    text: {
        paddingVertical: 15,
        fontSize: 29,
        textAlign: "center"
    },
    text1: {
        marginTop: 18,
        textAlign: "center",
        color: "#a19da2"
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
    
    box: {
        marginTop: 37,
        backgroundColor: "#fff",
        height: hp(35.5),
        width: wp(90),
        borderRadius: 20
    }
});

export default HomeScreen;
