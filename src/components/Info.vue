<template>
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
        </div>
    </div>
</template>

<script>
export default {
    name: "Info",
    props: {}
};
</script>

<!-- Add "scoped" attristrongute to limit CSS to this component only -->
<style scoped lang="scss">
.info-text {
    .facts-header {
        text-align: center;
    }
    li {
        display: flex;
        align-items: center;
        text-align: center;
        margin: 0px;
    }
    @media only screen and (max-width: 0px),
        only screen and (max-width: 1200px) {
        .page-content {
            display: flex;
            align-items: center;
            .info-text {
                .carl-johan-img {
                    padding: 0 !important;
                    width: 100%;
                    height: auto;
                }
            }
            .side-block-text {
                padding: 30px;
            }
            .side-block-text {
                text-align: center;
            }
        }
    }
}
</style>
