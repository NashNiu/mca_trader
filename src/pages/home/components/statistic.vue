<template>
  <div
    class="relative mt-8 h-[460px] w-full"
    :style="{backgroundImage: `url(${statisticPng})`}"
  >
    <div class=" absolute size-full bg-slate-800 opacity-70" />
    <div class="relative mx-auto flex h-full items-center justify-between xl:w-[1200px]">
      <div
        v-for="item in data"
        :key="item.id"
        class="group flex cursor-pointer items-center"
      >
        <div class="flex size-[170px] items-center justify-center rounded-full bg-green-400 transition-all duration-300 group-hover:shadow-triple">
          <img
            :src="item.img"
            alt=""
          >
        </div>
        <div
          class="flex size-[242px] -translate-x-6 flex-col items-center justify-center rounded-[14px]
        bg-slate-800 transition-all duration-300 group-hover:shadow-triple"
        >
          <span class="text-xl font-bold text-white">{{ item.data }}</span>
          <span class="mt-4 text-sm font-normal text-white">{{ item.desc }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import eyePng from '@/assets/img/index/eye.png';
import userPlus from '@/assets/img/index/userPlus.png';
import trendPng from '@/assets/img/index/trend.png';
import statisticPng from '@/assets/img/index/statisticBg.png';

const data = [
  {
    id: 1,
    img: eyePng,
    data: '18,000+ ',
    desc: 'Open Position',
  },
  {
    id: 2,
    img: userPlus,
    data: '22,000+',
    desc: 'Registered Customers',
  },
  {
    id: 3,
    img: trendPng,
    data: '45,000$+',
    desc: 'Trading Value',
  },
];
</script>
