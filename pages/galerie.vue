<script setup>
import data from '@/data/photos'

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

const showModal = ref(false)
const photos = reactive(data)
const photoModal = ref(null)
const selectedCategory = ref('')

function openModal(photo) {
  showModal.value = true
  photoModal.value = photo
  document.body.classList.add('overflow-hidden')
}

function closeModal() {
  showModal.value = false
  photoModal.value = null
  document.body.classList.remove('overflow-hidden')
}

const filteredPhotos = computed(() => {
  if (selectedCategory.value) {
    return photos.filter((photo) => {
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
          :src="`/photos/${photo.src}-300.jpg`"
          :alt="photo.alt"
          class="rounded object-cover w-full h-full"
          loading="lazy"
          @click="openModal(photo)"
        />
      </div>
      <div v-if="!filteredPhotos.length">
        Pas de photos pour cette catégorie
      </div>
    </div>

    <AppModal v-if="showModal" @close="closeModal">
      <AppImage
        :src="photoModal.src"
        :alt="photoModal.alt"
        class="rounded block h-full w-full object-cover"
      />
    </AppModal>
  </div>
</template>
