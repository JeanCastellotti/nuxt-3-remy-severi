<script setup>
const show = ref(false)

const emit = defineEmits(['close'])

onMounted(() => {
  setTimeout(() => {
    show.value = true
  }, 125)
  window.addEventListener('orientationchange', () => {
    emit('close')
  })
})

function close() {
  show.value = false
  setTimeout(() => {
    emit('close')
  }, 150)
}
</script>

<template>
  <div
    @click.self="close"
    class="grid grid-cols-3 fixed inset-0 z-50 bg-gray-800/50 backdrop-blur-sm overflow-x-hidden overflow-y-scroll"
  >
    <Transition
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-to-class="translate-x-full"
    >
      <nav
        v-if="show"
        class="bg-white col-span-2 col-start-2 transition flex flex-col justify-between items-end p-5 sm:p-10 md:p-20"
      >
        <Icon
          name="fa6-solid:xmark"
          class="mb-10 text-4xl text-red-500"
          @click="close"
        />
        <div
          @click.capture="close"
          class="flex flex-col items-end text-lg md:text-2xl gap-1 md:gap-5 bg-white rounded"
        >
          <MobileLink
            to="/mon-univers"
            text="Mon univers"
            icon="fa6-solid:camera-retro"
          />
          <div class="h-px bg-gray-100 w-full my-5"></div>
          <MobileLink to="/mariage" text="Mariage" icon="fa6-solid:ring" />
          <MobileLink
            to="/portrait"
            text="Portrait"
            icon="fa6-solid:image-portrait"
          />
          <MobileLink to="/maternite" text="Maternité" icon="fa6-solid:baby" />
          <MobileLink
            to="/famille"
            text="Famille"
            icon="fa6-solid:people-roof"
          />
          <MobileLink to="/animaux" text="Animaux" icon="fa6-solid:paw" />
          <MobileLink
            to="/corporate"
            text="Corporate"
            icon="fa6-solid:briefcase"
          />
          <div class="h-px bg-gray-100 w-full my-5"></div>
          <MobileLink to="/galerie" text="Galerie" icon="fa6-solid:images" />
          <div class="h-px bg-gray-100 w-full my-5"></div>
          <MobileLink to="/tarifs" text="Tarifs" icon="fa6-solid:tags" />
          <MobileLink
            to="/contact"
            text="Contact"
            icon="fa6-solid:phone-flip"
          />
          <div class="h-px bg-gray-100 w-full my-5"></div>
        </div>
        <div class="flex justify-center gap-5">
          <Icon
            name="fa6-brands:square-facebook"
            class="text-[#1877f2] text-4xl"
          />
          <Icon
            name="fa6-brands:square-instagram"
            class="text-[#c32aa3] text-4xl"
          />
        </div>
      </nav>
    </Transition>
  </div>
</template>
