<template>
   <main class="container py-24 md:py-40">
      <h1 class="text-xl md:text-3xl">{{ item.name }}</h1>
      <p class="font-light text-gray-400 mb-8 mt-2">{{ item.custom_summary }}</p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
         <div class="col-span-2"><img class="rounded-2xl" :src="item.preview_url" alt="" /></div>
         <div class="col-span-2 md:col-span-1">
            <div class="border border-gray-400 rounded-2xl p-6">
               <!-- <div class="flex items-center gap-2 mb-8">
                  <img class="w-14" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPcN7JjPMD_LaeGXuE_Jlmo5-nPPstKp8zIyiGK1MCjQ&s" alt="Project figma file" />
                  <div>
                     <h4 class="text-xl font-bold">Figma</h4>
                     <p class="font-light text-gray-400 mt-1">Project Included</p>
                  </div>
               </div> -->
               <div class="flex justify-between">
                  <h6 class="text-2xl">Price</h6>

                  <h6 class="text-2xl font-semibold">{{ item.formatted_price }}</h6>
               </div>
               <a :href="item.short_url" class="gumroad-button mt-4 w-full" data-gumroad-overlay-checkout="true">I want this</a>
            </div>
         </div>
      </div>
      <h3 class="section-title my-8">Description Products</h3>
      <div class="detail-desc" v-html="item.description"></div>
   </main>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const item = ref([]);
const route = useRoute();

async function getProducts() {
   try {
      const response = await axios.get(`https://api.gumroad.com/v2/products/` + route.params.id, {
         headers: {
            Authorization: "Bearer -62JoVUfLeVq04v8K7XRtkNAHcX0bucDwGebffIzlrM",
         },
      });
      item.value = response.data.product;
   } catch (error) {
      console.error(error);
   }
}

onMounted(() => {
   getProducts();
   window.scrollTo(0, 0);
});
</script>

<style>
.detail-desc h4,
.detail-desc h2 {
   color: rgb(156 163 175);
}

.detail-desc h2 {
   font-size: 20px;
   margin-bottom: 16px;
}
.detail-desc h4 {
   font-size: 1rem;

   margin-bottom: 12px;
   font-weight: 600;
}

.detail-desc ul {
   list-style-type: disc;
   padding-left: 1.2rem;
   color: rgb(156 163 175);
}

.detail-desc p {
   font-size: 1rem;
   color: rgb(156 163 175);
}
</style>
