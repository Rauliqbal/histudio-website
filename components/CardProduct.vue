<script setup>
const { product } = defineProps(["product"]);
</script>
<template>
   <NuxtLink :to="'/product/' + product.id" class="flex flex-col bg-white rounded-xl overflow-hidden">
      <img class="w-full h-60 object-cover" :src="product.preview_url" :alt="'Thumbnail' + product.title" />
      <div class="px-5 py-4">
         <span class="inline-flex bg-blue-500 py-1 px-4 font-semibold text-sm rounded-full text-white">{{ product.tags[0] }}</span>
         <h2 class="font-medium text-2xl mt-2 line-clamp-2" tooltip="name">{{ product.name }}</h2>
         <div class="flex justify-between mt-4">
            <span class="text-3xl font-bold"><span class="text-lg">$</span>{{ product.formatted_price.slice(1) }}</span>
            <div class="btn btn-primary">Buy Now</div>
         </div>
      </div>
   </NuxtLink>
</template>
