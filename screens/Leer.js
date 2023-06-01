import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import firebase from '../firebaseconfig';

const Leer = () => {
    const [conductores, setConductores] = useState([]);
  
    useEffect(() => {
      const obtenerConductores = async () => {
        try {
          const snapshot = await firebase.firestore().collection('conductores').get();
          const conductoresData = snapshot.docs.map((doc) => doc.data());
          setConductores(conductoresData);
        } catch (error) {
          console.error('Error al obtener los conductores:', error);
        }
      };
  
      obtenerConductores();
    }, []);
  
    return (
      <ul>
        {conductores.map((conductor) => (
          <li key={conductor.id}>
            Nombre: {conductor.nombre},Ruta: {conductor.ruta},Correo: {conductor.correo}, Contraseña: {conductor.contrasena}
          </li>
        ))}
      </ul>
    );
  };
  
  export default Leer;