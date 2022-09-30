<template>
    <div id="wrapper">
        <div class="content">
            <h1>Oops!!! 404 Error</h1>
            <h3>Page Not Found</h3>
            <p>please check the URL</p>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
#wrapper{
    margin: 7em 7em;
    display: flex;
    justify-content: center;
    align-content: center;
}

.content{
    flex-basis: 80%;
    box-shadow: 1px 1px 3px #aabb;
}
.content *{
    text-align: center;
}
</style>