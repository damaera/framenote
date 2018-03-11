import shortid from 'shortid'

const state = {
  lists: {},
  selected: null
}

let lastId = null

const mutations = {
  CREATE (state, { name }) {
    const now = Date.now()
    const newId = shortid.generate()
    lastId = newId
    const newFolder = {
      [newId]: {
        name,
        createdAt: now,
        updatedAt: now
      }
    }
    state.lists = { ...state.lists, ...newFolder }
  },
  RENAME (state, { id, newName }) {
    state.lists[id].name = newName
  },
  DELETE (state, { id }) {
    const { lists } = state
    delete lists[id]
    state.lists = {
      ...lists
    }
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
