<template lang="">
    <v-select
        class="custom_select"
        v-model="users.current_filter_by_country"
        :items="users.filter_by_country"
        clearable
        label="Filter by country"
    ></v-select>
</template>
<script lang="ts">
import { computed, watch } from 'vue';
import { useStore } from 'vuex';

export default {
    name: 'FilterByCountry',
    setup() {
        const store = useStore()
        const users = computed(() => store.state.users);
        watch(()=> users.value.current_filter_by_country, () => {
            store.commit('users/Filters')
        })
        return {users}
    }
}
</script>
<style lang="">
    
</style>