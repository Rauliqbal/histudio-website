<template>
   <header class="inset-x-0 w-full z-20 fixed lg:absolute">
      <div class="container py-4 md:py-0 lg:py-6">
         <div class="grid grid-cols-3 items-center justify-between lg:justify-start">
            <div class="flex items-center justify-start lg:justify-center relative order-1 lg:order-2">
               <input type="checkbox" name="hamburger" id="hamburger" class="peer hidden" />
               <label for="hamburger" class="peer-checked:hamburger relative z-30 -mr-6 cursor-pointer lg:hidden bg-white p-4 rounded-full peer-checked:shadow-none shadow-md transition-all">
                  <div aria-hidden="true" class="m-auto h-0.5 w-6 rounded bg-gradient-to-r from-purple-400 to-blue-400 transition duration-300"></div>
                  <div aria-hidden="true" class="m-auto mt-2 h-0.5 w-6 rounded bg-gradient-to-r from-purple-400 to-blue-400 transition duration-300"></div>
               </label>

               <div
                  class="peer-checked:translate-x-0 fixed inset-0 w-[calc(100%-5.5rem)] translate-x-[-100%] border-r border-slate-300 lg:border-0 bg-white/90 backdrop-blur-sm lg:backdrop-blur-none lg:bg-transparent transition duration-300 lg:w-auto lg:static lg:translate-x-0 z-20"
               >
                  <div class="flex flex-col h-full lg:items-center lg:flex-row">
                     <div class="container pt-28 lg:pt-0 flex gap-8 flex-col lg:flex-row">
                        <router-link to="/" class="font-space-grotesk text-lg hover:text-blue-500 transition-all duration-200 ease-out">Category </router-link>
                        <router-link to="/" class="font-space-grotesk text-lg hover:text-blue-500 transition-all duration-200 ease-out">Faq </router-link>
                        <router-link to="/" class="font-space-grotesk text-lg hover:text-blue-500 transition-all duration-200 ease-out">Contact Us</router-link>
                     </div>
                  </div>
               </div>
            </div>

            <div class="mx-auto md:mx-0 relative z-30 order-2 lg:order-1">
               <router-link to="/">
                  <img class="w-8 md:hidden" src="~/assets/image/logo-sm.svg" alt="Logo Hi Studio" />
                  <img class="hidden md:block lg:hidden" src="~/assets/image/logo-md.png" alt="Logo Hi Studio" />
                  <img class="hidden lg:block" src="~/assets/image/logo.svg" alt="Logo Hi Studio" />
               </router-link>
            </div>

            <div class="w-auto order-3"></div>
         </div>
      </div>
   </header>
</template>
