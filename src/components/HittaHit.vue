<template>
    <GmapMap :center="center" :map-type-id="mapTypeId" :zoom="15">
        <GmapMarker
            v-for="(item, index) in markers"
            :key="index"
            :position="item.position"
            @click="center = item.position"
        />
    </GmapMap>
</template>

<script>
export default {
    data() {
        return {
            center: { lat: 58.068506, lng: 15.018399 },
            mapTypeId: "terrain",
            markers: [{ position: { lat: 58.068506, lng: 15.018399 } }]
        };
    }
};
</script>

<style lang="scss" scoped>
.vue-map-container {
    height: 450px;
    width: 100%;
}
</style>
