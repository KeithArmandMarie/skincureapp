import React, { useEffect } from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

function Home({ navigation }) {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchApiCall = () => {
  //     fetch("http://192.168.254.187:8000/skincure/symptomp", {
  //       method: "GET",
  //     })
  //       .then((response) => {
  //         console.log("asdasd");
  //         if (response.ok) {
  //           console.log("asdasd");
  //           return response.json();
  //         } else {
  //           console.log("asdasd");
  //           throw response.json();
  //         }
  //       })
  //       .then((response) => {
  //         console.log(response);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };
  //   fetchApiCall();
  // }, []);

  return (
    <View>
      <ScrollView>
        <View style={styles.container2}>
          <TouchableOpacity onPress={() => navigation.navigate("CameraScreen")}>
            <Image
              style={styles.option}
              source={require("../assets/icons/add_case.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <View>
            <Text style={styles.text}>
              {" "}
              Simply click the icon to add new cases.
            </Text>
          </View>
          <View style={styles.container1}>
            <Image
              style={styles.image}
              source={require("../assets/icons/cases.png")}
            />
            <Text style={styles.text1}>CASES</Text>
          </View>
          <View style={styles.container1}>
            <TouchableOpacity onPress={()=>navigation.navigate("Profile")}>
              <Image
                style={styles.image}
                source={require("../assets/icons/profile.png")}
              ></Image>
            </TouchableOpacity>
            <Text style={styles.text1}>PROFILES</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    textAlign: "center",
    marginBottom: 10,
  },
  container2: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#B1907F",
    textAlign: "center",
    borderBottomRightRadius: 175,
    borderBottomLeftRadius: 175,
    marginBottom: 10,
  },
  container1: {
    backgroundColor: "#B1907F",
    margin: 10,
    padding: 10,
    borderRadius: 20,
  },
  text: {
    fontSize: 15,
    fontWeight: "medium",
    textAlign: "center",
    color: "#834D1E",
  },
  option: {
    flex: 1,
    width: 250,
    height: 231,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 200,
    resizeMode: "contain",
  },

  text1: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#834D1E",
    margin: 10,
  },
});
