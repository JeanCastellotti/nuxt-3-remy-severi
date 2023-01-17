<script setup lang="ts">
const props = defineProps<{
  src: string
  alt?: string
}>()

const srcset = computed(() => {
  const [filename, extension] = props.src.split('.')

  return `
    /photos/${filename}-300.${extension}   300w,
    /photos/${filename}-640.${extension}   640w,
    /photos/${filename}-768.${extension}   768w,
    /photos/${filename}-1024.${extension} 1024w,
    /photos/${filename}-1280.${extension} 1280w
  `
})
</script>

<template>
  <img
    :srcset="srcset"
    sizes="
        (max-width: 40em) 300px, 
        (max-width: 48em) 640px, 
        (max-width: 64em) 768px, 
        (max-width: 80em) 1024px, 
        1280px
      "
    :alt="alt"
    loading="lazy"
    class="max-w-4xl w-full mx-auto h-48 sm:h-72 md:h-96 object-cover border-4 border-white rounded"
  />
</template>
