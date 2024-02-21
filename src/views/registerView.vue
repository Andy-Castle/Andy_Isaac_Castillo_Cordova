<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useRouter } from 'vue-router'
import UsersData from '@/data/usersData'

const router = useRouter()
const usuario = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const error = ref('')
const correoRegistrado = ref<boolean>(false)

const registerUser = () => {
  if (password.value === confirmPassword.value) {
    const existingUser = UsersData.find((user) => user.correo === email.value)
    if (existingUser) {
      correoRegistrado.value = true
      return
    } else {
      const newUser = {
        id: UsersData.length + 1,
        usuario: usuario.value,
        correo: email.value,
        password: password.value
      }
      UsersData.push(newUser)
      localStorage.setItem('users', JSON.stringify(UsersData))
      router.push('/dashboard')
    }
  } else {
    error.value = 'Las contraseñas no coinciden.'
  }
}

const checkCorreoRegistrado = () => {
  const existingUser = UsersData.find((user) => user.correo === email.value)
  correoRegistrado.value = !!existingUser
}
</script>

<template>
  <form @submit.prevent="registerUser">
    <h1>Registrarme</h1>
    <div class="form-group">
      <label for="usuario">Usuario</label>
      <input type="text" v-model="usuario" name="usuario" id="usuario" required />
    </div>
    <div class="form-group">
      <label for="email">Correo</label>
      <input
        type="email"
        v-model="email"
        name="email"
        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
        id="email"
        required
        @input="checkCorreoRegistrado"
      />
    </div>
    <span v-if="correoRegistrado" class="error-message"
      >El correo electrónico ya está registrado.</span
    >
    <div class="form-group">
      <label for="password">Contraseña</label>
      <input type="password" v-model="password" name="password" id="password" required />
    </div>
    <div class="form-group">
      <label for="confirmPassword">Confirmar Contraseña</label>
      <input
        type="password"
        v-model="confirmPassword"
        name="confirmPassword"
        id="confirmPassword"
        required
      />
    </div>
    <div v-if="password !== '' && password !== confirmPassword" class="error-message">
      {{ error || 'Las contraseñas no coinciden' }}
    </div>
    <div class="button-group">
      <button
        :disabled="
          password !== confirmPassword ||
          correoRegistrado ||
          error !== '' ||
          password === '' ||
          confirmPassword === ''
        "
      >
        Registrarme
      </button>
      <RouterLink to="/" class="link">Volver al inicio de sesión</RouterLink>
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
