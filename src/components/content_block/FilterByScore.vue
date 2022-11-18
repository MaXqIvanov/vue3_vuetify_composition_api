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
interface FilterByScore {
    current_value?: Array<Object>,
    items?: Object,
    label: string
}
export default {
    name: 'FilterByScore',
    setup({label}: FilterByScore) {
        
        return {
            label
        }
    }

}
</script>
<style lang="scss">
</style>
