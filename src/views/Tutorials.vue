<template>
  <div class="container-tutorials">
    <ToolbarComponent title="Tutoriales"/>
    <h3 class="tutorials">
      Próximamente subiré tutoriales acerca de programación web, móvil, etc.
    </h3>
    <!--<div class="tutorials" v-for="(tutorial, i) in tutorials" :key="i">
      <h2>{{tutorial.title}}</h2>
      <p>{{tutorial.url}}</p>
    </div>-->
  </div>
</template>

<script>
import ToolbarComponent from '@/components/ToolbarComponent.vue';
import firebase from 'firebase';

export default {
  name: 'Tutorials',
  data() {
    return {
      tutorials: [],
    }
  },
  components: {
    ToolbarComponent,
  },
  created: function () {
    var db = firebase.database();
    var ref = db.ref('/tutorials/');
    ref.on('value', (snapshot) => {
      console.log(snapshot.val())
      this.tutorials = snapshot.val()
    })
  }
}
</script>

<style scoped>
.container-tutorials{
  font-family: 'Thasadith', sans-serif;
}
.tutorials{
  margin: 64px 0 0 0;
  padding: 32px;
}
</style>


