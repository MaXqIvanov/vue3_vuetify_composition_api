<template>
  <v-container>
    <v-row
        align="center"
        justify="center"
        class="ma-4"
    >
      <v-col
          cols="6"
          md="4"
          class="filters"
      >
      <filter-by-country label="Filter by country"/>
      <filter-by-score label="Filter by score"/>
      </v-col>

      <v-col
          cols="6"
          md="6"
      >
        <user-list />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
// import { mapState } from 'vuex';
import FilterByCountry from '../components/content_block/FilterByCountry.vue';
import FilterByScore from '../components/content_block/FilterByScore.vue';
import UserList from '../components/content_block/UserList.vue';
import { ref } from 'vue';
  export default {
    name: 'ContentBlock',
    components: {
      UserList,
      FilterByCountry,
      FilterByScore
    },
    setup() {
        const items = ref([
            'russia',
            'usa',
            '> 20',
            '< 10',
        ])
        const variant = ref('default')

        return {items, variant}
    }
  }
</script>
<style lang="scss">
    .custom_select{
      .v-field__overlay{
          background-color: white !important;
      }
    }
   .filters{
      .v-input{
        margin: 10px;
      }
   }
</style>