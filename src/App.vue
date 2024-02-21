<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
  <!-- <div v-if="showAddUserForm" class="container">
    <form class="user-form" @submit.prevent="addUser">
      <h2 class="form-title">Agregar Nuevo Usuario</h2>
      <div class="form-group">
        <label for="new-username" class="form-label">Usuario</label>
        <input
          type="text"
          id="new-username"
          v-model="newUser.usuario"
          class="form-input"
          required
        />
      </div>
      <div class="form-group">
        <label for="new-email" class="form-label">Correo</label>
        <input type="email" id="new-email" v-model="newUser.correo" class="form-input" required />
      </div>
      <div class="form-group">
        <label for="new-password" class="form-label">Contraseña</label>
        <input
          type="password"
          id="new-password"
          v-model="newUser.password"
          class="form-input"
          required
        />
      </div>
      <button type="submit" class="submit-btn">Agregar Usuario</button>
    </form>
  </div> -->
</template>

<style scoped></style>
