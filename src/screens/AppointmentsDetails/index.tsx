import React, { useEffect } from 'react'
import { FlatList, ImageBackground, Text, View } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'

import { Fontisto } from '@expo/vector-icons'
import { useRoute } from '@react-navigation/native'

import BannerImg from '../../assets/banner.png'
import { AppointmentsProps } from '../../components/Appointment'
import { Background } from '../../components/Background'
import { Header } from '../../components/Header'
import { ListDivider } from '../../components/ListDivider'
import { ListHeader } from '../../components/ListHeader'
import { Member } from '../../components/Member'
import { theme } from '../../global/styles/theme'
import { styles } from './styles'
import { ButtonIcon } from '../../components/ButtonIcon'

interface RouteParams {
  data: AppointmentsProps
}

export function AppointmentsDetails() {
  const { params } = useRoute()
  const { data } = params as RouteParams

const members = [
  { 
    id: '1',
    username: 'Felipe Kafuri',
    avatar_url: 'http://github.com/felipekafuri.png',
    status: 'online'
  },
  { 
    id: '2',
    username: 'Diego Fernandes',
    avatar_url: 'http://github.com/diego3g.png',
    status: 'offline'
  },
  { 
    id: '3',
    username: 'Matheus Kafuri',
    avatar_url: 'http://github.com/matheuskafuri.png',
    status: 'online'
  },
]

  return (
    <Background>
      <View style={styles.container}>
        <Header title="Detalhes"
          action={
            <BorderlessButton>
              <Fontisto name="share" color={theme.colors.primary} size={24} />
            </BorderlessButton>
          }
        />

        <ImageBackground source={BannerImg} style={styles.banner}>
          <View style={styles.bannerContent}>
            <Text style={styles.title}>
              {data.guild.name}
            </Text>

            <Text style={styles.subtitle}>
              {data.description}
            </Text>
          </View>
        </ImageBackground>

        <ListHeader title="Jogadores" subtitle="Total 3"/>

        <FlatList
          data={members}
          keyExtractor={item => item.id}
          renderItem={({item})=> (
            <Member data={item}/>
          )}
          ItemSeparatorComponent={()=> <ListDivider/>}
          style={styles.members}
        />
        <View style={styles.footer}> 
        <ButtonIcon title="Entrar na partida"/>
        </View>
      </View>
    </Background>
  )
}