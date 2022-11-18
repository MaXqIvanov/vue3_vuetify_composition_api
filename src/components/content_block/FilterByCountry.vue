<template lang="">
    <v-select
        class="custom_select"
        v-model="current_value"
        :items="items"
        clearable
        :label="label"
    ></v-select>
</template>
<script lang="ts">
export default {
    name: 'FilterByCountry',
    
}
</script>
<style lang="">
    
</style>