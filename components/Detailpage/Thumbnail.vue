<script setup>
const { product } = defineProps(["product"]);
</script>
<template>
   <div>
      <img class="w-full max-h-[48rem] object-cover rounded-3xl" :src="product.preview_url" :alt="'Thumbnails ' + product.name" />
   </div>
</template>
