<template>
    <div >

        <BaseModal :showButton=false>
            
        <h1 class="title">Register Admin</h1>

           <form class="mt-8" @submit="register">

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
            <input type="hidden" name="remember" value="true" />
            <input
            name="name"
            v-model="user.name"
            :errors="errors"
            placeholder="Full Name"
            />
            <input
            type="email"
            name="email"
            v-model="user.email"
            :errors="errors"
            placeholder="Email Address"
            />
            <input
            type="password"
            name="password"
            v-model="user.password"
            :errors="errors"
            placeholder="Password"
            />
            <input
            type="password"
            name="password_confirmation"
            v-model="user.password_confirmation"
            :errors="errors"
            placeholder="Confirm Password"
            />
            
            <button type="submit" class="success">Register</button>

        </form>
        </BaseModal>
    </div>
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
form{
    width: 50%;
    margin: 0 auto;
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