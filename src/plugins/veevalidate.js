// Redigert av Robin Ellingsen og Erlend Ellefsen

import Vue from 'vue'
import VeeValidate from 'vee-validate'
import en from 'vee-validate/dist/locale/en'
import es from 'vee-validate/dist/locale/es'
import de from 'vee-validate/dist/locale/de'
import cn from 'vee-validate/dist/locale/zh_CN'

const veeValidateConfig = {
  locale: JSON.parse(localStorage.getItem('locale')) || 'en',
  dictionary: {
    en,
    es,
    de,
    cn
  }
}

Vue.use(VeeValidate, veeValidateConfig)
