<script setup>
import ProjectCard from '~/components/ProjectCard.vue'

const portfolioData = [
  {
    id: 1,
    image: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/work-image1.png?raw=true',
    title: '星際旅行訂票平台',
    description: '悠遊宇宙的夢想，從這裡開始實現',
    tags: [
      { id: 101, name: '網頁設計' },
      { id: 102, name: '響應式設計' },
      { id: 103, name: 'Bootstrap' },
    ],
  },
  {
    id: 2,
    image: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/work-image2.png?raw=true',
    title: '理財App',
    description: '連動帳戶與行動支付，讓 AI 提供您最好的理財建議',
    tags: [
      { id: 201, name: 'APP設計' },
      { id: 301, name: 'iOS' },
      { id: 105, name: 'React' },
    ],
  },
  {
    id: 3,
    image: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/work-image3.png?raw=true',
    title: '醫美診所官網',
    description: '永保青春的秘密，從粹究開始',
    tags: [
      { id: 101, name: '網頁設計' },
      { id: 102, name: '響應式設計' },
      { id: 104, name: 'WordPress' },
    ],
  },
  {
    id: 4,
    image: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/work-image4.png?raw=true',
    title: '美美美早餐店 POS 機 UI Design',
    description: '訂單送單一目瞭然，自動報表分析好輕鬆',
    tags: [
      { id: 202, name: 'UI 設計' },
      { id: 105, name: '前端開發' },
      { id: 107, name: 'Wix' },
    ],
  },
  {
    id: 5,
    image: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/work-image5.png?raw=true',
    title: '星際旅行訂票平台',
    description: '三步驟完成訂票，電腦手機都支援',
    tags: [
    { id: 105, name: '前端開發' },
      { id: 301, name: '後端支援' },
      { id: 108, name: 'Vue' },
    ],
  },
  {
    id: 6,
    image: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/work-image6.png?raw=true',
    title: '巧克巧克形象官網設計',
    description: '三步驟完成訂票，電腦手機都支援',
    tags: [
      { id: 202, name: 'UI 設計' },
      { id: 205, name: '設計系統' },
      { id: 110, name: '網路電商' },
    ],
  },


]
</script>

<template>
  <section class="py-10 md::py-20">
    <div class="container">
      <div class="w-100 flex flex-col items-center">
        <blockquote class="relative text-quote text-center text-2xl leading-[1.2] py-[59px] px-[71px] fs-4 ">
              <img class="absolute top-0 translate-x-full transform md:left-0 md:-translate-x-1/4" src="@/assets/images/quote-left.svg" alt="quote-left">
              <h4 class="mt-3 mt-md-0 mb-3">讓使用者在觀賞與使用的旅程中，發現
                <span class="underline-quote">設計的價值</span></h4>
              <h4>
              而我在設計與開發的過程中，看見
              <span class="underline-quote">自己的價值</span></h4>
              <img class="hidden absolute right-0 bottom-0 md:block" src="@/assets/images/quote-right.svg" alt="quote-right">
            </blockquote>

        <ul class="flex flex-col text-center px-[70px] mt-10 md:flex-row md:px-0 md:mt-6">
          <li class="mb-5 md:mb-0 md:mr-10">
            <h3 class="subtitle fs-6">2B經驗</h3>
             <p >內部監控系統、庫存系統、採購系統、行銷整合系統</p>
          </li>
          <li>
            <h3 class="subtitle fs-6">2C經驗</h3>
            <p >跨國美妝保養電商、個人品牌網站、醫美網站、電子商務</p>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <section class="container my-[80px] md:my-[120px]">
    <ul class="flex justify-between flex-wrap w-full px-3 md:px-0">
      <ProjectCard v-for="item in portfolioData" :key="item.id" :item="item" />
    </ul>

    <div class="pagination mt-12 md:mt-[72px] fs-4">
    <button class="selected">1</button>
    <button>2</button>
    <button>3</button>
  </div>
  </section>


  
</template>


<style>
.underline-quote {
    @apply bg-white bg-no-repeat bg-bottom bg-contain bg-[url('~/assets/images/underline.svg')];
}

.subtitle {
  @apply relative text-gray mb-3;
}

.subtitle::before {
    @apply content-[''] block bg-border-color absolute left-1/2 -translate-x-1/2 -bottom-1 w-[24px] h-[2px];
}

.pagination {
  @apply flex justify-center items-center w-auto mx-auto gap-2.5;
}


.pagination button {
  @apply size-10 text-center text-quote rounded cursor-pointer;
}

.pagination .selected {
  @apply bg-quote text-white;
}


</style>
