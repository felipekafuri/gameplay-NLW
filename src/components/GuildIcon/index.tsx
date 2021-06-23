import React from 'react'
import { Image } from 'react-native'

import { styles } from './styles'

interface Props {
  uri: string
}

export function GuildIcon({ uri }: Props) {

  return (
    <Image source={{ uri }} style={styles.image} />
  )
}