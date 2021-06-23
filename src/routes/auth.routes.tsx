import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Home } from '../screens/Home'
import { SignIn } from '../screens/SignIn'


const {Navigator,Screen} = createStackNavigator()

export function AuthRoutes() {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{ 
        cardStyle:{
          backgroundColor: 'transparent'
        }
      }}
    >
     <Screen component={SignIn} name="SignIn"/>
     <Screen component={Home} name="Home"/>
    </Navigator>
  )
}