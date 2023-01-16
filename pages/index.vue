<script setup lang="ts">
useHead({
  title: 'Accueil - Severi Rémy | Photography',
  meta: [
    {
      name: 'description',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aliquam porro officia rerum illo labore earum repudiandae, qui nemo tenetur eius dolor voluptate nobis sunt! Distinctio dolore ex repellendus odio.',
    },
  ],
})
</script>

<template>
  <div
    class="grid grid-cols-4 grid-rows-[repeat(7,_8rem)] sm:grid-rows-[repeat(5,_8rem)] lg:grid-rows-5 gap-5 h-full"
  >
    <div class="row-span-2 col-span-2 relative">
      <img
        src="/photos/photo-0001-640.jpg"
        alt="Un chien dans un jardin"
        class="absolute rounded object-cover w-full h-full"
      />
    </div>
    <div class="rounded col-span-2 sm:col-auto relative">
      <img
        src="/photos/photo-0028-300.jpg"
        alt="Un couple heureux"
        class="absolute rounded object-cover w-full h-full"
      />
    </div>
    <div class="rounded row-span-2 col-span-2 sm:col-auto relative">
      <img
        src="/photos/photo-0014-300.jpg"
        alt="Une femme mariée"
        class="absolute rounded object-cover w-full h-full"
      />
    </div>
    <div class="rounded col-span-2 sm:col-auto relative">
      <img
        src="/photos/photo-0034-300.jpg"
        alt="Une fille regardant la caméra"
        class="absolute rounded object-cover w-full h-full"
      />
    </div>
    <div class="rounded sm:row-span-2 col-span-2 sm:col-auto relative">
      <img
        src="/photos/photo-0024-300.jpg"
        alt="Un garçon dans un jardin"
        class="absolute rounded object-cover w-full h-full"
      />
    </div>
    <div class="rounded col-span-2 sm:col-auto relative">
      <img
        src="/photos/photo-0029-300.jpg"
        alt="Une fillette heureuse"
        class="absolute rounded object-cover w-full h-full"
      />
    </div>
    <div class="rounded sm:row-span-2 col-span-4 sm:col-span-2 relative">
      <img
        src="/photos/photo-0031-640.jpg"
        alt="Un garçon souriant"
        class="absolute rounded object-cover w-full h-full"
      />
    </div>
    <div class="rounded sm:row-span-2 col-span-2 sm:col-auto relative">
      <img
        src="/photos/photo-0006-300.jpg"
        alt="Un homme marié heureux"
        class="absolute rounded object-cover w-full h-full"
      />
    </div>
    <div class="rounded col-span-2 sm:col-auto relative">
      <img
        src="/photos/photo-0021-300.jpg"
        alt="Une femme souriante"
        class="absolute rounded object-cover w-full h-full"
      />
    </div>
    <div class="rounded col-span-2 sm:col-auto relative">
      <img
        src="/photos/photo-0018-300.jpg"
        alt="Une femme mariée de dos"
        class="absolute rounded object-cover w-full h-full"
      />
    </div>
    <div class="rounded col-span-2 sm:col-auto relative">
      <img
        src="/photos/photo-0067-300.jpg"
        alt="Un couple de mariés"
        class="absolute rounded object-cover w-full h-full"
      />
    </div>
  </div>
</template>
