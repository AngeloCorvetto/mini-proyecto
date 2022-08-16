import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import FormScreen from './screens/FormScreen';
import { db } from './firebase';
import { collection } from "firebase/firestore";
import { useEffect, useState } from 'react';

const Stack = createNativeStackNavigator();

export default function App() {
  const {users, setUsers} = useState([]);
  //const usersCollectionRef = collection(db, "users");
  //useEffect(() => {
    //const getUsers = async () => {
      //const data = await getDocs(usersCollectionRef);
      //console.log(data);
    //};
    //getUsers();
 // })
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }}name="Formulario" component={FormScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
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
