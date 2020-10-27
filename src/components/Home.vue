<template>
  <div>
    <Header msg="친구" @word="search"></Header>
    <FriendPrev v-bind="my"></FriendPrev>
    <hr>
    <div v-for="user in userList" v-bind:key="user.id">
      <FriendPrev v-bind="user"></FriendPrev>
    </div>
  </div>
</template>

<script>
import Header from './Header.vue'
import FriendPrev from './FriendPrev.vue'
import userInfo from '../assets/data/userList.json';

export default {
  name: 'Home',
  components: {
    Header,
    FriendPrev
  },
  data() {
    var my = userInfo.my;
    var userList = userInfo.users;
    return { 
      my, userList
    }
  },
  methods: {
    search(msg) {
      console.log("search() input word: "+ msg);
    }
  }
};

</script>

<style scoped>
hr {
  border-bottom: 0px;
  width: 95%;
  margin: auto;
}
</style>
