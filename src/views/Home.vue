<template>
  <div class="container-home">
    <ToolbarComponent title="Inicio"/>
    <v-card elevation="4" class="container-information">
      <div class="personal-information">
        <h1>Bienvenido a mi web personal</h1>
        <img class="profile-img" src="../assets/0.jpeg"/>
        <p>Mi nombre es Juan Manuel Pérez Toro y actualmente estoy terminando la carrera de Ingeniería
          Informática, me encanta la informática desde pequeñito y en general la ciencia, esta web es una
          recopilación de todos los proyectos, aplicaciones y enseñanzas que quiero compartir con la gente.
        </p>
      </div>
      <div class="menu">
        <router-link tag="apps" to="/apps">
          <div class="element">
            <h5>Mis apps</h5>
          </div>
        </router-link>
        <router-link tag="projects" to="/projects">
          <div class="element">
            <h5>Mis proyectos</h5>
          </div>
        </router-link>
        <router-link tag="tutorials" to="/tutorials">
          <div class="element">
            <h5>Tutoriales</h5>
          </div>
        </router-link>
      </div>
    </v-card>
  </div>
</template>

<script>
import ToolbarComponent from '@/components/ToolbarComponent.vue'

  export default {
    components: {
      ToolbarComponent,
    }
  }
</script>


<style scoped>
h5{
  font-size: 32px;
}
.element{
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  background: #2f3640;
  color: white;
}
.element:hover{
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  cursor: pointer;
}
.personal-information {
  text-align: center;
  margin: 32px;
}
.personal-information h1, p{
  margin: 8px;
}
.profile-img{
  height: 100px;
  width: 100px;
  border-radius: 100%;
}
.container-information{
  display: flex;
  flex-direction: column;
  padding: 32px;
  width: 1000px;
  height: 600px;
}
.menu{
  display: grid;
  grid-gap: 4px;
  grid-template-columns: auto auto auto;
  height: 100%;
}
.container-home {
  font-family: 'Thasadith', sans-serif;
  z-index: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

