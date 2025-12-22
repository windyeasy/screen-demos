<script lang="ts" setup>

</script>

<template>
  <div class="container w-1200px mx-auto">
    <header class="project-title h-80px lh-80px text-center font-bold text-4xl">
      Screen Demos
    </header>
    <main class="mt-20px flex flex-wrap justify-center">
      <template v-for="item in 5" :key="item">
        <div class="demo-item w-400px box-border cursor-pointer">
          <div class="item-cover w-full h-340px">
            <img class="item-cover-img w-100% h-100%" src="" alt="">
          </div>
          <div class="item-title text-center font-bold lh-18 text-xl">
            demo{{ item }}
          </div>
        </div>
      </template>
    </main>
  </div>
</template>
