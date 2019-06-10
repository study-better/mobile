import { observable, computed } from 'mobx'

// A stub authentication store
export default class AuthStore {
  _authenticated: boolean = false

  get authenticated() {
    return this._authenticated
  }
}
