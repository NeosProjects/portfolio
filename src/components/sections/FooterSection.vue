<template>
  <div class="py-32">
    <h2 class="text-5xl md:text-6xl font-bold text-left mb-0! text">Une idée ?</h2>
    <h2 class="text-5xl md:text-6xl font-bold text-left text">Une proposition ?</h2>

    <div class="mt-8">
      <!-- Icons -->
      <div class="flex justify-between items-center gap-4 text">
        <div class="flex items-center gap-4">
          <button class="rounded-full bg-secondary p-4 cursor-pointer">
            <IconMaterialSymbolsMailOutline width="48" height="48" />
          </button>
          <button class="rounded-full bg-secondary p-4 cursor-pointer">
            <IconMdiGithub width="48" height="48"/>
          </button>
          <button class="rounded-full bg-secondary p-4 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"  width="48" height="48" viewBox="0 0 24 24"><path fill="#000000" d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z" /></svg>
          </button>
        </div>

        <div class="pl-100">
          Ready for a design adventure, or need product design advice? Ping me for fun collaboration
        </div>
      </div>
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