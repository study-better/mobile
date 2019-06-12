import { decorate, observable } from 'mobx'
import AsyncStorage from '@react-native-community/async-storage'

interface User {
  _id: string
  username: string
  token?: string
}

export default class AuthStore {
  auth: User = {} as User

  async loadStoredAuth() {
    const auth: any = await AsyncStorage.getItem('auth')
    if (auth && auth.token) {
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
}

decorate(AuthStore, {
  auth: observable,
})
