<template>
    <div id="admin">
        <header class="header">
            <div>
                <h3>WELCOME</h3>
                <p>ADMIN</p>
            </div>
        </header>

        <section class="sidenav">
            <ul >
                
                <router-link v-for="nav in navigation" :key="nav.name" :to="{name:nav.to.name}"><li>{{nav.name}}</li><i :class=nav.icon :style=nav.color></i></router-link>


                <router-link to="{name:'adminDashBoard'}" class="logout" @click="logout"><li>Logout</li><i style="color:red" class="fa fa-power-off fa-2x"></i></router-link>
            </ul>
        </section>

        <section class="topnav">
            <h3>DealDrive Admin</h3>
            <p style="color:green" class="fa fa-bell fa-2x"></p>
        </section>

        <section class="main">

            <div class="main-navigation">
                <div class="main-card"><h2>Users</h2></div>
            </div>
        
                <div class="content">
                    
                     <router-view></router-view>
                </div>


               
            

            
            
            
        </section>
        
    </div>

   
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';


// getting Admin navigation
const store = useStore(); 
const router = useRouter();
const route = useRouter();

const navigation=computed(()=>{
    return store.state.adminnavigation
});

let isActive = ref("Home");

function isActiveChange(name){
    isActive=name
}

function logout() {

    store.dispatch("logout").then(() => {
        router.push({
        name: "Adminlogin",
        });
    });

}           

</script>

<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-weight: normal;
}
body,html{
    height: 100%;
}
#admin{
    
    height: 100%;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(12, 1fr);
}
.header{
    grid-column: 1/3;
    grid-row: 1/3;
    border-right: 1px solid #aaa;
    display: flex;
    background-color: hsl(39, 94%, 62%);
}
.topnav{
    grid-column: 3/-1;
    grid-row: 1/2;
    border-bottom: 1px solid #aaa;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5em;
    background-color: #642afb;
}
.sidenav{
    grid-column: 1/3;
    grid-row: 3/-1;
    border-right: 1px solid #aaa;
    border-top: 1px solid #aaa;
    display: flex;
    background-color: rgb(248, 246, 246);
}

.main{
    grid-column: 3/-1;
    grid-row: 2/-1;
    background-color: rgb(248, 246, 246);
}
.main .content{
    width: 95%;
    margin: 0 auto;
    overflow: auto;
    /* border: 1px solid #aaa; */
    padding: 0.9em;
}
.sidenav ul{
    list-style-type: none;
    display: flex;
    flex-direction: column;
    flex: 1;
    
}
.sidenav ul a{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #642afb;
    border-radius: 5px;
}
.sidenav ul a {
    padding: 1em;
    margin: .5em;
    cursor: pointer;
    border: none;
    font-size: 1rem;
}

.sidenav ul a li {
    font-size: 1.5rem;
}

.sidenav ul a:hover {
    background-color: hsl(39, 94%, 62%);
    border-radius: 5px;
}

.sidenav ul .logout {
    margin-top: 5em;
}
.header div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1em;

    flex: 1;
}

/* main navigation */
.main-navigation{
    border-bottom: 1px solid #aaa;
    margin-bottom: 5em;
    padding: .5em;
    display: flex;
    justify-content: center;
    gap: .5em;
}
.main-card{
    width: 80%;
    padding: .9em;
    background-color: #e49300;
    border-radius: .5em;
    cursor: pointer;
}
.main-card:hover{
    background-color: white;
}

.main-card h2{
    text-align: center;
}
@media screen  and (min-width: 500px){
    .main-card{
        width: 350px;
    }
}
</style>