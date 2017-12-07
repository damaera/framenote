const state = {
  lists: [
    {
      name: 'folder 1',
      selected: false
    }
  ],
  addClicked: false
}

const mutations = {
  ADD_FOLDER (state, payload) {
    state.lists.push(payload)
  },
  TOGGLE_ADD_CLICKED (state) {
    state.addClicked = !state.addClicked
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
