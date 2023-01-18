<script setup>
defineProps({
  text: String,
  to: String,
  icon: String,
})
</script>

<template>
  <NuxtLink :to="to" class="flex gap-5 md:gap-10 items-center">
    <span>{{ text }}</span>
    <Icon :name="icon" class="text-gray-700 w-8" />
  </NuxtLink>
</template>
