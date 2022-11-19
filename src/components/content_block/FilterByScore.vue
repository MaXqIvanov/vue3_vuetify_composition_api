
<template lang="">
    <v-select
        class="custom_select"
        :items="users.filter_by_score"
        clearable
        label="Filter by score"
        v-model="users.current_filter_by_score"
    ></v-select>
</template>
<script lang="ts">
import { computed, watch } from 'vue';
import { useStore } from 'vuex';

export default {
    name: 'FilterByScore',
    setup() {
        const store = useStore()
        const users = computed(() => store.state.users);

        watch(()=> users.value.current_filter_by_score, () => {
            store.commit('users/Filters')
        })

        return {users}
    }

}
</script>
<style lang="scss">
</style>
