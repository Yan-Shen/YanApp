import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NativeCourses from './src/components/NativeCourses';
import ReactCourses from './src/components/ReactCourses';
import React, { Component } from 'react';

const App = createBottomTabNavigator({
  ReactCourses: {screen: ReactCourses},
  NativeCourses: {screen: NativeCourses},
},
{
  navigationOptions: ({navigation}) => ({
    tabBarIcon: ({focused, tintColor}) =>{
      const {key} = navigation.state;
      console.log('navigation is -----', navigation)
      let iconName;
      if (key === 'ReactCourses') {
        iconName = `ios-information-circle${focused ? '' : '-outline'}`
      } else if (key === 'NativeCourses') {
        iconName = `ios-options${focused ? '' : '-outline'}`;
      }
      console.log('icon name is-----', iconName)
      return <Ionicons name={iconName} size={25} color={tintColor} />;
    }
  })
},
{
  tabBarOptions:{
    activeTintColor: '#e91e63',
    scrollEnabled: true,
  }
})

export default App