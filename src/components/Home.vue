<template>
  <div>
    <Header msg="친구"></Header>
    <FriendPrev v-bind="my"></FriendPrev>
    <hr>
    <div v-for="user in users" v-bind:key="user.id">
      <FriendPrev v-bind="user"></FriendPrev>
    </div>
  </div>
</template>

<script>
import Header from './Header.vue'
import FriendPrev from './FriendPrev.vue'

export default {
  name: 'Home',
  components: {
    Header,
    FriendPrev
  },
  data() {
    return { 
      my: {
          name: '도넛',
          profile: 'donut.png',
          message: '먼치킨 찾아요'
      },
      users:[
        { id: 1,
          name: '컵케이크',
          profile: 'cupcake.png',
          message: '.' },
        { id: 2,
          name: '커피',
          profile: 'coffee.png',
          message: '아.아 최고' },
      ]
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
