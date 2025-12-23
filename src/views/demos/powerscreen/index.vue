<script setup lang="ts">
import useScreenScale from '@/composables/useScreenScale'

// todo: 可以配置title， cover，直接通过store得到demo的信息不需要每次都在home/data.ts里面写入
useScreenScale()
</script>

<template>
  <div class="wrapper">
    <ul>
      <li>
        1
        <button>还原默认样式</button>
      </li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
    </ul>
  </div>
</template>

<style scoped>
.wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 4px solid green;
}
ul, li {
  list-style: none;
  padding: 0;
  margin: 0;
}
ul {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
ul li {
  width: 33.333%;
  height: 50%;
  font-size: 30px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
}
</style>
