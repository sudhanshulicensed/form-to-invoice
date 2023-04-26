<template>
  <div id="app">
    <NavigationBarVue :navItems="navigationItems"/>
    <router-view/>
  </div>
</template>

<script>
import NavigationBarVue from './components/NavigationBar.vue';
export default ({
  components: {NavigationBarVue},
  data(){
    return {
      navigationItems : [
        {
          name: 'Home',
          route: '/'
        },
        {
          name: 'About',
          route: '/about'
        }
      ]
    }
  },
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: linear-gradient(to right, #7ed56f, #28b485);
  height: 100vh;
}

nav {
  padding: 30px;
}
</style>
