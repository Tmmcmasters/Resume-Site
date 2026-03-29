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
  <div class="h-fit w-full">
    <p class="font-crimson">Testing custom font</p>

    <div class="flex items-center justify-center text-xl">
      <span class="hidden md:block">Move your mouse around</span>
      <span class="block md:hidden">Tap anywhere to see the cursor</span>
    </div>
  </div>
</template>

<script scoped></script>
