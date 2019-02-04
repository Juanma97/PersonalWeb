<template>
  <div class="container-apps">
    <ToolbarComponent title="Apps"/>
    <h2 class="title-apps">Recopilación de aplicaciones móviles y web creadas por mi :)</h2>
  </div>
</template>


<script>
import ToolbarComponent from '@/components/ToolbarComponent.vue';

export default {
  name: 'Apps',
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
.container-apps{
  font-family: 'Thasadith', sans-serif;
}
.title-apps{
  margin: 64px 16px 0 16px;
}
</style>
