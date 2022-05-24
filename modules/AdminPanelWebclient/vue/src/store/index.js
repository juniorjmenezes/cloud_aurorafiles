import Vue from 'vue'
import Vuex from 'vuex'

import user from './user'
import main from './main'
import tenants from './tenants'
import groups from './groups'
import invitationlink from 'src/../../../InvitationLinkWebclient/vue/store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    main,
    user,
    tenants,
    groups,
    invitationlink,
  },

  strict: process.env.DEV
})
