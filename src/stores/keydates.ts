import { decorate, observable } from 'mobx'
import { Class } from './classes'
import axios from 'axios'

export interface KeyDate {
  _id: string
  name: string
  classId: string
  class: Class
  dueDate: string
  status?: string
}

export interface Assignment extends KeyDate {}
export interface Paper extends Assignment {}
export interface Appointment extends KeyDate {
  time?: string
  location?: string
}
export interface Project extends KeyDate {}
export interface Test extends KeyDate {}

export default class KeyDateStore {
  _byId: { [key: string]: KeyDate } = {}
  _byClassId: { [key: string]: KeyDate[] } = {}

  byId(_id: string) {
    return this._byId[_id] || {}
  }

  byClassId(classId: string) {
    return this._byClassId[classId] || []
  }

  async loadByClassId(classId: string) {
    try {
      const { data } = await axios.get('/assignments', {
        params: { classId },
      })
      data.forEach((keydate: KeyDate) => {
        this._byId[keydate._id] = keydate
      })
      this._byClassId[classId] = data
    } catch (err) {
      console.log('Error loading key dates by class id', classId)
      throw err
    }
  }
}

decorate(KeyDateStore, {
  _byId: observable,
  _byClassId: observable,
})
