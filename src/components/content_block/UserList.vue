<template lang="">
<div class="list-users">
    <div class="list-user-title"><span>Список пользователей</span></div>
    <div class="one-user" v-for="(user, index) in users" :key="user.header + index">
        <div :style="{backgroundImage: `url(${user.avatar})`}" class="user-image"></div>
        <div class="user-body">
            <div class="user-body-title" v-html="user.title"></div>
            <div class="user-body-subtitle" v-html="user.subtitle"></div>
            <div class="user_diviver"></div>
        </div>
    </div>
</div>
</template>
<script lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
export default {
    name: 'UserList',
    setup(){
        const store = useStore()
        const users = computed(() => store.state.users.users);
        return {
            users
        }
    }
}
</script>
<style lang="scss">
    .user_diviver{
        position: absolute;
        bottom: 2px;
        right: 0px;
        height: 1px;
        width: calc(100% - 10px);
        background: #e7e7e7;
    }
    .user-body-subtitle{
        margin: 0;
        -webkit-line-clamp: 2;
        display: -webkit-box;
        -webkit-box-orient: vertical; 
        overflow: hidden;
        font-size: 0.875rem;
        color: #787878;
        span{
            color: #212121;
        }
    }
    .user-body-title{
        width: 100%;
        color: #212121;
    }
    .user-body{
        position: relative;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 0px 10px;
        display: flex;
        flex-direction: column;
    }
    .list-user-title{
        height: 70px;
        width: 100%;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        padding: 0px 15px;
        span{
            color: #666666;
            font-size: small;
        }
    }
    .user-image{
        background-repeat: no-repeat;
        background-size: contain;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        min-width: 40px;    
    }
    .list-users{
        display: flex;
        flex-wrap: wrap;
        width: 70%;
        height: fit-content;
        box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
        border-radius: 4px;
        text-align: left;
    }
    .one-user{
        height: 80px;
        width: 100%;
        border-radius: 5px;
        display: flex;
        padding-left: 10px;
        box-sizing: border-box;
        margin-bottom: 10px;
        &:last-child{
            .user_diviver{
                display: none;
            }
        }
    }
</style>