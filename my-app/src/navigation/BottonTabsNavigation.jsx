import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSelector } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Home from "../screen/Home";
import ContFormRegister from "../screen/Register";
import Perfil from "../screen/Profile";
import { FontAwesome } from '@expo/vector-icons';
import Details from "../screen/MangaDetails";
import LogOut from '../screen/LogOut'
import Mangas from '../screen/Mangas'

const Tab = createBottomTabNavigator();

function BottomTabsNavigation() {
  let state = useSelector((store) => store.bottomReducer.state);
  let [token, setToken] = useState("");

  const details = useSelector((store) => store.mangaClickReducer.state);

  useFocusEffect(
    React.useCallback(() => {
      async function getData() {
        try {
          const value = await AsyncStorage.getItem("token");
          setToken(value);
        } catch (error) {
          console.log(error);
        }
      }
      getData();
    }, [state])
  );

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#005f89",
          borderTopColor: "transparent",
          height: 55,
          paddingBottom: 5,
          paddingTop: 5,
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          marginBottom: 5,
        },
        tabBarActiveTintColor: "#0093b7",
        tabBarInactiveTintColor: "#a0c5cf",
        tabBarTabStyle: {
          paddingTop: 0,
          paddingBottom: 0,
        },
      }}
    >

       { details ? (<Tab.Screen
      name="Details"
      component={Details}
      options={{
        headerShown: false,
        tabBarLabel: 'Details',
        tabBarIcon: ({ color }) => (
          <FontAwesome name="info" size={24} color={color} />
        ),
      }}
    />) : (<></>)}
      
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
      />
      {token ? (
        <>
          <Tab.Screen
            name="Mangas"
            component={Mangas}
            options={{
              headerShown: false,
              tabBarLabel: 'Mangas',
              tabBarIcon: ({ color }) => (
                <FontAwesome name="book" size={24} color={color} />
              ),
            }}
          />
          <Tab.Screen name="Perfil" options={{
            headerShown: false,
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
              <FontAwesome name="user" size={24} color={color} />
            ),
          }}>
            {() => (
              <>
                <Perfil />
                <LogOut />
              </>
            )}
          </Tab.Screen>
        </>
      ) : (
        <><Tab.Screen
        name="register"
        component={ContFormRegister}
        options={{
          headerShown: false,
          tabBarLabel: 'Register',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user-circle-o" size={24} color={color} />
          ),
        }}
      /></>
      )}
    </Tab.Navigator>
  );
}

export default BottomTabsNavigation;