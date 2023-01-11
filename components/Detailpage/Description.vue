<script setup>
const { product } = defineProps(["product"]);
</script>
<template>
   <div class="mt-8 bg-white p-3 md:p-6 rounded-2xl">
      <h3 class="text-3xl font-semibold">Description Products</h3>
      <hr class="bg-slate-500 my-4" />
      <div class="detail-desc" v-html="product.description"></div>
   </div>
</template>
