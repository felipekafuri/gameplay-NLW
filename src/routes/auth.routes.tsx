import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { theme } from '../global/styles/theme'
import { AppointmentsCreate } from '../screens/AppointmentsCreate'
import { AppointmentsDetails } from '../screens/AppointmentsDetails'
import { Home } from '../screens/Home'
import { SignIn } from '../screens/SignIn'


const {Navigator,Screen} = createStackNavigator()

export function AuthRoutes() {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{ 
        cardStyle:{
          backgroundColor: theme.colors.secondary100
        }
      }}
    >
     <Screen component={Home} name="Home"/>
     <Screen component={AppointmentsDetails} name="AppointmentsDetails"/>
     <Screen component={AppointmentsCreate} name="AppointmentsCreate"/>
    </Navigator>
  )
}