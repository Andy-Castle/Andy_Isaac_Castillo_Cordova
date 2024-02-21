<template>
  <div>
    <button class="miBoton" @click="GoToRoot">Ir a la raíz</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const GoToRoot = () => {
  router.push('/')
}
</script>

<style>
.miBoton {
  padding: 10px 15px;
  background-color: #280274;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin: auto 15px;
}

.miBoton:hover {
  background-color: #3652ad;
}

.miBoton:active {
  background-color: #280274;
}
</style>
