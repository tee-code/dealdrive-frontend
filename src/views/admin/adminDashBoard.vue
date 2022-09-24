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
                
                <button @click="isActiveChange(nav.name)" v-for="nav in navigation" :key="nav.name" :to="nav.to"><li>{{nav.name}}</li><i :class=nav.icon :style=nav.color></i></button>


                <button class="logout" to="{name:'Home'}" ><li>Logout</li><i style="color:red" class="fa fa-power-off fa-2x"></i></button>
            </ul>
        </section>

        <section class="topnav">
            <h3>DealDrive Admin</h3>
            <p style="color:green" class="fa fa-bell fa-2x"></p>
        </section>

        <section class="main">

            <div class="main-navigation">
                <div class="main-card"><h2>Users section</h2></div>
            </div>
        
                <div class="content">
                    <Adminhome v-if="isActive==='Home'"/>
                    <Adminservices v-if="isActive==='Services'"/>
                    <Adminabout v-if="isActive==='About'"/>
                    <Admintestimonails v-if="isActive==='Testimonials'"/>
                    <Adminslides v-if="isActive==='Slides'"/>
                    <Adminprojects v-if="isActive === 'Projects'"/>
                    <Adminfaq v-if="isActive === 'FAQ'"/>

                </div>
            

            
            
            
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
import Admintestimonails from '../../components/admin/Admin-testimonials.vue';
import Adminslides from '../../components/admin/Admin-slides.vue';
import Adminprojects from '../../components/admin/Admin-projects.vue';
import Adminfaq from '../../components/admin/Admin-faq.vue';








    export default {
        setup(){

            // getting Admin navigation
            const store = useStore(); 
            const navigation=computed(()=>{
            return store.state.adminnavigation
            })

            const route = useRoute();

            

            // return necessary variable for output
            return{
                navigation
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
           Adminabout,
           Admintestimonails,Adminslides,Adminprojects,
           Adminfaq
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
    width: 80%;
    margin: 0 auto;
    border: 1px solid #aaa;
    padding: 0.9em;
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

.sidenav ul button li {
    font-size: 1.5rem;
}

.sidenav ul button:hover {
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

.main-navigation{
    border-bottom: 1px solid #aaa;
    margin-bottom: 5em;
    padding: .5em;
    display: flex;
    justify-content: center;
}
.main-card{
    width: 80%;
    padding: .9em;
    background-color: rgb(100, 173, 100);
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