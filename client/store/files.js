import shortid from 'shortid'

const state = {
  lists: {},
  selected: null
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
    const now = Date.now()
    state.lists[id].content = content
    state.lists[id].updatedAt = now
  },
  CHANGE_TITLE (state, { id, name }) {
    const now = Date.now()
    state.lists[id].name = name
    state.lists[id].updatedAt = now
  },
  MOVE_TO_FOLDER (state, { id, folder }) {
    const now = Date.now()
    state.lists[id].folder = folder
    state.lists[id].updatedAt = now
  },
  DELETE (state, { id }) {
    const { lists } = state
    delete lists[id]
    state.lists = {
      ...lists
    }
  }
}

const getters = {
  // fileSelected () {
  //   return this.$store.state.files.selected
  // }
  // fileInFolder: (state) => (folderId) => {
  //   console.log()
  //   return state.lists.
    
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
