import { createApp, ref, computed } from 'vue'
import { createVuetify } from 'vuetify'

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'myCustomTheme',
    themes: {
      myCustomTheme: {
        dark: false,
        colors: {
          primary: '#1565C0'
        }
      }
    }
  }
})

createApp({
  setup() {
    const lang = ref('uk')
    return {
      lang
    }
  }
})
  .use(vuetify)
  .mount('#app')

window.addEventListener('load', () => {
  const splash = document.getElementById('splash')
  if (splash) splash.style.display = 'none'
})
