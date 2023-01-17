<script setup lang="ts">
useHead({
  title: 'Mon univers - Severi Rémy | Photography',
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
    <div class="flex flex-col md:flex-row items-center gap-5 lg:gap-10">
      <h3 class="text-center text-4xl font-semibold flex-1">Mon univers</h3>
      <AppPhoto
        image="/photos/photo-0005-640.jpg"
        direction="left"
        alt="Photographe se prenant en photo"
        class="flex-1"
      />
    </div>
    <div class="text-lg xl:text-xl tracking-wider !leading-loose space-y-5">
      <p>
        Alors apparemment là c’est le moment où je dois me présenter et comme
        c’est pas mon fort de parler de moi c’est ma femme qui le fait car oui
        j’ai la chance d’avoir une femme géniale ;) j’ai 32 ans, je vis dans le
        sud seine et marne et je suis père de deux petits garçons. En bon Corse
        que je suis, une autre passion que la photographie m’anime ! La
        charcuterie !
      </p>
      <p>
        Mais aussi le cinéma, les voyages, la pâtisserie et par-dessus tout la
        geekerie ! Comme la vie fait bien les choses ma femme a également deux
        garçons ce qui nous place à la tête d’une belle tribu ! Idéal pour les
        photos de groupes !
      </p>
    </div>
    <AppImageFull src="photo-0005.jpg" alt="Photographe se prenant en photo" />
    <p class="flex-1 text-lg xl:text-xl tracking-wider !leading-loose">
      Mon amour de la photo est né de mon expérience professionnelle à la FNAC
      grâce à mes collègues du rayon photos, les sorties découvertes mon permis
      de découvrir la pose longue ce qui m’a donné une autre vision de la nature
      que j’aime particulièrement la nature est devenue un vrai terrain de jeux
      propice au développement de mes compétences avec un vrai regard plus en
      relief sur ce qui nous entoure.
    </p>
    <AppImageFull src="photo-0005.jpg" alt="Photographe se prenant en photo" />
    <div class="flex flex-col md:flex-row items-center gap-10">
      <div
        class="flex-1 text-lg xl:text-xl tracking-wider !leading-loose space-y-5"
      >
        <p>
          Puis à la naissance de mes fils la photographie de portrait à pris
          aussi tout son sens me confirmant que c’était une réelle passion, me
          permettant de capter des moments de vie et de les faire vivre encore
          et encore.
        </p>
        <p>
          C’est donc tout naturellement que j’ai eu envie de partager ma passion
          et d’en faire mon métier.
        </p>
      </div>
      <AppPhoto
        image="/photos/photo-0005-640.jpg"
        direction="right"
        alt="Photographe se prenant en photo"
        class="flex-1 order-first md:-order-none"
      />
    </div>

    <div class="flex flex-col md:flex-row items-center gap-10">
      <AppPhoto
        image="/photos/photo-0005-640.jpg"
        direction="left"
        alt="Photographe se prenant en photo"
        class="flex-1 order-first md:-order-none"
      />
      <p class="flex-1 text-lg xl:text-xl tracking-wider !leading-loose">
        Ce que je préfère en tant que professionnel : les mariages ! Il s’agit
        probablement de l’exercice le plus compliqué en tant que photographe,
        mais qu’importe ! Exit le stress, le plaisir de permettre à ces jeunes
        mariés de conserver un des plus beaux jours de leurs vies.
      </p>
    </div>
  </div>
</template>
