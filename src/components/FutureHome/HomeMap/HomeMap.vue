<template>
  <Loader :loading="loadingData">
    <div class="map">
      <MglMap
        :center="mapCenter"
        :zoom="11"
        :accessToken="mapBoxAccessToken"
        :mapStyle="mapStyle"
      >
        <MglNavigationControl position="top-right" />
        <MglGeolocateControl position="top-right" />
        <MglMarker
          :key="marker.id"
          v-for="(marker, index) in markers"
          :coordinates="[marker.coordinates.lng, marker.coordinates.lat]"
          color="#344284"
        >
          <MglPopup class="mapPopup">
            <div>
              <h1 class="mapPopupTitle">
                <router-link
                  title="Ir a exposicion"
                  :to="urls.exposition(expositions[index].slug)"
                  >{{ expositions[index].name }}</router-link
                >
              </h1>
              <p class="mapPopupText">{{ expositions[index].place }}</p>
              <p class="mapPopupText">{{ expositions[index].address }}</p>
            </div>
          </MglPopup>
        </MglMarker>
      </MglMap>
    </div>
  </Loader>
</template>

<script src='./homeMap.js'></script>
<style lang="stylus">
@import '../../../styles/colors';

.map
  height: 100%;

  .mapboxgl-popup-content
    background-color: $purple;

    .mapPopupTitle
      margin: 0;

    .mapPopupText
      line-height 18px !important
</style>
