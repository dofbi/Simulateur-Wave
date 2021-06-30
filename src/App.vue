<template>
  <Simulateur />
  <Algorithme />
</template>

<script>
import Simulateur from "./components/simulateur";
import Algorithme from "./components/algorithme";

export default {
  name: "App",
  components: {
    Simulateur,
    Algorithme,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  color: #fff;
  background: #0f2027;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #2c5364, #203a43, #0f2027);
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom, #2c5364, #203a43, #0f2027);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

#app {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
