<template>
   <div>
       
        <table class="table">
            <tr v-for="item in students"  v-bind:key="item._id"> 
                <td><router-link v-bind:to="'/student-info/'+item._id"> {{item.name}}</router-link></td><td><input type="checkbox" v-model="item.isDonePr"></td><td>{{item.group}}</td><td>{{ item.mark}}</td>
                <td><a href = "#" @click="removeStud(item._id)">Удалить</a></td>
                <td v-if = "item.name != search"><a href = "#" @click="changeValue(item.name)">Изменить</a></td>
                <td v-if = "item.name == search">
                    <a href = "#" @click="changeStud(item._id)">Изменино</a>
                </td>
                
            </tr>
            
        </table>
        
        
        <div class = "search">
            <input placeholder="Имя" type="text" v-model = "stud.name">
            <select v-model="stud.group">
                 <option disabled value="RPZ 17 1/9">Выбирети группу</option>
                <option value="RPZ 17 1/9">РПЗ 17 1/9</option>
                <option value="RPZ 17 2/9">РПЗ 17 2/9</option>
            </select>
            <input placeholder="Оценка" type="number" v-model = "stud.mark">
            <input type = "checkbox" v-model = "stud.isDonePr"> ПР
            <button v-on:click="add()">Добавить</button>
        </div> 
         <div class = "search" style = "margin-left: 55em;">
            <input type="text" v-model = "search">
            <button v-on:click = "searchStudent()">Search</button>
        </div>
   </div>
</template>

<script>
    import Vue from 'vue'
    import axios from 'axios'
    import VueAxios from 'vue-axios'
 
    export default {
       data: function() {
           return {
                search:"",
                students: [],
                stud: {name:"", group:"", mark:"", isDonePr:""}
           };
        },
        mounted: function(){      
            this.reload();
        },
        methods: {
            removeStud: function(id){
                Vue.axios.delete("http://46.101.212.195:3000/students/" + id)
                .then((response) => {
                    console.log(response.data)
                    this.reload();
                })
            },
            changeValue: function(name){
                this.stud = this.students.find(elem => {
                    if(elem.name == name){
                        return elem
                    }
                });
                this.search = name
            },
           changeStud: function(id){
                Vue.axios.put("http://46.101.212.195:3000/students/" + id,{
                    name: this.stud.name,
                    group: this.stud.group,
                    mark: this.stud.mark,
                    isDonePr: this.stud.isDonePr
                })
                .then((response) => {
                    console.log(response.data)
                    this.reload();
                })
            },
            add: function(){
                Vue.axios.post("http://46.101.212.195:3000/students",{
                    name: this.stud.name,
                    group: this.stud.group,
                    mark: this.stud.mark,
                    isDonePr: this.stud.isDonePr
                })
                
                .then((response) => {
                    console.log(response.data)
                    this.reload();
                })
            },
            reload: function(){
                Vue.axios.get("http://46.101.212.195:3000/students").then((response) => {
                console.log(response.data)
                this.students = response.data;
                })
            }
        }
    }
</script>


