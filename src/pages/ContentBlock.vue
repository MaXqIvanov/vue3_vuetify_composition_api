<template>
  <v-container>
    <v-row
        align="center"
        justify="center"
        class="ma-4 main-content"
    >
      <v-col
          cols="6"
          md="4"
          class="filters"
      >
      <filter-by-country/>
      <filter-by-score/>
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
  export default {
    name: 'ContentBlock',
    components: {
      UserList,
      FilterByCountry,
      FilterByScore
    },
    setup() {
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
   .main-content{
    min-height: calc(100vh - 150px);
   }
</style>