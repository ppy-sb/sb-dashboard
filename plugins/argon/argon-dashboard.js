import Vue from 'vue'
import '@/assets/argon/vendor/nucleo/css/nucleo.css'
import '@/assets/argon/scss/argon.scss'
import SidebarPlugin from '@/components/argon/SidebarPlugin/index'
import NotificationPlugin from '@/components/argon/NotificationPlugin/index'
import globalComponents from './globalComponents'
import globalDirectives from './globalDirectives'

Vue.use(globalComponents)
Vue.use(globalDirectives)
Vue.use(SidebarPlugin)
Vue.use(NotificationPlugin)
