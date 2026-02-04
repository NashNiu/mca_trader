<script setup>
import { onMounted, ref } from 'vue';
import logo from '@/assets/img/index/logo-img.png';
import menuImg from '@/assets/img/index/menu.png';
import lanImg from '@/assets/img/index/lan.png';
import { useWindowScroll } from '@vueuse/core';

const { y: scrollY } = useWindowScroll();

const props = defineProps({
  name: {
    type: String,
    default: 'Home',
  },
});
const offsetLeft = ref(49);
const initPosition = ref(49);
const activeLan = ref('zh');
const tabs = [
  {
    value: 'Home',
    label: 'HOME',
  },
  {
    value: 'BENEFITS',
    label: 'BENEFITS',
  },
  {
    value: 'PRODUCTS',
    label: 'PRODUCTS',
  },
  {
    value: 'USE',
    label: 'HOW TO USE',
  },
  {
    value: 'NEWS',
    label: 'NEWS',
  },
  {
    value: 'Articles',
    label: 'MCA Articles',
  },
  {
    value: 'ABOUT',
    label: 'ABOUT US',
  },
];
const changeLan = (lan) => {
  activeLan.value = lan;
};
const lanList = [
  {
    value: 'zh',
    label: '简体中文',
  },
  {
    value: 'zh-hk',
    label: '繁体中文',
  },
  {
    value: 'en',
    label: 'English',
  },
];
const onHover = (e) => {
  offsetLeft.value = e.target.offsetLeft + e.target.offsetWidth / 2;
};
const mouseOut = () => {
  offsetLeft.value = initPosition.value;
};
const calcInitLeft = () => {
  const target = document.getElementById(props.name);
  if (target) {
    initPosition.value = target.offsetLeft + target.offsetWidth / 2;
    offsetLeft.value = initPosition.value;
  }
};
onMounted(() => {
  calcInitLeft();
});
</script>
<template>
  <div
    class="box-border flex h-20 w-full items-center justify-center bg-stone-950"
    :class="scrollY>30?'fixed z-10':''"
  >
    <div class="box-border flex w-full items-center justify-between px-8 font-sans xl:w-[1200px]">
      <div>
        <img
          :src="logo"
          class="h-[23px] w-44 cursor-pointer"
          alt=""
        >
      </div>
      <div class="flex items-center text-white">
        <div class="relative hidden h-20 items-center justify-between text-base font-normal text-white xl:flex">
          <span
            v-for="item in tabs"
            :id="item.value"
            :key="item.value"
            class="z-10 ml-6 box-border h-full cursor-pointer pt-7 text-center transition-colors hover:text-green-400"
            :class="item.value === name?'text-green-400':''"
            @mouseenter="onHover"
            @mouseout="mouseOut"
          >{{ item.label }}
          </span>
          <div
            class="absolute top-0 transition-all duration-700"
            :style="{left: `${offsetLeft}px`}"
          >
            <div class="h-5 w-[3px] bg-green-400" />
            <div class="h-[5px] w-[5px] translate-x-[-1px] translate-y-[-1px] rounded-full  bg-green-400" />
          </div>
          <div />
        </div>
        <div class="ml-6 flex h-10 w-[147px] cursor-pointer items-center justify-center rounded-[35px] bg-green-800 hover:text-green-400">
          Create Account
        </div>
        <n-popover
          trigger="hover"
          :show-arrow="false"
          placement="bottom"
        >
          <template #trigger>
            <div class="ml-8 flex h-20 cursor-pointer items-center">
              <img
                :src="lanImg"
                alt=""
              >
            </div>
          </template>
          <div class="w-[180px] rounded-[14px] bg-neutral-800 py-2 shadow-inner">
            <div
              v-for="item in lanList"
              :key="item.value"
              class="group relative flex h-8 w-full cursor-pointer items-center px-7"
              :class="item.value ===activeLan?'bg-black bg-opacity-30 ':''"
              @click="changeLan(item.value)"
            >
              <span
                class="text-sm group-hover:text-white"
                :class="item.value === activeLan?'text-white font-bold':'text-neutral-400 font-normal'"
              >
                {{ item.label }}
              </span>

              <div
                class="absolute right-0 top-0 h-full w-2"
                :class="item.value === activeLan?'bg-green-400':'bg-transparent'"
              />
            </div>
          </div>
        </n-popover>

        <div class="ml-8 w-5 xl:hidden">
          <img
            :src="menuImg"
            alt=""
          >
        </div>
      </div>
    </div>
  </div>
</template>
