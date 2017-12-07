const state = {
  lists: [
    {
      name: 'folder 1',
      selected: false
    }
  ]
}

const mutations = {
  ADD (state, payload) {
    state.lists.push(payload)
  }
}

const actions = {
  // incrementAsync({ commit }) {
  //   setTimeout(() => {
  //     commit('INCREMENT')
  //   }, 200)
  // }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
