<template>
    <footer>
        <p>Skapad av: Erik Holm, Delil Demirsoy, Jonathan Holén</p>
    </footer>
</template>

<script>
export default {
    name: "Footer",
    props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: $fifth-color;
    color: $base-color;
    text-align: center;

    p {
        font-size: 10px;
    }
}
</style>
