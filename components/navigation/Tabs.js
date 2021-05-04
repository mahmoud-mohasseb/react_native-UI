import React from "react";
// import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

import Home from "../screens/Home/Home";
import Login from "../screens/login/login";
import About from "../screens/about";

const Tab = createBottomTabNavigator();
const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: 'white',
                inactiveBackgroundColor: 'rgba(0,0,0,0.4)',
                activeBackgroundColor: "rgba(50,205,50,0.9)",
                labelStyle: {
                    fontFamily: "Akaya",
                    fontSize: 15,
                    color: "white",
                },
            }}
            lazy={true}
        >
            <Tab.Screen
                name="Home"
                options={{
                    tabBarIcon: () => (
                        <AntDesign
                            name="home"
                            size={20}
                            color="yellow"
                        />
                    )
                }}
                component={Home} />
            <Tab.Screen name="Login" component={Login}
                options={{
                    tabBarIcon: ({ focused, size }) => (
                        <AntDesign
                            name="login"
                            size={size}
                            color={focused ? '#7cc' : '#ccc'} />
                    )
                }}
            />
            <Tab.Screen name="About" component={About}
                options={{
                    tabBarIcon: ({ focused, size }) => (
                        <MaterialIcons
                            name="whatshot"
                            size={size}
                            color={focused ? '#7cc' : '#ccc'}
                        />
                    ),
                }}
            />

        </Tab.Navigator>

    )
}

export default Tabs
