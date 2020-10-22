<template>
  <div class="frame">
      <div id="close-btn" v-on:click="close">
        <i class="fas fa-times"></i>
      </div>
      <div id="p-info-box">
        <img :src="require(`@/assets/profile/${$route.params.img}`)">
        <p id="p-info-name"><b>{{ $route.params.name }}</b></p>
        <p id="p-info-msg">{{ $route.params.msg }}</p>
      </div>
      <div id="info-btm">
        <ul>
          <li><i class="fas fa-comment"></i><p>채팅 하기</p></li>
          <li><i class="far fa-edit"></i><p>프로필 편집</p></li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: "Info",
  methods: {
    close() {
      this.$router.push('/')
    }
  } 
};

</script>

<style scoped>
.frame {
  background-color: rgba(0.0, 0.0, 0.0, 0.85);
  color: white;
}
#close-btn {
  width: 25px;
  height: 25px;
  padding-top: 15px;
  padding-left: 15px;
  text-align: center;
}
#p-info-box{
  text-align: center;
  margin-top: 210px;
  margin-bottom: 30px;
  padding-top : 50px;
}
#p-info-msg {
  font-size: 0.9em;
}
li {
  display: inline-block;
  width:50%;
  text-align: center;
}
#info-btm {
  font-size: 1.2em;
  padding: 0 10px;
}
#info-btm p {
  font-size: 0.7em;
  padding-top: 5px;
}
</style>