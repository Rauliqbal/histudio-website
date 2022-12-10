<template>
   <router-link :to="'/product/' + id" class="flex flex-col p-4 bg-white rounded-lg hover:shadow-lg hover:-translate-y-1 border border-slate-300 transition-all ease-out duration-300">
      <div class="rounded-md overflow-hidden">
         <img class="w-full h-60 object-cover" :src="preview_url" :alt="'Thumbnail Photo' + name" />
      </div>
      <div class="mt-4 flex gap-3 items">
         <div>
            <h2 class="text-base md:text-lg font-medium h-14">{{ name }}</h2>
            <h5 class="font-light text-slate-500 mt-2 capitalize">{{ tags }}</h5>
         </div>
         <div class="flex flex-col">
            <h6 class="text-2xl font-semibold">{{ price }}</h6>
         </div>
      </div>
   </router-link>
</template>

<script setup>
defineProps({
   id: String,
   name: String,
   preview_url: String,
   price: String,
   short_url: String,
   tags: String,
});
</script>
