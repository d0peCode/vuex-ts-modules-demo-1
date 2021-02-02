import { createStore } from "vuex";
import { createDirectStore } from "direct-vuex"
import { counter } from './counterModule/index'

const {
  store,
  rootActionContext,
  moduleActionContext,
  rootGetterContext,
  moduleGetterContext
} = createDirectStore({
  // … store implementation here …
  // root:
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  // module:
  modules: {
    counter
  }
})

// Export the direct-store instead of the classic Vuex store.
export default store

// The following exports will be used to enable types in the
// implementation of actions and getters.
export {
  rootActionContext,
  moduleActionContext,
  rootGetterContext,
  moduleGetterContext
}

// The following lines enable types in the injected store '$store'.
export type AppStore = typeof store
declare module "vuex" {
  interface Store<S> {
    direct: AppStore
  }
}

// export default createStore({
//   state: {},
//   mutations: {},
//   actions: {},
//   modules: {}
// });
