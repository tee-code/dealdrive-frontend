<template>
    <div id="wrapper">
        <BaseModal>
            <h1 class="title">Login</h1>

            <form action="">
                <input type="text" placeholder="Username">
                <input type="password" placeholder="Password">

                <button type="submit" class="success">Save</button>
            </form>
        </BaseModal>
    </div>
</template>

<script setup>
   import BaseModal from '../../components/BaseModal.vue';

</script>

<style scoped>

#wrapper{
    margin-top: 7em;
}


.title{
    text-align: center;
}
.success{
    background-color: green;
}
form input,button{
    width: 100%;
    margin-top: 2em;
}
input{
    padding: 1em;
    
}
form button{
    width: 100%;
    margin-bottom: 2em;
    padding: .2em;
    font-size: 2rem;
}


</style>