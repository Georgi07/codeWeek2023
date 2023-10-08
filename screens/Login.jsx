import { StyleSheet,Text, View, Image, TextInput,Button } from 'react-native'
import React, { Component } from 'react'
import Cat from '../assets/test.png'

const Login = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');


  const OnLogin = ()=> {

    console.log("username",username,password)
  }
 
    return (
      <View style={styles.container}>
        <View style={styles.box}> 
            <View style={[styles.headerParent,styles.shadowProp]}>
                <Image
                style={styles.tinyLogo}
                source={Cat}
            />
            </View>
        </View>
        <View>
          <View>
            <Text>Login To Your Account</Text>
          </View>
          <View>
              <TextInput
                style={styles.input}
                onChangeText={(v)=>{setUsername(v)}}
                value={username}
              />
          </View>
          <View>
            <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
              />
          </View>
          <View> 
          <Button
            onPress={OnLogin}
            title="Login"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
            </View>
        </View>
        <View></View>
      </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    },
    box:{
        alignItems:'center',
        height:"20%",
    },
    headerParent:{
        flex: 0.9,
        borderWidth: 0,
        borderBottomLeftRadius: 80,
        borderBottomRightRadius: 80,
        width:"40%",
        justifyContent:'center',
        
    },
    shadowProp: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 1.62,
      elevation: 2,
      },
    tinyLogo:{
        width:120,
        height:120,

    },
    
  });
export default Login