<template>
    <section id="work">
        <ul class="work_list">
            <li>
                <div class="work_area">
                    <div class="work_content">
                        <div class="work_info">
                            <div class="work_number">
                                <h2>01</h2>
                            </div>
                            <h3>Sinder</h3>
                            <p>A dating app — for single socks.</p>
                            <a href="javascript:;">view project</a>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="work_area">
                    <div class="work_content">
                        <div class="work_info">
                            <div class="work_number">
                                <h2>01</h2>
                            </div>
                            <h3>Sinder</h3>
                            <p>A dating app — for single socks.</p>
                            <a href="javascript:;">view project</a>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="work_area" style="background-image:url(https://assets.website-files.com/5b2a8f45ee96a605bc64fa2a/5b2aa6c65554a74ae32b4ee1_iGotchu%20_blankhand.jpeg)">
                    <div class="work_content">
                        <div class="work_info">
                            <div class="work_number">
                                <h2>01</h2>
                            </div>
                            <h3>Sinder</h3>
                            <p>A dating app — for single socks.</p>
                            <a href="javascript:;">view project</a>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <Footer />
    </section>
</template>
 
<script>
import Footer from "~/components/layouts/Footer/index.vue"
export default {
  name: 'Work',
  components: {
    Footer,
  },
}
</script> 
<style lang="scss">
 #work{
    position: relative;
    top: 100vh;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
    background-color: #dcdee0;
    .work_list{
        margin:0;
        padding:0;
        li{
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: stretch;
            background-color: #fff;
            .work_area{
                flex: 1;
                border: 1px none #000;
                overflow: visible;
                background-attachment: fixed;
                background-image: url(https://assets.website-files.com/5b2a8f45ee96a605bc64fa2a/5b2aa797cb4b9f560e6f9c55_iGotchu.jpg);
                background-position: 100% 50%;
                background-size: cover;
                background-repeat: no-repeat;
                .work_content{
                    display: flex;
                    overflow: visible;
                    width: 50%;
                    min-height: 100vh;
                    padding-right: 10vw;
                    padding-left: 15vw;
                    align-items: center;
                    flex: 0 0 auto;
                    background-color: rgba(0, 0, 0, 0.75);
                    color: #fff;
                    box-sizing: border-box;
                    .work_info{
                        position: relative;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        z-index: 20;
                        .work_number{
                            position: relative;
                            float: none;
                            font-family: 'PT Sans', serif;
                            color: grey;
                            margin-top: vw(20px);
                            font-size: vw(35px);
                            line-height: vw(35px);
                            font-weight: 400;
                            box-sizing: border-box;
                        }
                    }
                }
            }
        }
    }
 }   

</style>
