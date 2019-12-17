<template>
    <div id="view-poem">
        <h2>Yobro</h2>
<ul class="collection with-header">
    <li class="collection-header"><h4>Rubrik: {{Rubrik}}</h4></li>
    <li class="collection-item">Dikt: {{PoemCont}}</li>

</ul>
        <router-link to="/" class="btn grey" >Till startsidan</router-link>

        <button @click="deletePoem" class="btn_Delete" >Radera</button>

        <router-link v-bind:to="{ name: 'edit-poem', params: { Rubrik: Rubrik } }">
            <i class="fa fa-pencil"/>
        </router-link>
    </div>
 </template>

 <script>
 import db from "../firebaseInit";
 export default {
     name: "ViewPoem",
     data() {
         return {
            id: null,
             Rubrik: null,
             PoemCont: null
         }
     },
  beforeRouteEnter(to, from, next) {
         db.collection("Poems")
             .where("Rubrik", "==", to.params.Rubrik)           //Preferably, we would have the firebase ID as the identifier for each poem. But it doesn't work.
             .get()                                                             //So now, we have the "rubrik" instead. Which is fucking retarded.
             .then(querySnapshot => {                                           //We could fix this, through an auto incr, but firebase doesn't have that. Cuz fuck u
                 querySnapshot.forEach(doc => {                        //Anyway, this shit gets the data from Firebase, before we enter this subpage.
                     next(vm => {
                       //  vm.id = doc.data().id;                               //Commented out the ID, since firasebase ID thing does fuck all.
                         vm.Rubrik = doc.data().Rubrik;                         //Also just realised, we can't keep track of the god damn poems now since we don't have a timestap or shit on them.
                         vm.PoemCont = doc.data().PoemCont;
                     })
                 })
             })
     },

     watch: {
         '$route': 'fetchData'
     },
     methods: {
         fetchData() {
             db.collection("Poems")
                 .where("Rubrik", "==", this.$route.params.Rubrik)
                 .get()
                 .then((querySnapshot) => {
                     querySnapshot.forEach((doc) => {
                         this.id = doc.data().id;
                         this.Rubrik = doc.data().Rubrik;
                         this.PoemCont = doc.data().PoemCont;
                     })
                 })
         },
         deletePoem(){
             if(confirm('Vill du verkligen radera denna dikten?')){
                 db.collection("Poems")
                     .where("Rubrik", "==", this.$route.params.Rubrik)
                     .get()
                     .then((querySnapshot) => {
                         querySnapshot.forEach((doc) => {
                            doc.ref.delete()
                            this.$router.push('/')

                         })
                     })

             }

         }

     }
 }

 </script>

 <style scoped></style>
