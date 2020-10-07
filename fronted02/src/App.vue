<template>
  <v-app>
    <v-toolbar app>
      <v-btn flat>Messages</v-btn>
      <v-btn flat to="/NewMessage">New Message</v-btn>
      <v-spacer></v-spacer>
      <v-btn flat>Login</v-btn>
    </v-toolbar>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <router-view />
    <v-content>

    </v-content>
  </v-app>
</template>

<script>
import Messages from './components/Messages'
import NewMessage from './components/NewMessage'

export default {
  name: 'App',
  components: {
    Messages, NewMessage
  },
  data () {
    return {
      //
    }
  }
}
</script>
      // <br>
      // <NewMessage/>
      // <br>
      // <Messages/>