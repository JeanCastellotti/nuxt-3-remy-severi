<script setup>
defineEmits(['close'])
</script>

<template>
  <Teleport to="body">
    <div
      class="flex fixed z-50 inset-0 bg-gray-800/80 backdrop-blur-sm p-10"
      @click.self="$emit('close')"
    >
      <Transition appear>
        <div
          class="bg-white rounded p-1 m-auto relative h-full max-w-screen-xl"
        >
          <div
            @click="$emit('close')"
            class="absolute -top-5 -right-5 bg-red-500 text-white rounded-full h-10 w-10 flex items-center justify-center p-2 transition hover:scale-110 cursor-pointer"
          >
            <Icon name="fa6-solid:xmark" class="text-lg" />
          </div>
          <slot />
        </div>
      </Transition>
    </div>
  </Teleport>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
