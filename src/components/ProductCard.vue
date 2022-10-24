<template>
   <a :href="'https://rauliqbal.gumroad.com/l/' + product.url" class="flex flex-col p-4 bg-white rounded-lg hover:shadow-lg hover:-translate-y-1 border border-slate-300 transition-all ease-out duration-300">
      <div class="rounded-md overflow-hidden">
         <img class="w-full h-60 object-cover" :src="product.img" alt="" />
      </div>
      <div class="mt-4 flex gap-3">
         <div>
            <h2 class="text-xl font-semibold h-14">{{ product.title }}</h2>
            <h5 class="font-light text-slate-500 mt-1">{{ product.category }}</h5>
         </div>
         <div class="flex flex-col">
            <span class="text-red-500 animate-pulse line-through">${{ product.disc_price }}</span>
            <h6 class="text-2xl font-semibold">${{ product.price }}</h6>
         </div>
      </div>
   </a>
</template>

<script>
export default {
   props: ["product"],
};
</script>
