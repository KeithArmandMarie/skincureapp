import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  ScrollView,
  Image,
  TouchableOpacity,
  AppRegistry,
} from "react-native";

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.CasesStyle}>
        <ContainerView />
        <View style={styles.footer}>
          <TouchableHighlight style={styles.bottomButtons}>
            <Text style={styles.footerText}>A</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.bottomButtons}>
            <Text style={styles.footerText}>B</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const ContainerView = ({ navigation }) => {
  const [profileList, setProfileList] = useState([]);
  const [editMode, setEditMode] = useState(false);

  const displayDelete = () => {
    return (
      editMode && (
        <View style={{ position: "absolute", zIndex: 1, top: 0, right: 15 }}>
          {/* <TouchableOpacity onPress={()=>deleteProfile(name)}> */}
            <Image
              source={require("../assets/icons/closeIcon.png")}
              style={styles.imgCloseIcon}
            />
          {/* </TouchableOpacity> */}
        </View>
      )
    );
  };

  // const deleteProfile = async ({name}) => {
  //   const settings = {
  //     method: 'DELETE',
  //     headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       name: name,
  //     }),
  //   };
  //   try {
  //     let response = await fetch("http://192.168.254.187:8000/skincure/profile/", settings)
  //     let result = await response.json()
  //     console.log(result)
  //   } catch(err) {
  //     Alert.alert(err)
  //   }
  // }

  const displayProfileList = async () => {
    let response = await fetch("http://192.168.254.187:8000/skincure/profile/");
    let results = await response.json();
    await setProfileList(results);
  };

  const mapProfileList = () => {
    
    return (
      profileList.map((profile, index) => {

        if(profile == null){
          console.log("asd")
          return (
            <View style={styles.icon}>
              <Text>No Data</Text>
            </View>
          )
        }

        return (
          <View style={styles.icon} key={index}>
            {displayDelete()}
            <Image
              source={require("../assets/icons/male.png")}
              style={styles.imgicon}
            />
            <Text>{profile.id}</Text>
          </View>
        );
      })
    )
  }

  useEffect(() => {
    displayProfileList();
  }, []);

  return (
    <>
      <View style={{ alignItems: "flex-end" }}>
        <TouchableOpacity
          style={styles.editMode(editMode)}
          onPress={() => {
            setEditMode(!editMode);
          }}
        >
          <Image
            source={require("../assets/icons/edit-icon.png")}
            style={styles.imgEdit}
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollViewStyle}>
        <View style={styles.row}>
          {mapProfileList()}
          
          {/* <View style={styles.icon}>
            {displayDelete()}
            <Image source={require("../assets/icons/male.png")} style={styles.imgicon} />
            <Text>RJ Blase</Text>
          </View>
          <View style={styles.icon}>
            {displayDelete()}
            <Image source={require("../assets/icons/female.png")} style={styles.imgicon} />
            <Text>Keith Caballero</Text>
          </View> */}
        </View>
      </ScrollView>
    </>
  );
};

export default Profile;
const styles = StyleSheet.create({
  CasesStyle: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#FCF2D9",
  },
  footer: {
    position: "absolute",
    flex: 0.1,
    left: 0,
    right: 0,
    bottom: -10,
    backgroundColor: "#834D1E",
    flexDirection: "row",
    height: 80,
    alignItems: "center",
  },
  bottomButtons: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  footerText: {
    color: "white",
    fontWeight: "bold",
    alignItems: "center",
    fontSize: 18,
  },
  textStyle: {
    alignSelf: "center",
    color: "orange",
  },
  scrollViewStyle: {
    borderWidth: 0,
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
    height: 150,
    width: 150,
    margin: 10,
  },
  row: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 1,
  },

  imgicon: {
    resizeMode: "contain",
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },

  imgCloseIcon: {
    width: 27,
    height: 27,
  },

  badge: {
    position: "relative",
  },

  imgEdit: {
    height: 30,
    width: 30,
  },

  editMode: (editMode) => {
    const color = editMode ? "white" : "transparent";

    return {
      marginTop: 20,
      marginRight: 20,
      borderRadius: 10,
      backgroundColor: color,
    };
  },
});

AppRegistry.registerComponent("TRYAPP", () => Profile);
