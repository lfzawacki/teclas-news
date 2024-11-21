<script setup lang="ts">
import { DashboardLayout } from 'aeria-app-layout'

const metaStore = useStore('meta')
</script>

<template>
  <dashboard-layout>
    <template #super>
      <aeria-icon
        v-clickable
        :icon="
          metaStore.theme === 'dark'
            ? 'moon'
            : 'sun'
        "
        @click="metaStore.theme === 'dark'
          ? metaStore.$actions.saveTheme('default')
          : metaStore.$actions.saveTheme('dark')
        "
      />
    </template>
  </dashboard-layout>
</template>
