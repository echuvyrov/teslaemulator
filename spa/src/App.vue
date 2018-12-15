<template>
  <div id="app">
    <d-nav tabs>
      <d-nav-item>
        <router-link v-bind:to="'/'">Home</router-link>
      </d-nav-item>
      <d-nav-item>
        <router-link v-bind:to="'/about'">About</router-link>
      </d-nav-item>
      <d-nav-item>
        <router-link v-bind:to="'/param'">Param Link</router-link>
      </d-nav-item>
      <d-nav-item>
        <router-link v-bind:to="'/tesla'">Tesla</router-link>
      </d-nav-item>
      <d-nav-item>
        <router-link v-bind:to="'/teslacontrols'">Controls</router-link>
      </d-nav-item>
    </d-nav>

    <!-- the router outlet, where all matched components would be viewed -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>
<!-- styling for the component -->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>