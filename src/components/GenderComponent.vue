<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'

const gender: Ref<string> = ref('')
const customGender: Ref<string> = ref('')
const errors: Ref<string[]> = ref([])

const validateForm = () => {
  errors.value = []
  if (!['Masculino', 'Femenino', 'Otro'].includes(gender.value)) {
    errors.value.push('Sexo invalido')
  } else if (gender.value === 'Otro' && customGender.value === '') {
    errors.value.push('Especificar otro sexo')
  }
}
</script>

<template>
  <div>
    <label>Sexo:</label>
    <select @change="validateForm()" v-model="gender">
      <option value="Masculino">Masculino</option>
      <option value="Femenino">Femenino</option>
      <option value="Otro">Otro</option>
    </select>

    <input
      v-if="gender === 'Otro'"
      @input="validateForm()"
      v-model="customGender"
      type="text"
      placeholder="Specify custom gender"
    />
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
