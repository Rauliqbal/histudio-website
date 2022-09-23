<template>
  <div class="flex flex-col p-4 bg-white rounded-lg hover:shadow-lg hover:-translate-y-1 border border-slate-300 transition-all ease-out duration-300">
    <div class="rounded-md overflow-hidden">
      <img class="w-full h-60 object-cover" :src="product.img" alt="" />
    </div>
    <div class="mt-4">
      <h2 class="text-xl font-medium h-14">{{ product.title }}</h2>
      <h5 class="font-light text-sm mt-1">{{ product.category }}</h5>
      <div class="flex items-center justify-between mt-3">
        <h6 class="text-2xl font-semibold">{{ product.price }}</h6>
        <a class="gumroad-button" :href="'https://rauliqbal.gumroad.com/l/' + product.url">Buy On</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
};
</script>
