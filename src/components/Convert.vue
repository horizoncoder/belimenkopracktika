<template>
    <div class="curse">
<center><h2>Курс Валют</h2></center> 
		<span>Введите сумму</span><input type="number" v-model = "currency"> <br>
		<span>Из</span>
		<select  v-model = "Val">
			<option v-for="item in conver" :value="item.buy"  v-bind:key="item.ccy">{{ item.ccy }}</option>
		</select>
		<span>В</span>
		<select v-model = "ValConvert">
			<option v-for="item in conver" :value="item.buy"  v-bind:key="item.ccy">{{ item.ccy }}</option>
		</select>
		<button v-on:click="calculate()">Конвертировать</button>
		<h3 v-if="converted">{{ res }}</h3>
    </div>
    
</template>

<script>

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'


export default {
    data: function(){
        return {
           currency:0,
        conver:[],
        res: "",
        converted: true,
        Val: "",
        ValConvert: "",
        };
    },
    mounted: function(){
        axios.get("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5").then((response) =>{
            console.log(response.data);
            this.conver = response.data;
        })
    },
    methods: {
        calculate: function(){
            this.res = this.Val / this.ValConvert * this.currency
        }
    }
}
</script>

<style scoped>
#curse{
			width: max-content;
            margin-left: auto;
            margin-right: auto;
		}
</style>