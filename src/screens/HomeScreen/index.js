import React,{useState} from "react";
import { Dimensions, Pressable, View ,Text} from "react-native";
import styles from "./styles";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import * as Permission from "expo-permissions";
import { Feather } from "@expo/vector-icons";

const { status } = Permission.askAsync(Permission.LOCATION);

const origin = { latitude: 28.681646, longitude: 77.0576 };
const destination = { latitude: 28.68164, longitude: 77.5676 };
const GOOGLE_MAPS_APIKEY = "AIzaSyDPmb2H4LJ5acwa0ASnJV3XklbqjhkdDK8";

const HomeScreen = () => {
    const [isOnline,setIsOnline] = useState(false)
    const onGoPress = () => {
        setIsOnline(!isOnline);
    }
  return (
    <View>
      <MapView
        style={{ width: "100%", height: Dimensions.get('window').height - 150 }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        initialRegion={{
          latitude: 28.681646,
          longitude: 77.0576,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
        />
      </MapView>

      <Pressable onPress={() => console.warn("Balance")} 
        style={[styles.balanceButton, {bottom:110,right:10}]}>
        <Text style={styles.balanceText}>
            <Text style={{color:'green'}}>$100</Text>
        </Text>
        </Pressable>

      <Pressable onPress={onGoPress} 
        style={[styles.goButton, {bottom:110,right:10}]}>
        <Text style={styles.goText}>{isOnline?'END':'Go'}</Text>
        </Pressable>

        <Pressable onPress={() => console.warn("hey")} 
        style={[styles.roundButton, {top:10,left:10}]}>
        <Feather name="menu" size={24} color="black" />
        </Pressable>
        <Pressable onPress={() => console.warn("hey")} 
        style={[styles.roundButton, {bottom:130,left:10}]}>
        <Feather name="menu" size={24} color="black" />
        </Pressable>

        <Pressable onPress={() => console.warn("hey")} 
        style={[styles.roundButton, {bottom:130,right:10}]}>
        <Feather name="menu" size={24} color="black" />
        </Pressable>

        <Pressable onPress={() => console.warn("hey")} 
        style={[styles.roundButton, {top:10,right:10}]}>
        <Feather name="menu" size={24} color="black" />
        </Pressable>

      

      <View style={styles.bottomContainer}>
        <Feather name="menu" size={24} color="black" />
{(isOnline)?<Text style={styles.bottomText}>You're online</Text>:<Text style={styles.bottomText}>You're offline</Text>}
        <Feather name="menu" size={24} color="black" />
      </View>
    </View>
  );
};

export default HomeScreen;
