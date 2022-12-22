<template>
    <header>    
        <h1>
            <a href="javascript:;">
                <img src="https://assets.website-files.com/5b2a8936920a797db4639905/5b2a8936920a798c07639957_logo.png" alt="" >
            </a>
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
        h1{
            display: flex; 
            float: left;
            width:vw(188px);
            height: vw(32px);
            align-items: center;
            a{
                display: block;
                img{
                    display: inline-block;
                    max-width: 100%;
                }
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
                color: #000;
            }
        }
     }
</style>