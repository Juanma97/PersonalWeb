<template>
  <div class="container-projects">
    <ToolbarComponent title="Projects"/>
    <h2 class="title-projects">Recopilación de proyectos realizados por mí, 
      tanto informáticos como educativos o de cualquier ámbito.</h2>
    <v-card hover class="card">
      <v-card-title class="title">Project euler</v-card-title>
      <v-card-text>Project euler es una serie de problemas para resolver mediante programación,
                    actualmente existen 652 problemas a resolver, aqui podrás encontrar los que vaya
                    resolviendo: https://github.com/Juanma97/Project-Euler , te animo a que los resuelvas tu tambien.
      </v-card-text>
    </v-card>
    <v-card hover class="card2">
      <v-card-title class="title">Trabajo de fin de grado</v-card-title>
      <v-card-text>
        Actualmente me encuentro realizando el "TFG" de mi carrera universitaria, consiste en una web
        realizad en VueJS y una aplicación móvil realizada con Ionic, de momento no puedo decir más :)
      </v-card-text>
    </v-card>
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
.card{
  margin: 32px 16px 0 16px;
}
.card2{
  margin: 8px 16px;
}
.title{
  font-size: 64px; 
}
.title-projects{
  margin: 70px 16px 0 16px;
}
</style>
