<script setup>
const { data: products } = await useLazyFetch("https://v1.nocodeapi.com/azura/gumroad/pRhFIjiSlmvJlAXF/products");
watch(products, () => {});
</script>
<template>
   <div>
      <h2 class="text-2xl md:text-3xl font-bold mb-6">Featured Products</h2>
      <div v-if="products.products.length < 1" class="flex py-20 justify-center">
         <Loader class="scale-150" />
      </div>
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
         <CardProduct v-for="product in products.products" :product="product" />
      </div>
   </div>
</template>
