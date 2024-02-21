<script setup lang="ts">
import NameAndLastNameComponent from '@/components/NameAndLastNameComponent.vue'
import AgeComponent from '@/components/AgeComponent.vue'
import GenderComponent from '@/components/GenderComponent.vue'
</script>

<template>
  <main>
    <div class="formulario">
      <NameAndLastNameComponent />
      <AgeComponent />
      <GenderComponent />
    </div>
  </main>
</template>

<style>
div .formulario {
  background: #1b1b32;
  width: 300px;
  height: 100px;
}
</style>
