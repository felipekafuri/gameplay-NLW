import { LinearGradient } from 'expo-linear-gradient'
import React, { ReactNode } from 'react'
import { Text, View } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'

import { Feather } from '@expo/vector-icons'

import { theme } from '../../global/styles/theme'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'

interface Props {
  title: string
  action?: ReactNode
}

export function Header({ title, action }: Props) {
  const {goBack} = useNavigation()

  return (
    <LinearGradient style={styles.container} colors={[theme.colors.secondary100, theme.colors.secondary40]}>
      <BorderlessButton onPress={goBack}>
        <Feather name="arrow-left" size={24} color={theme.colors.heading}  />
      </BorderlessButton>

      <Text style={styles.title}>
        {title}
      </Text>

      {
        action && <View>
          {action}
        </View>
      }
    </LinearGradient>
  )
}