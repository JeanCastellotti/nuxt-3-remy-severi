<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: String,
})

const srcset = computed(() => {
  return `
    ~/photos/${props.src}-640.jpg   640w,
    ~/photos/${props.src}-768.jpg   768w,
    ~/photos/${props.src}-1024.jpg 1024w,
    ~/photos/${props.src}-1280.jpg 1280w
  `
})
</script>

<template>
  <img
    :srcset="srcset"
    sizes="
        (max-width: 40em) 640px, 
        (max-width: 48em) 768px, 
        (max-width: 64em) 1024px, 
        1280px
      "
    :alt="alt"
    loading="lazy"
    class="rounded block h-full w-full object-cover"
  />
</template>
