<template>
  <v-app>
    <v-main>
      <ContentBlock/>
    </v-main>
    <v-footer app v-bind="localAttrs">
      <Footer />
    </v-footer>
  </v-app>
</template>

<script lang="ts">
interface attrs {
  absolute: boolean,
  fixed: boolean,
}
import { computed, defineComponent } from 'vue';
import ContentBlock from './pages/ContentBlock.vue';
import Footer from './components/Footer.vue';

export default defineComponent({
  components: {
    ContentBlock,
    Footer
  },
  setup() {

    const localAttrs:any = computed(() => {
      const attrs:attrs = {} as attrs
      attrs.absolute = true
      attrs.fixed = false
      return attrs
    })   

    return localAttrs
  }
})

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
