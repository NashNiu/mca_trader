<template>
  <n-config-provider
    class="overflow-auto overflow-x-hidden"
    wh-full
    :locale="zhCN"
    :theme-overrides="themeOverrides"
  >
    <n-loading-bar-provider>
      <n-dialog-provider>
        <n-notification-provider>
          <n-message-provider>
            <slot />
            <NaiveProviderContent />
          </n-message-provider>
        </n-notification-provider>
      </n-dialog-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>
<script setup>
import { defineComponent, h } from 'vue';
import {
  useNotification,
  useMessage,
  useLoadingBar,
  useDialog,
  zhCN,
} from 'naive-ui';

const themeOverrides = {
  common: {
    primaryColor: '#4BC364',
    popoverColor: 'transparent',
  },
  Popover: {
    space: '0',
    padding: '0',
    boxShadow: 'none',
  },
};
const setupNaiveTools = () => {
  window.$loadingBar = useLoadingBar();
  window.$useNotification = useNotification();
  window.$message = useMessage();
  window.$dialog = useDialog();
};
const NaiveProviderContent = defineComponent({
  setup() {
    setupNaiveTools();
  },
  render() {
    return h('div');
  },
});
</script>
