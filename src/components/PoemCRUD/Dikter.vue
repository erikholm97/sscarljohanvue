<template>
    <div id="AddPoem">
        <h1 class="page-header">Dikter</h1>
        <div class="poem">
            <ul class="collection-with-header">
                <li
                    v-for="Poems in poems"
                    v-bind:key="Poems.id"
                    class="collection-item"
                >
                    <!-- {{Poems.id}}  -->
                    <h2 class="poem-header">{{ Poems.Rubrik }}</h2>
                    <!--  This is the poems headline/rubrik/name(?) -->
                    <p>{{ Poems.PoemCont }}</p>
                    <!--  This is the actuall content of the poem-->

                    <router-link
                        class="secondary-content"
                        v-bind:to="{
                            name: 'view-poem',
                            params: { Rubrik: Poems.Rubrik }
                        }"
                    >
                        <!--Params sets the link in the browser to the poems rubrik.-->

                        <i class="fa fa-eye" />
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import db from "../firebaseInit";

export default {
    name: "AddPoem",
    data() {
        return {
            poems: []
        };
    },
    created() {
        db.collection("Poems")
            .orderBy("timestamp", "desc") //Orders by the timestamp. The poem that was added most recently is on the top of the list.
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    const data = {
                        id: doc.id, //Firebase given id to 'poem'           I don't even know why we need to push the firebase id...
                        // Poem_Id: doc.data().Poem_Id, //Our given Id to the poem UPDATE: fuck our given id.
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
.page-header {
    text-align: center;
}
.poem {
    .poem-header {
        text-align: left;
    }
    ul {
        list-style-type: none;
    }
}
</style>
