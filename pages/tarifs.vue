<script setup>
useHead({
  title: 'Tarifs - Severi Rémy | Photography',
  meta: [
    {
      name: 'description',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aliquam porro officia rerum illo labore earum repudiandae, qui nemo tenetur eius dolor voluptate nobis sunt! Distinctio dolore ex repellendus odio.',
    },
  ],
})

const showFormula = ref(false)

function toggleFormula() {
  showFormula.value = !showFormula.value
}

const showOption = ref(false)

function toggleOption() {
  showOption.value = !showOption.value
}
</script>

<template>
  <div class="space-y-10 lg:space-y-20">
    <h3 class="text-center text-4xl font-semibold">Tarifs</h3>
    <div>
      <h4 class="text-2xl mb-5">Shooting photo</h4>
      <div
        class="bg-white rounded overflow-hidden flex flex-col md:flex-row lg:flex-col xl:flex-row"
      >
        <img
          src="https://picsum.photos/id/64/400/250"
          alt=""
          class="object-cover w-full h-72 md:h-auto lg:h-72 xl:h-auto"
        />
        <div class="p-5 md:p-10 flex flex-col gap-5 justify-between">
          <p class="leading-loose text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            cum eaque libero officiis velit recusandae voluptatum, dolor
            corrupti dolores molestias voluptates veniam mollitia eveniet nobis
            iure suscipit distinctio nulla repellendus.
          </p>
          <span class="self-center md:self-end text-lg font-semibold">
            A partir de 80 €
          </span>
        </div>
      </div>
    </div>

    <div>
      <h4 class="text-2xl mb-5">Événementiel / Professionnel</h4>
      <div
        class="bg-white rounded overflow-hidden flex flex-col md:flex-row lg:flex-col xl:flex-row"
      >
        <div class="p-5 md:p-10 flex flex-col gap-5 justify-between">
          <p class="leading-loose text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            cum eaque libero officiis velit recusandae voluptatum, dolor
            corrupti dolores molestias voluptates veniam mollitia eveniet nobis
            iure suscipit distinctio nulla repellendus.
          </p>
          <span class="self-center md:self-start text-lg font-semibold">
            Sur devis
          </span>
        </div>
        <img
          src="https://picsum.photos/id/65/400/250"
          alt=""
          class="object-cover order-first w-full h-72 md:h-auto lg:h-72 xl:h-auto md:order-none lg:order-first xl:order-none"
        />
      </div>
    </div>

    <div>
      <h4 class="text-2xl mb-5">Mariage</h4>
      <div class="bg-white rounded overflow-hidden flex flex-col">
        <img
          src="https://picsum.photos/id/66/1000"
          alt=""
          class="object-cover w-full h-72"
        />
        <div class="p-5 md:p-10 flex flex-col gap-10 justify-between">
          <p class="leading-loose text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            cum eaque libero officiis velit recusandae voluptatum, dolor
            corrupti dolores molestias voluptates veniam mollitia eveniet nobis
            iure suscipit distinctio nulla repellendus. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Pariatur cum eaque libero
            officiis velit recusandae voluptatum, dolor corrupti dolores
            molestias voluptates veniam mollitia eveniet nobis iure suscipit
            distinctio nulla repellendus.
          </p>
          <h4
            @click="toggleFormula"
            class="text-xl font-semibold pb-4 border-b cursor-pointer flex justify-between"
          >
            <span>Les formules</span>
            <Icon
              name="fa6-solid:angle-down"
              class="transition"
              :class="{ 'rotate-180': showFormula }"
            />
          </h4>
          <div class="grid md:grid-cols-2 gap-10" v-show="showFormula">
            <div class="bg-gray-50 rounded overflow-hidden">
              <div class="p-5 flex flex-col gap-2">
                <h5 class="text-lg font-semibold">Formule 1</h5>
                <p class="text-lg leading-loose">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                  molestias qui officia eveniet dolores? Esse, adipisci
                  architecto deleniti sapiente error id dicta atque iusto harum!
                </p>
              </div>
              <span
                class="block text-xl font-semibold p-4 bg-gray-100 text-center"
              >
                50 €
              </span>
            </div>

            <div class="bg-gray-50 rounded overflow-hidden">
              <div class="p-5 flex flex-col gap-2">
                <h5 class="text-lg font-semibold">Formule 2</h5>
                <p class="text-lg leading-loose">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                  molestias qui officia eveniet dolores? Esse, adipisci
                  architecto deleniti sapiente error id dicta atque iusto harum!
                </p>
              </div>
              <span
                class="block text-xl font-semibold p-4 bg-gray-100 text-center"
              >
                50 €
              </span>
            </div>

            <div class="bg-gray-50 rounded overflow-hidden">
              <div class="p-5 flex flex-col gap-2">
                <h5 class="text-lg font-semibold">Formule 3</h5>
                <p class="text-lg leading-loose">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                  molestias qui officia eveniet dolores? Esse, adipisci
                  architecto deleniti sapiente error id dicta atque iusto harum!
                </p>
              </div>
              <span
                class="block text-xl font-semibold p-4 bg-gray-100 text-center"
              >
                50 €
              </span>
            </div>

            <div class="bg-gray-50 rounded overflow-hidden">
              <div class="p-5 flex flex-col gap-2">
                <h5 class="text-lg font-semibold">Formule 4</h5>
                <p class="text-lg leading-loose">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                  molestias qui officia eveniet dolores? Esse, adipisci
                  architecto deleniti sapiente error id dicta atque iusto harum!
                </p>
              </div>
              <span
                class="block text-xl font-semibold p-4 bg-gray-100 text-center"
              >
                50 €
              </span>
            </div>
          </div>
          <h4
            @click="toggleOption"
            class="text-xl font-semibold pb-4 border-b cursor-pointer flex justify-between"
          >
            <span>Les options</span>
            <Icon
              name="fa6-solid:angle-down"
              class="transition"
              :class="{ 'rotate-180': showOption }"
            />
          </h4>
          <div class="grid md:grid-cols-2 gap-10" v-show="showOption">
            <div class="flex flex-col gap-5">
              <h6 class="text-lg">Option 1</h6>
              <img
                src="https://picsum.photos/id/68/1000"
                alt=""
                class="object-cover h-32 rounded w-full"
              />
              <p class="text-lg leading-loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat alias, vitae amet facere similique incidunt. Fugiat
                mollitia architecto et adipisci?
              </p>
              <span class="text-center text-lg font-semibold">50 €</span>
            </div>

            <div class="flex flex-col gap-5">
              <h6 class="text-lg">Option 2</h6>
              <img
                src="https://picsum.photos/id/67/1000"
                alt=""
                class="object-cover h-32 rounded w-full"
              />
              <p class="text-lg leading-loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat alias, vitae amet facere similique incidunt. Fugiat
                mollitia architecto et adipisci?
              </p>
              <span class="text-center text-lg font-semibold">50 €</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
