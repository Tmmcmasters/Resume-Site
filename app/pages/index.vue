<script setup lang="ts">
useHead({
  title: "Tim McMasters",
  meta: [{ name: "description", content: "Tim McMasters - Software Engineer" }],
});

definePageMeta({
  layout: "portfolio",
});
</script>

<template>
  <div class="h-full w-full flex justify-center items-center relative">
    <div class="flex flex-col justify-center items-center py-21.25">
      <div
        class="w-full max-w-275.25 h-fit flex justify-center items-center gap-x-10.5"
      >
        <!-- Image of Me -->
        <NuxtImg src="/imgs/image-of-me.png" class="h-25" />
        <h1 class="font-crimson text-8xl text-center">Tim McMasters</h1>
      </div>
    </div>
  </div>
</template>

<script scoped></script>
