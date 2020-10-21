<template>
  <header>
    <div id="header-title">
      <p><b>{{ msg }}</b></p>
    </div>
    <div id="header-icon">
      <ul>
        <li><i class="fas fa-search"></i></li>
        <li><i class="fas fa-plus"></i></li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String
  }
};
</script>

<style scoped>
header {
  height: 40px;
  color: black;
}
div {
  display: inline-block;
}
#header-title {
  font-size: 1.2em;
  padding-top: 7px;
  padding-left: 10px;
}
#header-icon {
  float: right;
  padding-top: 8px;
  padding-right: 10px;
}
li {
    display: inline-block;
    margin: 0 7px;
}
</style>