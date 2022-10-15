
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
  import SelectDropdown from 'react-native-select-dropdown';
  import React, {useState, createRef} from 'react'
  
  export default class Apply extends React.Component
  {
    constructor()
    {
      super();
      this.state={name:'',reg:'',faculity:'',email:'',password:''}
    }
    
  componentDidMount() {
    
    return fetch('http://192.168.43.40/PortolApi/Jop.php')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson
        }, function() {
          // In this block you can do something with new state.
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
    addstudent=()=>
    {
      const {phone}=this.state;
      const {notes}=this.state;
      const {position}=this.state;
      const { email}=this.state;
    fetch('http://192.168.43.40/PortolApi/add_applicant.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
      
         phone: phone,
         email: email,
         notes: notes,
         position: position,
         

        })
      
      }).then((response) => response.json())
            .then((responseJson) => {
      
      // Showing response message coming from server after inserting records.
      if(responseJson === 'Data Inserted Successfully')
      {
  
          //Then open Profile activity and send user email to profile activity.
          this.props.navigation.navigate('Dashboardc');
  
      }
      else{
              Alert.alert(responseJson);
              this.phone.clear();
              this.email.clear();
              this.notes.clear();
              this.position.clear();
      }
      
            }).catch((error) => {
              console.error(error);
            });
       
    }
    render()
    {
      


    
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
            <Text style={styles.textstyle}>Mobile Portal|Apply for Job</Text>
                
              </View>
            
              <View style={styles.SectionStyle}>
                <TextInput
                  style={styles.inputStyle}
                  onChangeText = {(text) => this.setState({ phone: text })}
                  placeholder="Phone Number" //dummy@abc.com
                  placeholderTextColor="#8b9cb5"
                  autoCapitalize="none"
                  ref={input => { this.phone = input }}
                  returnKeyType="next"
                  keyboardType="numeric"
                  maxLength={10}
                
                  underlineColorAndroid="#f000"
                  blurOnSubmit={false}
                />
              </View>
              <View style={styles.SectionStyle}>
                <TextInput
                  style={styles.inputStyle}
                  onChangeText = {(text) => this.setState({ email: text })}
                  placeholder="Email Address" //dummy@abc.com
                  placeholderTextColor="#8b9cb5"
                  autoCapitalize="none"
                  ref={input => { this.email = input }}
                  returnKeyType="next"
                
                  underlineColorAndroid="#f000"
                  blurOnSubmit={false}
                />
              </View>
              <View style={styles.SectionStyle}>
                
                <TextInput
                  style={styles.inputStyle}
                  onChangeText = {(text) => this.setState({ notes: text })}
                  placeholder="Short Notes about You " //dummy@abc.com
                  placeholderTextColor="#8b9cb5"
                  autoCapitalize="none"
                  ref={input => { this.notes = input }}
                  
                  returnKeyType="next"
                  
                  underlineColorAndroid="#f000"
                  blurOnSubmit={false}
                />
              </View>
              <View style={styles.SectionStyle}>
              <TextInput
                  style={styles.inputStyle}
                  onChangeText = {(text) => this.setState({ position: text })}
                  placeholder="Position" //dummy@abc.com
                  ref={input => { this.position = input }}
                  placeholderTextColor="#8b9cb5"
                  autoCapitalize="none"
                  
                  returnKeyType="next"
                  
                  underlineColorAndroid="#f000"
                  blurOnSubmit={false}
                />
              </View>
              
              {/* <View style={styles.SectionStyle}> */}
             {/* <SelectDropdown
           
           data={this.state.dataSource}
        
             /> */}
              {/* </View>         */}
              <View style={styles.loginbtn}>
              <Button 
               title="Apply" style={styles.btn}  
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