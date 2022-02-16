export default createI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'de',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: loadLocaleMessages(),
});
