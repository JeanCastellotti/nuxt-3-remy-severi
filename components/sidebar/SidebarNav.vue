<template>
  <nav>
    <div class="flex flex-col items-end text-lg gap-1 bg-white rounded p-10">
      <SidebarLink
        to="/mon-univers"
        text="Mon univers"
        icon="fa6-solid:camera-retro"
      />
      <div class="h-px bg-gray-100 w-full my-5"></div>
      <SidebarLink to="/mariage" text="Mariage" icon="fa6-solid:ring" />
      <SidebarLink
        to="/portrait"
        text="Portrait"
        icon="fa6-solid:image-portrait"
      />
      <SidebarLink to="/maternite" text="Maternité" icon="fa6-solid:baby" />
      <SidebarLink to="/famille" text="Famille" icon="fa6-solid:people-roof" />
      <SidebarLink to="/animaux" text="Animaux" icon="fa6-solid:paw" />
      <SidebarLink
        to="/corporate"
        text="Corporate"
        icon="fa6-solid:briefcase"
      />
      <div class="h-px bg-gray-100 w-full my-5"></div>
      <SidebarLink to="/galerie" text="Galerie" icon="fa6-solid:images" />
      <div class="h-px bg-gray-100 w-full my-5"></div>
      <SidebarLink to="/tarifs" text="Tarifs" icon="fa6-solid:tags" />
      <SidebarLink to="/contact" text="Contact" icon="fa6-solid:phone-flip" />
    </div>
    <div class="flex justify-center gap-5 mt-5">
      <Icon name="fa6-brands:square-facebook" class="text-[#1877f2] text-4xl" />
      <Icon
        name="fa6-brands:square-instagram"
        class="text-[#c32aa3] text-4xl"
      />
    </div>
  </nav>
</template>
