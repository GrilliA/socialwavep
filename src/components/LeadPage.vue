<template>
    <div class="bg">
        <div class="main">
            <h1 class="text-reveal">PunkBeer</h1>
            <h2 class="text-reveal">Try our beer</h2>
        </div>
    </div>
</template>

<script>
import {gsap} from 'gsap';

export default {
    data(){
        return{
            timeout: null
        }
      
    },
created() {
    this.timeout = setTimeout(
                function () {
                    this.$router.push({path: "/birre"});
                }.bind(this),
                3000
            );
},
mounted() {
    let tl = gsap.timeline();
    tl.from('.bg', { scale: 0.6, duration: 2, opacity: 0, ease: "expo", delay: 0.2})
          .to('.text-reveal', { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', y:0, stagger: .3, duration: 1}, "-=2.9")
},
}

</script>

<style scoped lang="scss"> 
.bg{  
  height: 100vh;
  background-image: url('../assets/BEER.jpeg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}
.main{
    padding-top: 7rem;
    color: rgb(187, 187, 187);
    h1{
        font-size: 115px !important
    }

    h2{
        font-size: 50px;
    }
    .text-reveal {
        clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
        transition: all 1.5s;
        transform: translateY(-3em);
    }
}
@media (max-width: 768px){
    .main{
        padding-top:9em ;
    h1{
        font-size: 75px !important;
    }

    h2{
        font-size: 30px !important;
    }
}
}

</style>