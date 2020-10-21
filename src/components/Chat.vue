<template>
  <div>
    <Header msg="채팅"></Header>
    <ChatPrev/>
  </div>
</template>

<script>
import Header from './Header.vue'
import ChatPrev from './ChatPrev'

export default {
  name: 'Chat',
  components: {
    Header,
    ChatPrev
  }
};
</script>

<style scoped>

</style>