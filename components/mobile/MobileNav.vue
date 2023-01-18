<script setup>
const show = ref(false)

function open() {
  show.value = true
  document.body.classList.add('overflow-hidden')
}

function close() {
  show.value = false
  document.body.classList.remove('overflow-hidden')
}
</script>

<template>
  <header
    class="bg-white py-5 px-5 flex items-center justify-between lg:hidden"
  >
    <MobileLogo />
    <Icon name="fa6-solid:bars" class="text-4xl cursor-pointer" @click="open" />
    <MobileDrawer v-if="show" @close="close" />
  </header>
</template>
