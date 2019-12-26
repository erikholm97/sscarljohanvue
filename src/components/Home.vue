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
            <h1>Ångbåtsprojektet Carl Johan</h1>
            <p>
                Välkommen till sidan om ångbåtsprojektet Carl Johan. Här hittar
                du information om båten, projektet och dess historia. Du kan
                även hålla dig uppdaterad kring olika händelser som berör båten
                och evangemang. Ett besök på muséet kommer ge dig en hisorisk
                vandring genom ångbåtens händelser och restaureringen av den.
                Utöver ångbåten finner du motorfordon som mopeder och
                motorcyklar. Men även båtmotorer, ångmaskiner och en radio och
                grammofon-samling.
                <br />Projektet är bekostat av egna medel av mig (Lennart Holm)
                och med god hjälp av vänner och bekanta.
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
    animation: animation 3s alternate;
    h1 {
        text-align: left;
    }
    .carl-johan-img {
        align-items: left;
        padding: 0px;
    }
    .side-block-text {
        padding: 30px;
    }
    p {
        letter-spacing: normal;
    }
}
@keyframes animation {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
@media only screen and (max-width: 0px), only screen and (max-width: 1200px) {
    .page-content {
        display: block;
        h1 {
            text-align: center;
        }
        .carl-johan-img {
            padding: 0 !important;
            width: 100%;
            height: auto;
        }
    }
}
</style>
