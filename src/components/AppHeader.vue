<template>
   <h1>{{ store.hayUsuarioAutenticado ?'Bienvenido':'No autenticado' }}</h1>
   <h3 v-if="store.hayUsuarioAutenticado">{{ store.getNombreUsuario() }}</h3>
</template>

<script setup lang="ts">
import { useAuthStore } from '../AuthStore';
const store = useAuthStore()
</script>

<style scoped>

</style>