<template>
  <div class="w-12 h-12 rounded-xl p-3 border-secondary-light border bg-secondary-dark relative cursor-pointer"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
    @click="openLink"
  >
    <img :src="tech.icon" :alt="tech.name" class="h-full w-full"/>
    <div v-if="hovered" class="absolute left-3/4 top-3/4 bg-secondary-dark border border-secondary-light w-75 shadow-md p-4 rounded-3xl z-10">
      <div class="font-bold whitespace-nowrap">{{ tech.name }}</div>
      <p v-html="tech.description"></p>
      <div class="mt-4">Cliquez pour en savoir plus</div>
    </div>
  </div>
</template>

<script>
import techsData from '@/data/techs.json'

export default {
  props: {
    techId: String
  },
  data(){
    return {
      tech: {},
      hovered: false,
    }
  },
  mounted(){
    this.tech = techsData.filter((t) => t.id == this.techId)[0];
  },
  methods: {
    openLink() {
      if (this.tech.link) {
        window.open(this.tech.link, '_blank')
      }
    }
  }
}
</script>