<template>
    <div>
        <h1 class="section-title">Service section</h1>
        <table style="width:100%">
            <tr>
                <th>Title</th>
                <th>Short Description</th>
                <th>Description</th>
                <th>Image</th>
                <th>Actions</th>
            </tr>

            <tr>
                <td>Branding</td>
                <td>Our branding services is focused on to key areas of brand: Awareness and strategy. We make design that promote your awareness. We developed strategic road map to revamp your brand.</td>

                <td>Our branding services is focused on to key areas of brand: Awareness and strategy. We make design that promote your awareness. We developed strategic road map to revamp your brand. Features and benefit: Mobile: a  well design brand is mobile. Your customer carry you around. Memorable: when your customer remember an experience with your brand it is visual that the remember. Story: we provide design that help you tell stories that relate to your audience.</td>

                <td><img style="width:100px; hieght:100px" src="/assets/images/BRANDING.jpeg" alt=""></td>
                <td>
                   <div class="button-section">
                        <button class="info" @click="toggleModal">Edit</button>
                        <button class="danger" >Delete</button>
                     </div> 
                </td>
            </tr>

            <tr>
                <td>Website</td>
                <td>Our branding services is focused on to key areas of brand: Awareness and strategy. We make design that promote your awareness. We developed strategic road map to revamp your brand.</td>

                <td>Our branding services is focused on to key areas of brand: Awareness and strategy. We make design that promote your awareness. We developed strategic road map to revamp your brand. Features and benefit: Mobile: a  well design brand is mobile. Your customer carry you around. Memorable: when your customer remember an experience with your brand it is visual that the remember. Story: we provide design that help you tell stories that relate to your audience.</td>

                <td><img style="width:100px; hieght:100px" src="/assets/images/web.jpeg" alt=""></td>
                <td>
                   <div class="button-section">
                        <button class="info" @click="toggleModal">Edit</button>
                        <button class="danger" >Delete</button>
                     </div> 
                </td>
            </tr>

        </table>

        <BaseModal v-show="showModal" @closeModal="toggleModal">
            <h1 class="title">Service Edit Form</h1>

            <form action="">
                <input type="file" placeholder="Chose image">
                <input type="text" placeholder="Tittle">
                <input type="text" placeholder="Short description">

                <textarea name="" id="" cols="30" rows="10" placeholder="Main Description"></textarea>

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
.section-title{
    text-align: center;
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