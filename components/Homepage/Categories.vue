<script setup></script>
<template>
   <div class="container bg-white rounded-3xl shadow-xl shadow-slate-300/50">
      <div class="grid grid-cols-1 lg:grid-cols-10 px-0 lg:px-28 py-10 gap-8 items-center">
         <div class="col-span-10 md:col-span-4">
            <h1 class="section-title text-center md:text-left">Explore these <br /><span class="text-gradient">Categories</span></h1>
            <p class="text-center md:text-left max-w-sm mx-auto lg:mx-0 text-gray-500 text-lg md:text-xl mt-6 tracking-wide">Explore product by Categories.</p>
         </div>
         <div class="col-span-10 lg:col-span-6 grid grid-cols-3 lg:grid-cols-6 gap-4">
            <div class="col-span-1 lg:col-span-2">
               <div class="bg-violet-200/80 flex flex-col gap-6 justify-center py-5 md:py-7 px-4 md:px-12 rounded-xl group">
                  <img class="grayscale group-hover:grayscale-0 group-hover:scale-110 ease-out transition-all" src="~/assets/image/icon-appdesign.svg" alt="Category Mobile Design" />
                  <p class="text-base md:text-xl font-semibold text-center text-gray-600 group-hover:text-violet-500">Mobile Design</p>
               </div>
            </div>
            <div class="col-span-1 lg:col-span-2">
               <div class="bg-red-200/80 flex flex-col gap-6 justify-center py-5 md:py-7 px-4 md:px-12 rounded-xl group">
                  <img class="grayscale group-hover:grayscale-0 group-hover:scale-110 ease-out transition-all" src="~/assets/image/icon-webdesign.svg" alt="Category Website Design" />
                  <p class="text-base md:text-xl font-semibold text-center text-gray-600 group-hover:text-red-500">Website Design</p>
               </div>
            </div>
            <div class="col-span-1 lg:col-span-2">
               <div class="bg-sky-200/80 flex flex-col gap-6 justify-center py-5 md:py-7 px-4 md:px-12 rounded-xl group">
                  <img class="grayscale group-hover:grayscale-0 group-hover:scale-110 ease-out transition-all" src="~/assets/image/icon-webtempate.svg" alt="Category Wesbite Template" />
                  <p class="text-base md:text-xl font-semibold text-center text-gray-600 group-hover:text-sky-500">Website Template</p>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
