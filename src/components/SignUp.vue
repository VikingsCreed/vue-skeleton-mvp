<!-- Kode redigert av Robin Elligsen og Erlend Ellefsen -->
<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <Title :title="$t('signup')" class="pt-5" />
        <form @submit.prevent="submit">
          <v-layout column>
            <v-flex>
              <v-text-field
                id="firstname"
                name="firstname"
                :label="$t('signup.FIRSTNAME')"
                v-model="name"
                :data-vv-as="$t('signup.FIRSTNAME')"
                :error="errors.has('firstname')"
                :error-messages="errors.collect('firstname')"
                v-validate.disable="'required'"
                autocomplete="off"
              ></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                id="email"
                name="email"
                type="email"
                :label="$t('signup.EMAIL')"
                v-model="email"
                :data-vv-as="$t('signup.EMAIL')"
                :error="errors.has('email')"
                :error-messages="errors.collect('email')"
                v-validate.disable="'required|email'"
                autocomplete="off"
              ></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                id="password"
                name="password"
                type="password"
                :label="$t('signup.PASSWORD')"
                v-model="password"
                :data-vv-as="$t('signup.PASSWORD')"
                :error="errors.has('password')"
                :error-messages="errors.collect('password')"
                v-validate.disable="'required|min:5'"
                ref="password"
                autocomplete="off"
              ></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                :label="$t('signup.CONFIRM_PASSWORD')"
                v-model="confirmPassword"
                :data-vv-as="$t('signup.PASSWORD')"
                :error="errors.has('confirmPassword')"
                :error-messages="errors.collect('confirmPassword')"
                v-validate.disable="'required|min:5|confirmed:password'"
                autocomplete="off"
              ></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                id="country"
                name="country"
                :label="$t('signup.COUNTRY')"
                v-model="country"
                :data-vv-as="$t('signup.COUNTRY')"
                :error="errors.has('country')"
                :error-messages="errors.collect('country')"
                v-validate.disable="'required'"
                autocomplete="off"
              ></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                id="steamid64"
                name="steamid64"
                :label="$t('signup.STEAMID64')"
                v-model="steamid64"
                :data-vv-as="$t('signup.STEAMID64')"
                :error="errors.has('steamid64')"
                :error-messages="errors.collect('steamid64')"
                v-validate.disable="'required|min:17'"
                autocomplete="off"
              ></v-text-field>
              <Card :title="$t('steamID64Help')" />
            </v-flex>
            <div fluid class="margin">
              <v-flex text-xs-center mt-5>
                <SubmitButton :text="$t('signup.SIGN_ME_UP')" class="margin" />
              </v-flex>
            </div>
          </v-layout>
        </form>
      </v-flex>
      <ErrorMessage />
    </v-layout>
  </v-container>
</template>

<script>
import router from '@/router'
import { mapActions } from 'vuex'

export default {
  metaInfo() {
    return {
      title: this.$store.getters.appTitle,
      titleTemplate: `${this.$t('signup.TITLE')} - %s`
    }
  },
  data() {
    return {
      firstname: '',
      email: '',
      password: '',
      confirmPassword: '',
      country: '',
      steamid64: ''
    }
  },
  methods: {
    ...mapActions(['userSignUp']),
    async submit() {
      const valid = await this.$validator.validateAll()
      if (valid) {
        await this.userSignUp({
          name: this.name,
          email: this.email,
          password: this.password,
          country: this.country,
          steamid64: this.steamid64
        })
      }
    }
  },
  created() {
    if (this.$store.state.auth.isTokenSet) {
      router.push({ firstname: 'home' })
    }
  }
}
</script>

<style scoped>
.margin {
  margin-bottom: 5%;
}
@media only screen and (max-width: 768px) {
  .margin {
    margin-bottom: 15%;
  }
}
@media only screen and (max-width: 360px) {
}
</style>
