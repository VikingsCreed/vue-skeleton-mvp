<template>
  <v-container fluid>
    <v-layout row wrap>
      <Title :title="$t('myProfile')" />
      <v-flex xs12 sm8 offset-sm2>
        <v-dialog v-model="dialog" max-width="400px">
          <template v-slot:activator="{ on }">
            <v-flex text-xs-center>
              <v-btn
                small
                flat
                v-on="on"
                @click="triggerChangePassword = true"
                class="btnChangePassword"
                >{{ $t('myProfile.CHANGE_MY_PASSWORD') }}</v-btn
              >
            </v-flex>
          </template>
          <v-card>
            <form @submit.prevent="save">
              <v-card-title>
                <span class="headline">
                  {{ $t('myProfile.CHANGE_MY_PASSWORD') }}
                </span>
              </v-card-title>
              <v-card-text>
                <v-container grid-list-md>
                  <v-layout wrap>
                    <template v-if="triggerChangePassword">
                      <v-flex xs12>
                        <v-text-field
                          id="oldPassword"
                          name="oldPassword"
                          type="password"
                          :label="$t('myProfile.CURRENT_PASSWORD')"
                          v-model="oldPassword"
                          :data-vv-as="$t('myProfile.CURRENT_PASSWORD')"
                          :error="errors.has('oldPassword')"
                          :error-messages="errors.collect('oldPassword')"
                          v-validate.disable="'required|min:5'"
                          key="oldPassword"
                          autocomplete="off"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12>
                        <v-text-field
                          id="newPassword"
                          name="newPassword"
                          type="password"
                          :label="$t('myProfile.NEW_PASSWORD')"
                          v-model="newPassword"
                          :data-vv-as="$t('myProfile.NEW_PASSWORD')"
                          :error="errors.has('newPassword')"
                          :error-messages="errors.collect('newPassword')"
                          v-validate.disable="'required|min:5'"
                          key="newPassword"
                          ref="password"
                          autocomplete="off"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12>
                        <v-text-field
                          id="confirmPassword"
                          name="confirmPassword"
                          type="password"
                          :label="$t('myProfile.CONFIRM_NEW_PASSWORD')"
                          v-model="confirmPassword"
                          :data-vv-as="$t('myProfile.NEW_PASSWORD')"
                          :error="errors.has('confirmPassword')"
                          :error-messages="errors.collect('confirmPassword')"
                          v-validate.disable="
                            'required|min:5|confirmed:password'
                          "
                          key="confirmPassword"
                          autocomplete="off"
                        ></v-text-field>
                      </v-flex>
                    </template>
                  </v-layout>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red lighten3" flat @click="close">
                  {{ $t('dataTable.CANCEL') }}
                </v-btn>
                <SubmitButton
                  :text="$t('dataTable.SAVE')"
                  color="yellow lighten3"
                  flat
                />
              </v-card-actions>
            </form>
          </v-card>
        </v-dialog>
        <form @submit.prevent="submit">
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 md6>
                <v-text-field
                  id="email"
                  name="email"
                  type="email"
                  :label="$t('myProfile.EMAIL')"
                  v-model="email"
                  :data-vv-as="$t('myProfile.EMAIL')"
                  :error="errors.has('email')"
                  :error-messages="errors.collect('email')"
                  v-validate.disable="'required|email'"
                  disabled
                  autocomplete="off"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 md6>
                <v-text-field
                  id="name"
                  name="name"
                  type="text"
                  :label="$t('myProfile.NAME')"
                  v-model="name"
                  :data-vv-as="$t('myProfile.NAME')"
                  :error="errors.has('name')"
                  :error-messages="errors.collect('name')"
                  v-validate.disable="'required'"
                  autocomplete="off"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 md4>
                <v-text-field
                  id="steamid64"
                  name="steamid"
                  type="text"
                  :label="$t('myProfile.STEAMID64')"
                  v-model="steamid64"
                  :data-vv-as="$t('myProfile.STEAMID64')"
                  :error="errors.has('steamid64')"
                  :error-messages="errors.collect('steamid64')"
                  v-validate.disable="'required'"
                  autocomplete="off"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 md4>
                <v-text-field
                  id="country"
                  name="country"
                  type="text"
                  :label="$t('myProfile.COUNTRY')"
                  v-model="country"
                  :data-vv-as="$t('myProfile.COUNTRY')"
                  :error="errors.has('country')"
                  :error-messages="errors.collect('country')"
                  v-validate.disable="'required'"
                  autocomplete="off"
                ></v-text-field>
              </v-flex>
              <v-flex text-xs-center mt-5>
                <SubmitButton
                  :text="$t('myProfile.SAVE')"
                  customClass="btnSave"
                />
              </v-flex>
            </v-layout>
          </v-container>
        </form>
      </v-flex>
      <ErrorMessage />
      <SuccessMessage />
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  metaInfo() {
    return {
      title: this.$store.getters.appTitle,
      titleTemplate: `${this.$t('myProfile.TITLE')} - %s`
    }
  },
  data() {
    return {
      dialog: false,
      triggerChangePassword: false,
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
      searchInput: ''
    }
  },
  computed: {
    name: {
      get() {
        return this.$store.state.profile.profile.name
      },
      set(value) {
        const data = {
          key: 'name',
          value
        }
        this.addProfileData(data)
      }
    },
    email() {
      return this.$store.state.profile.profile.email
    },
    steamid64: {
      get() {
        return this.$store.state.profile.profile.steamid64
      },
      set(value) {
        const data = {
          key: 'steamid64',
          value
        }
        this.addProfileData(data)
      }
    },
    allCities() {
      return this.$store.state.cities.allCities
    },
    country: {
      get() {
        return this.$store.state.profile.profile.country
      },
      set(value) {
        const data = {
          key: 'country',
          value
        }
        this.addProfileData(data)
      }
    }
  },
  methods: {
    ...mapActions([
      'changeMyPassword',
      'getProfile',
      'getAllCities',
      'addProfileData',
      'saveProfile'
    ]),
    async submit() {
      await this.saveProfile({
        name: this.name,
        country: this.country,
        steamid64: this.steamid64
      })
    },
    close() {
      this.triggerChangePassword = false
      this.dialog = false
    },
    async save() {
      try {
        await this.changeMyPassword({
          oldPassword: this.oldPassword,
          newPassword: this.newPassword
        })
        this.oldPassword = ''
        this.newPassword = ''
        this.confirmPassword = ''
        this.triggerChangePassword = false
        this.close()
        return
        // eslint-disable-next-line no-unused-vars
      } catch (error) {
        this.oldPassword = ''
        this.newPassword = ''
        this.confirmPassword = ''
        this.triggerChangePassword = false
        this.close()
      }
    }
  },
  async mounted() {
    await this.getProfile()
    await this.getAllCities()
  }
}
</script>
