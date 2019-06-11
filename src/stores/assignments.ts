import { observable, computed } from 'mobx'
import { Class } from './classes'

export interface Assignment {
  _id: string
  name: string
  classId: string
  class: Class
  dueDate: string
}

export default class AssignmentStore {
  _byId: { [key: string]: Assignment } = {}
  byId(_id: string) {
    return this._byId[_id] || {}
  }
}
