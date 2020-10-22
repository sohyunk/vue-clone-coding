<template>
  <div>
    <Header msg="채팅"></Header>
    <div v-for="user in users" v-bind:key="user.id">
      <ChatPrev v-bind="user"></ChatPrev>
    </div>
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
  },
  data() {
  return { 
    my: {
        name: '도넛',
        profile: 'donut.png',
    },
    users:[
      { id: 1,
        name: '컵케이크',
        profile: 'cupcake.png',
        message: '대화 내용 한줄' },
      { id: 2,
        name: '커피',
        profile: 'coffee.png',
        message: '대화 내용 한줄' },
    ]
  }
}
};
</script>

<style scoped>

</style>