import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import Card from "../components/Card";
import Number from "../components/Number";
import customColor from '../constants/color'

const GameScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Card style={styles.card}>
        <Number>{32}</Number>
        <View style={styles.buttonContainer}>

        
        <View style={styles.button}>
              <Button
                color={customColor.secondary}
                title="Lower"
                onPress={()=>{}}
              />
            </View>
            <View style={styles.button}>
              <Button
                color={customColor.secondary}
                title="Higher"
                onPress={()=>{}}
              />
            </View>
            </View>
      </Card>
    </View>
  );
};

export default GameScreen;
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center",
      },
  card: {
    marginVertical: 10,
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    padding: 12,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
  },
  button: {
    width: 100,
  },
});
