import React from "react";
import { View, StyleSheet, Text } from "react-native";
import customColor from "../constants/color";

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 6,
    backgroundColor: customColor.primary,
    borderRadius: 10
  },
});

export default Card;
