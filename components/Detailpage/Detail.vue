<script setup>
const { product } = defineProps(["product"]);
</script>
<template>
   <aside class="col-span-2 lg:col-span-1 bg-white sticky md:top-4 items-start rounded-2xl">
      <div class="p-6">
         <h2 class="text-2xl font-semibold mb-2">{{ product.name }}</h2>
         <span class="font-light text-gray-500">{{ product.custom_summary }}</span>

         <table class="w-full my-4">
            <tr class="flex justify-between">
               <th class="text-xl font-semibold">Size</th>
               <td class="text-xl">{{ product.file_info.Size }}</td>
            </tr>
         </table>

         <hr class="bg-gray-700" />

         <table class="w-full mt-2">
            <tr class="flex justify-between mt-2">
               <th class="text-xl font-semibold">Price</th>
               <td class="text-3xl font-bold"><span class="text-lg">$</span>{{ product.formatted_price.slice(1) }}</td>
            </tr>
         </table>

         <a class="btn btn-primary w-full mt-2 justify-center" :href="product.short_url" data-gumroad-overlay-checkout="true">Add to cart</a>
      </div>
   </aside>
</template>
