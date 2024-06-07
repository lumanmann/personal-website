<script setup lang="ts">

</script>

<template>
  <footer class="px-8 py-10 md:px-0 md:py-20 w-full bg-cover bg-[url('~/assets/images/footer-sm.png')] md:bg-[url('~/assets/images/footer-lg.png')]">
   
    <div class="container flex flex-col justify-between items-center md:flex-row">
        <section id="footer-content">

        <div>
            <NuxtLink to="/" >
            <img src="@/assets/images/logo.svg" alt="logo">
            </NuxtLink>

            <div class="my-6 fs-5">
            <p>若有數位產品設計和開發相關問題</p>
            <p >歡迎填寫表單，或直接與我聯絡！</p>
        </div>
            <NuxtLink to="mailto:service@hexschool.com" class="text-text-light text-lg font-normal leading-[1.2]">
            service@hexschool.com
            </NuxtLink>
        </div>

        </section >
        
        <section id="footer-contact">
            <div class="flex flex-col gap-6 mt-10 lg:mt-0 lg:w-[306px]">
            <NuxtLink to="#" class="footer-btn fs-5 text-white bg-black font-bold">
                <img src="@/assets/images/form.svg" alt="form">
                填寫表單
            </NuxtLink>
            <NuxtLink to="#" class="footer-btn fs-5 text-gray">
                <img src="@/assets/images/ig.svg" alt="ig">
                hexschool_demo
            </NuxtLink>
            <NuxtLink to="#" class="footer-btn fs-5 text-gray">
                <img src="@/assets/images/fb.svg" alt="fb">
                hexschoolTW
            </NuxtLink>
            </div>
        </section>
    </div>


  </footer>
</template>

<style>
.footer-btn  {
    @apply cursor-pointer flex items-center py-2 px-6 rounded-lg border-[1px] border-border-color hover:shadow-lg;
}

</style>
