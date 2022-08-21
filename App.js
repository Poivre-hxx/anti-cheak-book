import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CoverPage from "./src/pages/cover/coverPage";
import LoginPage from "./src/pages/login/loginPage";
import HomePage from "./src/pages/home/homePage";
import ExamPage from "./src/pages/exam/examPage";
import ProfilePage from "./src/pages/profile/profilePage";


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='反诈宝典'>
        <Stack.Screen name="Cover" component={CoverPage} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Exam" component={ExamPage} />
        <Stack.Screen name="Profile" component={ProfilePage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
