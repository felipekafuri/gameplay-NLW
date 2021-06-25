import React from 'react'
import { View, Text } from 'react-native'
import { useAuth } from '../../hooks/auth'

import { styles } from './styles'

export function Profile() {
  const {user} = useAuth()


  return (
    <View style={styles.container}>
      <View>
        <View style={styles.user}>
          <Text style={styles.greetings}>
            Olá,
          </Text>

          <Text style={styles.username}>
            {user.firstName}
          </Text>
        </View>

        <Text style={styles.message}>
          Hoje é dia de vitória
        </Text>
      </View>

    </View>
  )
}