<template>
   <div>
      <Hero />
      <Category id="category" />
      <div class="container py-20">
         <h3 class="section-title mb-8">Featured Projects</h3>
         <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="product in products" :key="product.id">
               <ProductCard :product="product" />
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import axios from "axios";
import Hero from "../components/Hero.vue";
import Category from "../components/Category.vue";
import ProductCard from "../components/ProductCard.vue";

export default {
   components: { Hero, Category, ProductCard },

   data() {
      return {
         products: [],
      };
   },

   methods: {
      setProducts(data) {
         this.products = data;
      },
   },
   mounted() {
      axios
         .get("https://api-histudio.herokuapp.com/products")
         .then((response) => this.setProducts(response.data))
         .catch((error) => console.log(error));
   },
};
</script>
