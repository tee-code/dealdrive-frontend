<template>
    <section class="vh-100">
        <div class="container py-5 h-100">
          <div class="row d-flex align-items-center justify-content-center h-100">
            <div class="col-md-8 col-lg-7 col-xl-6">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                class="img-fluid" alt="Phone image">
            </div>
            <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form @submit="login" method="POST">
                <span v-if="errorMsg"
                    @click="errorMsg = ''"
                    class="alert alert-danger"
                >
                {{ errorMsg }}
                </span>
                <!-- Email input -->
                <div class="form-outline mb-4">
                  <input 
                   
                    name="email"
                    
                    autocomplete="email"
                    required=""
                    v-model="user.email"
                    placeholder="Email address"
                    type="email" 
                    id="form1Example13" 
                    class="form-control form-control-lg" />
                  <label class="form-label" for="form1Example13">Email address</label>
                </div>
      
                <!-- Password input -->
                <div class="form-outline mb-4">
                  <input 
                    name="password"
                    type="password"
                    autocomplete="current-password"
                    
                    v-model="user.password"
                    placeholder="Password"
                    id="form1Example23" 
                    class="form-control form-control-lg" 
                    required
                    />
                  <label class="form-label" for="form1Example23">Password</label>
                </div>
      
                <div class="d-flex justify-content-around align-items-center mb-4">
                  <!-- Checkbox -->
                  
                  <a href="#!">Forgot password? Contact Dealdrive Admin.</a>
                </div>
      
                <!-- Submit button -->
                <button type="submit" class="btn btn-primary btn-lg btn-block">Sign in</button>
      
              </form>

               <div class="divider d-flex align-items-center my-4">
                <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
               </div>
    
                <a href="/admin/signup" class="btn btn-primary btn-lg btn-block" style="background-color: #3b5998">
                    Sign Up
                </a>

            </div>
          </div>
        </div>
    </section>

</template>

<script setup>

import BaseModal from '../../components/BaseModal.vue';
import { useRouter } from "vue-router";
import { ref } from "vue";
import { useStore } from 'vuex';

const router = useRouter();

const store = useStore();

const user = {
  email: "",
  password: "",
};
let loading = ref(false);

let errorMsg = ref("");

function login(ev) {

  ev.preventDefault();

  loading.value = true;

  store
    .dispatch("login", user)
    .then(() => {
      loading.value = false;
      router.push({
        name: "adminDashBoard",
      });
    })
    .catch((err) => {
    
      loading.value = false;
      errorMsg.value = err.response.data.error;
    });
}

</script>

<style scoped>

section{
    overflow: auto;
}

.title{
    text-align: center;
}
.success{
    background-color: green;
}
form input,button{
    width: 100%;
    margin-top: 1em;
}
input{
    padding: 1em;
}
form button{
    width: 100%;
    margin-bottom: 1em;
    padding: .2em;
    font-size: 1.3rem;
}


</style>