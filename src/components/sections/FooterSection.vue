<template>
  <div class="py-32">
    <h2 class="text-5xl md:text-6xl font-bold text-left mb-0! text">Une idée ?</h2>
    <h2 class="text-5xl md:text-6xl font-bold text-left text">Une proposition ?</h2>

    <div class="mt-8">
      <!-- Icons -->
      <div class="flex justify-between items-center gap-4 text">
        <div class="flex items-center gap-4">
          <a href="mailto:neo.bougio@proton.me" class="rounded-full bg-secondary p-4 cursor-pointer flex items-center hover:opacity-80 transition">
            <Icon size="32"><Mail /></Icon>
          </a>
          <a href="https://github.com/NeosProjects" target="_blank" rel="noopener noreferrer" class="rounded-full bg-secondary p-4 cursor-pointer flex items-center hover:opacity-80 transition">
            <Icon size="32"><BrandGithub /></Icon>
          </a>
          <a href="https://www.linkedin.com/in/n%C3%A9o-bougio-ba6672306/" target="_blank" rel="noopener noreferrer" class="rounded-full bg-secondary p-4 cursor-pointer flex items-center hover:opacity-80 transition">
            <Icon size="32"><BrandLinkedin /></Icon>
          </a>
        </div>

        <div class="pl-100">
          Prêt pour l'aventure? Envoyez-moi un message!
        </div>
      </div>
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