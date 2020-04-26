// Redigert av Robin Ellingsen
import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)
// "[A-Za-z0-9-_]" sjekker for lovlige verdier.
const loadLocaleMessages = () => {
  const locales = require.context(
    '../locales',
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i
  )
  const messages = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key)
    }
  })
  return messages
}
// Setter fallback språk til Engelsk om noe ikke er oversatt.
export default new VueI18n({
  locale: navigator.language.slice(0, 2) || 'en',
  fallbackLocale: 'en',
  messages: loadLocaleMessages()
})
