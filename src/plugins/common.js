// Her importeres alle componenter som brukes på siden.
import Vue from 'vue'
import Heading from '@/components/common/Heading.vue'
import Description from '@/components/common/Description.vue'
import ErrorMessage from '@/components/common/ErrorMessage.vue'
import SuccessMessage from '@/components/common/SuccessMessage.vue'
import SubmitButton from '@/components/common/SubmitButton.vue'
import ProjectDescription from '@/components/common/ProjectDescription.vue'
import Title from '@/components/common/Title.vue'
import D2Profile from '@/components/common/D2Profile.vue'
import Test from '@/components/common/Test.vue'
import Card from '@/components/common/Card.vue'

Vue.component('Heading', Heading)
Vue.component('Description', Description)
Vue.component('ErrorMessage', ErrorMessage)
Vue.component('SuccessMessage', SuccessMessage)
Vue.component('SubmitButton', SubmitButton)
Vue.component('ProjectDescription', ProjectDescription)
Vue.component('Title', Title)
Vue.component('D2Profile', D2Profile)
Vue.component('Test', Test)
Vue.component('Card', Card)
