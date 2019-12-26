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
      center: { lat: 58.035261, lng: 14.976998  },
      mapTypeId: "terrain",
      markers: [
          
        { position: { lat:  58.035261, lng: 14.976998 } },
      ]
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
