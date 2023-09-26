import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './screens/HomePage';
import LojaPage from './screens/LojaPage';
import DetalhesDoEvento from './screens/DetalhesDoEvento';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function LojaStack() {
  return (
    <Stack.Navigator initialRouteName="Loja">
      <Stack.Screen name="Loja" component={LojaPage} />
      <Stack.Screen name="DetalhesDoEvento" component={DetalhesDoEvento} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomePage} />
        <Drawer.Screen name="Loja" component={LojaStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;