<template>
  <nav>
    <div>
      <ul>
          <li><router-link to="/"><i class="far fa-user"></i></router-link></li>
          <li><router-link to="/chat"><i class="far fa-comment"></i></router-link></li>
          <li><router-link to="/hashtag"><i class="fas fa-hashtag"></i></router-link></li>
          <li><router-link to="/more"><i class="fas fa-ellipsis-h"></i></router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>

</script>

<style scoped>
nav {
  height: 50px;
}
li {
  display: inline-block;
  width:25%;
  text-align: center;
  padding: 15px 0;
}
a {
  color: black;
}
i {
  font-size: 1.3em;
}
</style>