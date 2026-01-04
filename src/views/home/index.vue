<script lang="ts" setup>
import { loadImage } from '@/utils/load-default'
import { demosInfo } from './data'

const router = useRouter()

function toPath(path: string) {
  router.push(path)
}
</script>

<template>
  <div class="container w-1200px mx-auto">
    <header class="project-title h-80px lh-80px text-center font-bold text-4xl">
      Screen Demos
    </header>
    <main class="mt-20px flex flex-wrap justify-center">
      <template v-for="(item, index) in demosInfo" :key="index">
        <div class="demo-item mb4 p2  w-600px box-border cursor-pointer" @click="toPath(item.link)">
          <div class="demo-item-wrap shadow-lg rounded-lg overflow-hidden">
            <div class="item-cover w-full h-360px">
              <img class="item-cover-img w-100% h-100%" :src="loadImage(item.cover)" :alt="item.title">
            </div>
            <div class="item-title text-center font-bold lh-18 text-xl">
              {{ item.title }}
            </div>
          </div>
        </div>
      </template>
    </main>
  </div>
</template>
