<template>
  {{ counter }}
  <button @click="changeCounter(-1)">decCounter</button>
  <button @click="changeCounter(1)">incCounter</button>
  <button @click="fetchCounter">fetchCounter</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store from '../store/index'

export default defineComponent({
  name: "HelloWorld",

  computed: {
    counter (): number {
      return store.getters.counter.counter
    }
  },

  methods: {
    changeCounter (by: number): void {
      store.dispatch.counter.changeCounter({ by })
    },
    fetchCounter (): void {
      store.dispatch.counter.fetchCounter({ counter: 2 })
    }
  }
});
</script>