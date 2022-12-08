import React from "react";
import { useState } from "react";
import { StyleSheet, TextInput, View, Text, Button, Alert } from "react-native";
import RadioForm from "react-native-simple-radio-button";

function CreateProfile({ navigation }) {
  const [name, setName] = useState(null);
  const [age, setAge] = useState(null);
  const [sex, setSex] = useState(null);

  var radio_props = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
  ];

  const handleCreateProfile = async () => {
    const settings = {
      method: 'POST',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        age: age,
        sex: sex.value,
      }),
    };
    try {
      let response = await fetch("http://192.168.254.187:8000/skincure/profile/", settings)
      let result = await response.json()
      navigation.navigate("Profile")
    } catch(err) {
      Alert.alert(err)
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.radioButtonLabel}>Create a Profile</Text>
      <View style={{ width: "100%" }}>
        <TextInput
          style={styles.baseTextInput}
          value={name}
          onChangeText={setName}
          placeholder="Name"
        />
        <TextInput
          style={styles.baseTextInput}
          value={age}
          onChangeText={setAge}
          placeholder="Age"
        />
        <Text style={styles.radioButtonLabel}>Select Sex:</Text>
        <View style={{ padding: 10 }}>
          <RadioForm
            buttonColor={"#834D1E"}
            selectedButtonColor={"#834D1E"}
            radio_props={radio_props}
            initial={""}
            onPress={(value) => setSex({ value: value })}
          />
        </View>
        <View style={{padding: 20}}>
          <Button title="Submit" onPress={handleCreateProfile} />
        </View>
      </View>
    </View>
  );
}

export default CreateProfile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },

  textInputRow: {
    flexDirection: "row",
  },

  radioButtonLabel: {
    fontSize: 20,
    margin: 10,
  },

  baseTextInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
