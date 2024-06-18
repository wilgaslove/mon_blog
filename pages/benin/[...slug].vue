<template>
  <div>
    <ContentDoc :path="`/benin/${slug}`" v-slot="{ doc }">
      <article v-if="doc" class="bg-white">
        <div class="text-center p-5">
          <h1 class="text-4xl font-semibold">{{ doc.title }}</h1>
          <img :src="doc.thumbnail" alt="" class="w-full h-full object-cover pt-[2%]">
        </div>

        <ContentRenderer :value="doc.body" class="content"/>

        <p class="text-gray-500 text-sm mt-2">
          {{ doc.date }}
        </p>
      </article>
      <!-- <p v-else>Aucun article trouvé</p> -->
    </ContentDoc>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useContent } from '@nuxt/content'

const route = useRoute()
const slug = route.params.slug

const { data: doc } = useContent(`/benin/${slug}`).fetch()
</script>

<style>
.content {
  padding: 2rem;
}
</style>
