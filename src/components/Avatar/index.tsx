import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { theme } from '../../global/styles/theme'
import {Image} from 'react-native'

import { styles } from './styles'

type Props = {
  urlImage: string
}



export function Avatar({ urlImage }: Props) {
  return (
    <LinearGradient
      style={styles.container}
      colors={[theme.colors.secondary70, theme.colors.secondary90]}
    >

      <Image source={{ uri: urlImage }} style={styles.avatar} resizeMode="contain" />
    </LinearGradient>
  )
}