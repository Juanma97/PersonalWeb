<template>
  <div class="container-apps">
    <ToolbarComponent title="Apps"/>
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
</style>
