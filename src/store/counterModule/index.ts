/* eslint-disable */
import { defineModule } from "direct-vuex"
import { moduleActionContext, moduleGetterContext } from "../index"

export interface CounterState {
  counter: number
}

const counter = defineModule({
  namespaced: true,
  state: (): CounterState => {
    return {
      counter: 0
    }
  },
  getters: {
    counter(...args): number {
      const { state, getters, rootState, rootGetters } = counterGetterContext(args)
      // Here, 'getters', 'state', 'rootGetters' and 'rootState' are typed.
      // Without 'mod1GetterContext' only 'state' would be typed.
      return state.counter
    }
  },
  mutations: {
    SET_COUNTER(state, counter: number): void {
      // Here, the type of 'state' is 'CounterState'.
      state.counter = counter
    }
  },
  actions: {
    fetchCounter(context, payload: { counter: number }) {
      const { dispatch, commit, getters, state } = moduleActionContext(context, counter)
      // Here, 'dispatch', 'commit', 'getters' and 'state' are typed.
      setTimeout(() => {
        // commit('SET_COUNTER', 'string') // error in IDE <3
        // commit.SET_COUNTER('string') // error in IDE <3
        // commit.SET_COUNTER(payload.counter + '2') // error in IDE <3
        console.log('commit', commit)
        console.log('state', state)
        commit.SET_COUNTER(2)
      }, 1500)
    },
    changeCounter (context, payload: { by: number }) {
        const { commit, state } = moduleActionContext(context, counter)
        commit.SET_COUNTER(state.counter + payload.by)
    }
  },
})

const counterGetterContext = (args: [any, any, any, any]) => moduleGetterContext(args, counter)
const counterActionContext = (context: any) => moduleActionContext(context, counter)

export { counter }
