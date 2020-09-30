<template>
    <div>
        <h4>Messages</h4>
        <ul v-for="message in messege">
            <li>{{message}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            message : ["Hello", "Hi"]
        }
    }
}
</script>