<template>
    <header :class="{ show : isLoading }">    
        <h1>
            <a href="javascript:;"></a>
        </h1> 
        <nav> 
            <router-link tag="a" to="/">Home</router-link>
            <router-link tag="a" to="/About">About</router-link>
            <router-link tag="a" to="/Contact">Contact</router-link> 
        </nav> 
    </header>
</template>  
<script>
export default {
   name: 'Header',
   props: {
    // isLoadingChecked: {
    //     type: Boolean,
    // }
  },
  data (){
    return{
        isLoading: false,
    }
  },
  mounted(){
    this.$nextTick(function() { 
        this.$bus.$on('loadingEnd', () => {
            this.isLoading = true;
        })
    });
  },
}

</script>
<style lang="scss" scoped> 
     header{  
        position: absolute; 
        width: 100%;
        height: auto;
        padding:vw(80px 80px 0 80px ) !important; 
        background: transparent;
        box-sizing: border-box;
        z-index: 10;
        opacity: 0;
        h1{
            display: flex; 
            float: left;
            width:vw(188px);
            height: vw(32px);
            align-items: center;
            a{
                display: block;
                width: inherit;
                height: inherit;
                background:url( ~assets/images/common/logo_w.png) 0 0 no-repeat;
                background-size:vw(188px) auto;
            }
        }
        nav{
            position: relative;
            float: right;
            display: flex;
            // padding: vw(0 0 50px 0);
            align-items: center;
            a{
                margin:vw( 0  10px);
                font-size:vw(16px);
                font-weight: 400;
                color: #fff;
            }
        }
        &.show{
            opacity: 1;
        }
     }
</style>