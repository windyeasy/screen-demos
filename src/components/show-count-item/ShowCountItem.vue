<script setup lang="ts">
import { BorderBox1, Decoration2 } from '@kjgl77/datav-vue3'

defineProps<{
  title1: string
  number1: number | string
  title2: string
  number2: number | string
}>()
</script>

<template>
  <div class="show-count-item">
    <BorderBox1>
      <div class="content-item p-5 box-border flex h-100px">
        <CountContentItem :title="title1" :number="number1" />
        <div class="center text-white">
          <!-- center -->
          <Decoration2 :reverse="true" style="width:5px;height:60px;" />
        </div>
        <CountContentItem :title="title2" :number="number2" />
      </div>
    </BorderBox1>
  </div>
</template>
