<template>
  <div id="app">
    <messages/>
  </div>
</template>

<script>
import Messages from './components/Messages.vue'

export default {
  name: 'App',
  components: {
    Messages : ["first", "seccond"]
  }
}
</script>

