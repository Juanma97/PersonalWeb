<template>
  <div class="container-tutorials">
    <ToolbarComponent title="Tutorials"/>
  </div>
</template>

<script>
import ToolbarComponent from '@/components/ToolbarComponent.vue';

export default {
  name: 'Tutorials',
  data() {
    return {

    }
  },
  components: {
    ToolbarComponent,
  }
}
</script>

<style scoped>
.container-tutorials{
  font-family: 'Thasadith', sans-serif;
}
</style>


