<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate'
import { object, string } from 'yup'

useHead({
  title: 'Contact - Severi Rémy | Photography',
  meta: [
    {
      name: 'description',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aliquam porro officia rerum illo labore earum repudiandae, qui nemo tenetur eius dolor voluptate nobis sunt! Distinctio dolore ex repellendus odio.',
    },
  ],
})

const schema = object({
  firstname: string().required('Ce champ est obligatoire'),
  lastname: string().required('Ce champ est obligatoire'),
  email: string()
    .required('Ce champ est obligatoire')
    .email("L'adresse email est incorrecte"),
  message: string().required('Ce champ est obligatoire'),
})

function onSubmit(values, { resetForm }) {
  resetForm()
}
</script>

<template>
  <div class="space-y-10 lg:space-y-20">
    <h3 class="text-center text-4xl font-semibold">Contactez moi</h3>

    <div class="grid md:grid-cols-2 gap-10 md:gap-20">
      <div class="bg-white rounded overflow-hidden">
        <h4
          class="text-xl md:text-2xl border-b flex items-center gap-5 p-4 bg-gray-50"
        >
          <span>
            <Icon name="fa6-solid:phone" />
          </span>
          <span>Par téléphone</span>
        </h4>
        <span class="block text-lg md:text-xl p-4">06 11 22 33 44</span>
      </div>

      <div class="bg-white rounded overflow-hidden">
        <h4
          class="text-xl md:text-2xl border-b flex items-center gap-5 p-4 bg-gray-50"
        >
          <span>
            <Icon name="fa6-solid:envelope" />
          </span>
          <span>Par email</span>
        </h4>
        <NuxtLink
          href="mailto:severi.remy@outlook.fr"
          class="block text-lg md:text-xl p-4"
        >
          severi.remy@outlook.fr
        </NuxtLink>
      </div>
    </div>

    <div>
      <h4
        class="text-xl md:text-2xl pb-5 mb-5 border-b flex items-center gap-5"
      >
        <span>
          <Icon name="fa6-solid:align-justify" />
        </span>
        <span>Ou via le formulaire ci-dessous</span>
      </h4>

      <Form
        @submit="onSubmit"
        :validation-schema="schema"
        v-slot="{ isSubmitting }"
        class="grid md:grid-cols-2 gap-5 md:gap-10"
      >
        <div>
          <label for="firstname" class="block mb-2 text-lg md:text-xl">
            Prénom
          </label>
          <Field
            name="firstname"
            class="bg-white rounded p-6 focus:outline-none w-full text-lg text-gray-600"
          />
          <ErrorMessage
            name="firstname"
            as="small"
            v-slot="{ message }"
            class="text-red-500 mt-3 flex items-center gap-3 text-base"
          >
            <Icon name="fa6-solid:circle-exclamation" />
            <span>{{ message }}</span>
          </ErrorMessage>
        </div>

        <div>
          <label for="lastname" class="block mb-2 text-lg md:text-xl">
            Nom
          </label>
          <Field
            name="lastname"
            class="bg-white rounded p-6 focus:outline-none w-full text-lg text-gray-600"
          />
          <ErrorMessage
            name="lastname"
            as="small"
            v-slot="{ message }"
            class="text-red-500 mt-3 flex items-center gap-3 text-base"
          >
            <Icon name="fa6-solid:circle-exclamation" />
            <span>{{ message }}</span>
          </ErrorMessage>
        </div>

        <div class="col-span-2">
          <label for="email" class="block mb-2 text-lg md:text-xl">Email</label>
          <Field
            name="email"
            type="email"
            class="bg-white rounded p-6 focus:outline-none w-full text-lg text-gray-600"
          />
          <ErrorMessage
            name="email"
            as="small"
            v-slot="{ message }"
            class="text-red-500 mt-3 flex items-center gap-3 text-base"
          >
            <Icon name="fa6-solid:circle-exclamation" />
            <span>{{ message }}</span>
          </ErrorMessage>
        </div>

        <div class="col-span-2">
          <label for="message" class="block mb-2 text-lg md:text-xl">
            Message
          </label>
          <Field
            name="message"
            class="bg-white rounded p-6 focus:outline-none w-full h-80 resize-none text-lg text-gray-600"
            as="textarea"
          />
          <ErrorMessage
            name="message"
            as="small"
            v-slot="{ message }"
            class="text-red-500 mt-3 flex items-center gap-3 text-base"
          >
            <Icon name="fa6-solid:circle-exclamation" />
            <span>{{ message }}</span>
          </ErrorMessage>
        </div>
        <button
          class="bg-gray-500 col-span-2 rounded p-6 text-white text-lg md:text-xl flex items-center justify-center gap-5 transition hover:bg-gray-700"
          type="submit"
          :disabled="isSubmitting"
        >
          <span>
            <Icon name="fa6-solid:paper-plane" />
          </span>
          <span>Envoyer</span>
        </button>
      </Form>
    </div>
  </div>
</template>
