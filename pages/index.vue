<template>
  <div>
    <div class="cursor"></div>
    <Header/>
    <Visual/>
    <Work/>
    <!-- <div class="shapes">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
    </div> -->
  </div>
</template>

<script>
import Header from "~/components/layouts/Header/index.vue"
import Visual from "~/components/layouts/Main/Visual.vue"
import Work from "~/components/layouts/Main/Work.vue"

export default {
  name: 'IndexPage',
  components: {
    Header,
    Visual,
    Work,
  },
  created(){

  },
  methods:{
    mouseMoveEvent: function(){
     document.body.addEventListener( "mousemove", evt =>{
      const mouseX = evt.clientX;
      const mouseY = evt.clientY;

      this.$gsap.set( ".cursor",{
        x: mouseX,
        y: mouseY
      });

      // this.$gsap.set( ".shape",{
      //   x: mouseX,
      //   y: mouseY,
      //   stagger: -0.1
      // });

     });
    }
  },
  mounted(){
    this.$nextTick(function() { 
      this.mouseMoveEvent();
    });     
  },
  beforeDestroy(){

  }
}
</script> 
<style lang="scss">
 .cursor{
    position: fixed;
    background: #111;
    width: 20px;
    height: 20px;
    margin: -10px 0 0 -10px;
    border-radius: 50%;
    will-change: transform;
    user-select: none;
    pointer-events: none;
    z-index: 999999;
    &::selection{
      color: #fff;
      background: #111;
    }
  
 }

 .shapes {
      position: relative;
      height: 100vh;
      width: 100vw;
      background: #2128bd;
      overflow: hidden;
    }
    .shape{
      position: relative;
      height: 100vh;
      width: 100vw;
      background: #2128bd;
      overflow: hidden;
        will-change: transform;
        position: absolute;
        border-radius: 50%;
        
        $shapes: (#005ffe: 650px, #ffe5e3: 440px, #ffcc57: 270px);
        
        @each $color, $size in $shapes {
          &.shape-#{index($shapes, ($color $size))} {
            background: $color;
            width: $size;
            height: $size;
            margin: (-$size/2) 0 0 (-$size/2);
          }
        }
    }


</style>
