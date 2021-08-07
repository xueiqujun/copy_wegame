<template>
    <div class="footer">
        <div class="footer-box">
            <div class="box-1">
                <span v-text="spanone"></span>
                <div  class="img-windows">
                   <img :src="windowsimg" />
                   <p v-text="pone"></p>
                </div>
            </div>
            <div class="box-2">
               <span v-text="spantwo"></span>
               <div class="box-2-weibo">
                   <img :src="weiboimg">
                   <p v-text="ptwo"></p>
               </div>
               <div class="box-2-wechat">
                   <img :src="wechatimg">
                   <p v-text="pthree"></p>
               </div>
            </div>
            <div class="box-3">
                <span v-text="spanthree"></span>
                         <p v-text="pfour"></p>
            </div>
            <div class="box-4">
                <p v-text="pfive"></p>
                <p v-text="psix"></p>
                <p v-text="pseven"></p>
            </div>
        </div>
         
    </div>
</template>
<script>
import imgwindows from "../assets/windows.png"
import imgweibo from "../assets/weibo.png"
import imgwechat from "../assets/wechat.png"
export default {
       data(){
        return{
            spanone:'下载客户端：',
           windowsimg:imgwindows,
            pone:'PC端',
            spantwo:'官方渠道：',
            weiboimg:imgweibo,
            ptwo:'微博',
            wechatimg:imgwechat,
            pthree:'微信',
            spanthree:'友情链接：QQ阅读 腾讯GWB',
            pfour:'腾讯动漫 腾讯视频',
            pfive:'关于腾讯 | About Tencent | 服务条款 | 用户服务协议 | 隐私政策 | 侵权通知 | 广告服务 | 腾讯招聘 | 客服中心 | 网站导航',
            psix:' COPYRIGHT © 1998 – 2020 TENCENT. ALL RIGHTS RESERVED.',
            pseven:'腾讯公司 版权所有'
        }
    }
}
</script>
<style  scoped>
*{
    margin: 0px;
    padding: 0px;
}
.footer{
    background-color: black;
    color:rgb(153, 150, 150);
    width: 100%;
    
}
.footer > .footer-box{
    width: 70%;
    margin: 0 auto;
    padding-top: 3%;
    height: 100%;
}
.footer > .footer-box > .box-1{
    width: 33%;
    float: left;
}
.footer > .footer-box > .box-2{
    width: 33%;
    float: left;
}
.footer > .footer-box > .box-3{
    width: 34%;
    float: left;
    text-align: right;
}
.footer > .footer-box > .box-4{
    padding-top: 4%;
    clear: both;
    font-size: 12px;
    text-align: center;
}
.footer > .footer-box > .box-1 > .img-windows > img{
    width: 40px;
    height: 40px;
}
.footer > .footer-box > .box-2 > .box-2-weibo > img{
    width: 40px;
    height: 40px;
}
.footer > .footer-box > .box-2 > .box-2-wechat > img{
    width: 40px;
    height: 40px;
}
.footer > .footer-box > .box-1 > .img-windows{
    margin-left: 100px;
    margin-top: -20px;
    opacity: 0.5;
}
.footer > .footer-box > .box-2 >  .box-2-weibo{
    margin-left: 100px;
    margin-top: -20px;
    opacity: 0.5;
}
.footer > .footer-box > .box-2 >  .box-2-wechat{
    margin-left: 180px;
    margin-top: -63px;
    opacity: 0.5;
}
.footer > .footer-box > .box-1 > .img-windows:hover{
    opacity: 1;
}
.footer > .footer-box > .box-2 > .box-2-weibo:hover{
    opacity: 1;
}
.footer > .footer-box > .box-2 > .box-2-wechat:hover{
    opacity: 1;
}
</style>