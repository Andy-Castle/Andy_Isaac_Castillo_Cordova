<script setup lang="ts">
import ButtonRoot from '@/components/ButtonRoot.vue'
import ImageComponent from '@/components/ImageComponent.vue'
</script>

<template>
  <div class="container">
    <h1>FourthView</h1>
    <div class="buttons">
      <ButtonRoot />
      <ImageComponent />
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  text-align: center;
}

.buttons {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
}

.buttons {
  margin-left: 4.5rem;
}
</style>
