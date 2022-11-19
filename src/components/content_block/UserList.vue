<template lang="">
<div class="list-users">
    <div class="list-user-title"><span>Список пользователей</span></div>
    <transition-group name="list" tag="p">
    <div class="one-user" v-for="(user) in users.users_filter" :key="user.id">
        <div :style="{backgroundImage: `url(${user.avatar})`}" class="user-image" @click.stop="store.commit('users/setCurrentUser', user)"></div>
        <div class="user-body">
            <div class="user-body-title" v-html="user.title"></div>
            <div class="user-body-subtitle" v-html="user.subtitle"></div>
            <div v-if="user.id === users.current_user.id" class="user-body-address">адрес: {{user.address}}</div>
            <div :style="[user.id === users.current_user.id ? {bottom: '0px'} : {bottom: '-10px'}]" class="user_diviver"></div>
        </div>
    </div>
    </transition-group>
</div>
</template>
<script lang="ts">
import { computed, onUnmounted } from 'vue';
import { useStore } from 'vuex';
export default {
    name: 'UserList',
    setup(){
        const store = useStore()
        const users = computed(() => store.state.users);
        document.addEventListener('click', () => store.commit('users/setCurrentUser', {}));
        onUnmounted(() => {
            document.removeEventListener('click', () => store.commit('users/setCurrentUser', {}));
        })
        return {
            users, store
        }
    }
}
</script>
<style lang="scss">
    .user-body-address{
        margin: 0;
        -webkit-line-clamp: 2;
        display: -webkit-box;
        -webkit-box-orient: vertical; 
        overflow: hidden;
        font-size: 0.875rem;
        color: #787878;
        margin-bottom: 10px;
    }
    .user_diviver{
        position: absolute;
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
        height: fit-content;
        min-height: 80px;
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
    .list-item {
        display: inline-block;
        margin-right: 10px;
      }
      .list-enter-active,
      .list-leave-active {
        transition: all 1s ease;
      }
      .list-enter-from,
      .list-leave-to {
        opacity: 0;
        transform: translateY(30px);
      }
</style>