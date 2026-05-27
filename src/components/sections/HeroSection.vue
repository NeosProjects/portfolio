<template>
  <div class="flex flex-col items-center">
    <!-- Icons -->
    <div class="flex justify-end items-center gap-4 py-4 text-muted w-full">
      <a href="mailto:neo.bougio@proton.me" class=" cursor-pointer flex items-center hover:opacity-80 transition">
        <Icon size="32"><Mail /></Icon>
      </a>
      <a href="https://github.com/NeosProjects" target="_blank" rel="noopener noreferrer" class=" cursor-pointer flex items-center hover:opacity-80 transition">
        <Icon size="32"><BrandGithub /></Icon>
      </a>
      <a href="https://www.linkedin.com/in/n%C3%A9o-bougio-ba6672306/" target="_blank" rel="noopener noreferrer" class=" cursor-pointer flex items-center hover:opacity-80 transition">
        <Icon size="32"><BrandLinkedin /></Icon>
      </a>
    </div>

    <!-- Message -->
    <div class="flex items-center justify-center flex-col gap-8 py-32 max-w-2xl">
      <!-- Me -->
      <div class="flex items-center gap-4">
        <img src="/me.jpg" class="w-12 h-12 rounded-full"/>
        <span class="italic font-bold text">Bougio Néo</span>
      </div>

      <!-- Message -->
      <h1 class="text-5xl md:text-7xl font-bold text text-left">
        Développeur fullstack <span class="loading-text">passioné</span>
      </h1>
      <p class="text-lg md:text-2xl text-muted">
        Je m'appelle Néo, développeur fullstack. J'accompagne entreprises et particuliers dans la création de solutions web modernes, performantes et accessibles!
      </p>
    </div>
  </div>
</template>

<script>

import { BrandGithub, BrandLinkedin, Mail } from '@vicons/tabler';

export default{
  components:{
    BrandGithub,
    BrandLinkedin,
    Mail
  }
}

</script>