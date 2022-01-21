<template>
 <div>
  <div class="title">
    <h1 class="text">PunkBeer</h1>
    <h2 class="text">The best beer in town</h2>
  </div>
  <div  class="container" >
    <section class="main" v-for="beer in info" :key="beer.id" >
     <img class="img-beer" :src="beer.image_url" alt="Birra">
     <h2 class="text-beer">{{beer.name}}</h2>
     <p class="text-beer">{{beer.tagline}}</p>
    </section>
  </div>
   <button class="button" @click="goBack">BACK</button>
   <button class="button" @click="goNext">NEXT</button>
  </div>
</template>

<script>
import axios from 'axios'
import gsap from 'gsap'
export default {
name: 'Home',
data(){
  return{
    info: null,
    pagina: 1
  }
},
created(){
axios.get("https://api.punkapi.com/v2/beers?page=1&per_page=10")
      .then(res => {
        this.info = res.data;
        console.log(this.info)
      })
      .catch(error => {
        console.log(error)
      })
    
},
mounted() {
  let tl = gsap.timeline()
  tl.from('.title',{y:-50, duration: 0.8,opacity:0,delay:0.2})
    .to('.text',{y:0, duration:1,stagger:0.5 ,delay:2,opacity:1}, "-=2.9")
},
updated() {
  let tl = gsap.timeline()
  tl.from('.img-beer',{scale:0.3, duration: 1,opacity:0,delay:0.5, ease: "power1"})
     .to('.text-beer',{opacity:1, duration:0.3,stagger:0.1}, "+0.5")
},
methods: {
  goNext(){
    this.pagina = this.pagina+1;
  axios.get("https://api.punkapi.com/v2/beers?page=" + this.pagina + "&per_page=10")
      .then(res => {
        this.info = res.data;
        console.log(this.info)
      })
      .catch(error => {
        console.log(error)
      })
    
  },
   goBack(){
     if(this.pagina > 1 ){
      this.pagina = this.pagina -1;
     }

  axios.get("https://api.punkapi.com/v2/beers?page=" + this.pagina + "&per_page=10")
      .then(res => {
        this.info = res.data;
        console.log(this.info)
      })
      .catch(error => {
        console.log(error)
      })
}
}

}
</script>

<style scoped lang="scss">
 .title{
    padding: 3em;
    background-color: rgb(18, 18, 41)  ; 
  }
.text, .text-beer{
      opacity: 0;
    }
.container{
  display: grid;
  width: 100%;
  grid-template-columns: auto auto ;
  justify-content: center;
  section{
    padding: 4em;
  }


  img{
    width: 100px;
    height: 300px;
   
  }

}

.button {
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  color: #000;
  cursor: pointer;
  border: 3px solid;
  margin-right: 5em;
  margin-left: 7em;
  margin-bottom: 3em;
  padding: 0.25em 0.75em;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
&:active {
  box-shadow: 0px 0px 0px 0px;
  top: 5px;
  left: 5px;
}
}

@media (max-width: 768px) {
  .title{
    padding: 0;
  
  h1{
    font-size: 50px !important;
  }
  h2{
    font-size: 30px !important;
  }
}
  .container{
    display: block;
    section{
      padding-top: 1em;
      h2{
        font-size: 25px !important;
      }
      p{
        font-size: 15px !important;
      }
    }
  }
  .button {
    padding: 0.25em 0.5em;
    margin:0.6em;
  }
 
}
</style>
