import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Alert,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import Card from "../components/Card";
import Input from "../components/Input";
import Number from "../components/Number";
import customColor from "../constants/color";

const StartGameScreen = (props) => {
  const [inputValue, setInputvalue] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [selectedNumber, setSelectednumber] = useState();
  const handleUserInput = (text) => {
    setInputvalue(text.replace(/[^0-9]/g, ""));
  };
  const resetInputValue = () => {
    setInputvalue("");
    setConfirm(false);
  };
  const confirmInputValue = () => {
    let chosenNumber = parseInt(inputValue);
    if (chosenNumber <= 0 || chosenNumber > 99 || isNaN(chosenNumber)) {
      Alert.alert(
        "Invalid number",
        "It cannot be string it has to be a number between 0 to 99",
        [{ text: "Okay", style: "destructive", onPress: resetInputValue }]
      );
      return;
    }
    setConfirm(true);
    setSelectednumber(chosenNumber);
    setInputvalue("");
    Keyboard.dismiss();
  };

  let confirmOutput;

  if (confirm) {
    confirmOutput = (
      <Card style={styles.summaryNumber}>
        <View>
          <Text style={styles.text}>Chosen Number</Text>
          <Number>{selectedNumber}</Number>
          <Button  title="Start Game" color={customColor.secondary} />
        </View>
      </Card>
    );
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>START SCREEN</Text>
        <Card style={styles.inputContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.text}>Enter Number</Text>
            <Input
              style={styles.input}
              onChangeText={handleUserInput}
              value={inputValue}
              blurOnSubmit
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="number-pad"
              maxLength={2}
            />
          </View>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                color={customColor.secondary}
                title="Reset"
                onPress={resetInputValue}
              />
            </View>
            <View style={styles.button}>
              <Button
                color={customColor.secondary}
                title="Confirm"
                onPress={confirmInputValue}
              />
            </View>
          </View>
        </Card>
        {confirmOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  text: {
    color: "white",
  },
  text_input: {
    borderBottomColor: "white",
    borderBottomWidth: 1,
    color: "white",
    padding: 2,
  },
  inputContainer: {
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
  input: {
    width: 50,
  },
  summaryNumber: {
    marginVertical: 10,
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    padding: 12,
  },
});

export default StartGameScreen;
