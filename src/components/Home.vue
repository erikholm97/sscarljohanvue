<template>
    <div class="page-content">
        <div class="side-block-img">
            <h1>Projektet & Muséet</h1>
            <img
                class="carl-johan-img"
                src="../assets/carljohan1.jpg"
                alt="steamboat"
            />
        </div>
        <div class="side-block-text">
            <h1>Projektet Carl Johan</h1>
            <p>
                På den här sidan kan du följa ångbåtsprojektet Carl Johan. Hålla
                dig uppdaterad kring händelser, event, tider & priser. Även
                hitta till Carl Johan Muséet, där du kan få reda på mer historia
                kring det vackra fartyget. Samtidigt som du gör en historisk
                vandring kring ångbåtens händelser och restaureringen av den.
                Utöver ångbåten Carl Johan finns det även båtmotorer, mopeder,
                motorcyklar, ångmaskiner samt erhålls även ett radio och
                grammofon-samlings-muséum. Hela ångbåtsprojektet är bekostat med
                egna medel och med god hjälp av vänner och bekanta. Vill jag
                passa på att tacka alla som hjälp till. Samtidigt som jag vill
                hälsa alla välkomna till Carl Johan/Radio och grammofon muséet i
                Romanäs.
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home",
    props: {}
};
</script>
<style scoped lang="scss">
.page-content {
    display: flex;
    align-items: center;

    .carl-johan-img {
        align-items: left;
        padding: 0px;
    }
    .side-block-text {
        padding: 30px;
    }
}
@media only screen and (max-width: 0px), only screen and (max-width: 1200px) {
    .page-content {
        display: block;

        .carl-johan-img {
            padding: 0 !important;
            width: 100%;
            height: auto;
        }
    }
}
</style>
