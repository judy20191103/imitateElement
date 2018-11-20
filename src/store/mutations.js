import { LOGIN } from './mutation-types.js'

export default {
  [LOGIN] (state, { login }) {
    state.login = login
    console.error('login')
  }
}
