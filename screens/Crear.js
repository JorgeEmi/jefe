import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import firebase, { firebaseConfig } from '../firebaseconfig';
import { initializeApp } from 'firebase/app';
import {getDatabase, ref, push } from 'firebase/database';

const app = initializeApp(firebaseConfig);
const database = getDatabase();

const ConductorScreen = () => {
    const [nombre, setNombre] = React.useState('');
    const [ruta, setRuta] = React.useState('');
    const [correo, setCorreo] = React.useState('');
    const [contrasena, setContrasena] = React.useState('');
  

    const crearConductor = async () => {
      try {
        // Crear el conductor en Firebase Firestore
        await firebase.database().collection('conductores').add({
          nombre,
          ruta,
          correo,
          contrasena,
          isDriver: true,
        });
  
        console.log('Conductor creado exitosamente.');
      } catch (error) {
        console.error('Error al crear el conductor:', error);
      }
    };
  
    return (
      <View>
        <TextInput
          placeholder="Nombre del conductor"
          value={nombre}
          onChangeText={setNombre}
        />
        <TextInput
          placeholder="Ruta del conductor"
          value={ruta}
          onChangeText={setRuta}
        />
        <TextInput
          placeholder="Correo"
          value={correo}
          onChangeText={setCorreo}
        />
        <TextInput
          placeholder="Contraseña"
          value={contrasena}
          onChangeText={setContrasena}
        />
        <Button title="Crear Conductor" onPress={crearConductor} />
      </View>
    );
  };
  
  export default ConductorScreen;