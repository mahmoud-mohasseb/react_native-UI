// My design 
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
// import { NativeRouter } from "react-router-native";
import { NavigationContainer } from '@react-navigation/native';
import DrawerList from "./components/navigation/Drawer";
import { useFonts } from "expo-font";

// import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
// import About from "./components/about";
// import Home from "./components/Home";

{/* <AppNav /> */ }
const App = () => {
  const [loaded] = useFonts({
    Bold: require('./assets/fonts/Roboto-Bold.ttf'),
    Regular: require('./assets/fonts/Roboto-Regular.ttf'),
    Akaya: require('./assets/fonts/AkayaTelivigala-Regular.ttf')
  });

  if (!loaded) {
    return null;
  }
  return (
    <DrawerList />
  )
};

export default App;
