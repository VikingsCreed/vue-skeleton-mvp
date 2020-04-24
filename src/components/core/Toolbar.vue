<!-- Meny for hele nettsiden redigert av Erlend Ellefsen og Robin Ellingsen -->
<template>
  <div class="adjust-y">
    <v-navigation-drawer v-model="sidebar" app disable-resize-watcher>
      <v-list>
        <v-list-tile>
          <v-list-tile-content class="test">{{ appTitle }}</v-list-tile-content>
          <LocaleChanger />
          <v-list-tile-action>
            <v-btn icon @click.stop="sidebar = !sidebar">
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
        <v-list-tile
          v-for="(item, index) in menuItems"
          :key="index"
          :to="{ name: item.link }"
          exact
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
        <template v-if="admin">
          <v-list-tile
            v-for="(item, index) in adminItems"
            :key="index"
            :to="{ name: item.link }"
            exact
          >
            <v-list-tile-action>
              <v-icon>mdi-lock</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              {{ $t('adminItems.ADMIN') }}
            </v-list-tile-content>
          </v-list-tile>
        </template>
        <v-list-tile v-if="isTokenSet" @click="userLogout">
          <v-list-tile-action>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            {{ $t('menuItems.LOGOUT') }}
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app>
      <span class="hidden-md-and-up">
        <v-toolbar-side-icon @click="sidebar = !sidebar"></v-toolbar-side-icon>
      </span>
      <v-toolbar-title class="headline ml-0">
        <div>
          <router-link
            :to="{ name: 'landing' }"
            tag="span"
            style="cursor: pointer"
            v-if="isTokenSet"
            >{{ appTitle }}</router-link
          >
          <router-link
            :to="{ name: 'landing' }"
            tag="span"
            style="cursor: pointer"
            v-else
            >{{ appTitle }}</router-link
          >
        </div>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          flat
          v-for="(item, index) in menuItems"
          :key="index"
          :to="{ name: item.link }"
          exact
          :class="['hidden-sm-and-down', item.class]"
        >
          <v-icon>{{ item.icon }}</v-icon>
          &nbsp;{{ item.title }}
        </v-btn>
        <template v-if="admin">
          <v-btn
            flat
            v-for="(item, index) in adminItems"
            :key="index"
            :to="{ name: item.link }"
            exact
            :class="['hidden-sm-and-down', item.class]"
          >
            <v-icon>mdi-lock</v-icon>
            &nbsp;{{ $t('adminItems.ADMIN') }}
          </v-btn>
        </template>
        <v-btn
          flat
          v-if="isTokenSet"
          @click="userLogout"
          class="hidden-sm-and-down btnLogout"
        >
          <v-icon left>mdi-exit-to-app</v-icon>
          {{ $t('menuItems.LOGOUT') }}
        </v-btn>

        <LocaleChanger :class="['hidden-sm-and-down']" />
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LocaleChanger from '@/components/core/LocaleChanger'
import ResizeText from 'vue-resize-text'

export default {
  name: 'Toolbar',
  metaInfo() {
    return {
      title: this.$store.getters.appTitle,
      htmlAttrs: {
        lang: this.$i18n.locale
      },
      meta: [
        { name: 'msapplication-TileColor', content: '#ffc40d' },
        { name: 'theme-color', content: '#ffffff' },
        {
          name: 'apple-mobile-web-app-title',
          content: this.$store.getters.appTitle
        },
        { name: 'application-name', content: this.$store.getters.appTitle }
      ],
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png'
        },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'mask-icon', color: '#5bbad5', href: '/safari-pinned-tab.svg' },
        { rel: 'favicon', href: '/favicon.ico' }
      ]
    }
  },
  // Her implementeres drop down for flerspråklighet
  components: {
    LocaleChanger
  },
  directives: {
    ResizeText
  },
  data() {
    return {
      sidebar: false
    }
  },
  computed: {
    /*
      Under har du divese komponenter som blir returnert.
      Du får ulike komponenter ut ifra rettigheter, altså om du er admin eller innlogget bruker
    */

    ...mapGetters(['appTitle', 'isTokenSet', 'user']),
    admin() {
      return this.user !== null ? this.user.role === 'admin' : false
    },
    adminItems() {
      return [
        {
          title: this.$t('adminItems.USERS'),
          link: 'admin-users',
          icon: 'mdi-account-supervisor',
          class: 'btnAdminUsers'
        }
      ]
    },
    menuItems() {
      if (this.isTokenSet) {
        return [
          {
            title: this.$t('menuItems.HOME'),
            link: 'landing',
            icon: 'mdi-home',
            class: 'btnHome'
          },
          {
            title: this.$t('menuItems.ABOUT'),
            link: 'about',
            icon: 'mdi-help-circle-outline',
            class: 'btnAbout'
          },
          {
            title: this.$t('menuItems.MY_PROFILE'),
            link: 'profile',
            icon: 'mdi-face',
            class: 'btnProfile'
          },
          {
            title: this.$t('menuItems.FORUM'),
            link: 'forum',
            icon: 'mdi-view-list',
            class: 'btnForum'
          }
        ]
      }
      return [
        {
          title: this.$t('menuItems.HOME'),
          link: 'landing',
          icon: 'mdi-home'
        },
        {
          title: this.$t('menuItems.ABOUT'),
          link: 'about',
          icon: 'mdi-help-circle-outline',
          class: 'btnAbout'
        },
        {
          title: this.$t('menuItems.LOGIN'),
          link: 'login',
          icon: 'mdi-lock',
          class: 'btnLogin'
        },
        {
          title: this.$t('menuItems.SIGNUP'),
          link: 'signup',
          icon: 'mdi-plus-circle-outline',
          class: 'btnLogin'
        }
      ]
    }
  },
  methods: {
    userLogout() {
      this.$store.dispatch('userLogout')
    }
  }
}
</script>
<style scoped>
.adjust-y {
  margin-bottom: -25px;
}
</style>
