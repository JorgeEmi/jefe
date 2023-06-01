import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import firebase from '../firebaseconfig';

const Eliminar = () => {
  const [id, setId] = useState('');

  const eliminarRegistro = () => {
    firebase.database().ref(`crud/${id}`).remove();
  };

  return (
    <View>
      <TextInput
        placeholder="ID"
        value={id}
        onChangeText={setId}
      />
      <Button title="Eliminar" onPress={eliminarRegistro} />
    </View>
  );
};

export default Eliminar;