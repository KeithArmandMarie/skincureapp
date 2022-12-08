import { View, ImageBackground, TouchableOpacity, Text } from "react-native";

function CameraPreview({ route }) {
  console.log(route.params.uri);
  return (
    <ImageBackground
      source={route.params.photo}
      style={{
        flex: 1,
      }}
    >
        <View
        style={{
          position: "absolute",
          top: 0,
          flexDirection: "row",
          flex: 1,
          width: "100%",
          padding: 20,
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            alignSelf: "center",
            flex: 1,
            alignItems: "flex-start",
          }}
        >
          <TouchableOpacity
            // onPress={__takePicture}
            style={{
              width: "70%",
              height: 50,
              bottom: 0,
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 25,
            }}
          >
            <Text style={{ fontSize: 20 }}>Use Photo</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          flexDirection: "row",
          flex: 1,
          width: "100%",
          padding: 20,
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            alignSelf: "center",
            flex: 1,
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            // onPress={__takePicture}
            style={{
              width: "70%",
              height: 50,
              bottom: 0,
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 25,
            }}
          >
            <Text style={{ fontSize: 20 }}>Use Photo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

export default CameraPreview;
