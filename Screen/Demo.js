
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
  
   export default class Demo extends  React.Component
  {
   
    constructor(props)
    {
      super(props);
      this.state={UserEmail:'',password:''}
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
                  onChangeText = {(text) => this.setState({ UserEmail: text })}
                  placeholder="Enter Email" //dummy@abc.com
                  placeholderTextColor="#8b9cb5"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  returnKeyType="next"
                  
                  underlineColorAndroid="#f000"
                  blurOnSubmit={false}
                />
              </View>
              
              <View style={styles.loginbtn}>
              <Button 
               title="Login" style={styles.btn} 
               onPress={() => this.props.navigation.navigate('Signup',{Email:this.state.UserEmail})}       
              />
             </View>
              <Text
                style={styles.registerTextStyle}
                onPress={() => this.props.navigation.navigate('Signup')}>
                I don't Have account? SignUp
              </Text>
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
  