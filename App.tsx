import 'react-native-gesture-handler'

import AppLoading from 'expo-app-loading'
import React from 'react'
import { StatusBar } from 'react-native'

import { Inter_400Regular, Inter_500Medium, useFonts } from '@expo-google-fonts/inter'
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani'

import { Background } from './src/components/Background'
import { Routes } from './src/routes'

export default function App() {
  const [fontsLoading] = useFonts({
    Inter_400Regular, 
    Inter_500Medium,
    Rajdhani_500Medium, 
    Rajdhani_700Bold 
  })

  if(!fontsLoading){
    return <AppLoading/>
  }


  return (
    <Background>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent"/>
      <Routes />
    </Background>
  );
}

