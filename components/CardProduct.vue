<script setup>
const { product } = defineProps(["product"]);
</script>
<template>
   <div :title="product.name" class="flex flex-col bg-white rounded-xl overflow-hidden hover:shadow-xl hover:shadow-gray-400/30 transition-all ease-out">
      <img class="w-full h-60 object-cover" :src="product.preview_url" :alt="'Thumbnail' + product.title" />
      <div class="px-5 py-4">
         <span class="text-gradient font-semibold text-lg capitalize font-space-grotesk">{{ product.tags[0] }}</span>
         <h2 class="font-medium text-2xl mt-2 line-clamp-2" tooltip="name">{{ product.name }}</h2>
         <div class="flex justify-between mt-4">
            <span class="text-3xl font-bold"><span class="text-lg">$</span>{{ product.formatted_price.slice(1) }}</span>
            <NuxtLink :to="'/product/' + product.id" class="btn btn-primary">Buy Now</NuxtLink>
         </div>
      </div>
   </div>
</template>
