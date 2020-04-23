import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import colors from 'vuetify/es5/util/colors'
import VuetifyConfirm from 'vuetify-confirm'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify, {
  theme: {
    primary: colors.green.lighten1,
    secondary: colors.blue.lighten1,
    error: colors.orange.darken3
  },
  iconfont: 'mdi'
})
// Delete knappen på admin siden
Vue.use(VuetifyConfirm)
