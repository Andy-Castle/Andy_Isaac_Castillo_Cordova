<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'

const age: Ref<number> = ref(0)

const errors: Ref<string[]> = ref([])

const validateForm = () => {
  errors.value = []
  if (age.value <= 0 || age.value >= 60) {
    errors.value.push('La edad debe ser mayor a 0 pero menor que 60.')
  }
}
</script>

<template>
  <div>
    <label>Edad:</label>
    <input @input="validateForm()" v-model.number="age" type="number" />
  </div>

  <span v-for="(err, index) in errors" :key="index" class="error">
    {{ err }}
  </span>
</template>

<style scoped>
* {
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Open Sans',
    'Helvetica Neue',
    sans-serif;

  font-size: 18px;
}
input {
  margin: 10px 0;
  border-radius: 8px;
}
.error {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: red;
  background-color: black;
  border: 1px solid white;
  font-style: italic;
  border: none;
  padding: 5px;
  border-radius: 4px;
}
</style>
