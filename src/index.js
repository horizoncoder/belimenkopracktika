import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

new Vue({
    el: '#app',
    data: {
        SearchStr:"",
        students: [],
        s: {id:"", name:"", group:"", mark:"", isDonePr:""},
        },
    mounted: function(){
        axios.get("http://46.101.212.195:3000/students").then((response) =>{
            console.log(response.data);
            this.students = response.data;
        })
    },
    methods: {
        RemoveStud: function(id){
            this.students = this.students.filter(elem => {
                return elem.id != id;
            });
        },
        add: function(){
            this.s.id = this.students.length;
            this.students.push(JSON.parse(JSON.stringify(this.s)));
        }
    }
});

new Vue({
    el: '#curse',
    data: {
        currency:0,
        conver:[],
        res: "",
        converted: true,
        Val: "",
        ValConvert: "",
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
});