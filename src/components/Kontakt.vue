<template>
    <div>
        <h1 class="header">Kontakt</h1>
        <address>
            <h3>Lennart Holm</h3>
            <a href="mailto:sscarljohan@hotmail.com">sscarljohan@hotmail.com</a
            ><br />
            <a href="tel:+4614013598">0140-13598</a>
        </address>
    </div>
</template>

<script>
export default {
    name: "info",
    props: {}
};
</script>

<style>
.header {
    text-align: center;
}
a[href^="mailto"]::before {
    content: "📧 ";
}

a[href^="tel"]::before {
    content: "📞 ";
}
address {
    text-align: center;
    display: block;
}
</style>
