<template>
  <div class="home">
    <counter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Counter from "@/components/Counter.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    Counter
  }
});
</script>
