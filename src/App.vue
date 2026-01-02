<script setup lang="ts">

</script>

<template>
    <router-view />
     <!-- 精灵图 -->
    <svg id="sprites" width="40" height="20" display="none">
      <symbol id="spr-up" viewBox="0 0 40 20">
        <polygon x="0" y="0" points="0 20, 20 0, 40 20" fill="currentColor" />
      </symbol>
      <symbol id="spr-down" viewBox="0 0 40 20">
        <polygon x="0" y="0" points="0 0, 20 20, 40 0" fill="currentColor" />
      </symbol>
    </svg>
</template>
