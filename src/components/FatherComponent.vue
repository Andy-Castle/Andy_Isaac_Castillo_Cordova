<script setup lang="ts">
import ChildComponent from '@/components/ChildComponent.vue'
import MenuData from '@/data/MenuData'
import type { IMenu } from '@/interfaces/IMenu'
const menuItems: IMenu[] = MenuData
</script>

<template>
  <div>
    <ChildComponent :menuItems="menuItems" />
  </div>
</template>
