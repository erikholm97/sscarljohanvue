<template>
    <div id="NewPoem">
        <h3>Ny dikt</h3>
        <div class = row>
            <form @submit.prevent="savePoem" class="NewPoem">
                <div class="row">
                    <div class="input-field col 12">
                        <input type="text" v-model="Rubrik" required>
                        <label>Diktens rubrik</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col 12">
                        <input type="text" v-model="PoemCont" required>
                        <label>Dikten</label>
                    </div>
                </div>
                <button type="submit" class="btn" >Submit</button>
                <router-link to="/" class="btn_Cancel">Cancel</router-link>
            </form>
        </div>
    </div>
</template>
<script>
import db from './firebaseInit'
    export default {
        name: 'new-poem',
        data(){
            return{
                Rubrik: null,           //Set the content of Poem rubrik to null.
                PoemCont: null,
            }
        },
        methods: {
            savePoem(){
               db.collection('Poems').add({
                   Rubrik: this.Rubrik,      //This.Rubrik is bound to v-model ="rubrik"
                   PoemCont: this.PoemCont
               }).catch(onerror => console.log(onerror));       //If any errors occurs, show it in console window.
                this.$router.push('/')
            }
        }
    }
</script>
