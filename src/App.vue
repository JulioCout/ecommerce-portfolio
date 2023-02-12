<script>
import MobileHead from "./components/MobileHead.vue";
import MobileFooter from "./components/MobileFooter.vue";
import FooterBar from "./components/FooterBar.vue";
import NavBar from "./components/NavBar.vue";
import ProductCard from "./components/ProductCard.vue";

export default {
  name: "App",
  components: {
    MobileHead,
    MobileFooter,
    FooterBar,
    NavBar,
    ProductCard
  },
};
</script>

<template>
  <!-- <NavBar /> -->
  <ProductCard />
  <!-- <MobileHead /> -->
  <!-- <MobileFooter /> -->
  <!-- <FooterBar /> -->
</template>

<style scoped>
  
</style>
