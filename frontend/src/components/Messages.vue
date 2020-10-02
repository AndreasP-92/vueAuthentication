<template>
    <div>
        <h4>Messages</h4>
            <v-list>
                    <v-list-tile v-for="message in messages" @click="">
                        <v-list-tile-content>
                            <v-list-tile-title v-text="message">
                            </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>   
            </v-list>
        <ul v-for="message in messages">
            <li>{{message}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            messages : ["Hello", "Hi"]
        }
    }
}
</script>