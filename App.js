import {StatusBar, StyleSheet, View } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screen/Home';
import WelcomeScreen from './screen/WelcomeScreen';
import ItemDetails from './screen/ItemDetails';
import { useFonts } from 'expo-font';

const App = () => {

  const [fontLoaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
  });
  if (!fontLoaded) return null;
const Stack = createNativeStackNavigator();
 
  return (
  <>
  <StatusBar barStyle='light-content' backgroundColor="#242445"></StatusBar>
   <NavigationContainer >
<Stack.Navigator initialRouteName='welcomeScreen' screenOptions={{headerShown:false}} >
  <Stack.Screen   name='home' component={Home} />
  <Stack.Screen   name='welcomeScreen' component={WelcomeScreen} />
  <Stack.Screen   name='itemDetails' component={ItemDetails} />
</Stack.Navigator>
  
   </NavigationContainer>
  </>
  );
};


export default App;
