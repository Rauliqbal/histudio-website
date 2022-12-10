<template>
   <main>
      <Hero />
      <Category id="category" />
      <div class="container py-20">
         <h3 class="section-title mb-8">Featured Products</h3>
         <div class="flex flex-col items-center justify-center h-40" v-if="products.length < 1">
            <div class="w-12 h-12 rounded-full bg-blue-600 animate-ping"></div>
            <p class="mt-8 animate-pulse">Please wait</p>
         </div>
         <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="product in products" :key="product.id">
               <ProductCard :id="product.id" :name="product.name" :preview_url="product.preview_url" :price="product.formatted_price" :short_url="product.short_url" :tags="product.tags[0]" />
            </div>
         </div>
      </div>
   </main>
</template>

<script setup>
import axios from "axios";
import Hero from "../components/Hero.vue";
import Category from "../components/Category.vue";
import ProductCard from "../components/ProductCard.vue";
import { onMounted, ref } from "vue";

const products = ref([]);

const getProducts = async () => {
   let response = await axios.get("https://api.gumroad.com/v2/products", {
      headers: {
         Authorization: "Bearer -62JoVUfLeVq04v8K7XRtkNAHcX0bucDwGebffIzlrM",
      },
   });
   products.value = response.data.products;
};

onMounted(() => {
   getProducts();
   window.scrollTo(0, 0);
});
</script>
