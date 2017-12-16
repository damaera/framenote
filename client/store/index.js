import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import files from './files'
import folders from './folders'

Vue.use(Vuex)

const store = new Vuex.Store({
  // plugins: [createPersistedState()],
  modules: {

    files,
    folders
  }
})

export default store
