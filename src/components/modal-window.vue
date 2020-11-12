<template>
    <div v-if="show" class="modal-shadow" @click.self="closeModal" style = "
    position: absolute;
        top: 0px;
        left: 0;
        min-height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.39);
    ">
        <div class="modal" style = "
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
        ">
            <div class="modal-close" @click="closeModal" style = "
            border-radius: 50%;
            color: #fff;
            background: #ff4040;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 7px;
            right: 7px;
            width: 30px;
            height: 30px;
            cursor: pointer;
            ">&#10006;</div>
            <slot name="title" style = "color: #0971c7;">
                <h3 class="modal-title">Ваше фото</h3>
            </slot>
            <slot name="body">
                <div class="modal-content" style = "margin-bottom: 20px">
                    <img v-bind:src="photo" @click="closeModal">
                </div>
            </slot>
            <slot name="footer">
                <div class="modal-footer">
                    <button class="modal-footer__button" @click="closeModal" style = "
                    background-color: #ff4040;
                color: #fff;
                border: none;
                text-align: center;
                padding: 8px;
                font-size: 22px;
                font-weight: 500;
                border-radius: 8px;
                    ">
                        Ок
                    </button>
                </div>
            </slot>
        </div>
    </div>
</template>
 
<script>
    export default {
        name: "ModalWindow",
        data: function () {
            return {
                show: false,
                photo:''
            }
        },
        methods: {
            closeModal: function () {
                this.show = false
            }
        }
    }
</script>