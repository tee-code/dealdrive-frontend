<template>
    <div>
        <h1>FAQ section</h1>
        <table style="width:100%">
            <tr>
                <th>Id</th>
                <th>Question</th>
                <th>Answer</th>
                <th>Actions</th>
            </tr>

            <tr>
                <td>0</td>
                <td>How much will it cost to design and build my website?</td>

                <td>Each business's needs are different, so due to variations in scope, pricing from one app development to the next can be quite different. Our typical end-to-end app development costs N100,000-N100,000,000. If you’d like a more detailed breakdown of the pricing, request for a quote to get a copy of our pricing sheet.</td>

                
                <td>
                   <div class="button-section">
                        <button class="info" @click="toggleModal">Edit</button>
                        <button class="danger" >Delete</button>
                     </div> 
                </td>
            </tr>

            <tr>
                <td>1</td>
                <td>Why do i need a custom application?</td>

                <td>Custom applications can be a web app that runs on the browser or software that can be install to run to on your device. Building a custom application is dependent on the use case. You may want to build a custom app for your production system, to help you maintain a consistent product. You may want to build a sales app for your sales team.</td>

                
                <td>
                   <div class="button-section">
                        <button class="info" @click="toggleModal">Edit</button>
                        <button class="danger" >Delete</button>
                     </div> 
                </td>
            </tr>

        </table>

        <BaseModal v-show="showModal" @closeModal="toggleModal">
            <h1 class="title">FAQ Edit Form</h1>

            <form action="">
                
                <input type="text" placeholder="Id">
                

                <textarea name="" id="" cols="30" rows="10" placeholder="Question"></textarea>

                <textarea name="" id="" cols="30" rows="10" placeholder="Answer"></textarea>

                <button type="submit" class="success">Save</button>
            </form>
        </BaseModal>
    </div>
</template>

<script>
    import {ref} from 'vue'
import BaseModal from '../BaseModal.vue';
    export default {
        setup(){
            let showModal=ref(false)

            function toggleModal() {
                showModal.value = !showModal.value
                
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