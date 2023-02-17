<template>
    <div class="loading-page" v-show="loading">
       <div class="line line--top"></div>
       <div class="line line--right"></div>
       <div class="line line--bottom"></div>
       <div class="line line--left"></div>
       <div class="mask"></div>
    </div>
</template>

<script>

export default {
    name: 'Loading',
    components: { 
    },
    data(){
      return{
        loading: false,
      }
    },
    methods: {
        start() {
            this.loading = true;
        },
        finish() {
            this.loading = false;
        },
        loadingEffect(){ 
            const _that = this;
            const tl = this.$gsap.timeline();
                tl.to(".line--top", 0.6, {width:"100%", ease: "Power2.easeIn"});
                tl.to(".line--right", 0.6, {height:"100%",ease: "Power0.easeNone"});
                tl.to(".line--bottom", 0.6, {width:"100%",ease: "Power0.easeNone"});
                tl.to(".line--left", 0.6, {height:"100%", ease: "Power2.easeOut"});
                tl.to(".mask", 0.6, {backgroundColor:"#000"});
                tl.to(".mask", 1, {left:"100%" });
                tl.from( ".loading-page", 0.1,{ onComplete: function(){
                    _that.finish();
                    _that.$bus.$emit('loadingEnd');
                }})
        },
    },
    mounted() {
        this.$nextTick(() => {
            this.start();
            this.loadingEffect();
    });
  },

}
</script>

<style lang="scss" scoped>
.loading-page {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    text-align: center;
    .line {
  position: absolute;
  background-color: #000;
  z-index:2;
  &--top {
    top:0;
    left: 0;
    width: 0;
    height: 5px;
  }
   &--right {
    top:0;
    right: 0;
    height: 0;
    width: 5px;
  }
  &--bottom {
    bottom:0;
    right: 0;
    width: 0;
    height: 5px;
  }
  &--left {
    bottom:0;
    left: 0;
    height: 0;
    width: 5px;
  }
}
.mask {
  position:absolute;
  top:0;
  right:0;
  bottom:0;
  left:0;
  background-color:#fff;
  z-index:1;
}
.text,.text2{
  color:#fff;
  opacity:0;
  a {
    color: green;
  }
}
.text-center {
  text-align:center;
}

}
</style>