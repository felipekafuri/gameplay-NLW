import React from 'react'
import { View, Text } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { categories } from '../../utils/categories'
import { GuildIcon } from '../GuildIcon'
import PlayerSvg from '../../assets/player.svg'
import CalendarSvg from '../../assets/calendar.svg'

import { styles } from './styles'
import { theme } from '../../global/styles/theme'

export type GuildProps = {
  id: string,
  name: string,
  icon: string | null,
  owner: boolean
}

export type AppointmentsProps = {
  id: string,
  guild: GuildProps,
  category: string
  date: string
  description: string
}

interface Props extends RectButtonProps {
  data: AppointmentsProps
}

export function Appointment({ data, ...rest }: Props) {
  const [category] = categories.filter(category => category.id === data.category)

  return (
    <RectButton {...rest}>
      <View style={styles.container}>
        <GuildIcon
          uri='https://www.pngitem.com/pimgs/m/529-5297554_transparent-background-discord-logo-transparent-hd-png-download.png'
        />

        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>
              {data.guild.name}
            </Text>

            <Text style={styles.category}>
              {category.title}
            </Text>
          </View>

          <View style={styles.footer}>
            <View style={styles.dateInfo}>
              <CalendarSvg />
              <Text style={styles.date}>
                {data.date}
              </Text>
            </View>

            <View style={styles.playerInfo}>
              <PlayerSvg fill={data.guild.owner ? theme.colors.primary : theme.colors.on} />

              <Text style={[
                styles.player, { color: data.guild.owner ? theme.colors.primary : theme.colors.on }
              ]}>
                {data.guild.owner ? 'Anfitrião' : 'Visitante'}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </RectButton>
  )
}