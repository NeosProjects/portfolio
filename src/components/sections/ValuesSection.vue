<template>
  <div>
    <h3 class="text">Mes valeurs</h3>
    <h4 class="ml-2 text">Au travail</h4>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="base-card rounded-3xl flex flex-col items-center" v-for="value in workValues" :key="value.name">
        <img :src="value.icon" class="w-16 h-16 mb-4" />
        <h5 class="text">{{ value.name }}</h5>
        <p class="text-sm text-muted" v-html="value.description"></p>
      </div>
    </div>

    <h4 class="ml-2 mt-4 text">Personnel</h4>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div
        class="base-card rounded-3xl flex flex-col items-center col-span-1"
        :class="value.cols ? `col-span-${value.cols}` : ''"
        v-for="value in personnalValues"
        :key="value.name"
      >
        <img :src="value.icon" class="w-16 h-16 mb-4" />
        <h5 class="text">{{ value.name }}</h5>
        <p class="text-sm text-muted" v-html="value.description"></p>
      </div>
    </div>
  </div>
</template>

<script>

import valuesData from '@/data/values.json';

export default {
  data(){
    return {
      workValues: [],
      personnalValues: []
    }
  },
  mounted(){
    this.workValues = valuesData.filter((v) => v.type == "work");
    this.personnalValues = valuesData.filter((v) => v.type == "personnal");
  }
}

</script>