<template>
    <div class="page-content">
        <div class="side-block-img">
            <h1>Fakta om ångbåten/projektet</h1>
            <img
                src="../assets/InfoImg.jpg"
                class="carl-johan-img"
                alt="steamboat picture"
            />
        </div>
        <div class="side-block-text">
            <ul>
                <li>
                    <p><strong>Längd:</strong> 85 fot</p>
                </li>
                <li>
                    <p><strong>Bredd: </strong> 17 fot</p>
                </li>
                <li>
                    <p><strong>Djupgående: </strong> 6 fot</p>
                </li>
                <li>
                    <p>
                        <strong>Maskinen: </strong> Maskinen är en
                        compoundmaskin (med strålkondensor) på cirka 35-40 hp,
                        55 ind hp.
                    </p>
                </li>
                <li>
                    <p>
                        <strong>Fartyget är byggt av:</strong>
                        Motala verkstads ingenjörer och skeppsstrongyggmästare,
                        även hantverkare från strongygden runt Sommen.
                    </p>
                </li>
            </ul>
        </div>
    </div>
    <!--
    <div class="page-content">
        <div class="info-text">
            <h1 class="facts-header">Fakta om ångbåten/projektet</h1>
            <img
                src="../assets/InfoImg.jpg"
                class="carl-johan-img"
                alt="steamboat picture"
            />
            <div class="side-block-text">
                <ul>
                    <li>
                        <p><strong>Längd:</strong> 85 fot</p>
                    </li>
                    <li>
                        <p><strong>Bredd: </strong> 17 fot</p>
                    </li>
                    <li>
                        <p><strong>Djupgående: </strong> 6 fot</p>
                    </li>
                    <li>
                        <p>
                            <strong>Maskinen: </strong> Maskinen är en
                            compoundmaskin (med strålkondensor)<br />
                            på cirka 35-40 hp, 55 ind hp.
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong>Fartyget är byggt av:</strong>
                            Motala verkstads ingenjörer och
                            skeppsstrongyggmästare,<br />
                            även hantverkare från strongygden runt Sommen.
                        </p>
                    </li>
                </ul>
            </div>
        </div>-->
</template>

<script>
export default {
    name: "Info",
    props: {}
};
</script>

<!-- Add "scoped" attristrongute to limit CSS to this component only -->
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
    ul {
        list-style-type: none;
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

        .carl-johan-img {
            padding: 0 !important;
            width: 100%;
            height: auto;
        }
    }
}
</style>
