<template>
<div>
  <div class="new">
    <h1>Web Scrape Urls</h1>
      <label for="urlinput">Type a new url:</label>
      <input type="text" v-model="inputUrl" id="urlinput">
      <button @click="sendUrl">Send</button>
  </div>
</div>
</template>

<script src="./js/newurl.js">
</script>
<style>
@import url("./css/style.css");
</style>
