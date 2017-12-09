import shortid from 'shortid'

const newId1 = 'folder1'
const newId2 = 'asdqwe1'

const state = {
  lists: {
    [newId1]: {
      name: 'Folder1',
      createdAt: Date.now(),
      updatedAt: Date.now()
    },
    [newId2]: {
      name: 'Folder2',
      createdAt: Date.now(),
      updatedAt: Date.now()
    }
  },
  selected: newId1
}

const mutations = {
  CREATE (state, { name }) {
    const now = Date.now()
    const newFolder = {
      [shortid.generate()]: {
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
    delete state.lists[id]
  },
  SELECT (state, { id }) {
    state.selected = id
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
