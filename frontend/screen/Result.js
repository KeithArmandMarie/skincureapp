import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
} from "react-native";

function ResultScreen({navigation}) {

  return (
    <View style={styles.container}>
      <Image source={require("../assets/icons/acne.png")}/>
      <View style={styles.boxContainer}>
        <Text style={styles.baseText}>
          SkinCure detected that this is 93% acne
        </Text>
        <View>
          <View style={styles.button1}>
            <Button color="#834D1E" title="Continue" onPress={()=> navigation.navigate("CreateProfile")} />
          </View>
        </View>
      </View>
    </View>
  );
}

export default ResultScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center"
  },
  boxContainer: {
    backgroundColor: "#FDFD96",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#4C4C4C",
    padding: 20,
  },
  button1: {
    alignItems: "center",
    padding: 10,
  },
  baseText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#4C4C4C",
  },
});
