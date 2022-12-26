<script setup>
const { id } = useRoute().params;

const uri = "https://v1.nocodeapi.com/azura/gumroad/pRhFIjiSlmvJlAXF/products?id=" + id;
const { data: products } = await useFetch(uri);
</script>
<template>
   <main>
      {{ id }}
      detail page
      {{ products }}
   </main>
</template>
