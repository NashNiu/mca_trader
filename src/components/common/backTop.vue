<template>
  <n-back-top
    :right="50"
    class=" animate-jump"
  >
    <div class="flex size-full items-center justify-center rounded bg-green-400 font-extrabold text-white">
      <img
        class="w-4"
        :src="upImg"
        alt=""
      >
    </div>
  </n-back-top>
</template>
<script setup>
import upImg from '@/assets/img/common/up.png';
</script>
