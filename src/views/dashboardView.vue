<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Idata } from '@/interfaces/Idata'
import UsersData from '@/data/usersData'
import { useRouter } from 'vue-router'

const router = useRouter()
const users = ref<Idata[]>([])
const showAddUserForm = ref(false)
const editMode = ref(false)
const buttonText = ref('Agregar Usuario')
users.value = UsersData

const newUser = ref<Idata>({
  id: 1,
  usuario: '',
  correo: '',
  password: ''
})

const addUser = () => {
  if (editMode.value) {
    const index = users.value.findIndex((user) => user.id === newUser.value.id)
    if (index !== -1) {
      users.value[index] = { ...newUser.value }
      localStorage.setItem('users', JSON.stringify(users.value))
      editMode.value = true
    }
  } else {
    newUser.value.id = users.value.length + 1
    users.value.push({ ...newUser.value })
    localStorage.setItem('users', JSON.stringify(users.value))
  }

  newUser.value = {
    id: 0,
    usuario: '',
    correo: '',
    password: ''
  }
  showAddUserForm.value = false
  buttonText.value = 'Agregar Usuario'
}

const editUser = (editedUser: Idata) => {
  newUser.value = { ...editedUser }
  editMode.value = true
  showAddUserForm.value = true
  buttonText.value = 'Cerrar'
}

const deleteUser = (userId: number) => {
  if (userId === 1) {
    alert('No se puede eliminar este usuario')
    return
  }
  users.value = users.value.filter((user) => user.id !== userId)
  localStorage.setItem('users', JSON.stringify(users.value))
}

const toggleAddUserForm = () => {
  if (!editMode.value) {
    showAddUserForm.value = !showAddUserForm.value
    buttonText.value = showAddUserForm.value ? 'Cerrar' : 'Agregar Usuario'
  } else {
    showAddUserForm.value = true
    editMode.value = false
    buttonText.value = 'Agregar Usuario'
  }
}

const loadUsersFromLocalStorage = () => {
  const storedUsers = localStorage.getItem('users')
  if (storedUsers) {
    users.value = JSON.parse(storedUsers)
  }
}

const logout = () => {
  router.push('/')
}

onMounted(() => {
  loadUsersFromLocalStorage()
})
</script>

<template>
  <div>
    <h1>Dashboard</h1>
    <table class="dashboard-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Usuario</th>
          <th>Correo</th>
          <th>Contraseña</th>
          <th>Herramientas</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.usuario }}</td>
          <td>{{ user.correo }}</td>
          <td>{{ user.password }}</td>
          <td>
            <button @click="editUser(user)" class="edit-button">Editar</button>
            <button @click="deleteUser(user.id)" class="delete-button">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
    <button @click="logout" class="logout-button">Cerrar sesión</button>
    <button @click="toggleAddUserForm" class="add-user">{{ buttonText }}</button>
  </div>

  <div v-if="showAddUserForm" class="container">
    <form class="user-form" @submit.prevent="addUser">
      <h2 class="form-title">{{ editMode ? 'Editar Usuario' : 'Agregar Nuevo Usuario' }}</h2>
      <div class="form-group">
        <label for="new-username" class="form-label">Usuario</label>
        <input
          v-model="newUser.usuario"
          type="text"
          id="new-username"
          class="form-input"
          required
        />
      </div>
      <div class="form-group">
        <label for="new-email" class="form-label">Correo</label>
        <input
          v-model="newUser.correo"
          type="email"
          id="new-email"
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
          class="form-input"
          required
        />
      </div>
      <div class="form-group">
        <label for="new-password" class="form-label">Contraseña</label>
        <input
          v-model="newUser.password"
          type="password"
          id="new-password"
          class="form-input"
          required
        />
      </div>
      <button type="submit" class="submit-btn">
        {{ editMode ? 'Confirmar' : 'Agregar Usuario' }}
      </button>
    </form>
  </div>
</template>

<style scoped>
.dashboard-table {
  width: 100%;
  border-collapse: collapse;
}

.dashboard-table th,
.dashboard-table td {
  border: 1px solid #ddd;
  padding: 8px;
}

.dashboard-table th {
  background-color: #3b3b4f;
  color: #fff;
}

.edit-button {
  background-color: #9b9900;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
}
.delete-button {
  background-color: #ff0000;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
}
.logout-button {
  background-color: #ff7b00;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
}

.add-user {
  background-color: #10a200;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
}

.edit-button:hover {
  background-color: #fff;
  color: black;
}
.delete-button:hover {
  background-color: #fff;
  color: black;
}
.logout-button:hover {
  background-color: #fff;
  color: black;
}

/* Espacio aparte */
.container {
  max-width: 400px;
  margin: 0 auto;
}

.user-form {
  background-color: #3b3b4f;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-title {
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-label {
  display: block;
  font-weight: bold;
}

.form-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.submit-btn {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #0056b3;
}
</style>
