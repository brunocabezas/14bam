<template>
  <div class="exposition">

    <div class="expositionInfo">
      <ul class="expositionInfoList">
        <li class="expositionInfoListItem">
          {{exposition.place}}
        </li>
        <li class="expositionInfoListItem">
          {{exposition.hour}}
        </li>
        <li class="expositionInfoListItem">
          {{exposition.hour_2}}
        </li>
        <li class="expositionInfoListItem">
          {{exposition.direccion}}
        </li>
        <li class="expositionInfoListItem">
          {{exposition.web}}
        </li>
      </ul>
    </div>

    <div class="expositionLayout">
      <div class="leftSection">
        <h1>{{exposition.name}}</h1>
        <p>{{exposition.text}} </p>
      </div>
      <div class="rightSection">
        gallery, participants
      </div>
    </div>
  </div>
</template>

<script src="./exposition.js"></script>

<style></style>
