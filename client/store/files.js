import shortid from 'shortid'

const state = {
  lists: {
    asdqwe1: {
      name: 'File1',
      createdAt: Date.now(),
      updatedAt: Date.now(),
      content: '',
      folder: 'folder1'
    }
  },
  selected: 'asdqwe1'
}

const mutations = {
  CREATE (state, { name, folder }) {
    const now = Date.now()
    state.lists[shortid.generate()] = {
      name,
      folder,
      createdAt: now,
      updatedAt: now,
      content: ''
    }
  },
  SELECT (state, { id }) {
    state.selected = id
  },
  CHANGE_CONTENT (state, { id, content }) {
    state.lists[id].content = content
  }
}

const getters = {
  // fileSelected () {
  //   return this.$store.state.files.selected
  // }
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
  getters,
  actions
}
