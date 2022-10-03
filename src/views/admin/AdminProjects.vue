<template>
    <div>
        <h1>Projects section</h1>
        <table style="width:100%">
            <tr>
                <th>Id</th>
                <th>Class</th>
                <th>Name</th>
                <th>Short Description</th>
                <th>Full-desc Aim</th>
                <th>Full-desc Gap</th>
                <th>Full-desc solution</th>
                <th>Full-desc Optimization</th>
                <th>Result Title</th>
                <th>Result Data</th>
                <th>Image</th>
                <th>Actions</th>
            </tr>

            <tr>
                <td>1</td>
                <td>filter-brand</td>

                <td>De String Electrical</td>
                <td>They provide electrical installations and conduit wiring.</td>

                <td>De String Electrical wants to create their brand identity to have a unified brand designs across all their touch points. They want a design that can connect to their audience. Most importantly, to generate more sales and grow their profit margin.</td>

                <td>De String Electrical wants to create their brand identity to have a unified brand designs across all their touch points. They want a design that can connect to their audience. Most importantly, to generate more sales and grow their profit margin.</td>

                <td>De String Electrical wants to create their brand identity to have a unified brand designs across all their touch points. They want a design that can connect to their audience. Most importantly, to generate more sales and grow their profit margin.</td>

                <td>De String Electrical wants to create their brand identity to have a unified brand designs across all their touch points. They want a design that can connect to their audience. Most importantly, to generate more sales and grow their profit margin.</td>

                <td>De String Electrical wants to create their brand identity to have a unified brand designs across all their touch points. They want a design that can connect to their audience. Most importantly, to generate more sales and grow their profit margin.</td>

                

                <td>De String Electrical wants to create their brand identity to have a unified brand designs across all their touch points. They want a design that can connect to their audience. Most importantly, to generate more sales and grow their profit margin.",
                    </td>

                    <td><img style="width:100px; hieght:100px" src="/assets/images/projects/branding/DSTRING.jpg" alt=""></td>


                <td> 
                   <div class="button-section">
                        <button class="info" @click="toggleModal">Edit</button>
                        <button class="danger" >Delete</button>
                     </div> 
                </td>
            </tr>

            <tr>
                <td>1</td>
                <td>filter-brand</td>

                <td>De String Electrical</td>
                <td>They provide electrical installations and conduit wiring.</td>

                <td>De String Electrical wants to create their brand identity to have a unified brand designs across all their touch points. They want a design that can connect to their audience. Most importantly, to generate more sales and grow their profit margin.</td>

                <td>De String Electrical wants to create their brand identity to have a unified brand designs across all their touch points. They want a design that can connect to their audience. Most importantly, to generate more sales and grow their profit margin.</td>

                <td>De String Electrical wants to create their brand identity to have a unified brand designs across all their touch points. They want a design that can connect to their audience. Most importantly, to generate more sales and grow their profit margin.</td>

                <td>De String Electrical wants to create their brand identity to have a unified brand designs across all their touch points. They want a design that can connect to their audience. Most importantly, to generate more sales and grow their profit margin.</td>

                <td>De String Electrical wants to create their brand identity to have a unified brand designs across all their touch points. They want a design that can connect to their audience. Most importantly, to generate more sales and grow their profit margin.</td>

                

                <td>De String Electrical wants to create their brand identity to have a unified brand designs across all their touch points. They want a design that can connect to their audience. Most importantly, to generate more sales and grow their profit margin.",
                    </td>

                    <td><img style="width:100px; hieght:100px" src="/assets/images/projects/branding/DSTRING.jpg" alt=""></td>


                <td> 
                   <div class="button-section">
                        <button class="info" @click="toggleModal">Edit</button>
                        <button class="danger" >Delete</button>
                     </div> 
                </td>
            </tr>

           

        </table>


        <BaseModal v-show="showModal" @closeModal="toggleModal">
            <h1 class="title">Projects Edit Form</h1>

            <form action="">
                
                <input type="text" placeholder="Id">
                <select name="" id="">
                    <option value="">---Select Class---</option>
                    <option value="filter-web">Web</option>
                    <option value="filter-brand">Brand</option>
                </select>
                <input type="text" placeholder="Name">

                
                <input type="file" placeholder="Chose image">

                <textarea name="" id="" cols="30" rows="10" placeholder="Full-desc Aim"></textarea>

                <textarea name="" id="" cols="30" rows="10" placeholder="Full-desc Gap"></textarea>

                <textarea name="" id="" cols="30" rows="10" placeholder="Full-desc Solution"></textarea>

                <textarea name="" id="" cols="30" rows="10" placeholder="Full-desc Optimization"></textarea>

                <textarea name="" id="" cols="30" rows="10" placeholder="Result Title"></textarea>

                <textarea name="" id="" cols="30" rows="10" placeholder="Result Data"></textarea>

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
form input,textarea,select{
    width: 100%;
    margin-top: 2em;
}
input,select{
    padding: 1em;
    
}
select option{
    padding: 2em;
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