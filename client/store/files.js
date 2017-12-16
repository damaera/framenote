import shortid from 'shortid'

const state = {
  // lists: {
  //   asdqwe1: {
  //     name: 'File1',
  //     createdAt: Date.now(),
  //     updatedAt: Date.now(),
  //     content: '',
  //     folder: 'folder1'
  //   }
  // },
  // selected: 'asdqwe1'
  lists: {},
  selected: null,
}

let lastId = null

const mutations = {
  CREATE (state, { name, folder }) {
    const now = Date.now()
    const newId = shortid.generate()
    lastId = newId
    const newFile = {
      [newId]: {
        name,
        folder,
        createdAt: now,
        updatedAt: now,
        content: ''
      }
    }
    state.lists = { ...state.lists, ...newFile }
  },
  SELECT (state, { id }) {
    if (id === true) {
      state.selected = lastId
    } else {
      state.selected = id
    }
  },
  UNSELECT (state) {
    state.selected = null
  },
  CHANGE_CONTENT (state, { id, content }) {
    state.lists[id].content = content
  },
  CHANGE_TITLE (state, { id, name }) {
    state.lists[id].name = name
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
