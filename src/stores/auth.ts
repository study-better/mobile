import { decorate, observable } from 'mobx'
import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios'

interface User {
  _id: string
  username: string
  token?: string
}

export default class AuthStore {
  auth: User = {} as User

  async loadStoredAuth() {
    const authString = await AsyncStorage.getItem('auth')
    if (!authString) {
      return
    }
    const auth = JSON.parse(authString) as User
    if (auth.token) {
      this.auth = auth
    }
  }

  get token() {
    if (!this.authenticated) throw new Error('Unable to access token')
    return this.auth.token
  }

  get authenticated() {
    return !!(this.auth && this.auth.token)
  }

  async createUser(username: string, password: string) {
    try {
      const { data } = await axios.post('/users', {
        username,
        password,
      })
      await AsyncStorage.setItem('auth', JSON.stringify(data))
      this.auth = data
    } catch (err) {
      console.log('Error creating user', err)
      throw err
    }
  }

  async login(username: string, password: string) {
    try {
      const { data } = await axios.post('/users/login', {
        username,
        password,
      })
      await AsyncStorage.setItem('auth', JSON.stringify(data))
      this.auth = data
    } catch (err) {
      console.log('Error logging in', err)
      throw err
    }
  }
}

decorate(AuthStore, {
  auth: observable,
})
