<script setup>
import { ref } from 'vue'

const collapse = ref(true)

function toggleBtn() {
  collapse.value = !collapse.value
}
</script>

<template>
  <header class="sticky top-0 z-20 bg-white py-3 lg:py-7 transition duration-500">
    <nav class="bg-white ">
      <div class="z-20 container px-4 mx-auto md:flex md:items-center ">
        <div class="flex justify-between items-center">
          <NuxtLink to="/" class="md:mr-8 ">
            <img src="@/assets/images/logo.svg" alt="logo">
          </NuxtLink>

          <button
            class="text-black md:hidden"
            @click="toggleBtn"
          >
            <svg class="transition duration-500" :class="{ hidden: !collapse }" width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.66667 20C1.19444 20 0.798611 19.8403 0.479167 19.5208C0.159722 19.2014 0 18.8056 0 18.3333C0 17.8611 0.159722 17.4653 0.479167 17.1458C0.798611 16.8264 1.19444 16.6667 1.66667 16.6667H28.3333C28.8056 16.6667 29.2014 16.8264 29.5208 17.1458C29.8403 17.4653 30 17.8611 30 18.3333C30 18.8056 29.8403 19.2014 29.5208 19.5208C29.2014 19.8403 28.8056 20 28.3333 20H1.66667ZM1.66667 11.6667C1.19444 11.6667 0.798611 11.5069 0.479167 11.1875C0.159722 10.8681 0 10.4722 0 10C0 9.52778 0.159722 9.13194 0.479167 8.8125C0.798611 8.49306 1.19444 8.33333 1.66667 8.33333H28.3333C28.8056 8.33333 29.2014 8.49306 29.5208 8.8125C29.8403 9.13194 30 9.52778 30 10C30 10.4722 29.8403 10.8681 29.5208 11.1875C29.2014 11.5069 28.8056 11.6667 28.3333 11.6667H1.66667ZM1.66667 3.33333C1.19444 3.33333 0.798611 3.17361 0.479167 2.85417C0.159722 2.53472 0 2.13889 0 1.66667C0 1.19444 0.159722 0.798611 0.479167 0.479167C0.798611 0.159722 1.19444 0 1.66667 0H28.3333C28.8056 0 29.2014 0.159722 29.5208 0.479167C29.8403 0.798611 30 1.19444 30 1.66667C30 2.13889 29.8403 2.53472 29.5208 2.85417C29.2014 3.17361 28.8056 3.33333 28.3333 3.33333H1.66667Z" fill="black" />
            </svg>
            <svg class="transition duration-500" :class="{ hidden: collapse }" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.9993 22.3337L11.8327 30.5003C11.5271 30.8059 11.1382 30.9587 10.666 30.9587C10.1938 30.9587 9.8049 30.8059 9.49935 30.5003C9.19379 30.1948 9.04102 29.8059 9.04102 29.3337C9.04102 28.8614 9.19379 28.4725 9.49935 28.167L17.666 20.0003L9.49935 11.8337C9.19379 11.5281 9.04102 11.1392 9.04102 10.667C9.04102 10.1948 9.19379 9.80588 9.49935 9.50033C9.8049 9.19477 10.1938 9.04199 10.666 9.04199C11.1382 9.04199 11.5271 9.19477 11.8327 9.50033L19.9993 17.667L28.166 9.50033C28.4716 9.19477 28.8605 9.04199 29.3327 9.04199C29.8049 9.04199 30.1938 9.19477 30.4993 9.50033C30.8049 9.80588 30.9577 10.1948 30.9577 10.667C30.9577 11.1392 30.8049 11.5281 30.4993 11.8337L22.3327 20.0003L30.4993 28.167C30.8049 28.4725 30.9577 28.8614 30.9577 29.3337C30.9577 29.8059 30.8049 30.1948 30.4993 30.5003C30.1938 30.8059 29.8049 30.9587 29.3327 30.9587C28.8605 30.9587 28.4716 30.8059 28.166 30.5003L19.9993 22.3337Z" fill="black" />
            </svg>
          </button>
        </div>

        <ul class="z-20 bg-white w-full md:w-auto flex flex-col  md:flex-row items-center fixed left-0 md:relative pt-3 md:pt-0 md:mx-auto transition duration-500" :class="{ 'opacity-0 md:opacity-100': collapse, 'opacity-100': !collapse }">
          <li class="navItem">
            <NuxtLink to="/">
              首頁
            </NuxtLink>
          </li>
          <li class="navItem">
            <NuxtLink to="/portfolio">
              作品集
            </NuxtLink>
          </li>
          <li class="navItem">
            <NuxtLink to="#">
              服務項目
            </NuxtLink>
          </li>
          <li class="navItem">
            <NuxtLink to="#">
              部落格
            </NuxtLink>
          </li>
          <li class="navItem">
            <NuxtLink to="#">
              聯絡我
            </NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
    
   
  </header>

   <!-- Overlay -->
   <div 
    class="fixed inset-0 bg-black bg-opacity-60 z-10 transition duration-500" 
    :class="{ 'opacity-0': collapse, 'opacity-100': !collapse }"
  ></div>

  
</template>

<style>
.navItem {
    @apply py-1 px-2  text-center mb-6 md:mb-0 mr-0 md:mr-10 text-black cursor-pointer bg-cover hover:bg-[url('~/assets/images/nav-focus.svg')] hover:font-bold transition duration-300 ;
}
</style>
