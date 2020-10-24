<template>
  <div>
    <div class="frame" v-on:click="listClick">
      <div id="profile-img">
        <img :src="require(`@/assets/profile/${profile}`)">
      </div>
      <div id="profile-text">
        <p id="p-name">{{ name }}</p>
        <p id="p-msg">{{ message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    id: Number,
    name: String,
    profile: {
      type: String,
      default: 'default-img.png'
    },
    message: String
  },
  methods: {
    listClick() {
      this.$router.push({name: 'FriendInfo', params: {id: this.id, name: this.name, msg:this.message, img:this.profile}});
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
#profile-text {
  margin-left: 10px;
}
#p-name {
  font-size: 0.95em;
  color:black;
}
#p-msg {
  font-size: 0.8em;
  color: gray;
}
</style>