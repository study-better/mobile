import { observable, computed } from 'mobx'

export interface Class {
  _id: string
  name: string
  totalAssignments: number
  completedAssignments: number
}

export default class ClassStore {
  _byId: { [id: string]: Class } = {}
  byId(_id: string) {
    return this._byId[_id] || {}
  }
}
