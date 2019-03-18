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
      state.correspondences.filter(item => {
        // console.log('x')
        return item.id === +id
      })[0]
  }
}
