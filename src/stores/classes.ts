import { decorate, observable, computed } from 'mobx'
import axios from 'axios'

export interface Class {
  _id: string
  name: string
  totalAssignments: number
  completedAssignments: number
}

export default class ClassStore {
  _byId: { [id: string]: Class } = {}
  feed: Class[] = []

  byId(_id: string) {
    return this._byId[_id] || {}
  }

  async load() {
    try {
      const { data } = await axios.get(
        'https://backend.study-better.now.sh/classes'
      )
      data.forEach((_class: Class) => {
        this._byId[_class._id] = _class
      })
      this.feed = data
    } catch (err) {
      console.log('Error loading classes')
    }
  }
}

decorate(ClassStore, {
  _byId: observable,
  feed: observable,
})
