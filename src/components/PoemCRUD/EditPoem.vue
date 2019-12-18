<template>
    <div id="edit-poem">
        <h3>Redigera dikt</h3>
        <div class="row">
            <form @submit.prevent="updatePoem" class="NewPoem">
                <div class="row">
                    <div class="input-field col 12">
                        <input type="text" v-model="Rubrik" required />
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col 12">
                        <input type="text" v-model="PoemCont" required />
                    </div>
                </div>
                <button type="submit" class="btn">Submit</button>
                <router-link to="/" class="btn_Cancel">Cancel</router-link>
            </form>
        </div>
    </div>
</template>

<script>
import db from "../firebaseInit";
export default {
    name: "edit-poem",
    data() {
        return {
            Rubrik: null,
            PoemCont: null
        };
    },
    beforeRouteEnter(to, from, next) {
        db.collection("Poems")
            .where("Rubrik", "==", to.params.Rubrik)
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    next(vm => {
                        //  vm.id = doc.data().id;
                        vm.Rubrik = doc.data().Rubrik;
                        vm.PoemCont = doc.data().PoemCont;
                    });
                });
            });
    },

    watch: {
        $route: "fetchData"
    },
    methods: {
        fetchData() {
            db.collection("Poems")
                .where("Rubrik", "==", this.$route.params.Rubrik)
                .get()
                .then(querySnapshot => {
                    querySnapshot.forEach(doc => {
                        this.id = doc.data().id;
                        this.Rubrik = doc.data().Rubrik;
                        this.PoemCont = doc.data().PoemCont;
                    });
                });
        },
        updatePoem() {
            db.collection("Poems")
                .where("Rubrik", "==", this.$route.params.Rubrik)
                .get()
                .then(querySnapshot => {
                    querySnapshot.forEach(doc => {
                        doc.ref
                            .update({
                                Rubrik: this.Rubrik,
                                PoemCont: this.PoemCont
                            })
                            .then(() => {
                                this.$router.push({
                                    name: "view-poem",
                                    params: { Rubrik: this.Rubrik }
                                });
                            });
                    });
                });
        }
    }
};
</script>
<style scoped></style>
