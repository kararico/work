<template>
    <footer>    
        <div class="footer_inner"> 
            <h2>
                <img src="https://assets.website-files.com/5b2a8936920a797db4639905/5b2a8936920a798c07639957_logo.png" alt="">
            </h2>
            <div class="sns_list">
				<a href="#" class="footer-links">Instagram</a> 
                <a href="#" class="footer-links">Twitter</a>
                <a href="#" class="footer-links">Linkedin</a>
                <a href="#" class="footer-links">Behance</a>
                <a href="#" class="footer-links">Dribbble</a>
                <a href="/image-license-image" class="footer-links">Image License Info</a>
                <a href="http://webflow.com" class="footer-links">Powered by Webflow</a>
			</div> 
			<p class="copyright">
				<em>COPYRIGHT © JISAN FOREST RESORT ALL RIGHT RESERVED. </em>
			</p>
        </div>
    </footer> 
</template> 
<script> 
export default {
    name: 'Footer',
}
</script>
<style lang="scss">
     footer{  
        width: 100%; 
        height: auto;
        padding:vw( 0 100px ) !important;
        border-top: 1px none #dbdbdb;
        background-color: #fafafa;
        .footer_inner{
            display: flex;
            width: 100%;
            padding-top: 90px;
            padding-bottom: 90px;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            h2{
                width: vw(147px);
                margin-bottom: vw(30px);
                img{ width: 100%;}
            }
            .sns_list{
                display: flex;
                width: 70%;
                padding: vw(20px 0 );
                flex-direction: row;
                justify-content: flex-start;
                flex-wrap: wrap;
                align-items: center;
                a{
                    display: inline-block;
                    margin:vw(0 20px 20px 0);
                    padding:vw( 0 0 5px 0 );
                    transition: box-shadow 200ms ease, color 200ms ease;
                    color: grey;
                    font-size: vw(16px);
                    font-weight: 400;
                }
            }
            .copyright{
                em{
                    color: #b8b8b8;
                    font-size: vw(14px);
                    line-height: vw(24px);
                    font-weight: 400;
                }
                
            }
        }
     }
</style>