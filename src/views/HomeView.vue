<script setup lang="ts">
import FatherComponent from '@/components/FatherComponent.vue'
</script>

<template>
  <main>
    <h1>Este es la raíz del sitio</h1>
    <h3>👇Esto es el FatherComponent(Menu)</h3>
    <div class="father">
      <FatherComponent />
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
}

.father {
  margin-top: 15px;
}

h1,
h3 {
  margin-bottom: 10px;
}
</style>
