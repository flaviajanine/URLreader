<template>
  <div class="urls">
    <h1>Web Scrape Urls</h1>
    <h1><button @click="clearAll">Clear All</button></h1>
    <div v-if="urls.length > 0" class="table-wrap">
      <div>
      </div>
      <table>
        <tr>
          <td>Name</td>
          <td>Url</td>
        </tr>
        <tr v-for="(u, index) in urls" v-bind:key="index">
          <td>{{ u.name }} </td>
          <td>{{ u.url }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script src="./js/urls.js">
</script>
<style>
@import url("./css/style.css");
</style>
