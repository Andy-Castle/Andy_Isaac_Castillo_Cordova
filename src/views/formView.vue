<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useRouter } from 'vue-router'
import UsersData from '@/data/usersData'

const router = useRouter()
const error = ref(false)

const login = () => {
  const email = (document.getElementById('email') as HTMLInputElement).value
  const password = (document.getElementById('password') as HTMLInputElement).value
  const allUsers = [...UsersData, ...JSON.parse(localStorage.getItem('users') || '[]')]
  const user = allUsers.find((user) => user.correo === email && user.password === password)

  if (user) {
    localStorage.setItem('loggedInUser', user.usuario)
    router.push('/dashboard')
  } else {
    error.value = true
  }
}
</script>

<template>
  <form @submit.prevent="login">
    <h1>Inicio de sesión</h1>
    <div class="form-group">
      <label for="email">Correo</label>
      <input
        type="email"
        name="email"
        id="email"
        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
        required
      />
    </div>
    <div class="form-group">
      <label for="password">Contraseña</label>
      <input type="password" name="password" id="password" />
    </div>
    <span v-if="error" class="error-message">Correo o contraseña incorrectos</span>
    <div class="button-group">
      <button>Login</button>
      <RouterLink to="register" class="link">Registrarme</RouterLink>
    </div>
  </form>
</template>

<style scoped>
template {
  color: #d0d0d5;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

form {
  background: #3b3b4f;
  width: 450px;
  padding: 20px;
  border-radius: 10px;
}

h1 {
  text-align: center;
  font-weight: bold;
}

button {
  color: #0f1419;
  border: 1px solid #cfd9de;
  background: white;
  font-weight: bold;
  border-radius: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 10px;
  width: 40%;
}

button:hover {
  background: #0a0a23;
  color: white;
}

.link {
  color: #d0d0d5;
  display: flex;
  align-items: center;
  margin-top: 15px;
  text-decoration: none;
}

.link:hover {
  color: #0a0a23;
  text-decoration: underline;
}

.form-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.form-group input {
  width: 90%;
  height: 30px;
  border-radius: 5px;
}

.button-group {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.error-message {
  font-weight: bold;
  color: red;
  margin: 5px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
