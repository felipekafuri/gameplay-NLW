import * as AuthSession from 'expo-auth-session'
import React, { createContext, ReactNode, useContext, useState } from 'react'

import { CDN_IMAGE, CLIENT_ID, REDIRECT_URI, RESPONSE_TYPE, SCOPE } from '../config'
import { api } from '../services/api'

interface User {
  id: string,
  username: string,
  firstName: string,
  avatar: string,
  email: string,
  token: string
}

interface AuthContextData {
  user: User
  signInUser: () => Promise<void>
  loading: boolean
}

type AuthProviderProps = {
  children: ReactNode
}

type AuthorizationResponse = AuthSession.AuthSessionResult & {
  params: { 
    access_token: string
  }
}

export const AuthContext = createContext({} as AuthContextData)

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({})
  const [loading, setLoading] = useState(false)


  const authUrl = `https://discord.com/api/oauth2/authorize?client_id=857644565878931498&redirect_uri=https%3A%2F%2Fauth.expo.io%2F%40felipekafuri%2Fgameplay&response_type=token&scope=connections%20guilds%20identify%20email`
  async function signInUser() {
    try {
      setLoading(true)

      const {params,type} = await AuthSession.startAsync({
        authUrl 
      }) as AuthorizationResponse

      if(type ==='success'){
        api.defaults.headers.authorization = `Bearer ${params.access_token}`
      }

      const userInfo = await api.get('/users/@me')

      const firstName = userInfo.data.username.split(' ')[0]
      userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`

      setUser({
        ...userInfo.data,
        firstName,
        token: params.access_token
      })

      setLoading(false)

    } catch {
      throw new Error('Não foi possível autenticar')
    }
  }

  return (
    <AuthContext.Provider value={{ user, signInUser, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;

}

export {
  AuthProvider,
  useAuth

}