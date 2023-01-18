<script setup>
useHead({
  title: 'Mariage - Severi Rémy | Photography',
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
    <h3 class="text-center text-4xl font-semibold">Mariage</h3>
    <AppImageFull
      src="photo-0055.jpg"
      alt=""
      class="max-w-4xl w-full mx-auto h-48 sm:h-72 md:h-96 object-cover border-4 border-white rounded"
    />
    <div
      class="text-lg xl:text-xl tracking-wider !leading-loose text-center max-w-2xl mx-auto"
    >
      <h5 class="font-bold">Chers futurs mariés, bonjour !</h5>
      <p>Tout d’abord, toutes mes félicitations pour ces fiançailles !</p>
      <p>(Et bon courage pour les préparatifs !)</p>
      <p>
        Afin de vous éclairer un petit peu dans cette jungle que sont les
        préparatifs de mariage, voici un déroulé complet de comment j’envisage
        la prestation de mariage, de notre première rencontre, en passant par
        chaque étape du JourJ, jusqu’à l’après mariage !
      </p>
    </div>
    <h4 class="font-bold text-center text-3xl">
      Comment se déroule notre première rencontre ?
    </h4>
    <div class="flex flex-col md:flex-row items-center gap-5 lg:gap-10">
      <AppPhoto
        image="/photos/photo-0046-640.jpg"
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
        image="/photos/photo-0013-640.jpg"
        direction="right"
        class="flex-1 order-first md:-order-none"
      />
    </div>
    <div class="flex flex-col md:flex-row items-center gap-10">
      <AppPhoto
        image="/photos/photo-0013-640.jpg"
        direction="left"
        class="flex-1 order-first md:-order-none"
      />
      <div class="flex-1 text-lg xl:text-xl tracking-wider !leading-loose">
        <h4 class="font-bold mb-1">
          Comment se déroule une prestation de mariage ?
        </h4>
        <p>
          Le Jour-j, je m’attelle à ne rien manquer de ce bel événement, tout en
          me fondant parmi les invités. L’idée est de devenir la personne la
          plus discrète de l’assemblée afin d’avoir les photos les plus
          naturelles possible ! Les photos de votre mariage seront une alliance
          parfaite entre photos posées et photos prises sur le vif. Mon objectif
          est de capter les plus beaux instants de cette journée dans les
          moindre détails et retranscrire l’émotion qui s’en dégage au travers
          de clichés uniques et qui vous ressemblent.
        </p>
      </div>
    </div>
    <div
      class="text-lg xl:text-xl tracking-wider !leading-loose text-center max-w-2xl mx-auto"
    >
      <h5 class="font-bold">Et après le mariage ?</h5>
      <p>
        Quelques jours plus tard, vous recevrez les photos travaillés de votre
        grand jour numériquement ou via un support USB.
      </p>
      <p>
        Vous aurez la possibilité de me demander des modifications
        supplémentaires ou de dupliquer certaines photos avec des réglages
        différents (ex: monochrome, vignetage…)
      </p>
    </div>
    <AppImageFull
      src="photo-0015.jpg"
      alt=""
      class="max-w-4xl w-full mx-auto h-72 md:h-96 object-cover border-4 border-white rounded shadow-sm"
    />
    <div
      class="text-lg xl:text-xl tracking-wider !leading-loose text-center max-w-2xl mx-auto"
    >
      <h5 class="font-bold mb-2">Intéressé par une prestation de mariage ?</h5>
      <p>
        Pour les
        <span class="font-semibold">tarifs</span>
        , c’est par
        <NuxtLink to="/tarifs" class="border-b border-dashed border-gray-500">
          ici
        </NuxtLink>
        ! Et pour un
        <span class="font-semibold">devis personnalisé</span>
        , c’est par
        <NuxtLink to="/contact" class="border-b border-dashed border-gray-500">
          là
        </NuxtLink>
        !
      </p>
      <p>Et enfin, pour savoir à qui vous avez affaire, ça se passe ici !</p>
    </div>
  </div>
</template>
