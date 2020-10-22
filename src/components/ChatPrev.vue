<template>
  <div>
    <div class="frame" v-on:click="chatClick">
      <div id="chat-img">
        <img :src="require(`@/assets/profile/${profile}`)">
      </div>
      <div id="chat-text">
        <p id="c-name">{{ name }}</p>
        <p id="c-msg">{{ message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChaPrev",
  props: {
    name: String,
    profile: {
      type: String,
      default: 'default-img.png'
    },
    message: String
  },
  methods: {
    chatClick() {
      this.$router.push({name: 'Chatting', params: {name: this.name, profile: this.profile}});
    }
  }
};
</script>

<style scoped>
div {
  display: inline-block;
  margin: 3px 5px;
}
.frame {
  width: 300px;
  vertical-align: middle;
}
img {
  border-radius: 15%;
  width: 35px;
  height: 35px;
}
#chat-text {
  margin-left: 10px;
}
#c-name {
  font-size: 0.95em;
  color:black;
}
#c-msg {
  font-size: 0.8em;
  color: gray;
}
</style>