<template>
  <div id="app">
    <Header></Header>
    <router-view />
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "./components/Header";
import Footer from "./components/Fotter";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>
<style lang="scss" scoped></style>
