<template>
  <div class="home">
    <!-- <TestHome /> -->
    <SliderHome />
    <MetiersHome />
  </div>
</template>

<script>
// @ is an alias to /src
import SliderHome from '@/components/componentsHome/MetiersHome.vue'
import MetiersHome from '@/components/componentsHome/MetiersHome.vue'
// import TestHome from '@/components/componentsTest/testHome.vue'

export default {
  name: 'HomeView',
  components: {
    SliderHome,
    MetiersHome
  }
}
</script>
