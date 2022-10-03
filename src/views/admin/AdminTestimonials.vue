<template>
    <div>
        <h1>Testimonials section</h1>
         <table style="width:100%">
            <tr>
                <th>Id</th>
                <th>Stars</th>
                <th>Title</th>
                <th>Author</th>
                <th>Description</th>
                <th>Image</th>
                <th>Actions</th>
            </tr>

            <tr>
                <td>1</td>
                <td>5</td>

                <td>Scribe, The Mathics</td>
                <td>Abasiofon Peter</td>
                <td>Thank you Dealdrive technology. You did a great job and your service delivery is quite commendable.</td>
                <td><img style="width:100px; hieght:100px" src="/assets/images/mathics.jpeg" alt=""></td>
                <td>
                   <div class="button-section">
                        <button class="info" @click="toggleModal">Edit</button>
                        <button class="danger" >Delete</button>
                     </div> 
                </td>
            </tr>


            <tr>
                <td>1</td>
                <td>5</td>

                <td>Business Owner</td>
                <td>David Offiong</td>
                <td>Your services are top-notch bro I love how organized it is And yes the designs are superb! Well done!</td>
                <td><img style="width:100px; hieght:100px" src="/assets/images/moses.jpeg" alt=""></td>
                <td>
                   <div class="button-section">
                        <button class="info" @click="toggleModal">Edit</button>
                        <button class="danger" >Delete</button>
                     </div> 
                </td>
            </tr>


            

        </table>

        <BaseModal v-show="showModal" @closeModal="toggleModal">
            <h1 class="title">Testimonials Edit Form</h1>

            <form action="">
                <input type="file" placeholder="Chose image">
                <input type="text" placeholder="Star">
                <input type="text" placeholder="Id">
                <input type="text" placeholder="Title">
                <input type="text" placeholder="Author">
                

                <textarea name="" id="" cols="30" rows="10" placeholder="Main Description"></textarea>

                <button type="submit" class="success">Save</button>
            </form>
        </BaseModal>
    </div>
</template>

<script>
    import {ref} from 'vue'
import BaseModal from '../../components/BaseModal.vue';
    export default {
        setup(){
            let showModal=ref(false)

            function toggleModal() {
                showModal.value = !showModal.value
                console.log(showModal)
            }

            return{
                showModal,
                toggleModal
            }
        },
       components:{
        BaseModal
       } 
    }
</script>

<style scoped>

input::placeholder{
    font-size: 1.4rem;
}
.title{
    text-align: center;
}
div p{
    text-align: justify;
}


.success{
    background-color: green;
}
form input,textarea{
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

div>h1{
    text-align: center;
}

/* Table */
table,tr,td,th{
    border: 1px solid #aaa;
}

tr th{
  text-align: center; 
}
tr td{
    text-align: justify;
    padding: .8em;
}
</style>