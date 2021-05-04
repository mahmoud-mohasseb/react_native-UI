import * as React from 'react';
import { Image, Text, View } from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

//Tabs represent Home as we imported in Tabs 
// import Tabs from "./Tabs";

import Home from "../screens/Home/Home";
import Login from "../screens/login/login";
import About from "../screens/about";
import Details from "../screens/Details/Details";
import ComLocation from "../screens/map/map";
import Videoman from "../video/video";


const Drawer = createDrawerNavigator();

const DrawerList = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="Home"
                drawerStyle={{
                    backgroundColor: "rgba(0,0,0,0.5)",
                }}
                hideStatusBar={true}
                // detachInactiveScreens={true}
                drawerPosition={"right"}
                overlayColor={"rgba(50,205,50,0.4)"}
                drawerType={'front'}
                drawerContent={(props) =>
                    <View style={{ width: "100%", height: "100%" }}>
                        <Image style={{
                            width: "50%",
                            height: "20%",
                            resizeMode: "contain",
                            marginTop: 2,
                            marginLeft: 70,
                            // borderRadius: 20,
                            borderBottomRightRadius: 30,
                            borderTopLeftRadius: 30,
                        }}
                            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTezyw4GQ-s3sVwv-ODzIm7G-KL5dLvUlmUMQ&usqp=CAU" }} />
                        <Text
                            style={{
                                textAlign: "center",
                                fontFamily: "Akaya",
                                fontSize: 30,
                                color: "white"
                            }}
                        >
                            CAIRO Mercedes</Text>
                        <Videoman />
                        <View style={{ marginTop: 60 }}>
                            {/* here for the list of screen spread operators for itemlist */}
                            <DrawerItemList {...props} />
                        </View>
                    </View>
                }
                drawerContentOptions={{
                    activeTintColor: 'white',
                    inactiveBackgroundColor: 'rgba(220,220,220,0.4)',
                    activeBackgroundColor: "rgba(50,205,50,0.9)",
                    labelStyle: {
                        fontFamily: "Akaya",
                        fontSize: 15,
                        color: "white",
                        marginLeft: 15
                    }
                }
                }
            >
                <Drawer.Screen
                    name="Home"
                    component={Home}
                    options={{
                        drawerIcon: ({ focused, size }) => (
                            <AntDesign
                                name="home"
                                size={size}
                                color={focused ? '#7cc' : '#ccc'}
                            />
                        ),
                    }}
                />
                <Drawer.Screen
                    name="Login"
                    component={Login}
                    options={{
                        drawerIcon: ({ focused, size }) => (
                            <AntDesign
                                name="login"
                                size={size}
                                color={focused ? '#7cc' : '#ccc'} />
                        )
                    }}
                />
                <Drawer.Screen
                    name="About"
                    component={About}
                    options={{
                        drawerIcon: ({ focused, size }) => (
                            <MaterialIcons
                                name="whatshot"
                                size={size}
                                color={focused ? '#7cc' : '#ccc'}
                            />
                        ),
                    }}
                />

                <Drawer.Screen
                    name="Details"
                    component={Details}
                    options={{
                        drawerIcon: ({ }) => (
                            <MaterialIcons name="details" size={24} color="black" />
                        )
                    }}
                />
                <Drawer.Screen
                    name="ComLocation"
                    component={ComLocation}
                    options={{
                        drawerIcon: ({ }) => (
                            <Icon name="map-marker" size={25} color="#ff5c83" />
                        )
                    }}
                />

            </Drawer.Navigator>
        </NavigationContainer>

    );

}
export default DrawerList;

