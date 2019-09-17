<template>
  <div class="map">
    <MglMap
      :center="mapCenter"
      :offset="[0,-50]"
      :zoom="7"
      :accessToken="mapBoxAccessToken"
      :mapStyle="mapStyle"
    >
      <MglNavigationControl position="top-right" />
      <MglGeolocateControl position="top-right" />
      <MglMarker
        :key="marker.id"
        v-for="marker in markers"
        :coordinates="[marker.coordinates.lng, marker.coordinates.lat]"
        color="blue"
      >
        <MglPopup>
          asdas
        </MglPopup>
      </MglMarker>
    </MglMap>
  </div>
</template>

<script src='./homeMap.js'></script>
<style lang="stylus" scoped>
.map
  height: 500px;
</style>
