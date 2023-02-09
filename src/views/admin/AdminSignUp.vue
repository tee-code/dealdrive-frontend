<template>
    <section class="vh-100 p-1">
        <div class="container py-2 h-100">
          <div class="row d-flex align-items-center justify-content-center h-100">
            <div class="col-md-8 col-lg-7 col-xl-6">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                class="img-fluid" alt="Phone image">
            </div>
            <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form @submit="register" method="POST">
                <div
                    v-if="errors && Object.keys(errors).length"
                    class="alert alert-danger"
                >
                    <div v-for="(field, i) of Object.keys(errors)" :key="i">
                        <div v-for="(error, ind) of errors[field] || []" :key="ind">
                            * {{ error }}
                        </div>
                    </div>
                </div>
                <!-- Name input -->
                <div class="form-outline mb-4">

                    <input 
                      type="text"
                      name="name"
                      v-model="user.name"
                      :errors="errors"
                      placeholder="Name"
                      id="form1Example11" 
                      class="form-control form-control-lg"
                      required
                      />
                    <label class="form-label" for="form1Example11">Name</label>
                  </div>
                <!-- Email input -->
                <div class="form-outline mb-4">

                  <input 

                    type="email"
                    name="email"
                    v-model="user.email"
                    :errors="errors"
                    placeholder="Email Address"
                    id="form1Example13" 
                    class="form-control form-control-lg"
                    required
                    />
                  <label class="form-label" for="form1Example13">Email address</label>
                </div>
      
                <!-- Password input -->
                <div class="form-outline mb-4">
                  <input 
                    type="password"
                    name="password"
                    v-model="user.password"
                    :errors="errors"
                    placeholder="Password"
                    id="form1Example23" 
                    class="form-control form-control-lg" 
                    required
                    />
                  <label class="form-label" for="form1Example23">Password</label>
                </div>

                 <!-- Confirm Password input -->
                 <div class="form-outline mb-4">
                    <input 
                        type="password"
                        name="password_confirmation"
                        v-model="user.password_confirmation"
                        :errors="errors"
                        placeholder="Confirm Password"
                        id="form1Example23" 
                        class="form-control form-control-lg" 
                        required
                      />
                    <label class="form-label" for="form1Example23">Password</label>
                  </div>
      
                
                <!-- Submit button -->
                <button type="submit" class="btn btn-primary btn-lg btn-block">Sign up</button>
      
              </form>

              <div class="divider d-flex align-items-center my-4">
                <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
               </div>
    
                <a href="/admin/login" class="btn btn-primary btn-lg btn-block" style="background-color: #3b5998">
                    Sign In
                </a>

            </div>
          </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import BaseModal from '../../components/BaseModal.vue';


const store = useStore();

const router = useRouter();

const user = {
  name: "",
  email: "",
  password: "",
};

const loading = ref(false);

const errors = ref({});

function register(ev) {
  ev.preventDefault();
  loading.value = true;
  store
    .dispatch("register", user)
    .then((data) => {

        if(data.token){
            // console.log(errors, ' errors ');
            console.log(data, data.token);

            loading.value = false;

            errors.value = {};

            router.push({
                name: "adminDashBoard",
            });

        }else{
            errors.value = data.data;
        }
        
    })
    .catch((error) => {
        // console.log(error);
    
      loading.value = false;

      if (error.success === false) {
        errors.value = error.data;
      }

    });

}


</script>

<style  scoped>

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
    padding: .5em;
}

form button{
    width: 100%;
    margin-bottom: 2em;
    padding: .2em;
    font-size: 1rem;
}

section {
    overflow: auto;
}

</style>