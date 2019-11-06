<template>
    <div id="app">
        <Header />
        <router-view></router-view>
        <Footer />
    </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
    name: "app",
    components: {
        Footer,
        Header
    }
};
</script>

<style lang="scss">
$base-color: #f2f2f2;
$second-color: #a6a6a6;
$third-color: #595959;
$fourth-color: #262626;
$fifth-color: #0d0d0d;
$font: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
* {
    font-family: $font;
    body {
        background-color: $base-color;

        header {
            display: block;
            text-align: center;

            .overflow {
                overflow: hidden;
                display: flex;
                flex-direction: column;
                align-items: center;
                height: 250px;
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
        }
        @media only screen and (max-width: 1200px) {
            header {
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
    }
}
</style>
