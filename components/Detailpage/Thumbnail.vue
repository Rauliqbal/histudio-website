<script setup>
const { product } = defineProps(["product"]);
</script>
<template>
   <img class="w-full max-h-[48rem] object-cover rounded-2xl" :src="product.preview_url" :alt="'Thumbnails ' + product.name" />
</template>
