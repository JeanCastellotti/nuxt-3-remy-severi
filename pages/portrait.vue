<script setup>
useHead({
  title: 'Portrait - Severi Rémy | Photography',
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
  <div class="space-y-10 lg:space-y-20">
    <h3 class="text-center text-4xl font-semibold">Portrait</h3>
    <div class="flex flex-col md:flex-row items-center gap-5 lg:gap-10">
      <AppPhoto
        image="/photos/photo-0005-640.jpg"
        direction="left"
        class="flex-1"
      />
      <p class="flex-1 text-lg xl:text-xl tracking-wider !leading-loose">
        Après avoir un petit peu discuté de votre mariage par e-mail ou
        téléphone, vient le temps de se rencontrer pour la première fois. Lors
        de ce premier rendez-vous, l’idée est de vous connaitre le mieux
        possible afin de cerner vos attentes pour ce grand jour qui est le
        vôtre. Pour cela, il est très important que je vous rencontre tous les
        deux. Ainsi, vous me confierez vos envies et vos attentes pour cette
        belle journée. Pour ma part, je vous présenterai ma manière de
        travailler et je répondrai à toutes vos questions.
      </p>
    </div>
    <div class="flex flex-col md:flex-row items-center gap-10">
      <p class="flex-1 text-lg xl:text-xl tracking-wider !leading-loose">
        Mais avant tout, le plus important lors de ce premier rendez-vous et de
        voir si le feeling passe bien entre nous ! Nous devons nous sentir à
        l’aise car… je serai à votre mariage ! Et non seulement je serai à votre
        mariage, mais en plus je serai l’une des personnes les plus proches de
        vous ce jour là ! D’ou l’importance de bien choisir son photographe !
      </p>
      <AppPhoto
        image="/photos/photo-0005-640.jpg"
        direction="right"
        alt="Photographe se prenant en photo"
        class="flex-1 order-first md:-order-none"
      />
    </div>
  </div>
</template>
