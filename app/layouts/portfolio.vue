<!-- layouts/portfolio.vue -->
<script setup lang="ts"></script>

<template>
  <div class="min-h-screen flex flex-col bg-background text-foreground">
    <!-- Potential Future Header -->
    <!-- <header
      class="w-full px-6 py-4 flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800"
    >
      <span class="font-crimson text-xl font-semibold">Tim McMasters</span>
      <nav class="flex gap-6 text-sm">
        <a href="#about" class="hover:underline underline-offset-4">About</a>
        <a href="#projects" class="hover:underline underline-offset-4"
          >Projects</a
        >
        <a href="#contact" class="hover:underline underline-offset-4"
          >Contact</a
        >
      </nav>
    </header> -->

    <!-- Page content -->
    <main class="flex-1 w-full">
      <slot />
    </main>

    <!-- Footer -->
    <footer
      class="w-full px-6 py-4 text-center text-sm text-neutral-500 border-t border-neutral-200 dark:border-neutral-800"
    >
      © {{ new Date().getFullYear() }} Tim McMasters
    </footer>
  </div>
</template>

<style scoped></style>
