<template>
    <div>
         <!-- ======= Header ======= -->
  <header id="header" class="header fixed-top d-flex align-items-center">

    <div class="d-flex align-items-center justify-content-between">
      <a href="#" class="logo d-flex align-items-center">
        <img src="/assets/images/picnobg.png" alt="">
        <span class="d-none d-lg-block">Dealdrive</span>
      </a>
      <i class="bi bi-list toggle-sidebar-btn" @click="toggle"></i>
    </div><!-- End Logo -->

    <nav class="header-nav ms-auto">
      <ul class="d-flex align-items-center">
        <li class="nav-item dropdown pe-3">

          <a class="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
            <img src="/assets/images/picnobg.png" alt="Profile" class="rounded-circle">
            <span class="d-none d-md-block dropdown-toggle ps-2">{{ user.email }}</span>
          </a><!-- End Profile Iamge Icon -->

          <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
            <li class="dropdown-header">
              <h6>{{ user.name }}</h6>
              <span>{{ user.role }}</span>
            </li>
            <li>
              <hr class="dropdown-divider">
            </li>

            <!-- <li>
              <a class="dropdown-item d-flex align-items-center" href="users-profile.html">
                <i class="bi bi-person"></i>
                <span>My Profile</span>
              </a>
            </li> -->
            <li>
              <hr class="dropdown-divider">
            </li>
        
            <li>
                <router-link to="{name:'adminDashBoard'}" class="dropdown-item d-flex align-items-center" @click="logout">
                    <i class="bi bi-box-arrow-right"></i>
                <span>Sign Out</span>
                </router-link>
        
            </li>

          </ul><!-- End Profile Dropdown Items -->
        </li><!-- End Profile Nav -->

      </ul>
    </nav><!-- End Icons Navigation -->

  </header><!-- End Header -->

  <div class="container-fluid">
    <div class="row">
    <!-- ======= Sidebar ======= -->
      <aside id="sidebar" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">

        <ul class="sidebar-nav" id="sidebar-nav">

          <li class="nav-item">
            
            <a class="nav-link " href="/home">
              <i class="bi bi-grid"></i>
              <span>Main Site</span>
            </a>

          </li><!-- End Dashboard Nav -->

          <li class="nav-item">
            <router-link class="nav-link collapsed" v-for="nav in navigation" :key="nav.name" :to="{name:nav.to.name}">
            
              <i :class=nav.icon></i><span>{{nav.name}}</span>
            </router-link>
          
          </li><!-- End Components Nav -->

        </ul>

      </aside><!-- End Sidebar-->

      <main id="main" class="col-md-9 ml-sm-auto col-lg-9 px-md-4 py-4">
        <div class="container">
          <div class="pagetitle">
            <h1>Dashboard</h1>
            <nav>
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                <li class="breadcrumb-item active">Dashboard</li>
              </ol>
            </nav>
          </div><!-- End Page Title -->
  
          <section class="section dashboard">
            <div class="row">
              <router-view></router-view>
            </div>
          </section>
        </div>
       

      </main><!-- End #main -->
    </div>
  </div>

  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

        <!-- <header class="header">
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
            <h3>Dealdrive</h3>
            <p style="color:green" class="fa fa-bell fa-2x"></p>
        </section>

        <section class="main">

            <div class="main-navigation">
                <div class="main-card"><h2>Dashboard</h2></div>
            </div>
        
                <div class="content">
                    
                     <router-view></router-view>
                </div>


               
            

            
            
            
        </section> -->
        
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

const user = JSON.parse(sessionStorage.getItem('user')) || {};

let isActive = ref("Home");

function isActiveChange(name){
    isActive=name
}
function toggle(){
    document.querySelector('body').classList.toggle('toggle-sidebar')
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

  @import url('https://fonts.gstatic.com');
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i');
  
  @import url('/assets/ourvendor/bootstrap/css/bootstrap.min.css');
  @import url('/assets/ourvendor/bootstrap-icons/bootstrap-icons.css');
  @import url('/assets/ourvendor/boxicons/css/boxicons.min.css');
  @import url('/assets/ourvendor/quill/quill.snow.css');
  @import url('/assets/ourvendor/quill/quill.bubble.css');
  @import url('/assets/ourvendor/remixicon/remixicon.css');
  @import url('/assets/ourvendor/simple-datatables/style.css');
  
  @import url('/assets/style.css');
/**

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

**/
</style>