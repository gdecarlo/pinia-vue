<template>
   <input type="text" v-model="usuario">
   <input type="text" v-model="password">
   <button @click="entrar">Entrar</button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '../AuthStore';
const store = useAuthStore()
import axios from 'axios'

    const usuario = ref(null)
    const password = ref(null)

    const entrar = async ()=>{

        const response = await axios.get("https://www.mockachino.com/5a2710ab-04b6-41/users")
        const usuarioDesdeElServicio = response.data
        store.login(usuarioDesdeElServicio)
    }
</script>

<style scoped>

</style>