<template>
    <div id="send-frame">
        <div id="input-div">
            <b-input v-model="new_msg" size="is-small" style="width: 260px;"></b-input>
        </div>
        <div id="btn-div">
            <b-button size="is-small" @click="sendMsg"><i class="far fa-paper-plane"></i></b-button>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import { Input, Button } from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Input) 
Vue.use(Button)

export default {
    name: 'msgSend',
    data: () => {
        return {
            new_msg: ''
        }
    },
    props: {
        msg: String
    },
    methods: {
        sendMsg() {
            let tmpMsg = this.new_msg;
            this.$emit('add_msg',tmpMsg);
            this.new_msg = '';
        }
    }
}
</script>

<style scoped>
div {
    display: inline-block;
    height: 40px;
}
#send-frame {
    width:100%;
    border-bottom: 0.5px solid rgba(168, 216, 235, 0.568);
}
#input-div {
    padding-top: 5px;
    margin-left: 10px;
}
b-input {
    width: 300px;
}
#btn-div {
    padding-top: 5px;
    margin-left: 7px;
}
button {
    border: 0;
    outline: 0;
}
</style>