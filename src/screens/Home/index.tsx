import React, { useState } from 'react'
import { FlatList, View } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import { Appointment, AppointmentsProps } from '../../components/Appointment'
import { Avatar } from '../../components/Avatar'
import { Background } from '../../components/Background'
import { ButtonAdd } from '../../components/ButtonAdd'
import { CategorySelect } from '../../components/CategorySelect'
import { ListDivider } from '../../components/ListDivider'
import { ListHeader } from '../../components/ListHeader'
import { Profile } from '../../components/Profile'
import { styles } from './styles'
import { useAuth } from '../../hooks/auth'

export function Home() {
  const [category, setCategory] = useState('')
  const { navigate } = useNavigation()
const {user} = useAuth()
  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: '2',
      guild: {
        id: '2',
        name: 'Oh Yeah!',
        icon: null,
        owner: false
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    }
  ]


  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId)
  }

  function handleAppointmentDetails(item: AppointmentsProps) {
    navigate('AppointmentsDetails', { data: item })
  }
  function handleAppointmentCreate() {
    navigate('AppointmentsCreate')
  }

  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.header}>
          <Avatar urlImage={user.avatar} />
          <Profile />
          <ButtonAdd onPress={handleAppointmentCreate} />
        </View>

        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect}
        />

        <ListHeader title="Partidas agendas" subtitle="Total 6" />
      </View>
      <FlatList
        data={appointments}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Appointment
            data={item}
            onPress={() => handleAppointmentDetails(item)}
          />
        )}
        style={styles.matches}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider />}
      />
    </Background>
  )
}