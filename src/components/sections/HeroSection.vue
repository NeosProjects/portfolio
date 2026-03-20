<template>
  <div class="flex flex-col items-center">
    <!-- Icons -->
    <div class="flex justify-end items-center gap-4 py-4 text-muted w-full">
      <IconMaterialSymbolsMailOutline width="32" height="32" />
      <IconMdiGithub width="28" height="28"/>
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"  width="28" height="28" viewBox="0 0 24 24"><path fill="#000000" d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z" /></svg>
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

import IconMaterialSymbolsMailOutline from '~icons/material-symbols/mail-outline'
import IconMdiGithub from '~icons/mdi/github'

export default{
  components:{
    IconMaterialSymbolsMailOutline,
    IconMdiGithub
  }
}

</script>