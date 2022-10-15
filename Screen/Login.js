
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Alert,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  Button,
  ImageBackground,
} from 'react-native';
import React, {useState, createRef} from 'react'

 export default class Login extends  React.Component
{
 
  constructor(props)
  {
    super(props);
    this.state={UserEmail:'',password:''}
  }
  LoginFunction= () =>{

 
    const { email}  = this.state ;
    const { password}  = this.state ;
   
    
   
   fetch('http://192.168.43.40/PortolApi/login.php', {
     method: 'POST',
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
   
       
       email: email,
       password: password ,
     })
   
   }).then((response) => response.json())
         .then((responseJson) => {
   if(responseJson === 'Data Matched')
    {

        //Then open Profile activity and send user email to profile activity.
        this.props.navigation.navigate('Dashboardb');

    }
    else if(responseJson === 'admin Data Matched')
    {
      this.props.navigation.navigate('Dashboard');
    }
    else if(responseJson === 'Student Data Matched')
    {
      this.props.navigation.navigate('Dashboardc');
    }
    else if(responseJson === 'Adminog Data Matched')
    {
      this.props.navigation.navigate('Admin');
    }
    else{

      Alert.alert(responseJson);
    }
         }).catch((error) => {
           console.error(error);
         });
    
    
     }
  render(){
    return(
     
      <View style={styles.mainBody}>
      <ImageBackground source={require('./Images/login_bk.png')} resizeMode="cover" style={styles.image}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
          
        <View> 
      
          <KeyboardAvoidingView enabled>
          <View style={styles.SectionStyle}>
          <Text style={styles.textstyle}>Mobile Partol|Sign In</Text>
              
            </View>
           
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText = {(text) => this.setState({ email:text })}
                placeholder="Enter Email" //dummy@abc.com
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText = {(text) => this.setState({ password: text })}
                placeholder="Enter Password" //12345
                placeholderTextColor="#8b9cb5"
                keyboardType="default"
                
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
            </View>
            <View style={styles.loginbtn}>
            <Button 
             title="Login" style={styles.btn} 
             onPress={this.LoginFunction}       
            />
           </View>
           
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
      </ImageBackground>
    </View>

    );
  }

}
const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  loginbtn:
  {
    
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
    borderRadius: 30,
    borderColor: '#dadae8',
    
  }
  ,

  
  inputStyle: {
    flex: 1,
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  buttons:
  {
    color:'#FFA500',
  }
  ,
  textstyle:
  {
    color: 'blue',
    textAlign: 'center',
    marginLeft:30,
    fontSize: 16,
    alignSelf: 'center',
    padding: 10,
  },
  registerTextStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
