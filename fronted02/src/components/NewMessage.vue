<template>
  <v-form>
    <v-container>
        <v-layout>
            <v-flex xs12 md4>
                <v-text-field
                    label="Message"
                    required
                ></v-text-field>
  

            </v-flex>
        </v-layout>
        <v-btn @click="">submit</v-btn>
    </v-container>
  </v-form>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      messages: ["hello", "hi", "its working"]
    };
  },
  async created(){
    const urlMessages = ('http://localhost:3000/messages')
    this.messages = (await axios.get(urlMessages)).data;
  }
};
</script>
<script>
  export default {
    data: () => ({
      valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }),
  }
</script>