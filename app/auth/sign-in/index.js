import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router'
//import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Colors } from '../../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function SignIn() {
    const navigation = useNavigation();
    const router = useRouter();

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

  return (
    <View style = {{
        padding: 25,
        paddingTop: 40,
        backgroundColor: Colors.WHITE,
        height: '100%'
    }}>
      <TouchableOpacity onPress={()=>router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize: 30,
        marginTop: 30
      }}>Let's Sign You In</Text>
      <Text style={{
        fontFamily:'outfit',
        fontSize: 30,
        color:Colors.GRAY,
        marginTop: 10
      }}>Welcome Back</Text>
      <Text style={{
        fontFamily:'outfit',
        fontSize: 30,
        color:Colors.GRAY,
        marginTop: 10
      }}>You've Been Missed!</Text>
      {/*Email*/}
      <View style={{
        marginTop:50
      }}>
        <Text style={{
          fontFamily:'outfit',
        }}>Email</Text>
        <TextInput
        style={styles.input}
         placeholder='Enter Email'/>
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
         placeholder='Enter Password'/>
      </View>

      {/* SingIn Button */}
      <View style={{
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
        }}>Sign In</Text>
      </View>

      {/* Creat Account Button */}
      <TouchableOpacity
      onPress={() => router.replace('auth/sign-out')}
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
        }}>Create Account</Text>
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