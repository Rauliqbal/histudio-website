<script setup>
const categories = [
   {
      name: "App Design",
   },
   {
      name: "Website Design",
   },
   {
      name: "Website Template",
   },
];

const supports = [
   {
      name: "contact us",
   },
   {
      name: "faq",
   },
   {
      name: "Privacy",
   },
   {
      name: "terms & conditions",
   },
];

const contact = [
   {
      name: "",
   },
   {
      name: "+62 8967 3102 977",
   },
   {
      name: "Cikarang Barat, Kab. Bekasi, Jawa Barat, Indonesia",
   },
];

const date = new Date();
</script>

<template>
   <footer>
      <div class="bg-white rounded-t-3xl">
         <div class="container py-16">
            <div class="flex flex-col gap-20 md:gap-40 md:flex-row justify-between">
               <div>
                  <img src="~/assets/image/logo.svg" alt="" />
                  <h4 class="text-gray-500 w-[280px] mt-6">This website provides website templates and design resources for your project.</h4>
                  <div class="mt-8 flex gap-4">
                     <a href="#" class="text-3xl text-gray-500 hover:text-gray-700 transition duration-200 ease-out">
                        <i class="bx bxl-instagram"></i>
                     </a>
                  </div>
               </div>
               <div class="grid grid-cols-2 md:grid-cols-3 gap-10">
                  <div>
                     <h4 class="text-base md:text-xl font-semibold text-gray-800">Our Categories</h4>
                     <ul class="mt-4 md:mt-5">
                        <li class="my-2 text-sm md:text-base capitalize" v-for="category in categories" :key="category.id">
                           <a href="#" class="text-gray-400 hover:text-gray-700 transition duration-200 ease-out">{{ category.name }}</a>
                        </li>
                     </ul>
                  </div>
                  <div>
                     <h4 class="text-base md:text-xl font-semibold text-gray-800">Supports</h4>
                     <ul class="mt-4 md:mt-5">
                        <li class="my-2 text-sm md:text-base capitalize" v-for="support in supports" :key="support.id">
                           <a href="#" class="text-gray-400 hover:text-gray-700 transition duration-200 ease-out">{{ support.name }}</a>
                        </li>
                     </ul>
                  </div>
                  <div>
                     <h4 class="text-base md:text-xl font-semibold text-gray-800">Our Contact</h4>
                     <ul class="mt-4 md:mt-5">
                        <li class="my-2 text-sm md:text-base capitalize" v-for="contact in contact" :key="contact.id">
                           <p class="text-gray-400">{{ contact.name }}</p>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <h6 class="text-sm md:text-base text-white text-center bg-gradient-to-tr from-blue-400 to-violet-400 py-8 font-medium">&copy;Copyright 2022 - {{ date.getFullYear() }} • All rights reserved</h6>
   </footer>
</template>
