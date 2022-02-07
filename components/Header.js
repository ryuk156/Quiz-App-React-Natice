import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Header = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.header_text}>Quiz Game</Text>
    </View>
  );
};



const styles = StyleSheet.create({
  screen: {
    width:"100%",
    height:90,
    paddingTop: 30,
    backgroundColor:"#FF4301",
    alignItems: "center",
    justifyContent:"center"
  },
  header_text:{
    color:"white",
  }
});

export default Header;