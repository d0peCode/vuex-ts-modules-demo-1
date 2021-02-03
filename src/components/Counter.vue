<template>
  {{ counter }}
  <button @click="changeCounterMethod(-1)">decCounter</button>
  <button @click="changeCounterMethod(1)">incCounter</button>
  <button @click="fetchCounter">fetchCounter</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";
import store from '../store/index'

export default defineComponent({
  name: "HelloWorld",

  computed: {
    counter (): number {
      return store.getters.counter.counter
    }
  },

  ...mapActions([
    'counter/changeCounter'
  ]),

  methods: {
    changeCounterMethod (by: number): void {
      store.dispatch.counter.changeCounter({ by }) // works
      console.log('this', this)
      // console.log(this.$store)
      // this.changeCounter(by) // doesnt work obviously
    },
    fetchCounter (): void {
      store.dispatch.counter.fetchCounter({ counter: 2 })
    }
  }
});
</script>