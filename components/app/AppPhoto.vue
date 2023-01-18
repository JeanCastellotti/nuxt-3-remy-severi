<script setup>
const props = defineProps({
  image: String,
  alt: String,
  direction: {
    type: String,
    default: 'left',
    validator(value) {
      return ['left', 'right'].includes(value)
    },
  },
})

const imageDirection = computed(() => {
  if (props.direction === 'left') return '-rotate-2 group-hover:-rotate-3'
  return 'rotate-2 group-hover:rotate-3'
})

const backgroundImageDirection = computed(() => {
  if (props.direction === 'left') return 'rotate-2 group-hover:rotate-3'
  return '-rotate-2 group-hover:-rotate-3'
})
</script>

<template>
  <div class="flex justify-center">
    <div class="relative group">
      <div
        class="absolute inset-0 bg-gray-200 rounded transition group-hover:scale-105"
        :class="backgroundImageDirection"
      ></div>
      <img
        :src="image"
        :alt="alt"
        loading="lazy"
        class="rounded border-4 border-white transition group-hover:scale-105 w-72 h-72 lg:h-80 2xl:h-96 lg:w-80 2xl:w-96 object-cover"
        :class="imageDirection"
      />
    </div>
  </div>
</template>
