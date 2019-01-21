<template>
  <div class="container-projects">
    <ToolbarComponent title="Projects"/>
  </div>
</template>

<script>
import ToolbarComponent from '@/components/ToolbarComponent.vue';

export default {
  name: 'Projects',
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
.container-projects {
  font-family: 'Thasadith', sans-serif;
}
</style>
