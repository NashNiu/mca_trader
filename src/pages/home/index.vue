<script setup>
import Header from '@/components/common/header.vue';
import Footer from '@/components/common/footer.vue';
import BackTop from '@/components/common/backTop.vue';
import Banner from './components/banner.vue';
import Section1 from './components/section1.vue';
import Statisitc from './components/statistic.vue';
import Section2 from './components/section2.vue';
</script>

<template>
  <div class="w-screen">
    <Header name="Home" />
    <Banner />
    <div class="mx-auto xl:mt-16 xl:w-[1200px]">
      <Section1 />
    </div>
    <Statisitc />
    <div class="mx-auto xl:mt-16 xl:w-[1200px]">
      <Section2 />
    </div>
    <Footer />
    <BackTop />
  </div>
</template>

<style>
</style>
