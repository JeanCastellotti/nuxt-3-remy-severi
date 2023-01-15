<template>
  <div class="min-h-screen bg-gray-100 flex flex-col text-gray-800 font-ruluko">
    <div
      class="flex-1 max-w-screen-2xl w-full mx-auto flex gap-5 lg:gap-10 xl:gap-20 p-5"
    >
      <TheSidebar />
      <main class="flex-1">
        <slot></slot>
      </main>
    </div>
  </div>
</template>
