<template>
   <Navbar />
   <div class="container">
      <NuxtPage />
      <footer>ini Footer</footer>
   </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
   transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
   opacity: 0;
}
</style>
