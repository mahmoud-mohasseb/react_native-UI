import * as React from 'react';

import { enableScreens } from 'react-native-screens';
// import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { createStackNavigator } from '@react-navigation/stack';

// import Home from "../screens/Home/Home";
import About from "../screens/about";
import Login from "../screens/login/login";
import Home from '../screens/Home/Home';
import Details from "../screens/Details/Details"
import ComLocation from "../screens/map/map"
// import { NavigationContainer } from '@react-navigation/native';


enableScreens();
const Stack = createStackNavigator();

const AppNav = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="About" component={About} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Details" component={Details} />
            <Stack.Screen name="ComLocation" component={ComLocation} />
        </Stack.Navigator>

    );
}

export default AppNav;