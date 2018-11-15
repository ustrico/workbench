import Vue from 'vue'
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  VSubheader,
  VDivider,
  VSelect,
  VTextarea,
  VTextField,
  transitions
} from 'vuetify'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VSubheader,
    VDivider,
    VSelect,
    VTextarea,
    VTextField,
    transitions
  },
  theme: {
    primary: '#5d737d',
    secondary: '#455A64',
    accent: '#B0BEC5',
    error: '#B71C1C',
    warning: '#ffeb3b',
    info: '#2196f3',
    success: '#4caf50'
  }
})
