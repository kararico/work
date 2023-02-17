<template>
    <section id="visual" :class="{ show : isLoading }" >
        <div class="visual_content">
            <a href="javascript:;" class="btn_visual_arrow">
                <img src="https://assets.website-files.com/5b2a8936920a797db4639905/5b2a8936920a7989fd639958_arrow.svg" alt="화살표이동">
            </a>
            <div class="text-content">
                <div class="text-title">
                    <h2 class="js-text_type1">Hello,</h2>
                </div>
                <div class="text-title">
                    <h3 class="js-text_type2">You.</h3>
                </div>
                <p class="text-subtext js-text_type3">
                    👋 Double-click to introduce yourself. Tell the world what you do — and why they should care.
                </p>
            </div> 
        </div>
        <div class="video_box">
            <video src="~assets/video/main_video.mp4" loop  autoplay muted type="video/mp4"></video>
        </div>
        <Star></Star>
    </section>
</template>
 
<script>

import Star from  "~/components/layouts/Main/Star.vue";



export default {
  name: 'Visual',
  props: {
   
  },
  data (){
    return{
        isLoading: false,
        gsap : this.$gsap
    }
  },
  created(){ 
  },
  components: {
    Star
  },

  methods:{
    visualEffect(){
        const _that = this;
        _that.textMotions();

        const visual = document.getElementById( "visual" );
        const textTitle = document.querySelectorAll( ".text-title" );
        const subText = document.querySelector( ".text-subtext" );
        const eleOffsetTop = textTitle[0].offsetTop;

        _that.gsap.timeline({
            scrollTrigger: {
                trigger: visual,
                start: "top top",
                end: eleOffsetTop+ "px",
                // markers: true,
                scrub: true,
                // pin: true
            }
        })
        .fromTo( textTitle, {autoAlpha: 1, y:0 }, {autoAlpha: 0, y:-200, duration: 1})
        .to( subText, {autoAlpha: 0, y:-200, duration: 1})
     
    },
    textMotions(){
        const _that = this;
        const jsTextMotion1 = document.querySelector( ".js-text_type1" );
        const jsTextMotion2 = document.querySelector( ".js-text_type2" );
        const jsTextMotion3 = document.querySelector( ".js-text_type3" );
        const gfT = _that.gsap.fromTo;
        const textArr = [];
        const speed = 0.75;
        const delay = 0.35;

        textArr.push(  jsTextMotion1, jsTextMotion2, jsTextMotion3 );
        textArr.forEach(function($ele, $index ){
            gfT( textArr[$index], speed, 
            { y:textArr[$index].clientHeight, opacity:0 }, 
            { y: 0, opacity:1, delay: delay * $index })
        });

    }
  
 },
 mounted(){
    this.$nextTick(function() { 
        this.$bus.$on('loadingEnd', () => {
            this.isLoading = true;
            this.visualEffect();
        })
    });
  },

  beforeDestroy(){
    const killTarget = this.$ScrollTrigger.getById('mainVisual' );
    if( killTarget != undefined ){
        killTarget.kill();
    }
  },
}
</script> 
<style lang="scss">
    #visual{
        position: fixed; 
        display: flex;
        width: 100%;
        min-height: 100vh;
        padding-bottom: 10vh;
        justify-content: left;
        align-items: flex-end;
        box-sizing: border-box;
        opacity: 0;
        .btn_visual_arrow{
            position: absolute;
            top:auto;
            right: 0px;
            bottom: 0px;
            left: 50%;
            display: inline-block;
            width:vw(9px);
            height: vw(40px);
            transform: translate(0, -50%);
        }
        .text-content{
            width: 100%;
            margin: 0;
            padding:vw( 0 100px 100px);
            .text-title{
                position: relative;
                overflow: hidden; 
                padding: vw( 0 100px 0 0 );
                h2,
                h3{ 
                    position: relative;
                    margin:0;
                    font-size:vw(200px); line-height: vw(200px);
                    color: #fff;
                    font-weight: 100;
                    font-family:  'PT Sans';
                }
                h3{ font-weight: bold; padding-left:vw(10px)}
            }
            .text-subtext{
                padding:vw( 20px 0 0 0 );
                color: #fff;
            }

        }
        &.show{
            opacity: 1;
        }
        .video_box{
            display: block;
            position: absolute;
            top:0; left:0;
            width: 100%; height: 100%;
            z-index: -1;
            video{ width: 100%; height: 100%; object-fit: cover;}
        }
    }

</style>
