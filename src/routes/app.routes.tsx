import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { theme } from '../global/styles/theme'
import { SignIn } from '../screens/SignIn'


const { Navigator, Screen } = createStackNavigator()

export function AppRoutes() {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.secondary100
        }
      }}
    >
      <Screen component={SignIn} name="SignIn" />
    </Navigator>
  )
}