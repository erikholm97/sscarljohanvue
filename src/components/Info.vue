<template>
    <div>
        <div class="info-text">
            <h1 class="facts-header">Fakta om ångstrongåten/projektet</h1>
            <img src="../assets/InfoImg.jpg" alt="steamboat picture" />
            <ul>
                <li>
                    <strong>Längd:</strong>
                    85 fot
                </li>
                <li><strong>Bredd: </strong> 17 fot</li>
                <li><strong>Djupgående: </strong> 6 fot</li>
                <li>
                    <strong>Maskinen: </strong>
                    Maskinen är en compoundmaskin (med strålkondensor) på cirka
                    35-40 hp, 55 ind hp.
                </li>
                <li>
                    <strong>Fartyget är byggt av:</strong>
                    Motala verkstads ingenjörer och skeppsstrongyggmästare, även
                    hantverkare från strongygden runt Sommen.
                </li>
            </ul>
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
        margin: 10px;
    }
    strong {
    }
}
</style>
