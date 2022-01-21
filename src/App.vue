<template>
  <div id="app">
      <router-view/>   
  </div>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@500&display=swap');
  *,body{
  border: 0;
  padding: 0;
  margin:0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: #556e86;

  h1{
    font-family: 'Sora', sans-serif;
    font-size:70px; 
  
  }
}

*,body{
  border: 0;
  padding: 0;
  margin:0;
}
</style>
