import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import firebase from '../firebaseconfig';

const Actualizar = () => {
    const [conductores, setConductores] = useState([]);
    const [nuevoNombre, setNuevoNombre] = useState('');
    const [nuevoRuta, setNuevoRuta] = useState('');
    const [nuevoCorreo, setNuevoCorreo] = useState('');
    const [nuevaContrasena, setNuevaContrasena] = useState('');
  
    useEffect(() => {
      const obtenerConductores = async () => {
        try {
          const snapshot = await firebase.firestore().collection('conductores').get();
          const conductoresData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setConductores(conductoresData);
        } catch (error) {
          console.error('Error al obtener los conductores:', error);
        }
      };
  
      obtenerConductores();
    }, []);
  
    const actualizarConductor = async (conductorId) => {
      try {
        await firebase.firestore().collection('conductores').doc(conductorId).update({
          nombre: nuevoNombre,
          ruta: nuevoRuta,
          correo: nuevoCorreo,
          contrasena: nuevaContrasena,
        });
        console.log('Conductor actualizado exitosamente.');
      } catch (error) {
        console.error('Error al actualizar el conductor:', error);
      }
    };
  
    return (
      <div>
        <ul>
          {conductores.map((conductor) => (
            <li key={conductor.id}>
              Nombre: {conductor.nombre},Ruta: {conductor.ruta}, Correo: {conductor.correo}, Contraseña: {conductor.contrasena}
              <input
                type="text"
                value={nuevoNombre}
                onChange={(e) => setNuevoNombre(e.target.value)}
              />
              <input
                type="text"
                value={nuevoRuta}
                onChange={(e) => setNuevoRuta(e.target.value)}
              />
              <input
                type="text"
                value={nuevoCorreo}
                onChange={(e) => setNuevoCorreo(e.target.value)}
              />
              <input
                type="text"
                value={nuevaContrasena}
                onChange={(e) => setNuevaContrasena(e.target.value)}
              />
              <button onClick={() => actualizarConductor(conductor.id)}>Actualizar</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Actualizar;