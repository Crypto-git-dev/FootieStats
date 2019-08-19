import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  /**
   * Custom Color
   */
  theme: {
    themes: {
      light: {
        primary: '#4caf50',
        secondary: '#ff5722',
        accent: '#ffeb3b',
        error: '#f44336',
        warning: '#ffc107',
        info: '#607d8b',
        success: '#8bc34a'
      },
    },
  },
});
