   <template>
   
   <div class="main page">
            
        
       <h3 class = "search">Фото студента</h3>
      <div>
           <img v-bind:src="student.photo" width = "500px" height = "500px" @click="showModal">
            
      </div>
         <h3>{{ student.name }}</h3>
<modal-window ref="modal"></modal-window>

        
   </div>
</template>
<script>
    import ModalWindow from '/components/modal-window.vue'
    import Vue from 'vue'

    export default {
        props: {
            id:'',
        },
        components: {
            ModalWindow
        },
        data: function(){
            return{
                student:{},
            }
        },
        mounted: function(){
            Vue.axios.get("http://46.101.212.195:3000/students/" + this.id).then((response) => {
            console.log(response.data)
                this.student = response.data;
            })
        },
        methods:{
            showModal: function () {
                this.$refs.modal.show = true
                this.$refs.modal.photo = this.student.photo
            },
        }
    }
</script>