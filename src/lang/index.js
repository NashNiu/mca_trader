import { createI18n } from 'vue-i18n';
import appConst from '@/config/appConst.js';
// import { useNavigatorLanguage } from '@vueuse/core';
import cn from './cn.js';
import en from './en.js';

const messages = {
  cn,
  en,
};
const localLan = localStorage.getItem(appConst.language);
// const { language } = useNavigatorLanguage();
const i18n = createI18n({
  legacy: false,
  locale: localLan in messages ? localLan : 'en',
  messages,
});

export default i18n;
