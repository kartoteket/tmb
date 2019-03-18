export const state = () => ({
  correspondences: []
})

export const mutations = {
  setCorrespondences(state, obj) {
    state.correspondences = obj
  }
}

export const getters = {
  getCorrespondences(state) {
    return state.correspondences
  },

  getCorrespondence(state) {
    return id =>
      state.correspondences.find(item => {
        return item.id === Number(id)
      })
  },

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
