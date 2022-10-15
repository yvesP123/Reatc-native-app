import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackNavigator } from 'react-navigation';
import Company from './Screen/Company';
import Login from './Screen/Login.js';
import Dashboard  from './Screen/Dashboard';
import Add from './Screen/Add';
import Dashboardb from './Screen/Dashboardb';
import Addjob from './Screen/Addjob';
import Dashboardc from './Screen/Dashboardc';
import Apply  from './Screen/Apply';
import Admin from './Screen/Admin';
const Stack = createNativeStackNavigator();
Navigation=props =>
{
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name="Login" component={Login}  options={{headershown:false}}/>
            <Stack.Screen name="Dashboardc" component={Dashboardc} options={{ title: 'Student Dashboard' }}/>
            <Stack.Screen name="Dashboardb" component={Dashboardb} options={{ title: 'Company Dashboard' }}/>
            <Stack.Screen name="Admin" component={Admin} options={{ title: 'Admin Dashboard' }}/>
              <Stack.Screen name="Dashboard" component={Dashboard} options={{ title: 'School Dashboard' }}/>
              <Stack.Screen name="Company" component={Company} options={{ title: 'Register Company' }}/> 
            
            <Stack.Screen name="Addjob" component={Addjob} options={{ title: 'Register Job' }}/>
           
            <Stack.Screen name="Add" component={Add} options={{ title: 'Register Student' }}/>
            <Stack.Screen name="Apply" component={Apply} options={{ title: 'Apply For Job' }}/>
                
               
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default Navigation;