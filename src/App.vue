<template>
  <v-app dark>
    <Menu/>
    <v-toolbar
      app
      class="blue-grey darken-3"
    >
      <v-toolbar-side-icon @click.stop="menuToggle"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import Menu from '@/components/Menu'
export default {
  name: 'App',
  data () {
    return {
      title: 'Workbench'
    }
  },
  methods: {
    menuToggle () {
      this.$root.$emit('menuToggle')
    }
  },
  components: {
    Menu
  }
}
/*
TODO
редактор шаблонов
список писем
версии, конфирм при смене шаблона
дата листается
подсветка
только контент в редакторе
*/
</script>
