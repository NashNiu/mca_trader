<template>
  <div class="mb-20 mt-16">
    <!-- registerData -->
    <div class="text-center text-2xl font-bold text-blue-950">
      How to get started with MCA
    </div>
    <div class="mt-6">
      <div
        v-for="item in registerData"
        :key="item.id"
        class="mt-1 box-border flex items-start rounded-[14px] bg-white p-6 transition hover:shadow hover:drop-shadow-xl"
      >
        <div>
          <img
            :src="item.img"
            alt=""
          >
        </div>
        <div class="ml-10">
          <div class="text-xl font-bold text-blue-950">
            {{ item.title }}
          </div>
          <div class="mt-3 text-sm font-normal text-slate-500">
            {{ item.desc }}
          </div>
        </div>
      </div>
    </div>
    <!-- newsData -->
    <div class="mt-14">
      <div class="text-center text-2xl font-bold text-blue-950">
        News
      </div>
      <div class="mt-6 flex justify-between">
        <div
          v-for="item in newsData"
          :key="item.id"
          class="box-border rounded-[14px] bg-white px-6 py-9 shadow transition-all hover:shadow-2xl xl:w-[32%]"
        >
          <div class="rounded-[14px]">
            <img
              class="w-full"
              :src="item.img"
              alt=""
            >
          </div>
          <div class="">
            <p class="my-5 text-sm font-bold  text-blue-950">
              {{ item.title }}
            </p>
            <p class="text-sm font-normal text-slate-500">
              {{ item.time }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import o1png from '@/assets/img/index/01.png';
import o2png from '@/assets/img/index/02.png';
import o3png from '@/assets/img/index/03.png';
import o4png from '@/assets/img/index/04.png';

import new1Png from '@/assets/img/index/new1.png';
import new2Png from '@/assets/img/index/new2.png';
import new3Png from '@/assets/img/index/new3.png';

const registerData = [
  {
    id: 1,
    img: o1png,
    title: 'Register',
    desc: 'Sign up for a free MCA account and get access to a demo account with $10,000 demo funds to try out the platform.',
  },
  {
    id: 2,
    img: o2png,
    title: 'Verify',
    desc: 'Fill in the questionnaire about your trading experience and send us your proof of lD and residence.',
  },
  {
    id: 3,
    img: o3png,
    title: 'Fund',
    desc: 'Make a deposit via any funding method you prefer to start trading with real money with MCA.',
  },
  {
    id: 4,
    img: o4png,
    title: 'Trade',
    desc: 'Begin your trading journey to open or close trades.',
  },
];
const newsData = [
  {
    id: 1,
    img: new1Png,
    title: 'Novo Nordisk Launches Weight-Loss Drug Wegovy In UK',
    time: 'Sep 04, 2023 02:04AM',
  },
  {
    id: 2,
    img: new2Png,
    title: 'US Crude Stocks To Fall Further, End Below Year-Ago Levels, Say Analysts',
    time: 'Sep 04, 2023 02:04AM',
  },
  {
    id: 3,
    img: new3Png,
    title: 'China\'s Moutai, Luckin Launch Alcohol-Tinged Latte To Woo Young Chinese Consumers',
    time: 'Sep 04, 2023 02:04AM',
  },
];
</script>
