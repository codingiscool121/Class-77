import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, Keyboard, TextInput } from 'react-native';
import firebase from 'firebase';
import db from '../config'

export default class Welcome extends React.Component{
    constructor(props){
        super(props)
        this.state={
            emailId:"",
            password:""
        }
    }

    login=(emailId,password)=>{
        console.log(emailId);

    firebase.auth().signInWithEmailAndPassword(emailId,password).then(()=>{
        return(
            alert("Welcome,"+ emailId +"!")
        )
    }).catch(error=>{
        alert("Due to an error, we could not sign you in."+ error.message);
    })
    }
    signup=(emailId,password)=>{
        console.log(emailId);
        firebase.auth().createUserWithEmailAndPassword(emailId,password).then(()=>{
            return(
                alert("You have been successfully signed up.")
            )
        }).catch(error=>{
            alert("Due to an error, we could not sign you up."+error.message);
        })
        }
    render(){
        return(
            <View>
              <TextInput placeholder="example@booksanta.com" keyboardType ='email-address' onChangeText={(text)=>{ this.setState({ emailId: text }) }} />

                <TextInput placeholder="Enter your password here." secureTextEntry={true} onChangeText={text=>{
                    this.setState=({
                        password:text,
                    })
                }}></TextInput>
                {console.log("emailId:"+ this.state.emailId)}
               <TouchableOpacity onPress={()=>{this.login(this.state.emailId,this.state.password)}}><Text>Login</Text></TouchableOpacity>
               <TouchableOpacity onPress={()=>{this.signup(this.state.emailId,this.state.password)}}><Text>Sign Up</Text></TouchableOpacity>
            </View>
        )
    }
}