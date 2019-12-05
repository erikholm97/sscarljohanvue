<template>
  <footer>
  Skapad av: Erik Holm
  Kontakt: Lennart Holm
  Telefon: 0140-13598
  
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
      footer{
        margin-top: 30px;
        color: $fifth-color;
        display: block;
        text-align: right;
      }
</style>
