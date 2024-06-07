<script setup lang="ts">
defineProps<{
  item: {
    id: number
    image: string
    title: string
    description: string
    tags: []
  }
}>()
</script>

<template>
  <li class="w-full py-3 lg:py-0 lg:w-[calc(50%-2rem)] mb-12 lg:mb-20">
    <img class="w-full rounded-md" :src="item.image">

    <div class="pt-4 pl-1.5 md:px-4">
      <h2 class="mb-2 font-bold text-xl leading-[1.5] lg:text-[1.75rem] lg:leading-[1.2]">
        {{ item.title }}
      </h2>
      <p class="fs-6 text-text-light text-base mb-5 lg:mb-6">
        {{ item.description }}
      </p>

      <ul class="flex fs-6">
        <li v-for="tag in item.tags" :key="tag.id" class="mr-4 bg-tag-color rounded-full py-1 px-3">
          {{ tag.name }}
        </li>
      </ul>
    </div>
  </li>
</template>
