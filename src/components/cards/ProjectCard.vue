<template>
  <div class="rounded-xl flex flex-col md:flex-row gap-2 h-fit" :class="!even ? 'md:flex-row-reverse!' : ''">
    <img :src="project.cover" class="w-full md:w-64 lg:w-84 object-cover h-64 md:h-auto rounded-t-3xl md:rounded-t-none md:rounded-l-3xl" :class="!even ? 'md:rounded-r-3xl! md:rounded-l-none!' : ''" />
    <div class="base-card rounded-b-3xl md:rounded-b-none md:rounded-r-3xl!" :class="!even ? 'md:rounded-r-none! md:rounded-l-3xl!' : ''">
      <h4 v-html="project.name"></h4>
      <p v-html="project.description"></p>

      <div class="flex gap-2 w-full mt-4">
        <div class="w-full rounded-xl" v-for="stat in project.stats" :key="stat.name">
          <div class="text-2xl font-bold">{{ stat.number }}</div>
          <div class="text-muted">{{ stat.name }}</div>
        </div>
      </div>

      <div class="flex gap-2 w-full mt-4">
        <TechIcon v-for="tech in project.techs" :key="tech" :techId="tech" />
      </div>

      <div class="mt-4 text-right"><a class="hover:underline cursor-pointer">En savoir plus -></a></div>
    </div>
  </div>
</template>

<script>

import TechIcon from '../common/TechIcon.vue';

export default{
  components: {
    TechIcon
  },
  props: {
    project: Object,
    even: Boolean
  }
}

</script>