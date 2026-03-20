<template>
  <div>
    <!-- Title -->
    <h3 class="text">Mes projets</h3>
    <div class="flex flex-col gap-8">
      <ProjectCard v-for="(project, idx) in projects" :key="project.id" :project="project" :even="idx % 2 != 0" />
    </div>
  </div>
</template>

<script>

import projectsData from "@/data/projects.json"
import ProjectCard from "../cards/ProjectCard.vue";

export default{
  components: {
    ProjectCard
  },
  data(){
    return {
      projects: projectsData
    }
  },
}

</script>