<script setup>
const { data: products } = await useLazyFetch("https://v1.nocodeapi.com/azura/gumroad/pRhFIjiSlmvJlAXF/products");
watch(products, () => {});
</script>
<template>
   <div>
      <h2 class="section-title text-center mb-8">Browse for<br /><span class="text-gradient">awesome projects</span></h2>
      <!-- <p class="text-lg md:text-xl text-gray-500 mb-8 text-center">Pick the projects</p> -->
      <div v-if="products.products.length < 1" class="flex py-20 justify-center">
         <Loader class="scale-150" />
      </div>
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
         <CardProduct v-for="product in products.products" :product="product" />
      </div>
   </div>
</template>
