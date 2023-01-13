<script setup>
const { id } = useRoute().params;

const uri = "https://v1.nocodeapi.com/azura/gumroad/pRhFIjiSlmvJlAXF/products?id=" + id;
const { data: product } = await useFetch(uri);
</script>
<template>
   <main class="pt-32 pb-16">
      <Head>
         <Title>{{ product.product.name }}</Title>
         <Meta name="description" :content="product.product.name" />
      </Head>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 items-start">
         <div class="col-span-2">
            <DetailpageThumbnail :product="product.product" />
            <DetailpageDescription :product="product.product" />
         </div>
         <DetailpageDetail :product="product.product" />
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
