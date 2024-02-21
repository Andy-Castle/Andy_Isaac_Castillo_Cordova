<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'

const lastName: Ref<string> = ref('')
const name: Ref<string> = ref('')

const errors: Ref<string[]> = ref([])

const validateForm = () => {
  errors.value = []

  if (name.value.length < 5 || name.value.length > 18) {
    errors.value.push('Nombre debe de tener entre 5 y 18 caracteres.')
  }

  if (lastName.value === name.value) {
    errors.value.push('El apellido no puede ser el mismo que el nombre.')
  }
}
</script>

<template>
  <div>
    <label>Nombre:</label>
    <input @input="validateForm()" v-model="name" type="text" />
  </div>
  <div>
    <label>Apellido:</label>
    <input @input="validateForm()" v-model="lastName" type="text" />
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
