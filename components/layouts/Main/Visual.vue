<template>
    <section id="visual">
        <div class="visual_content">
            <a href="javascript:;" class="btn_visual_arrow">
                <img src="https://assets.website-files.com/5b2a8936920a797db4639905/5b2a8936920a7989fd639958_arrow.svg" alt="화살표이동">
            </a>
            <div class="text-content">
                <div class="text-title">
                    <h2>Hello,</h2>
                </div>
                <div class="text-title">
                    <h3>You.</h3>
                </div>
                <p>
                    👋 Double-click to introduce yourself. Tell the world what you do — and why they should care.
                </p>
            </div>
        </div>
      
    </section>
</template>
 
<script>
export default {
  name: 'Visual',

  created(){ 
   
  },

  mounted(){
    this.$nextTick(function() { 
        this.visualEffect();
    });
  },

  methods:{
    visualEffect(){

        const visual = document.getElementById( "visual" );
        const textTitle = document.querySelectorAll( ".text-title" );
        this.$gsap.timeline({
            scrollTrigger: {
                id: 'mainVisual',
                trigger: visual,
                start: "top center",
                end: "+=400",
                scrub: true,
                markers: true
            }
        })
        .from(textTitle, {
            opacity: 0,
            x: 500
        }),

    }
  },

  beforeDestroy(){
    this.$ScrollTrigger.getById('mainVisual').kill();
  }


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
            overflow: hidden;
            width: 100%;
            margin: 0;
            padding:vw( 0 100px);
            .text-title{
                position: relative;
                overflow: hidden; 
                padding: vw( 0 100px 0 0 );
                h2,
                h3{ 
                    position: relative;
                    margin:0;
                    font-size:vw(200px); line-height: vw(200px);
                    color: #000;
                    font-weight: 100;
                    font-family:  'PT Sans';
                }
                h3{ font-weight: bold; padding-left:vw(10px)}
            }
        }
    }

</style>
