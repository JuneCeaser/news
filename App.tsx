import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyTabs from "./src/Navigation/MyTabs";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator   screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: '#2196f3' }, 
        headerTintColor: '#fff',
      }}>
        <Stack.Screen name="Newsletter" component={MyTabs}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
