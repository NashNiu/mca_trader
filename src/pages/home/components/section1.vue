<template>
  <div>
    <!-- TRADE WITH MCA -->
    <div class="text-center text-2xl font-bold leading-9 text-blue-950">
      TRADE WITH MCA
    </div>
    <div class="mt-6 w-full text-sm font-normal leading-[21px] text-slate-500">
      Step into the exciting world of investing with MCA Trader investment
      platform – your gateway to a world of endless possibilities! Whether
      you're a seasoned trader or just starting out, our platform is
      tailor-made to cater to all levels of investors, ensuring a seamless and enjoyable investment journey for everyone.
    </div>
    <img
      class="mt-6"
      :src="maskImg"
    >
    <!-- OUR REGULATION -->
    <div class="mt-8 text-center text-xl font-bold text-green-400">
      OUR REGULATION
    </div>
    <div class="mt-2 text-center text-2xl font-bold text-blue-950 ">
      Compliance, Risk Management, and Information Disclosure
    </div>
    <div class="mt-3 text-center text-sm font-normal text-slate-500 ">
      We have licenses from government-regulated entity.
    </div>
    <div class="mt-8 flex items-center justify-between">
      <div
        v-for="item in regulationContents"
        :key="item.id"
        :style="{filter:'drop-shadow(0px 0px 32px rgba(0, 0, 0, 0.099))'}"
        class="frameBox group h-80 xl:w-[24.2%]"
      >
        <div class="absolute -top-12 left-1/4 z-10 flex size-20 items-center justify-center rounded-full bg-green-400 group-hover:animate-pulse1">
          <img
            :src="item.img"
            alt=""
          >
        </div>
        <div class="mt-24 text-left text-xl font-bold text-blue-950">
          {{ item.title }}
        </div>
        <div class="mt-6 text-sm font-normal text-slate-500">
          {{ item.content }}
        </div>
      </div>
    </div>
    <!-- why mca -->
    <div class="mt-16">
      <div class="text-center text-2xl font-bold text-blue-950 ">
        Why MCA?
      </div>
      <div class="mt-6 text-sm font-normal text-slate-500">
        At MCA, we empower users to build wealth through education and focus on cultivating
        and safeguarding investment growth. With a wide range of financial products and leveraged
        investment services, our user-friendly interface ensures barrier-free transactions and fast,
        accurate execution, catering to both professional and interested investors worldwide.
        Join us on your journey to financial growth and security.
      </div>
      <div class="mt-12 flex justify-between">
        <div
          v-for="item in whyMcaContents"
          :key="item.id"
          class="group relative flex shrink-0 grow-0
            cursor-pointer flex-col
            items-center justify-center
            rounded-[14px]
            border border-slate-500 transition-all hover:border-none hover:bg-green-400 xl:h-[230px] xl:w-[232px]"
          :class="item.id===activeWhyId?'bg-green-400 border-none':''"
          @click="changeWhyId(item.id)"
          @mouseover="hoverWhyId=item.id"
          @mouseleave="hoverWhyId=0"
        >
          <img
            class="size-10"
            :src="(item.id===activeWhyId||item.id === hoverWhyId)?item.activeImg:item.img"
            alt=""
          >
          <span
            class="mt-5 text-center text-2xl font-normal uppercase text-slate-500 transition-all group-hover:text-white"
            :class="item.id===activeWhyId?'text-white':''"
            v-html="item.title"
          />
          <div
            class="absolute inset-x-0 top-full mx-auto size-0 border-x-[13px] border-t-[14px]  border-solid border-x-transparent border-t-green-400"
            :class="item.id===activeWhyId?'block':'hidden'"
          />
        </div>
      </div>
      <div class="mt-8 h-72 w-full overflow-hidden rounded-[14px] shadow">
        <div
          class="w-full transition-all duration-1000"
          :style="{transform: `translateY(-${transLateY}px)`}"
        >
          <div
            v-for="item in whyMcaContents"
            :key="item.id"
            class="box-border flex h-72 items-center justify-between  px-24"
          >
            <div class="w-1/3">
              <div class="text-2xl font-bold uppercase text-blue-950">
                {{ item.p1 }}
              </div>
              <div class="mt-10 text-sm font-normal text-slate-500">
                {{ item.content }}
              </div>
            </div>
            <div class="h-[241px] w-[504px]">
              <img
                class="h-[241px] w-[504px] "
                :src="item.mainImg"
                alt=""
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Product -->
    <div class="mt-16">
      <div class="text-center text-2xl font-bold text-blue-950">
        Our Products
      </div>
      <div class="mt-5 flex h-[456px] justify-between ">
        <div class="w-[717px] overflow-hidden rounded-xl">
          <div
            class="size-full transition-all duration-300"
            :style="{transform: `translateY(-${productTransLateY}px)`}"
          >
            <div
              v-for="item in productList"
              :key="item.id"
              class="relative size-full"
            >
              <img
                :src="item.mainImg"
                class="absolute left-0 top-0"
                alt=""
              >
              <div class="absolute inset-x-14 bottom-14 z-10 text-sm font-normal text-white">
                {{ item.content }}
              </div>
            </div>
          </div>
        </div>
        <div class=" flex h-full w-[402px] flex-col justify-between">
          <div
            v-for="item in productList"
            :key="item.id"
            class="relative box-border flex h-16 cursor-pointer items-center rounded-[10px]
            border-b-4 border-solid bg-white pl-20 shadow drop-shadow transition-all duration-300"
            :class="item.id === activeProductId ?' border-b-zinc-300 rounded-md':'border-transparent'"
            @click="activeProductId=item.id"
            @mouseover="hoverProductId=item.id"
            @mouseleave="hoverProductId=0"
          >
            <div
              class=" absolute left-0 top-0 z-20 h-[65px] w-2 rounded-l-[14px]  transition-all duration-300"
              :class="item.id===activeProductId?'bg-green-400':'bg-transparent'"
            />
            <img
              class="mr-8"
              :src="(item.id === hoverProductId || item.id === activeProductId) ? item.activeIcon : item.icon"
              alt=""
            >
            <span class="text-xl font-normal text-slate-500">{{ item.title }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, ref } from 'vue';
import maskImg from '@/assets/img/index/Mask_group.png';
import frame22 from '@/assets/img/index/Frame22.png';
import frame23 from '@/assets/img/index/Frame23.png';
import frame24 from '@/assets/img/index/Frame24.png';
import frame25 from '@/assets/img/index/Frame25.png';

import frame12 from '@/assets/img/index/Frame121.png';
import frame12A from '@/assets/img/index/Frame12_a.png';

import frame14 from '@/assets/img/index/Frame14.png';
import frame14A from '@/assets/img/index/Frame14_a.png';

import frame15 from '@/assets/img/index/Frame15.png';
import frame15A from '@/assets/img/index/Frame15_a.png';

import frame59 from '@/assets/img/index/Frame59.png';
import frame59A from '@/assets/img/index/Frame59_a.png';

import frame61 from '@/assets/img/index/Frame61.png';
import frame61A from '@/assets/img/index/Frame61_a.png';
import tab1 from '@/assets/img/index/tab1.png';
import tab2 from '@/assets/img/index/tab2.png';
import tab3 from '@/assets/img/index/tab3.png';
import tab4 from '@/assets/img/index/tab4.png';
import tab5 from '@/assets/img/index/tab5.png';

import p1 from '@/assets/img/index/product1.png';
import p2 from '@/assets/img/index/product2.png';
import p3 from '@/assets/img/index/product3.png';
import p4 from '@/assets/img/index/product4.png';
import p5 from '@/assets/img/index/product5.png';

import pi1 from '@/assets/img/index/pi1.png';
import pi2 from '@/assets/img/index/pi2.png';
import pi3 from '@/assets/img/index/pi3.png';
import pi4 from '@/assets/img/index/pi4.png';
import pi5 from '@/assets/img/index/pi5.png';

import pi1A from '@/assets/img/index/pi1a.png';
import pi2A from '@/assets/img/index/pi2a.png';
import pi3A from '@/assets/img/index/pi3a.png';
import pi4A from '@/assets/img/index/pi4a.png';
import pi5A from '@/assets/img/index/pi5a.png';

const activeWhyId = ref(1);
const hoverWhyId = ref(0);
// why mca img translateY
const transLateY = computed(() => (activeWhyId.value - 1) * 288);
const changeWhyId = (id) => {
  activeWhyId.value = id;
};

const activeProductId = ref(1);
const hoverProductId = ref(0);
const productTransLateY = computed(() => (activeProductId.value - 1) * 456);
const regulationContents = [
  {
    title: 'Authoritative Regulation',
    content: 'Cyprus Securities and Exchange Commission (CySEC)',
    img: frame22,
    id: 1,
  },
  {
    id: 2,
    title: 'Funds Segregation',
    content: 'Client funds are kept separate from the company\'s operational funds, ensuring clients can withdraw their funds at any time.',
    img: frame23,
  },
  {
    id: 3,
    title: 'Reliable Trading',
    content: 'We utilize genuine MT5 trading software, providing a global electronic trading platform that is fast, accurate, stable, and reliable.',
    img: frame24,
  },
  {
    id: 4,
    title: 'International Coverage',
    content: 'We offer 24/7 technical support, providing investment and trading services to clients worldwide around the clock.',
    img: frame25,
  },
];

const whyMcaContents = [
  {
    id: 1,
    img: frame12,
    activeImg: frame12A,
    title: 'Low </br> THRESHOLD',
    p1: 'Low THRESHOLD',
    content: `Start investing with ease, thanks to our low entry barrier. With as little as $20
    you can open an account with zero charge fee and trade 0.01 lot with just $4. Plus,
    enjoy incredibly low differences as low as 0.8 points for foreign exchange and 10 points for gold.`,
    mainImg: tab1,
  },
  {
    id: 2,
    img: frame14,
    activeImg: frame14A,
    title: 'SMALL POINT DIFFERENCE',
    p1: 'Small Point Difference',
    content: 'Benefit from razor-thin point differences in your trades. Our platform offers foreign exchange point differences as low as 0.8 points and gold point differences as low as 10 points, maximizing your potential gains.',
    mainImg: tab2,
  },
  {
    id: 3,
    img: frame15,
    activeImg: frame15A,
    title: 'Complete </br> Functions',
    p1: 'Complete Functions',
    content: 'Empower your trading strategies with comprehensive functions. Our app supports 250 times leverage, T +0 Two-way transaction, and buy up and buy down options, making every trade a profitable one.',
    mainImg: tab3,
  },
  {
    id: 4,
    img: frame59,
    activeImg: frame59A,
    title: 'HIGH </br> SECURITY',
    p1: 'High Security',
    content: 'Rest assured, your investments are safe with us. We are licensed and regulated by trusted financial authorities, such as CySEC,ensuring a secure and trustworthy trading environment.',
    mainImg: tab4,
  },
  {
    id: 5,
    img: frame61,
    activeImg: frame61A,
    title: 'REFERRAL</br> BENEFITS',
    p1: 'Referral Benefits',
    content: 'Unlock additional perks as you invite friends to join. The more deposits they make, the higher the return for you. Embrace a rewarding experience and enjoy the benefits of our thriving community.',
    mainImg: tab5,
  },
];

const productList = [
  {
    id: 1,
    icon: pi1,
    activeIcon: pi1A,
    title: 'FOREIGN EXCHANGE',
    content: 'Forex refers to the payment method denominated in foreign currencies that can be used for international settlements, such as the US Dollar, Euro, Japanese Yen, and others. It involves trading based on the price difference between two currencies. The exchange rate represents the ratio of the value of one currency to another, reflecting changes in the economic strength and credit status of countries, influenced by factors such as supply and demand, interest rates, trade balance, and policy interventions.',
    mainImg: p1,
  },
  {
    id: 2,
    icon: pi2,
    activeIcon: pi2A,
    title: 'PRECIOUS METALS',
    content: 'Precious metals serve as reserve assets, hedging instruments, and jewelry materials. They are vital in the international financial market, with prices influenced by supply and demand, USD exchange rates, inflation, and geopolitical events.',
    mainImg: p2,
  },
  {
    id: 3,
    icon: pi3,
    activeIcon: pi3A,
    title: 'ENERGY',
    content: 'Indices are statistical measures reflecting the changes in specific areas, such as stock Indices and consumer price Indices. They are used to gauge the development and trends in the economy, society, finance, etc. The indice market refers to trading markets based on various Indices, including stock index futures, options, and Exchange-Traded Funds (ETFs).',
    mainImg: p3,
  },
  {
    id: 4,
    icon: pi4,
    activeIcon: pi4A,
    title: 'INDICES',
    content: 'Crude oil is one of the most essential energy and chemical raw materials, significantly impacting global economic and social development. The crude oil market is one of the most active commodity markets globally, closely related to other financial markets. Crude oil prices are influenced by factors such as supply and demand, USD exchange rates, geopolitical events, and investment bank actions.',
    mainImg: p4,
  },
  {
    id: 5,
    icon: pi5,
    activeIcon: pi5A,
    title: 'CRYPTOCURRENCY',
    content: 'Cryptocurrencies are virtual currencies based on cryptography and blockchain technology, independent of central bank issuance and regulation. They enable transactions and verification through decentralized networks.',
    mainImg: p5,
  },
];
</script>
<style scoped>
.frameBox{
    flex-grow: 0;
    flex-shrink: 0;
    border-bottom-width: 4px;
    border-bottom-style: solid;
    border-bottom-color: transparent;
    transition: all .4s;
    overflow: visible;
    border-radius: 15px;
    text-align: left;
    font-size: 16px;
    background-color: #fff;
    border-radius: 15px;
    padding: 0 20px 30px;
    position: relative;
    margin-top: 55px;
    filter: drop-shadow(0px 0px 32px rgba(0, 0, 0, 0.099));
}
.frameBox:hover {
  border-bottom-color: #4bc364;
}
.frameBox:before{
      display: block;
      content: "";
      position: absolute;
      border-top: 4px solid;
      border-top-color: transparent;
      top: -15px;
      left: 0px;
      right: 0;
      height: 46px;
      transform: rotate(-5deg);
      background: #fff;
      border-radius: 19px;
      transition: all .4s;
      box-sizing: border-box;
    }
    .frameBox:hover:before{
      border-top-color: #4bc364;
      transform: rotate(5deg);
    }
</style>
