<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="Andy Isaac Castillo Córdova" />

      <div class="nav">
        <p>Todos las paginas son visibles (Para probar funcionamiento)</p>
        <nav>
          <RouterLink to="First">FirstView</RouterLink>
          <RouterLink to="Second">SecondView</RouterLink>
          <RouterLink to="Third">ThirdView</RouterLink>
          <RouterLink to="Fourth">FourthView</RouterLink>
          <RouterLink to="Fifth">FifthView</RouterLink>
          <RouterLink to="Sixth">SixthView</RouterLink>
        </nav>
      </div>
    </div>
  </header>
  <RouterView />
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
}
header {
  line-height: 1.5;
  max-height: 100vh;
}

p {
  text-align: center;
}

.nav {
  margin-top: 20px;
  background: #163020;
  border-radius: 10px;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: 1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1px;
  }
}
</style>
