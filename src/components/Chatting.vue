<template>
    <div>
        <Header :msg="$route.params.name"></Header>
        <div id="chat-range">
            <ul>
                <li class="partner-frame" v-for="p in chatMsg" :key="p.idx">
                    <div v-if="p.id === $route.params.id">
                        <div v-for="p_m in p.msg" :key="p_m.idx">
                            <img :src="require(`@/assets/profile/${$route.params.profile}`)">
                            <div class="partner">
                                    {{ p_m }}
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <ul>
                <li v-for="m in chatMsg" :key="m.idx">
                    <div class="my" v-if="m.id === 0">
                        <div v-for="m_m in m.msg" :key="m_m.idx">
                            <div>{{ m_m }}</div>
                        </div>
                    </div>
                    <br><br>
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
                    chattingMsg = c.totalMsg;
                    break;
                }
            }
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
                "time" : "12:25",
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
    border-radius: 15px;
    background-color: white;
    padding:3px 10px;
    position: relative;
    bottom: 7px;
    left: 5px;
}
</style>