import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Actualizar from './screens/Actualizar';
import Crear from './screens/Crear';
import Leer from './screens/Leer';
import Eliminar from './screens/Eliminar';

 const Stack = createStackNavigator()

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Crear"component={Crear}/>
      <Stack.Screen name="Actualizar"component={Actualizar}/>
      <Stack.Screen name="Leer" component={Leer}/>
      <Stack.Screen name="Eliminar" component={Eliminar}/>
    </Stack.Navigator>
  )
}

export default function App(){
  return(
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});