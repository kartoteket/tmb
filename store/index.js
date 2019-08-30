import axios from 'axios'
import Papa from 'papaparse'
const URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vTs9xaw1tFZI0cSEfZXJehljJz20P2G2NUca6KxOqo9u2i0cd0oJCJF_eaZrCtZZ2oVBm22NxnWJf_L/pub?output=csv'

export const state = () => ({
  correspondences: [],
  currentCorrespondences: {}
})

export const mutations = {
  setCorrespondences(state, obj) {
    state.correspondences = obj
  },
  setCurrentCorrespondences(state, obj) {
    state.currentCorrespondences = obj
  }
}

export const actions = {
  async fetchCorrespondences({ commit, state }) {
    if (state.correspondences.length === 0) {
      try {
        console.log('Hitting the API')
        const { data } = await axios.get(URL)
        const correspondences = await Papa.parse(data, {
          header: true,
          dynamicTyping: true
        })
        // console.log('api shit worked, committing to store')
        commit('setCorrespondences', correspondences.data)
        return correspondences.data
      } catch (error) {
        console.log('error', error)
        // appropriately handle the error. Check nuxt on error-handling
      }
    }
  },
  async fetchCorrespondenceById({ commit, state, getters, dispatch }, id) {
    const index = id - 1
    try {
      if (state.correspondences.length === 0) {
        await dispatch('fetchCorrespondences')
      }
      const result = {
        prev: getters.getPrev(id),
        current: state.correspondences[index],
        next: getters.getNext(id)
      }
      commit('setCurrentCorrespondences', result)
    } catch (error) {
      console.log('error', error)
      // appropriately handle the error. Check nuxt on error-handling
    }
  }
}

export const getters = {
  // getCorrespondence(state) {
  //   return id =>
  //     state.correspondences.find(item => {
  //       return item.id === Number(id)
  //     })
  // },

  getNext(state) {
    return id => {
      // loop until we find and axis with content
      let i = Number(id)
      while (i < state.correspondences.length - 1) {
        const axis = state.correspondences[i]
        if (axis.text || axis.hasTot) {
          return axis
        }
        i++
      }
    }
  },

  getPrev(state) {
    return id => {
      // loop until we find and axis with content
      let i = Number(id) - 1
      while (i > 0) {
        const axis = state.correspondences[i - 1]
        if (axis.text || axis.hasTot) {
          return axis
        }
        --i
      }
    }
  }
}
