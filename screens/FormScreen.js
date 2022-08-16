import { StyleSheet, Text, TouchableOpacity, View, KeyboardAvoidingView, TextInput } from 'react-native'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'

const FormScreen = () => {
    const[coord, setCoord] = useState('')
    const[phone, setPhone] = useState('')
    //const coord = document.querySelector(".coord");
    //const phone = document.querySelector(".phone");
    const navigation = useNavigation()
    const handleAgregar = () => {
      auth
        .signOut()
        .then(() => {
          navigation.replace("Home")
        })
        .catch(error => alert(error.message))
    }
    const handleForm = () => {
        navigation.replace("Login")
    }


  
    return (
    <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
    >
      <View style={styles.container}>
        <Text>Agrega informacion adicional:  </Text>
        <Text>Telefono:  </Text>
        <TextInput           
                placeholder="983970..."
                value={phone}
                onChangeText={text => setPhone(text) }
                style={styles.input}
            />
        <Text>Coordenadas:  </Text>
        <TextInput
                placeholder="0.0"
                value={coord}
                onChangeText={text => setCoord(text) }
                style={styles.input}
            />
        <TouchableOpacity
          onPress={handleAgregar}
          style={styles.button}
          >
            <Text style={styles.buttonText}>Agregar</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={handleForm}
          style={styles.button}
          >
            <Text style={styles.buttonText}>Atras</Text>
          </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
    )
}

export default FormScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow',
      },
      button: {
        backgroundColor: '#0782F9',
        width: '60%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40,
    },
      buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
})