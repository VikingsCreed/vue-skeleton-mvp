import Vue from 'vue'
import VeeValidate from 'vee-validate'
import en from 'vee-validate/dist/locale/en'
import es from 'vee-validate/dist/locale/es'
import de from 'vee-validate/dist/locale/de'

const veeValidateConfig = {
  locale: JSON.parse(localStorage.getItem('locale')) || 'en',
  dictionary: {
    en,
    es,
    de
  }
}

Vue.use(VeeValidate, veeValidateConfig)
