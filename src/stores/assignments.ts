import { decorate, observable } from 'mobx'
import { Class } from './classes'
import axios from 'axios'

export interface Assignment {
  _id: string
  name: string
  classId: string
  class: Class
  dueDate: string
}

export default class AssignmentStore {
  _byId: { [key: string]: Assignment } = {}
  _byClassId: { [key: string]: Assignment[] } = {}

  byId(_id: string) {
    return this._byId[_id] || {}
  }

  byClassId(classId: string) {
    return this._byClassId[classId] || []
  }

  async loadByClassId(classId: string) {
    try {
      const { data } = await axios.get(
        'https://backend.study-better.now.sh/assignments',
        {
          params: { classId },
        }
      )
      data.forEach((assignment: Assignment) => {
        this._byId[assignment._id] = assignment
      })
      this._byClassId[classId] = data
    } catch (err) {
      console.log('Error loading assignments by class id', classId)
      throw err
    }
  }
}

decorate(AssignmentStore, {
  _byId: observable,
  _byClassId: observable,
})
