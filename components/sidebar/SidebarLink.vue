<script setup>
defineProps({
  text: String,
  to: String,
  icon: String,
})
</script>

<template>
  <NuxtLink :to="to" class="flex gap-5 md:gap-10 items-center group">
    <span
      class="font-ruluko group-hover:font-semibold group-hover:text-gray-700"
    >
      {{ text }}
    </span>
    <Icon :name="icon" class="text-gray-700 w-8 group-hover:text-xl" />
  </NuxtLink>
</template>
