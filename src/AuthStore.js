import {defineStore} from 'pinia'
import {ref,computed} from 'vue'
export const useAuthStore = defineStore('auth',()=>{
    const usuario = ref(null)

    //es un action
    function login(unUsuario){
        
        usuario.value = unUsuario
    }

    //es un getters
    const hayUsuarioAutenticado = computed(()=> usuario.value != null)

    function getNombreUsuario(){
        return `${usuario.value.nombre} ${usuario.value.apellido}`
    }

    return { login, hayUsuarioAutenticado, getNombreUsuario }
})