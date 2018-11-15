<template>
    <v-layout row wrap>
      <v-flex d-flex xs12 lg6>
        <v-container fluid grid-list-lg>
          <v-layout row wrap>
            <v-flex d-flex xs12 sm6 md4>
              <v-select
                :items="Object.keys(selectTemplate)"
                label="Template"
                v-model="template"
                @input="templateHandle"
              ></v-select>
            </v-flex>
            <v-flex d-flex xs2>
              <v-text-field
                label="Y"
                v-model="date.y"
              ></v-text-field>
            </v-flex>
            <v-flex d-flex xs1>
              <v-text-field
                label="m"
                v-model="date.m"
              ></v-text-field>
            </v-flex>
            <v-flex d-flex xs1>
              <v-text-field
                label="d"
                v-model="date.d"
              ></v-text-field>
            </v-flex>
            <v-flex xs12 py-0 class="caption">
              UTM
            </v-flex>
            <v-flex d-flex xs12 sm6 md3>
              <v-text-field
                label="Source"
                v-model="utm.source"
              ></v-text-field>
            </v-flex>
            <v-flex d-flex xs12 sm6 md3>
              <v-text-field
                label="Medium"
                v-model="utm.medium"
              ></v-text-field>
            </v-flex>
            <v-flex d-flex xs12 sm6 md3>
              <v-text-field
                label="Content"
                v-model="utm.content"
              ></v-text-field>
            </v-flex>
            <v-flex d-flex xs12 sm6 md3>
              <v-text-field
                label="Campaign"
                v-model="utm.campaign"
              ></v-text-field>
            </v-flex>
            <v-flex d-flex xs12 sm6 md4>
              <v-text-field
                label="Base link"
                v-model="baseLink"
              ></v-text-field>
            </v-flex>
            <v-flex d-flex xs12 sm6 md4>
              <v-text-field
                label="Link"
                v-model="link"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-textarea
            name="code"
            box
            label="Code"
            auto-grow
            v-model="editor"
            @keyup="render"
          ></v-textarea>
        </v-container>
      </v-flex>
      <v-flex d-flex xs12 lg6 class="white" v-html="html">
      </v-flex>
    </v-layout>
</template>
<script>
import EmailTpl from '../models/emailtpl'
export default {
  name: 'Email',
  data () {
    return {
      editor: '',
      html: '',
      template: '',
      date: {
        f: null,
        y: 0,
        m: 0,
        d: 0
      },
      utm: {
        source: 'newsletter',
        medium: 'email',
        content: '',
        campaign: ''
      },
      baseLink: '',
      link: '',
      selectTemplate: {
        'Marya Action': {
          baseLink: 'https://marya.ru',
          utm: {
            source: 'newsletter',
            medium: 'email',
            content: '',
            campaign: ''
          }
        },
        'Marya Digest': {
          baseLink: 'http://www.marya.ru',
          utm: {
            source: 'newsletter',
            medium: 'email',
            content: 'digest',
            campaign: ''
          }
        }
      }
    }
  },
  methods: {
    templateHandle () {
      let tpl = this.selectTemplate[this.template]
      for (let a in tpl) {
        if (typeof tpl[a] === 'object') {
          for (let b in tpl[a]) {
            this[a][b] = tpl[a][b]
          }
        } else {
          this[a] = tpl[a]
        }
      }
    },
    render () {
      this.html = this.editor
      let tpl = new EmailTpl('marya')
      console.log(tpl)
    }
  },
  mounted () {
    this.date.f = new Date()
    this.date.y = this.date.f.getFullYear()
    this.date.m = this.date.f.getMonth() + 1
    this.date.d = this.date.f.getDate()
  }
}
</script>
