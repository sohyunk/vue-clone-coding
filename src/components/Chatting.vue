<template>
    <div>
        <Header :msg="$route.params.name"></Header>
        <div id="chat-range">
            <ul>
                <li v-for="c in chatMsg" :key="c.idx" class="partner-frame">
                    <div v-if="c.id === $route.params.id">
                        <div v-for="p_m in c.msg" :key="p_m.idx">
                            <img :src="require(`@/assets/profile/${$route.params.profile}`)">
                            <div class="partner">{{ p_m }}</div>
                            <div class="p_time"><small>{{ c.time }}</small></div>
                        </div>
                    </div>
                    <div v-else>
                        <div v-for="m_m in c.msg" :key="m_m.idx">
                            <div class="my">{{ m_m }}</div>
                            <span class="m_time"><small>{{ c.time }}</small></span><br><br>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <Send @add_msg="addList"></Send>
    </div>
</template>

<script>
import Header from './Header.vue'
import Send from './Send.vue';
import chat from '../assets/data/chatMsg.json';

export default {
    name: 'ChattingView',
    components: {
        Header,
        Send
    },
    computed: {
        chatMsg: function() {
            var chattingMsg;
            for(let c of chat.chatList)
            {
                if(this.$route.params.id === c.chatID)
                {
                    //console.log(c.totalMsg);
                    chattingMsg = c.totalMsg.sort(function(a, b) {
                        return a.time < b.time ? -1 : a.time > b.time ? 1 : 0;
                    });
                    break;
                }
            }
            //console.log(chattingMsg);
            return chattingMsg;
        },
    },
    methods: {
        addList(msg) {
            var index = 0;
            for(let c of chat.chatList)
            {
                if(this.$route.params.id === c.chatID)
                {
                    break;
                }
                index++;
            }
            chat.chatList[index].totalMsg.push({
                "id": 0,
                "time" : "15:25",
                "msg": [msg]
            });
        }
    }
}
</script>

<style scoped>
#chat-range {
    background-color: rgba(168, 216, 235, 0.568);
    width: 320px;
    height: 438px;
    font-size: 0.9em;
}
img {
  border-radius: 15%;
  width: 35px;
  height: 35px;
  margin-top: 10px;
  margin-left: 10px;
}
li {
    list-style:none;
}
.my {
    position: relative;
    background-color: yellow;
    border-radius: 15px;
    padding:3px 10px;
    margin-top: 5px;
    margin-right: 10px;
    float: right;
}
#partner-frame {
    display: inline-block;
}
.partner {
    display: inline-block;
    position: relative;
    background-color: white;
    border-radius: 15px;
    padding:3px 10px;
    bottom: 7px;
    left: 5px;
}
.p_time {
    display: inline-block;
    position: relative;
    left: 10px;
    bottom: 3px;
}
.m_time {
    position: relative;
    float: right;
    right: 6px;
    top: 13px;
}
</style>