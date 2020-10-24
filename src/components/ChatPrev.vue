<template>
  <div>
    <div class="frame" v-on:click="chatClick">
      <div id="chat-img">
        <img :src="require(`@/assets/profile/${profile}`)">
      </div>
      <div id="chat-text">
        <p id="c-name">{{ name }}</p>
        <p id="c-msg">{{ lastMsgFind }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import chatMsg from '../assets/data/chatMsg.json';

export default {
  name: "ChaPrev",
  props: {
    id: Number,
    name: String,
    profile: {
      String
    }
  },
  data() {
    var chattingMsg = chatMsg.chatList;
    return { 
        chattingMsg
    }
  },
  methods: {
    chatClick() {
      this.$router.push({name: 'Chatting', params: {id: this.id, name: this.name, profile: this.profile}});
    }
  },
  computed: {
    lastMsgFind: function () {
      var lastTime = ["0", "0"];
      var lastMsg = "";
      for (var m of this.chattingMsg)
      {
        if(this.id === m.chatID)
        {
          for(var t of m.totalMsg)
          {
            let tmpTimeSplit = t.time.split(':');
            if(lastTime[0] <= tmpTimeSplit[0] || lastTime[1] <= tmpTimeSplit[1])
            {
              lastTime[0] = tmpTimeSplit[0];
              lastTime[1] = tmpTimeSplit[1];
              lastMsg = t.msg[t.msg.length-1];
            }
          }
          break;
        }
      }
      return lastMsg
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