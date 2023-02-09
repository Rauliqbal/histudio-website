<script setup></script>
<template>
   <div class="container bg-white rounded-3xl shadow-xl shadow-slate-300/50">
      <div class="grid grid-cols-1 lg:grid-cols-10 px-0 lg:px-28 py-10 gap-8 items-center">
         <div class="col-span-10 lg:col-span-4">
            <h1 class="section-title text-center lg:text-left">Explore these <br /><span class="text-gradient">Categories</span></h1>
            <p class="text-center lg:text-left lg:mx-0 text-gray-500 text-lg md:text-xl mt-6 tracking-wide">Explore product by Categories.</p>
         </div>
         <div class="col-span-10 lg:col-span-6 grid grid-cols-3 lg:grid-cols-6 gap-4">
            <div class="sm:col-span-1 col-span-6 lg:col-span-2">
               <div class="bg-violet-200/80 grid grid-cols-3 sm:flex sm:flex-col gap-4 items-center justify-center px-8 py-4 rounded-xl group">
                  <img class="grayscale group-hover:grayscale-0 scale-75 group-hover:scale-90 ease-out transition-all duration-300" src="~/assets/image/icon-appdesign.webp" alt="Category Mobile Design" />
                  <p class="col-span-2 sm:px-1 text-lg sm:text-xl font-semibold text-center text-gray-600 transition-all duration-300 group-hover:text-violet-500">Mobile Design</p>
               </div>
            </div>
            <div class="sm:col-span-1 col-span-6 lg:col-span-2">
               <div class="bg-red-200/80 grid grid-cols-3 sm:flex sm:flex-col gap-4 items-center justify-center px-8 py-4 rounded-xl group">
                  <img class="grayscale group-hover:grayscale-0 scale-75 group-hover:scale-90 ease-out transition-all duration-300" src="~/assets/image/icon-webdesign.webp" alt="Category Website Design" />
                  <p class="col-span-2 sm:px-1 text-lg sm:text-xl font-semibold text-center text-gray-600 transition-all duration-300 group-hover:text-red-500">Website Design</p>
               </div>
            </div>
            <div class="sm:col-span-1 col-span-6 lg:col-span-2">
               <div class="bg-sky-200/80 grid grid-cols-3 sm:flex sm:flex-col gap-4 items-center justify-center px-8 py-4 rounded-xl group">
                  <img class="grayscale group-hover:grayscale-0 scale-75 group-hover:scale-90 ease-out transition-all duration-300" src="~/assets/image/icon-webtempate.webp" alt="Category Wesbite Template" />
                  <p class="col-span-2 sm:px-1 text-lg sm:text-xl font-semibold text-center text-gray-600 transition-all duration-300 group-hover:text-sky-500">Website Template</p>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
