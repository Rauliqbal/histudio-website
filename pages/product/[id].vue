<script setup>
const { id } = useRoute().params;

const uri = "https://v1.nocodeapi.com/azura/gumroad/pRhFIjiSlmvJlAXF/products?id=" + id;
const { data: product } = await useFetch(uri);
</script>
<template>
   <main>
      <Head>
         <Title>{{ product.product.name }}</Title>
         <Meta name="description" :content="product.product.name" />
      </Head>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-start pt-32">
         <div class="col-span-2">
            <img class="rounded-2xl w-full h-64 sm:h-96 md:h-[34rem] object-cover" :src="product.product.preview_url" alt="" />
            <div class="mt-8">
               <h3 class="text-3xl mb-4">Description Products</h3>
               <div class="detail-desc" v-html="product.product.description"></div>
            </div>
         </div>
         <aside class="col-span-2 lg:col-span-1 bg-white sticky md:top-4 items-start rounded-2xl">
            <div class="p-6">
               <h2 class="text-2xl font-semibold mb-2">{{ product.product.name }}</h2>
               <span class="font-light text-gray-500">{{ product.product.custom_summary }}</span>

               <table class="w-full my-4">
                  <tr class="flex justify-between">
                     <th class="text-xl font-medium">Size</th>
                     <td class="text-xl">{{ product.product.file_info.Size }}</td>
                  </tr>
               </table>

               <hr class="bg-gray-700" />

               <table class="w-full mt-2">
                  <tr class="flex justify-between mt-2">
                     <th class="text-xl font-medium">Price</th>
                     <td class="text-3xl font-bold">{{ product.product.formatted_price }}</td>
                  </tr>
               </table>

               <a class="btn btn-primary w-full mt-2" :href="product.product.short_url" data-gumroad-overlay-checkout="true">Buy now</a>
            </div>
         </aside>
      </div>
   </main>
</template>

<style>
.detail-desc h2 {
   font-size: 22px;
   font-weight: 600;
   margin-bottom: 12px;
   color: #212121;
}

.detail-desc p {
   font-size: 18px;
   color: #6b7280;
   margin-top: 16px;
}

.detail-desc ul {
   padding-left: 32px;
   margin: 8px 0;
}

.detail-desc ul li {
   list-style: disc;
   padding-left: 8px;
   color: #6b7280;
   font-size: 16px;
}
</style>
