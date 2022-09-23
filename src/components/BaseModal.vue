<template>
    <!-- <Teleport to="body"> -->
        <div id="modal">
        <div class="modal-content">
            <div>
                <button @click="$emit('closeModal')">Close</button>
            </div>
            <slot />

            
            
        </div>
    </div>
    <!-- </Teleport> -->
    
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
#modal{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: black;
    opacity: .9;

    display: flex;
    justify-content: center;
    
}
.modal-content{
    background-color: white;
    width: auto;
    height: auto;
    margin: 3em auto;
    padding: .9em;
    opacity: 0.9;
}

button{
    display: inline;
    background-color: hsl(39, 94%, 62%);
}
</style>