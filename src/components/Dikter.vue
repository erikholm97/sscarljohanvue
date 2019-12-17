<template>
    <div id="AddPoem">
        <h1>Dikter</h1>
        <ul class="collection with-header">
            <li class="collection-header">
                <h4>Poems</h4>
            </li>
            <li
                    v-for="Poems in poems"
                    v-bind:key="Poems.id"
                    class="collection-item"
            >
               <!-- {{Poems.id}}  -->
                {{ Poems.Rubrik }}          <!--  This is the poems headline/rubrik/name(?) -->
                {{ Poems.PoemCont }}            <!--  This is the actuall content of the poem-->


                <router-link class="secondary-content" v-bind:to="{name: 'view-poem', params:{id: Poems.id}}">
                    <i class="fa fa-eye"/>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import db from "./firebaseInit";

    export default {
        name: "AddPoem",
        data() {
            return {
                poems: []
            };
        },
        created() {
            db.collection("Poems")
                .get()
                .then(querySnapshot => {
                    querySnapshot.forEach(doc => {
                        const data = {
                            id: doc.id, //Firebase given id to 'poem'
                           // Poem_Id: doc.data().Poem_Id, //Our given Id to the poem
                            Rubrik: doc.data().Rubrik, //The "rubrik" to the poem
                            PoemCont: doc.data().PoemCont //The content of the poem, this is where the actually poem is stored.
                        };
                        this.poems.push(data); //This sends the data from firebase to div AddPoem
                    });
                });
        }
    };
</script>
<style scoped lang="scss">
    h1 {
        text-align: center;
    }
</style>
