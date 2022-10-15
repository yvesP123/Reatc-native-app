import React, { Component } from 'react';
 
import { AppRegistry,ImageBackground, StyleSheet, FlatList, Text, View,TextInput, Alert, ActivityIndicator, NativeModules,
  PermissionsAndroid,Platform} from 'react-native';
import { Button,Card} from 'react-native-paper';
var DirectSms = NativeModules.DirectSms;
export default class Dashboardb extends React.Component { 
  
  constructor(props)
  {
 
    super(props);
 
    this.state = { 
    isLoading: true,
    
  }
  }
  Approve=async (ids,phones,positions)=>
  {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.SEND_SMS,
        {
          title: 'Send SMS App Sms Permission',
          message:
            'Send SMS App needs access to your inbox ' +
            'so you can send messages in background.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        DirectSms.sendDirectSms(phones, "Your are Approved At this Position"+positions);
        alert('SMS sent');
      } else {
        alert('SMS permission denied');
      }
    } catch (error) {
      console.warn(error);
      alert(error);
    }    
  fetch('http://192.168.43.40/PortolApi/approve.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
    
       id: ids,    
      })

    }).then((response) => response.json())
          .then((responseJson) => {
    
    // Showing response message coming from server after inserting records.        
    Alert.alert(responseJson);
    
          }).catch((error) => {
            console.error(error);
          });
  } 
  
  denie=async (ids,phones,positions)=>
  {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.SEND_SMS,
        {
          title: 'Send SMS App Sms Permission',
          message:
            'Send SMS App needs access to your inbox ' +
            'so you can send messages in background.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        DirectSms.sendDirectSms(phones, "Your are Dinied At This Position"+positions);
        alert('SMS sent');
      } else {
        alert('SMS permission denied');
      }
    } catch (error) {
      console.warn(error);
      alert(error);
    } 
  fetch('http://192.168.43.40/PortolApi/denie.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
    
       id: ids,    
      })
    }).then((response) => response.json())
          .then((responseJson) => {
    
    // Showing response message coming from server after inserting records.
          
    Alert.alert(responseJson);
    
          }).catch((error) => {
            console.error(error);
          });
  }

  componentDidMount() {   
    return fetch('http://192.168.43.40/PortolApi/unprovedstudent.php')
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
  
  render(){

  if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 30}}>
          <ActivityIndicator />
        </View>
      );
    }
   
    return (
<View style={styles.MainContainer}>
<ImageBackground source={require('./Images/login_bk.png')} resizeMode="cover" style={styles.image}>
<Button style={styles.btn}
          onPress={() => this.props.navigation.navigate('Addjob')}>Add Job</Button>
       <FlatList
       
          data={ this.state.dataSource }
          
       
          renderItem={({item}) =>
          <Card style={styles.container}>
            <Card.Content>
            <Text style={styles.FlatListItemStyle} >Student Name: {item.name}</Text>
              <Text style={styles.FlatListItemStyle} >Student Email: {item.email}</Text>
              <Text style={styles.FlatListItemStyle} >PhoneNumber: {item.phone}</Text>
              <Text style={styles.FlatListItemStyle} >letter: {item.letter}</Text>
              <Text style={styles.FlatListItemStyle} >Job Description: {item.description}</Text>
          <Text style={styles.FlatListItemStyle}  >Position: {item.position} </Text>
          {/* <TextInput
                  style={styles.inputStyle}
            onChangeText={(text) => this.state({id: text})}
                  defaultValue={item.id}
                  value={this.state.id}
                  autoCapitalize="none"
                 
                  underlineColorAndroid="#f000"
                  blurOnSubmit={false}
                />     */}

          </Card.Content>
          <Card.Actions>
          <Button style={styles.btn}
          onPress={() => this.Approve(item.id,item.phone,item.position)}>Approve</Button>
           <Button style={styles.btn}
          onPress={() => this.denie(item.id,item.phone,item.position)}>Denie</Button>
        </Card.Actions>
          </Card>}
          keyExtractor={(item, index) => index}
          
         />          
 </ImageBackground>   
</View>
            
    );
  }
}
const styles = StyleSheet.create({
 
MainContainer :{
 
justifyContent: 'center',
marginTop:20,
 
},
container :{
  alignContent:'center',
  margin:20,
  backgroundColor:'greey',
  
},
inputStyle: {
  flex: 1,
  color: 'black',
  paddingLeft: 15,
  paddingRight: 15,
  borderWidth: 1,
  borderRadius: 30,
  borderColor: '#dadae8',
},
btn:
{
  
  height: 40,
  marginTop: 20,
  marginLeft: 35,
  marginRight: 35,
  margin: 10,
  borderRadius: 8,
  borderColor: '#dadae8',
  color:'green',
  backgroundColor:'skyblue'
  
},
FlatListItemStyle: {
   
    fontSize: 18,
   
  },
 
});