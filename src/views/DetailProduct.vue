<template>
   <main class="container py-24 md:py-40">
      <h1 class="text-xl sm:text-2xl md:text-4xl">{{ item.name }}</h1>
      <p class="text-sm md:text-base font-light text-gray-400 mt-2 mb-8">{{ item.custom_summary }}</p>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-start">
         <div class="col-span-2">
            <img class="rounded-2xl w-full h-64 sm:h-96 md:h-[34rem] object-cover" :src="item.preview_url" alt="" />

            <div class="mt-8">
               <h3 class="section-title mb-8">Description Products</h3>
               <div class="detail-desc mt-3" v-html="item.description"></div>
            </div>
         </div>

         <aside class="col-span-2 lg:col-span-1 bg-white sticky md:top-4 items-start">
            <div class="border border-gray-400 rounded-2xl p-6">
               <!-- <div class="flex items-center gap-3 mb-8">
                  <img class="w-14" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPcN7JjPMD_LaeGXuE_Jlmo5-nPPstKp8zIyiGK1MCjQ&s" alt="Project figma file" />
                  <div>
                     <h4 class="text-xl font-bold">Figma</h4>
                     <p class="font-light text-gray-400 mt-1">Project Included</p>
                  </div>
               </div> -->
               <p class="text-base md:text-lg text-gray-400 mt-2 capitalize">high-quality digital products for awesome projects</p>
               <div class="flex justify-between mt-4 border-t border-gray-300 pt-4">
                  <h6 class="text-xl">Price</h6>
                  <h6 class="text-2xl font-semibold">{{ item.formatted_price }}</h6>
               </div>
               <a :href="item.short_url" class="btn-primary mt-4 w-full" data-gumroad-overlay-checkout="true">Get Now</a>
            </div>
         </aside>
      </div>
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
.detail-desc h4 {
   color: rgb(156 163 175);
}

.detail-desc h2 {
   font-size: 20px;
   margin-bottom: 8px;
   font-weight: 500;
   color: rgb(120, 126, 136);
}
.detail-desc h4 {
   font-size: 18px;
}

.detail-desc ul {
   list-style-type: disc;
   padding-left: 1.2rem;
   color: rgb(156 163 175);
   margin-top: 8px;
}

.detail-desc p {
   font-size: 1rem;
   color: rgb(156 163 175);
   margin-top: 1rem;
}

@media only screen and (max-width: 600px) {
   .detail-desc h2 {
      font-size: 18px;
   }
}
</style>
