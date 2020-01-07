<template>
    <div id="app">
        <Header />
        <div class="navbar">
            <ul>
                <li>
                    <router-link to="/">Hem</router-link>
                </li>
                <li>
                    <router-link to="Info">Info</router-link>
                </li>
                <li>
                    <router-link to="HittaHit">Hitta Hit</router-link>
                </li>
                <li>
                    <router-link to="Dikter">Dikter</router-link>
                </li>
                <li>
                    <router-link class="contact" to="Kontakt"
                        >Kontakt</router-link
                    >
                </li>
            </ul>
        </div>
        <div class="hamburger-navbar">
            <!--Fetching the style of hamburger bar.-->
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            />
            <div class="topnav">
                <!--Mobile phone links-->
                <a href="#home" class="home">SS Carl Johan</a>
                <div id="myLinks">
                    <router-link to="/">Hem</router-link>

                    <router-link to="Info">Info</router-link>

                    <router-link to="HittaHit">Hitta Hit</router-link>

                    <router-link to="Dikter">Dikter</router-link>

                    <router-link to="Kontakt">Kontakt</router-link>
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

        <router-view></router-view>
        <Footer />
    </div>
</template>

<script>
import Header from "./AppBase/Header";
import Footer from "./AppBase/Footer.vue";

export default {
    name: "app",
    components: {
        Footer,
        Header
    },
    methods: {
        // Function that takes the user to another page based on what link was pressed. 
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

<style lang="scss">
$base-color: #f2f2f2;
$second-color: #a6a6a6;
$third-color: #595959;
$fourth-color: #262626;
$fifth-color: #0d0d0d;
@import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap"); //Font från google.
$font: "Montserrat", sans-serif;
* {
    font-family: $font;
    body {
        background-color: $base-color;
        .navbar {
            ul {
                list-style-type: none;
                margin: 0;
                padding: 0;
                overflow: hidden;
                background-color: $fifth-color;
                border: 0px solid $third-color;
            }
            li {
                float: left;
                text-align: center;
            }
            .contact {
                float: right !important;
            }
            li a {
                padding: 10px 16px;
                display: block;
                color: $base-color;
                font-size: 15px;
                text-decoration: none;
            }
            li a:hover {
                color: $third-color;
                font-weight: 600;
            }
            li a.active {
                color: $second-color;
                font-size: 20px;
                font-weight: 600;
            }
        }
        .hamburger-navbar {
            display: none;
        }
        header {
            display: block;
            text-align: center;

            .overflow {
                overflow: hidden;
                display: flex;
                flex-direction: column;
                align-items: center;
                height: 200px;
                .page-title {
                    justify-content: center;
                    text-align: center;
                    position: relative;
                    height: 200px;
                    width: 400px;
                    animation: titleDrop 2s none;
                    @keyframes titleDrop {
                        from {
                            transform: translateY(200px);
                        }

                        to {
                            transform: translateY(0px);
                        }
                    }

                    .carl-johan {
                        font-size: 50px;
                    }
                }
            }
            .hamburger-navbar {
                display: none;
            }
        }
        @media only screen and (max-width: 1200px) {
            .page-title {
                height: 100px;
                width: 200px;
            }
            .overflow {
                display: none;
                width: 100%;
            }
            .navbar {
                display: none;
            }
            /* Style the navigation menu */
            .hamburger-navbar {
                display: block;
            }
            .topnav {
                visibility: visible;
                overflow: hidden;
                background-color: $fifth-color;
                position: relative;
            }

            /* Hide the links inside the navigation menu (except for logo/home) */
            .topnav #myLinks {
                display: none;
            }

            /* Style navigation menu links */
            .topnav a {
                color: $base-color;
                height: 100%;
                padding: 14px 16px;
                text-decoration: none;

                display: block;
            }

            /* Style the hamburger menu */
            .topnav a.icon {
                background: $fifth-color;
                display: block;
                position: absolute;
                right: 0;
                top: 0;
            }

            /* Add a grey background color on mouse-over */

            /* Style the active link (or home/logo) */
            .active {
                opacity: 50%;
                color: $second-color;
                font-size: 20px;
                font-weight: 600;
            }
        }
    }
    @media only screen and (max-width: 375px) {
        /* For screens smaller than 365px */
        .carl-johan {
            display: none;
        }
        .overflow {
            height: 95px !important;
        }
    }
}
</style>
