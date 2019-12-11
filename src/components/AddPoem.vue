<template>
    <div id="AddPoem">
        <ul class="collection with-header">
            <li class="collection-header">
                <h4>Poemss</h4>
            </li>
            <li v-for="Poems in poems" v-bind:key="Poems.id" class="collection-item">
                {{Poems.Rubrik}}
                {{Poems.PoemCont}}

            </li>
        </ul>
    </div>
</template>

<script>
    import db from './firebaseInit'
    export default {
        name: "AddPoem",
        data(){
            return{
                poems: []
            }
        },
        created() {
            db.collection('Poems').get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    const data = {
                        'id' : doc.id,              //Firebase given id to 'poem'
                        'Poem_Id' : doc.data().Poem_Id,         //Our given Id to the poem
                        'Rubrik' : doc.data().Rubrik,           //The "rubrik" to the poem
                        'PoemCont':doc.data().PoemCont          //The content of the poem, this is where the actually poem is stored.
                    }
                    this.poems.push(data)                   //This sends the data from firebase to div AddPoem
                })
            })
        }
    }
</script>

<style scoped>

</style>