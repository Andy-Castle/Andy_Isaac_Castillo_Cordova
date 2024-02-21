<template>
  <div class="card">
    <span>
      <h3>#{{ props.id + 1 }}</h3>
      <h2>{{ props.date }}</h2>
    </span>
    <span>
      <h2>{{ props.title }}</h2>
      <p>{{ props.body }}</p>
      <button @click="clicked()">Clickeame</button>

      <!-- v-on:click="clicked()" -->
    </span>
  </div>
</template>

<script setup lang="ts">
import type { IComment } from '@/interfaces/IComment'
const props = defineProps<IComment>()
const emits = defineEmits(['SayVue', 'SayGoodBye'])

const clicked = () => {
  //   alert('Soy a, Item-hijo')
  emits('SayVue', props.id)
  emits('SayGoodBye', props.author)
}
</script>

<style scoped>
.card {
  border: 1px solid red;
  padding: 10px;
  margin: 5px;
}
</style>
