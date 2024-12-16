import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default Mainscreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.upperbackground}>
        <Text style={styles.headingText}>Top Categories</Text>
        <Text style={styles.titleText}>April Expenses</Text>
      </View>

      <View style={styles.mainComponent}>
        <View style={styles.upperboxcontainer}>
          <View style={styles.innerbox1}>
            <View style={styles.component1}>
              <Image source={require("../assets/t-shirt.png")} style={styles.i1} />
            </View>
            <Text style={styles.text}>Clothes</Text>
          </View>
          <View style={styles.innerbox2}>
            <View style={styles.component2}>
              <Image source={require("../assets/shopping-cart.png")} style={styles.i2} />
            </View>
            <Text style={styles.text}>Shopping</Text>
          </View>
        </View>

        <View style={styles.lowerboxcontainer}>
          <View style={styles.innerbox3}>
            <View style={styles.component3}>
              <Image source={require('../assets/food.png')} style={styles.i3} />
            </View>
            <Text style={styles.text}>Food</Text>
          </View>
          <View style={styles.innerbox4}>
            <View style={styles.component4}>
              <Image source={require('../assets/entertainment.png')} style={styles.i4} />
            </View>
            <Text style={styles.text1}>Entertainment</Text>
          </View>
        </View>
        <TouchableHighlight style={styles.btn1}>
          <Text style={styles.buttonText}>See All</Text>
        </TouchableHighlight>
      </View>

      {/* Lower Background Component */}
      {/* <View style={styles.lowerbackground}>
        <Text>Hii</Text>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Make sure the container takes up the full height
  },
  upperbackground: {
    height: hp(50),
    width: wp(100),
    backgroundColor: "#ede3da",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  headingText: {
    marginTop: hp(-17),
    fontSize: 30,
    textAlign: "center",
  },
  titleText: {
    marginTop: hp(2),
    fontSize: 18,
    textAlign: "center",
  },
  mainComponent: {
    zIndex: 100,
    backgroundColor: '#F8F7F7',
    height: hp(65),
    width: wp(90),
    marginTop: hp(-24),
    borderRadius: 29,
    marginLeft: wp(5),
  },
  upperboxcontainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    gap: wp(7),
    marginTop: hp(7),
  },
  innerbox1: {
    backgroundColor: '#fff',
    height: hp(20),
    width: wp(35),
    borderRadius: 9
  },
  innerbox2: {
    backgroundColor: '#fff',
    height: hp(20),
    width: wp(35),
    borderRadius: 9
  },
  lowerboxcontainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    gap: wp(7),
    marginTop: hp(7),
  },
  innerbox3: {
    backgroundColor: '#fff',
    height: hp(20),
    width: wp(35),
    borderRadius: 9
  },
  innerbox4: {
    backgroundColor: '#fff',
    height: hp(20),
    width: wp(35),
    borderRadius: 9
  },
  component1: {
    marginTop: hp(2.5),
    marginLeft: wp(10),
    backgroundColor: "#bea3fc",
    borderRadius: wp(20),
    width: wp(15),
    height: wp(15),
    justifyContent: "center",
    alignItems: "center",
  },
  component2: {
    marginTop: hp(2),
    marginLeft: wp(10),
    backgroundColor: "#f7bfb8",
    borderRadius: wp(20),
    width: wp(16),
    height: wp(16),
    justifyContent: "center",
    alignItems: "center",
  },
  component3: {
    marginTop: hp(2),
    marginLeft: wp(10),
    backgroundColor: "#fac2e0",
    borderRadius: wp(20),
    width: wp(16),
    height: wp(16),
    justifyContent: "center",
    alignItems: "center",
  },
  component4: {
    marginTop: hp(2),
    marginLeft: wp(10),
    backgroundColor: "#3af1f7",
    borderRadius: wp(20),
    width: wp(15),
    height: wp(15),
    justifyContent: "center",
    alignItems: "center",
  },
  i1: {
    width: wp(12),
    height: hp(6),
  },
  i2: {
    width: wp(12),
    height: hp(5),
  },
  i3: {
    width: wp(13),
    height: hp(6),
  },
  i4: {
    width: wp(10),
    height: hp(5),
  },
  text: {
    fontSize: 20,
    marginTop: hp(1.5),
    textAlign: "center"
  },

  text1: {
    fontSize: 19,
    marginTop: hp(1.5),
    textAlign: "center"
  },
  // lowerbackground: {
  //   height: hp(-100),
  //   width: wp(90), 
  //   backgroundColor: '#525b66',
  //   justifyContent: 'center', 
  //   alignItems: 'center', 
  // },

  btn1: {
    backgroundColor: "#ef6957",
    height: hp(7),
    width: wp(70),
    marginTop: hp(2.5),
    marginLeft: wp(8.3),
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
