import React, { Component } from 'react';
 
import { AppRegistry,ImageBackground, StyleSheet, FlatList, Text, View, Alert, ActivityIndicator, Platform} from 'react-native';
import { Button,Card} from 'react-native-paper';
export default class Admin extends React.Component {
  
  constructor(props)
  {
    super(props);
 
    this.state = { 
    isLoading: true
  }
  }
  
  componentDidMount() {
    
       return fetch('http://192.168.43.40/PortolApi/Provedstudent.php')
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
          onPress={() => this.props.navigation.navigate('Company')}>Register Campany</Button>
       <FlatList
       
          data={ this.state.dataSource }
          
       
          renderItem={({item}) =>
          <Card style={styles.container}>
            <Card.Content>
            <Text style={styles.FlatListItemStyle} >Student Name: {item.name}</Text>
              <Text style={styles.FlatListItemStyle} >Student Email: {item.email}</Text>
          <Text style={styles.FlatListItemStyle}  >Position: {item.position} </Text>
         
          <Text style={styles.FlatListItemStyle}  >Status: Approved </Text>
         
          </Card.Content>
          <Card.Actions>
         
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