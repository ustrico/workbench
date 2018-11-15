<template>
  <v-navigation-drawer
          v-model="show"
          :mini-variant.sync="mini"
          fixed
          app
  >
    <v-list dense>
      <template v-for="(item, i) in items">
        <v-layout
                v-if="item.heading"
                :key="i"
                row
                align-center
        >
          <v-subheader>
            {{ item.heading }}
          </v-subheader>
        </v-layout>
        <v-divider
                v-else-if="item.divider"
                :key="i"
                dark
                class="my-3"
        ></v-divider>
        <v-list-tile
                v-else
                :key="i"
                :to="item.to"
                @click="setMini"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="grey--text">{{ item.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
      show: null,
      mini: true,
      items: [
        {icon: 'format_shapes', text: 'Workbench', to: '/'},
        {divider: true},
        {heading: 'HTML'},
        {icon: 'email', text: 'Email', to: '/email/'},
        {icon: 'touch_app', text: 'Reminders'},
        {divider: true},
        {icon: 'add', text: 'Create new label'}
      ]
    }
  },
  methods: {
    setMini () {
      this.mini = true
    }
  },
  mounted () {
    this.$root.$on('menuToggle', () => {
      this.mini = !this.mini
      if (!this.show) {
        this.show = this.mini
      }
    })
  }
}
</script>
