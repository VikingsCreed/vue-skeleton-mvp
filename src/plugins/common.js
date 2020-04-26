// Redigert av Erlend Ellefsen og Robin Ellingsen
// Her importeres alle child-komponenter som brukes på siden.

import Vue from 'vue'

import Heading from '@/components/common/Heading.vue'

import HeadingAbout from '@/components/common/HeadingAbout.vue'

import ErrorMessage from '@/components/common/ErrorMessage.vue'

import SuccessMessage from '@/components/common/SuccessMessage.vue'

import SubmitButton from '@/components/common/SubmitButton.vue'

import Title from '@/components/common/Title.vue'

import D2Profile from '@/components/common/D2Profile.vue'

import Card from '@/components/common/Card.vue'

import InfoCards from '@/components/common/InfoCards.vue'

import AboutCards from '@/components/common/AboutCards.vue'

import AboutMap from '@/components/common/AboutMap.vue'

import ForumPages from '@/components/common/ForumPages.vue'

import ForumNotice from '@/components/common/ForumNotice.vue'

import ForumPost from '@/components/common/ForumPost.vue'

Vue.component('Heading', Heading)

Vue.component('HeadingAbout', HeadingAbout)

Vue.component('ErrorMessage', ErrorMessage)

Vue.component('SuccessMessage', SuccessMessage)

Vue.component('SubmitButton', SubmitButton)

Vue.component('Title', Title)

Vue.component('D2Profile', D2Profile)

Vue.component('Card', Card)

Vue.component('InfoCards', InfoCards)

Vue.component('AboutCards', AboutCards)

Vue.component('AboutMap', AboutMap)

Vue.component('ForumPages', ForumPages)

Vue.component('ForumNotice', ForumNotice)

Vue.component('ForumPost', ForumPost)
