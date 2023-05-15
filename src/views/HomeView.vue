<template>
  <div class="home">
    <SliderHome />
    <MetiersHome />
  </div>
</template>

<script>
// @ is an alias to /src
import SliderHome from '@/components/componentsHome/SliderHome.vue'
import MetiersHome from '@/components/componentsHome/MetiersHome.vue'

export default {
  name: 'HomeView',
  components: {
    SliderHome,
    MetiersHome
  }
}
</script>
