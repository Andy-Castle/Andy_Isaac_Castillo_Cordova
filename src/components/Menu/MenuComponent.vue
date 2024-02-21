<template>
  <div>
    <MenuItem v-for="route in routeViws" :name="route.name" :path="routes"></MenuItem>
  </div>
</template>

<script setup lang="ts">
import MenuItem from './MenuItem.vue'
import router from '@/router/index'
import type IMenuItem from '@/interface/IMenuItem'

const routeViews = router.options.routes.filter((route) => {
  return route
}) as IMenuItem[]
</script>
