import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CoverPage from "@/pages/cover/coverPage";
import LoginPage from "@/pages/login/loginPage";
import RegisterPage from "@/pages/register/register";
import HomePage from "@/pages/home/homePage";
import ExamPage from "@/pages/exam/examPage";
import ProfilePage from "@/pages/profile/profilePage";
import SettlePage from "@/pages/settle/settlePage";
import History from "@/pages/history";
import Mistakes from "@/pages/mistakes";
import VisitorPage from "@/pages/visitor";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cover">
        <Stack.Screen name="Cover" component={CoverPage} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Register" component={RegisterPage} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Exam" component={ExamPage} />
        <Stack.Screen name="History" component={History} />
        <Stack.Screen name="Mistakes" component={Mistakes} />
        <Stack.Screen name="Profile" component={ProfilePage} />
        <Stack.Screen name="Settle" component={SettlePage} />
        <Stack.Screen name="Visitor" component={VisitorPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
