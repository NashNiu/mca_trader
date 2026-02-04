<script setup>
import BannerImg from '@/assets/img/index/slider-mainbg-002.png';
</script>

<template>
  <div class="relative w-full xl:h-[680px] ">
    <div
      class="flex h-[680px] w-full justify-end"
      :style="{backgroundImage: `url(${BannerImg})`}"
    >
      <div class="mt-[52px] mr-[118px] h-[576px] w-[1100px] bg-neutral-950 opacity-90">
        <div class="mx-auto mt-6 h-[524px] w-[916px]">
          <div class="text-[54px] font-bold leading-[81px] text-white">
            Enjoy 100%* Bonus Returns after <br>your First Trade!
          </div>
          <div class="text-[26px] font-normal leading-[39px] text-white text-opacity-90">
            - The More You Trade, the More You'll Receive<br>- Up to 100% Bonus Returns<br>- Seamless Bonus Activation
          </div>
          <div class="mt-6 text-center text-[32px] font-bold leading-normal text-white">
            How to qualify
          </div>
          <div class="mt-6 flex items-center justify-between">
            <div class="ml-20 text-center text-4xl font-bold leading-10 text-white">
              1
            </div>
            <div class="h-[0px] w-[200px] border border-white" />
            <div class="text-center text-4xl font-bold leading-10 text-white">
              2
            </div>
            <div class="h-[0px] w-[200px] border border-white" />
            <div class="mr-20 text-center text-4xl font-bold leading-10 text-white">
              3
            </div>
          </div>
          <div class="mt-2 flex items-center justify-between">
            <div class=" text-center text-lg font-normal leading-[27px] text-white text-opacity-90">
              Open an account <br>with MCA Trader
            </div>
            <div class="text-center text-lg font-normal leading-[27px] text-white text-opacity-90">
              Meet the minimum <br>deposit and trade criteria
            </div>
            <div class="text-center text-lg font-normal leading-[27px] text-white text-opacity-90">
              Receive bonuses up to <br>100% bonus returns
            </div>
          </div>
          <div class="mt-6 flex justify-end text-sm font-normal leading-normal text-white text-opacity-70">
            *Terms & Conditions apply
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
