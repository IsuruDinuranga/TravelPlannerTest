import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from '../../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createUserWithEmailAndPassword } from '../../../firebase/auth';
import { auth } from '../../../firebase/FirebaseConfig';

export default function SignUp() {
  const navigation = useNavigation();
  const router = useRouter();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();

  useEffect (() => {
    navigation.setOptions({
      headerShown: false
    })
  }, []);

  const OnCreateAccount = () => {

    if(!email || !password || !username){
      return
    }

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
    // ..
  });
  }

  return (
    <View style={{
      padding: 25,
      paddingTop: 50,
      backgroundColor: Colors.WHITE,
      height: '100%'
    }}>
      <TouchableOpacity onPress={()=>router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize: 30,
        marginTop: 30
      }}>Create New Account</Text>

      {/*Username*/}
      <View style={{
        marginTop:50
      }}>
        <Text style={{
          fontFamily:'outfit',
        }}>Username</Text>
        <TextInput
        style={styles.input}
         placeholder='Enter Username'
         onChangeText={(value) => setUsername(value)}
         />
      </View>

      {/*Email*/}
      <View style={{
        marginTop:20
      }}>
        <Text style={{
          fontFamily:'outfit',
        }}>Email</Text>
        <TextInput
        style={styles.input}
         placeholder='Enter Email'
         onChangeText={(value) => setEmail(value)}
         />
      </View>

      {/*Password*/}
      <View style={{
        marginTop:20
      }}>
        <Text style={{
          fontFamily:'outfit',
        }}>Password</Text>
        <TextInput
        secureTextEntry={true}
        style={styles.input}
         placeholder='Enter Password'
         onChangeText={(value) => setPassword(value)}
         />
      </View>

      {/* SingIn Button */}
      <TouchableOpacity onPress={OnCreateAccount} style={{
        padding: 15,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 15,
        marginTop: 80

      }}>
        <Text style={{
          fontFamily:'outfit',
          fontSize: 20,
          textAlign: 'center',
          color: Colors.WHITE
        }}>Create Account</Text>
      </TouchableOpacity>

      {/* Creat Account Button */}
      <TouchableOpacity
      onPress={() => router.replace('auth/sign-in')}
      style={{
        padding: 15,
        backgroundColor: Colors.WHITE,
        borderRadius: 15,
        marginTop: 20,
        borderWidth: 1,
      }}>
        <Text style={{
          fontFamily:'outfit',
          fontSize: 20,
          textAlign: 'center',
          color: Colors.PRIMARY
        }}>Sign In</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  input:{
    padding: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Colors.GRAY,
    fontFamily:'outfit'
  }
})