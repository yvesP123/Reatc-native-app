
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    ScrollView,
    Image,
    Keyboard,
    TouchableOpacity,
    KeyboardAvoidingView,
    Button,
    Alert,
    ImageBackground,
    AppRegistry,
  } from 'react-native';
  import React, {useState, createRef} from 'react'
  
  export default class Addjob extends  React.Component
  {
    constructor()
    {
      super();
      this.state={position:'',description:'',deadline:''}
    }
    jobfunction = () =>{

 
      const { position }  = this.state ;
      const { description }  = this.state ;
      const { deadline }  = this.state ;
      
     
      
     
     fetch('http://192.168.43.40/PortolApi/add_job.php', {
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
     
        position: position,
        description: description,
        deadline: deadline,
       })
     
     }).then((response) => response.json())
           .then((responseJson) => {
     
     // Showing response message coming from server after inserting records.
             Alert.alert(responseJson);
             this.props.navigation.navigate('Dashboardb');
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
            <Text style={styles.textstyle}>Mobile Partol|Add Job</Text>
                
              </View>
              <View style={styles.SectionStyle}>
                <TextInput
                  style={styles.inputStyle}
                  onChangeText = {(text) => this.setState({ position: text })}
                  placeholder="Enter Job Position" //dummy@abc.com
                  placeholderTextColor="#8b9cb5"
                  autoCapitalize="none"
                 
                  returnKeyType="next"
                  onSubmitEditing={() =>
                    passwordInputRef.current &&
                    passwordInputRef.current.focus()
                  }
                  underlineColorAndroid="#f000"
                  blurOnSubmit={false}
                />
                
              </View>
              <View style={styles.SectionStyle}>
                <TextInput
                  style={styles.inputStyle}
                  onChangeText = {(text) => this.setState({ description: text })}
                  placeholder="Enter Job Description" //dummy@abc.com
                  placeholderTextColor="#8b9cb5"
                  autoCapitalize="none"
                 
                  returnKeyType="next"
                  multiline
                  numberOfLines={5}
                  underlineColorAndroid="#f000"
                  blurOnSubmit={false}
                />
              </View>
              
              <View style={styles.SectionStyle}>
                <TextInput
                  style={styles.inputStyle}
                  placeholder="Enter Deadline" //dummy@abc.com
                  placeholderTextColor="#8b9cb5"
                  autoCapitalize="none"
                  returnKeyType="next"
                  onChangeText = {(text) => this.setState({ deadline: text })}
                  underlineColorAndroid="#f000"
                  blurOnSubmit={false}
                />
              </View>
              
             
              <View style={styles.loginbtn}>
              <Button 
               title="Add" style={styles.btn}  
               onPress={this.jobfunction}      
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