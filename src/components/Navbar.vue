<template>
   <div class="inset-x-0 w-full z-20 fixed lg:absolute bg-white lg:bg-transparent">
      <div class="container py-4 md:py-0 lg:py-6">
         <div class="flex items-center justify-between lg:justify-start">
            <div class="flex items-center justify-end relative order-1 lg:order-2 pl-0 lg:pl-8 ">
               <input
                  type="checkbox"
                  name="hamburger"
                  id="hamburger"
                  class="peer hidden"
               />
               <label
                  for="hamburger"
                  class="peer-checked:hamburger block relative z-30 -mr-6 cursor-pointer lg:hidden"
               >
                  <div
                     aria-hidden="true"
                     class="m-auto h-0.5 w-6 rounded bg-gray-500 transition duration-300"
                  ></div>
                  <div
                     aria-hidden="true"
                     class="m-auto mt-2 h-0.5 w-6 rounded bg-gray-500 transition duration-300"
                  ></div>
               </label>

               <div
                  class="peer-checked:translate-x-0 fixed inset-0 w-full translate-x-[-100%] bg-white lg:bg-transparent transition duration-300 lg:w-auto lg:static  lg:translate-x-0 z-20"
               >
                  <div
                     className="flex flex-col h-full lg:items-center lg:flex-row ml-0 lg:ml-8"
                  >
                     <ul
                        className="container pt-32 text-gray-700 space-y-8 lg:space-y-0 lg:flex lg:space-x-12 lg:pt-0"
                     >
                        <li>
                           <router-link
                              to="/"
                              class="text-lg text-slate-500 hover:text-blue-500 transition-all duration-200 ease-out"
                              >Home
                           </router-link>
                        </li>
                        <li>
                           <router-link
                              to="/about"
                              class="text-lg text-slate-500 hover:text-blue-500 transition-all duration-200 ease-out"
                           >
                              about
                           </router-link>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>

            <div class="relative z-30 order-2 lg:order-1">
               <router-link
                  to="/"
               >
                  <img class="w-8 md:hidden" src="../assets/logo-sm.svg" alt="Logo Hi Studio">
                  <img class="hidden md:block lg:hidden" src="../assets/logo-md.png" alt="Logo Hi Studio">
                  <img class="hidden lg:block" src="../assets/logo.svg" alt="Logo Hi Studio">
               </router-link>
            </div>

            <div class="w-auto order-3"></div>
         </div>
      </div>
   </div>
</template>
