<template>
  <header>
    <div id="header-title">
      <p><b>{{ msg }}</b></p>
    </div>
    <div id="header-icon" v-if="msg === '친구' || msg === '채팅'">
      <ul>
        <li>
          <div class="input-frame">
            <b-input v-model="userName" size="is-small" style="width: 130px;" placeholder="검색" v-on:keydown="inputWord">
          </b-input>
          </div>
        </li>
        <li><i class="fas fa-plus"></i></li>
      </ul>
    </div>
  </header>
</template>

<script>
import Vue from 'vue'
import { Input, Button } from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Input) 
Vue.use(Button)

export default {
  name: "Header",
  props: {
    msg: String
  },
  data() {
    return {userName: ''}
  },
  methods: {
    inputWord() {
      let tmpWord = this.userName;
      // console.log(this.userName);
      // console.log(tmpWord);
      this.$emit('word',tmpWord);
    }
  }
};
</script>

<style scoped>
header {
  height: 40px;
  color: black;
}
div {
  display: inline-block;
}
#header-title {
  font-size: 1.2em;
  padding-top: 7px;
  padding-left: 10px;
}
#header-icon {
  float: right;
  padding-top: 8px;
  padding-right: 10px;
}
.input-frame {
  vertical-align: middle;
}  

li {
    display: inline-block;
    margin: 0 7px;
}
</style>