<template>
    <header>
        <div class="overflow">
            <div class="page-title">
                <h1 class="carl-johan">SS Carl Johan</h1>
                <h2 class="header-text">ETT ÅNGBÅTSPROJEKT MUSÉEFORM</h2>
            </div>
        </div>
        <div class="navbar">
            <ul>
                <li><a class="active">HEM</a></li>
                <li><a href="">INFO</a></li>
                <li><a href="">HITTA HIT</a></li>
                <li><a href="">KONTAKT</a></li>
            </ul>
        </div>
        <div class="hamburger-navbar">
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            />
            <div class="topnav">
                <a href="#home" class="home">SS Carl Johan</a>
                <div id="myLinks">
                    <a class="active">HEM</a>
                    <a href="">INFO</a>
                    <a href="">HITTA HIT</a>
                    <a href="">KONTAKT</a>
                </div>
                <a
                    href="javascript:void(0);"
                    class="icon"
                    @click="myFunction()"
                >
                    <i class="fa fa-bars"></i>
                </a>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header",
    props: {},
    methods: {
        myFunction: function() {
            var x = document.getElementById("myLinks");
            if (x.style.display === "block") {
                x.style.display = "none";
            } else {
                x.style.display = "block";
            }
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
