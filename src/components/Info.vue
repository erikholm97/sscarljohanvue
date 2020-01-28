<template>
    <div>
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
                            compoundmaskin (med strålkondensor) på cirka 35-40
                            hp, 55 ind hp.
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong>Fartyget är byggt av:</strong>
                            Motala verkstads ingenjörer och
                            skeppsstrongyggmästare, även hantverkare från
                            strongygden runt Sommen.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="vue-gallery">
            <div class="">
                <h1 class="gallery-header">Carl Johan 140 år</h1>
                <gallery
                    :images="images"
                    :index="index"
                    @close="index = null"
                ></gallery>
                <div
                    class="image"
                    v-for="(image, imageIndex) in images"
                    :key="imageIndex"
                    @click="index = imageIndex"
                    :style="{
                        backgroundImage: 'url(' + image + ')',
                        width: '400px',
                        height: '300px'
                    }"
                ></div>
            </div>
        </div>
    </div>
</template>

<script>
import VueGallery from "vue-gallery";
export default {
    name: "Info",
    props: {},
    data: function() {
        return {
            images: [ // Function that returns an image in the gallery
                "https://sscarljohan.files.wordpress.com/2012/09/dsc_5944.jpg?w=1020&h=539&zoom=2",
                "https://sscarljohan.files.wordpress.com/2012/09/dsc_5937.jpg?w=275&h=&zoom=2",
                "https://sscarljohan.files.wordpress.com/2012/09/dsc_5920.jpg?w=1500&h=",
                "https://sscarljohan.files.wordpress.com/2012/09/dsc_5919.jpg?w=555&h=",
                "https://sscarljohan.files.wordpress.com/2012/09/dsc_5916.jpg?w=1500&h=",
                "https://sscarljohan.files.wordpress.com/2012/09/dsc_5912.jpg?w=258&h=&zoom=2",
                "https://sscarljohan.files.wordpress.com/2012/09/dsc_5908.jpg?w=275&h=&zoom=2",
                "https://sscarljohan.files.wordpress.com/2012/09/dsc_5902.jpg?w=1050&h=",
                "https://sscarljohan.files.wordpress.com/2012/09/dsc_5895.jpg?w=555&h=",
                "https://sscarljohan.files.wordpress.com/2012/09/dsc_5877.jpg?w=725&h=&zoom=2"
            ],
            index: null
        };
    },

    components: {
        gallery: VueGallery
    }
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
.gallery-header {
    text-align: center;
}
.image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
}
@keyframes animation {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
@media only screen and (max-width: 1200px),
    only screen and (max-width: 1600px) {
    .page-content {
        .carl-johan-img {
            width: 100%;
            height: auto;
            margin-left: 20px;
        }
    }
}
@media only screen and (max-width: 0px), only screen and (max-width: 1200px) {
    .page-content {
        display: block;
        h1 {
            text-align: center;
        }
        .carl-johan-img {
            margin-left: 0px;
            width: 100%;
            height: auto;
        }
    }
    .image {
        display: flex;
        justify-content: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        border: 1px solid #ebebeb;
        margin: -5px;
    }
}
</style>
