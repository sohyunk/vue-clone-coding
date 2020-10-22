<template>
    <div>
        <Header :msg="$route.params.name"></Header>
        <div id="chat-range">
            <ul>
                <li v-for="p in partnerMsg.msg" :key="p.idx" class="partner-frame">
                    <img :src="require(`@/assets/profile/${$route.params.profile}`)">
                    <div class="partner">{{ p }}</div>
                </li>
            </ul>
            <ul>
                <li v-for="m in myMsg.msg" :key="m.idx">
                    <div class="my">{{ m }}</div><br><br>
                </li>
            </ul>
        </div>
        <Send></Send>
    </div>
</template>

<script>
import Header from './Header.vue'
import Send from './Send.vue';

export default {
    name: 'ChattingView',
    components: {
        Header,
        Send
    },
    data() {
        return { 
            myMsg: {
                msg: ['안녕하세요~', '저도 만나서 반가워요!']
            },
            partnerMsg:{
                msg: ['안녕하세요!', '반갑습니다!']
            }
        }
  }
}
</script>

<style scoped>
#chat-range {
    background-color: rgba(168, 216, 235, 0.568);
    width: 320px;
    height: 478px;
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