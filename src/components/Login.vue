
<template>
    <div>
        <input v-model = "login">
        <button v-on:click="auth()">Log in</button>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
export default {
    data: function(){
        return {
            login:"",
        };
    },
    methods: {
        auth: function(){
             Vue.axios.get("http://46.101.212.195:3000/students/name/" + this.login)
            .then((response) => {
                if(response.data === null){
                    return
                }
                this.$store.commit('setUser', response.data)
                this.$router.push('/')
            })
        }
    },
}
</script>