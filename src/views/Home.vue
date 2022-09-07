<template>
  <div>
    <Hero/>
    <Category/>
    
    <div class="container py-20">
      <h3 class="section-title mb-8">Featured Projects</h3>
      <div class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
    </div>
    
  </div>
</template>

<script>
import Hero from "../components/Hero.vue";
import Category from "../components/Category.vue";
import ProductCard from "../components/ProductCard.vue";

export default {
    components: { Hero, Category, ProductCard }
}
</script>

<style>

</style>
