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
                
                <button @click="isActiveChange(nav.name)" v-for="nav in navigation" :key="nav.name" :to="nav.to"><li>{{nav.name}}</li><i class="fa-solid fa-user"></i></button>


                <button class="logout" to="{name:'Home'}" ><li>Logout</li><i>icon</i></button>
            </ul>
        </section>
        <section class="topnav">
            <h3>DealDrive Admin</h3>
            <p class="fa-solid fa-bell"></p>
        </section>
        <section class="main">

            <Adminhome v-if="isActive==='Home'"/>
            <Adminservices v-if="isActive==='Services'"/>
            <Adminabout v-if="isActive==='About'"/>
        </section>
    </div>

   
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import Adminhome from '../../components/admin/Adminhome.vue';
import Adminservices from '../../components/admin/Admin-services.vue';
import Adminabout from '../../components/admin/Admin-about.vue';
import { HomeIcon } from "@vue-hero-icons/outline"




    export default {
        setup(){

            const store = useStore();
            const navigation=computed(()=>{
            return store.state.adminnavigation
            })

            const route = useRoute();


            

            
            
            return{
                navigation,
                
            }
        },

        data(){
            return{
                isActive: "Home"
            }
        },
        methods:{
            isActiveChange(name){
                this.isActive=name
            }
        },
        components:{
           Adminhome,
           Adminservices,
           Adminabout
        }

        
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
    margin-top: 10em;
    height: 100vh;
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

.sidenav ul{
    list-style-type: none;
    display: flex;
    flex-direction: column;
    flex: 1;
    
}
.sidenav ul button{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #642afb;
    border-radius: 5px;
}
.sidenav ul button {
    padding: 1em;
    margin: .5em;
    cursor: pointer;
    border: none;
    font-size: 1rem;
}

.sidenav ul button:hover {
    background-color: hsl(39, 94%, 62%);
    border-radius: 5px;
}
.sidenav ul .logout {
    margin-top: auto;
}
.header div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1em;

    flex: 1;
}
</style>