
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
    AppRegistry,
  } from 'react-native';
  import React, {useState, createRef} from 'react'
  
  export default class Add extends React.Component
  {
    constructor()
    {
      super();
      this.state={name:'',reg:'',faculity:'',email:'',password:''}
    }
    addstudent=()=>
    {
      const {name}=this.state;
      const {reg}=this.state;
      const {faculity}=this.state;
      const { email}=this.state;
      const {password}=this.state;
    fetch('http://192.168.43.40/PortolApi/add_student.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
      
         name: name,
         reg: reg,
         faculity: faculity,
         email: email,
         password: password,

        })
      
      }).then((response) => response.json())
            .then((responseJson) => {
      
      // Showing response message coming from server after inserting records.
              Alert.alert(responseJson);
              this.props.navigation.navigate('Dashboard');
      
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
            <Text style={styles.textstyle}>Mobile Portal|Register Student</Text>
                
              </View>
              <View style={styles.SectionStyle}>
                <TextInput
                  style={styles.inputStyle}
                  onChangeText = {(text) => this.setState({ name: text })}
                  placeholder="Enter Student Name" //dummy@abc.com
                  placeholderTextColor="#8b9cb5"
                  autoCapitalize="none"
                  
                  returnKeyType="next"
                
                  underlineColorAndroid="#f000"
                  blurOnSubmit={false}
                />
              </View>
              <View style={styles.SectionStyle}>
                <TextInput
                  style={styles.inputStyle}
                  onChangeText = {(text) => this.setState({ reg: text })}
                  placeholder="Enter Reg Number" //dummy@abc.com
                  placeholderTextColor="#8b9cb5"
                  autoCapitalize="none"
                  
                  returnKeyType="next"
                
                  underlineColorAndroid="#f000"
                  blurOnSubmit={false}
                />
              </View>
              <View style={styles.SectionStyle}>
                <TextInput
                  style={styles.inputStyle}
                  onChangeText = {(text) => this.setState({ faculity: text })}
                  placeholder="Enter Faculity " //dummy@abc.com
                  placeholderTextColor="#8b9cb5"
                  autoCapitalize="none"
                  
                  returnKeyType="next"
                  
                  underlineColorAndroid="#f000"
                  blurOnSubmit={false}
                />
              </View>
              <View style={styles.SectionStyle}>
                <TextInput
                  style={styles.inputStyle}
                  onChangeText = {(text) => this.setState({ email: text })}
                  placeholder="Enter Student Email" //dummy@abc.com
                  placeholderTextColor="#8b9cb5"
                  autoCapitalize="none"
                  
                  returnKeyType="next"
                  
                  underlineColorAndroid="#f000"
                  blurOnSubmit={false}
                />
              </View>
              <View style={styles.SectionStyle}>
                <TextInput
                  style={styles.inputStyle}
                 
                  placeholder="Enter Password" //12345
                  placeholderTextColor="#8b9cb5"
                  keyboardType="default"
                  onChangeText = {(text) => this.setState({ password: text })}
                  onSubmitEditing={Keyboard.dismiss}
                  blurOnSubmit={false}
                  secureTextEntry={true}
                  underlineColorAndroid="#f000"
                  returnKeyType="next"
                />
              </View>
             
              <View style={styles.loginbtn}>
              <Button 
               title="Register" style={styles.btn}  
               onPress={this.addstudent}      
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