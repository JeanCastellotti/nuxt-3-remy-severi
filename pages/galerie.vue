<script setup lang="ts">
import data from '@/data/photos.json'

interface Photo {
  id: number
  src: string
  alt?: string
  categories: string[]
  show: boolean
}

useHead({
  title: 'Galerie - Severi Rémy | Photography',
  meta: [
    {
      name: 'description',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aliquam porro officia rerum illo labore earum repudiandae, qui nemo tenetur eius dolor voluptate nobis sunt! Distinctio dolore ex repellendus odio.',
    },
  ],
})

const photos = reactive(data)

const selectedCategory = ref('')

function openModal(photo: Photo) {
  photo.show = true
  document.body.classList.add('overflow-hidden')
}

function closeModal(photo: Photo) {
  photo.show = false
  document.body.classList.remove('overflow-hidden')
}

const filteredPhotos = computed(() => {
  if (selectedCategory.value) {
    return photos.filter((photo: Photo) => {
      return photo.categories.includes(selectedCategory.value)
    })
  }
  return photos
})
</script>

<template>
  <div class="space-y-5 mg:space-y-10 lg:space-y-20">
    <h3 class="text-center flex items-center justify-between">
      <span class="text-4xl font-semibold">Galerie</span>
      <select class="bg-white rounded text-lg p-4" v-model="selectedCategory">
        <option value="">Toutes les photos</option>
        <option value="wedding">Mariage</option>
        <option value="portrait">Portrait</option>
        <option value="maternity">Maternité</option>
        <option value="family">Famille</option>
        <option value="animals">Animaux</option>
        <option value="corporate">Corporate</option>
      </select>
    </h3>
    <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
      <div
        v-for="photo in filteredPhotos"
        :key="photo.id"
        class="relative h-40 transition hover:scale-105 cursor-pointer"
      >
        <img
          :src="`photos/${photo.src}-300.jpg`"
          :alt="photo.alt"
          class="rounded object-cover w-full h-full"
          loading="lazy"
          @click="openModal(photo)"
        />
        <AppModal v-if="photo.show" @close="closeModal(photo)">
          <AppImage
            :src="photo.src"
            :alt="photo.alt"
            class="rounded block h-full w-full object-cover"
          />
        </AppModal>
      </div>
      <div v-if="!filteredPhotos.length">
        Pas de photos pour cette catégorie
      </div>
    </div>
  </div>
</template>
