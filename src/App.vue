<template>
  <div class="pb-8 px flex flex-col gap-16 bg-secondary-dark">
    <HeroSection />
    <ProjectsSection />
    <ValuesSection />
    <FooterSection />
  </div>
</template>

<script>

import HeroSection from './components/sections/HeroSection.vue';
import ProjectsSection from './components/sections/ProjectsSection.vue';
import ValuesSection from './components/sections/ValuesSection.vue';
import FooterSection from './components/sections/FooterSection.vue';

export default{
  components:{
    HeroSection,
    ProjectsSection,
    ValuesSection,
    FooterSection
  }
}

</script>