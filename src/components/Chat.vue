<template>
  <div>
    <Header msg="채팅"></Header>
    <div v-for="isChat in userList" v-bind:key="isChat.id">
      <ChatPrev v-bind="isChat" v-if="isChat.chat"></ChatPrev>
    </div>
  </div>
</template>

<script>
import Header from './Header.vue'
import ChatPrev from './ChatPrev'
import userInfo from '../assets/data/userList.json';

export default {
  name: 'Chat',
  components: {
    Header,
    ChatPrev
  },
  data() {
    var userList = userInfo.users;
    return { 
      userList
    }
  }
};
</script>

<style scoped>

</style>