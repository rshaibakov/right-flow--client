import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '@/db'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },

  mutations: {

  },

  actions: {
    async getSprints () {
      await db.collection('sprints').get()
    }
  }
})
