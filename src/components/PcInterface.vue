<template>

  <div class="pcInterface">
     <div class="content_one" >
       <div class="content-detail">
        <div class="content_one_left">
              <div class="ML-one"><img src="../images/Module1.png" /></div>
              <div class="ML-two"><img src="../images/Module2.png"/></div>
              <div class="ML-three">
                <div class="logo_box"><img src="../images/logo-wegame.png"/></div>
                <div class="logo_mod"><img src="../images/Module4.png"/></div>
              </div>
              <div class="ML-four"><img src="../images/Module3.png"/></div>
        </div>
        <div class="content_one_right">
          <div class="title-content-first"><img src="../images/title.png"></div>
            <div class="content-title-two"><img src="../images/content-title.png" ></div>
            <div class="download-button">
             <el-row>
              <el-button type="primary" icon="el-icon-download" round>下载PC端</el-button>
              <el-button type="primary" icon="el-icon-download" round>下载移动端</el-button>
            </el-row>
            </div>
            <div class="moreinfor">
              <a href="#">更多日志<i class="el-icon-arrow-right"></i></a>
            </div>
        </div>
       </div>
     </div>
     <div class="content_two">
       <div class="content-detail-two" id="abtain-two">
          <div class="content_two_left_box">
              <div class="content-two-box">
                <img src="../images/content-title2.png" >
                <div class="box-bj"><img src="../images/content-title2-bj.png"></div>
                <div class="little-title">带你发现更大的游戏世界</div>
                <div class="list-by icon-warp">
                    <div class="icon-by"><i class="el-icon-aim"></i><p>多维度推荐</p></div>
                    <div class="icon-by"><i class="el-icon-shopping-cart-full"></i><p>更多折扣</p></div>
                    <div class="icon-by"><i class="el-icon-refresh-left"></i><p>自主退款</p></div>
                </div>
              </div>
            
          
          </div>
          <div class="content_two_right_box">
            <img src="../images/content2.png" alt="">
          </div>

       </div>
      
     </div>
     <div class="fb-one"><img src="../images/fb-one.png" ></div>
     <div class="content_three">
       <div class="content-detail-three" id="abtain-three">
        <div class="content-three-title">
          <div class="content-top"><img src="../images/content-title3.png"></div>
          <p>为你提供专业、全面、有趣的的游戏资讯</p>
          
        </div>
        <div class="content_three_content">
          <div class="content-three-img"><img src="../images/content3.png"></div>
          <div class="content-three-title-one"><img src="../images/gamecommunity.png" alt=""></div>
          <div class="content-three-title-two"><img src="../images/gamelive.png" alt=""></div>
          <div class="content-three-title-three"><img src="../images/gamevideo.png" alt=""></div>
        </div>
      </div>
     </div>
     <div class="fb-two"><img src="../images/fb-two.png" ></div>
     <div class="content_four">
       <div class="content-detail-four" id="abtain-four">
          <div class="title-server">
            <img src="../images/server.png">
            <p>做最懂你的游戏伙伴</p>
          </div>
          <div class="content-four-module">
            <div class="module"><img src="../images/speed.png"><h3>网络加速</h3><p>低延迟超畅快，尽享游戏乐趣</p></div>
            <div class="module"><img src="../images/assist.png"><h3>游戏辅助</h3><p>游戏好伴侣，轻松变大神</p></div>
            <div class="module"><img src="../images/gam.png"><h3>游戏社交</h3><p>欢乐共享，游戏世界不再孤单</p></div>
            <div class="module"><img src="../images/raiders.png"><h3>游戏攻略</h3><p>心得指引，游戏之路更加顺畅</p></div>
          </div>
        </div>
     </div>
     <div class="content_five">
       <div class="content-five-content " id="abtain-five">
        <div class="content-five-left">
          <div class="module-five"><img src="../images/Module9.png"></div>
          <div class="module-six"><img src="../images/Module6.png"></div>
          <div class="module-seven"><img src="../images/Module7.png"></div>
          <div class="module-eight"><img src="../images/Module8.png"></div>
        </div>
        <div class="content-five-right">
          <div class="content-five-title-img"><img src="../images/content-title5.png"></div>
          <p>我们致力于全方位的运营服务与强大的技术支持，构建玩家与开发者的桥梁。</p>
          <div class="detaiil-inoformation"><a href="#">了解详情</a></div>
        </div>
       </div>
     </div>
      
  </div>
</template>

<script>

function showDiv() {
        var abtaintwo= document.getElementById('abtain-two');
        var abtainthree = document.getElementById('abtain-three');
        var abtainfour = document.getElementById('abtain-four');
        var abtainfive = document.getElementById('abtain-five');
        var clients = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; 
        var divtoptwo = abtaintwo.getBoundingClientRect().top;
        var divTopthree= abtainthree.getBoundingClientRect().top;
        var divtopfour = abtainfour.getBoundingClientRect().top;
        var divtopfive = abtainfive.getBoundingClientRect().top;  
        if(divtoptwo<=clients){
            abtaintwo.classList.add('fadeInOn');
        }
        if(divTopthree<=clients){
            abtainthree.classList.add('fadeInOn');
        }
        if(divtopfour<=clients){
            abtainfour.classList.add('fadeInOn');
        }
        if(divtopfive<=clients){
            abtainfive.classList.add('fadeInOn');
        }
    }
    window.onscroll = showDiv;

export default {
  name: 'PcInterface',
  props: {
   
  }
 
}
 
    


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
*{
  margin: 0;
  padding: 0;
}
.pcInterface{
  width: 100%;
  height: 100%;
  margin: 0 auto;
  clear: both;
}
.content_one{
  height: 1000px;
  background-image:url(../images/background-img.png) ;
  background-color: #0d0d0e;
  background-position: 50% 0;
  background-repeat: no-repeat;
}
/* 淡入动画 */
@keyframes fadeInUp {
0% {  opacity:0;
      transform:translateY(20px)
                              }
100% {opacity:1;
      transform:translateY(0)
                              }   
}


.content-detail{
  height: 100%;
  max-width: 1800px;
  margin:0 auto;
  animation:fadeInUp 2s .2s ease both;
  
 
}
.content_one_left{
  width: 50%;
  float: left;
  vertical-align: middle;
  align-content: center;
 
}
.content_one_left{
  width: 50%;
  height: 100%;
}
.content_one_right{
  width: 50%;
}
.ML-one{
  height: 100%;
  float: left;
  margin-left: 50px;
  margin-top: 350px;
  background-repeat: no-repeat;
  animation: jump 3s linear infinite;
}
.ML-two{
  height: 100%;
  float: left;
  margin-top: 240px;
  background-repeat: no-repeat;
  animation: jump 3s linear infinite;
  
}
.ML-three{
  height: 1000px;
  float: left;
  margin-top: 160px;
  background-repeat: no-repeat; 
  
}
.logo_box{
  height: 500px;
  z-index: 999;
  margin-top: -100px;
  margin-left: -100px;
  position: absolute;
  animation: jump 3s linear infinite;
}
.logo_mod{
  height: 500px;
  position: absolute;
  margin-top: 80px;
  margin-left: -180px;
}
.ML-four{
  height: 100%;
  position: absolute;
  margin-top:520px;
  margin-left:720px;
  animation: jump 3s linear infinite;
  background-repeat: no-repeat;
  
 
}
.content_one_right{
  float: left;
  width: 30%;
  height: 100%;
  
}
.title-content-first{
  margin-top:250px;
  margin-left: 140px;
  
}
.content-title-two{
  float: left;
  margin-top: 25px;
  margin-left: 140px;
}
.download-button{
  float: left;
   margin-top: 50px;
   margin-left: 140px;
}
.moreinfor{
  float: left;
  margin-left: 140px;
  margin-top: 20px;
}
.moreinfor a{
   text-decoration: none;
    color: #fff000;
}
.moreinfor a:hover{
  color: #ffffff;
}
.content_two{
  height: 1000px;
  position: relative;
  text-align: center;
  background-image:url(../images/background-img2.png) ;
  background-position: 50% 0;
  background-repeat: no-repeat;
  z-index: 0;
  
}
.content-detail-two{
  height: 100%;
  max-width: 1800px;
  margin:0 auto;
  animation:fadeInUp 2s .2s ease both;
  animation:fadeInUp 2s .2s ease both;
}


.content_two_left_box{
   width: 30%;
   float: left; 
   margin: 0 auto;
   margin-top:250px;
   z-index: 10;
  
}
.box-bj{
  position:absolute;
  margin-left: 300px;
  margin-top: -120px;
  z-index: -5;
}
.little-title{
  font-size: 18px;
  line-height: 30px;
  color: #a0a0a0;
  letter-spacing: 10px;
  margin-top: 30px;
}
.list-by{
  margin: auto;
  margin-top: 60px;
  max-width: 300px;
}
.icon-by{
  float: left;

}
.icon-by p{
  font-size: 10px;
  color: #8c8c8c;
} 

.icon-by:nth-child(2){ margin-left:80px;}
.icon-by:nth-child(3){ margin-left:80px;}

.icon-warp{
  font-size: 40px;
}
.content_two_right_box{
  width: 70%;
  float: left;
  margin: auto;
  margin-top: 80px;
}
.fb-one{
  position: absolute;
  z-index: 999;
  margin: auto;
  max-width: 1400px;
  margin-top: -450px;
}
.fb-one img{
  width: 80%;
  height: 80%;
}
.content_three{
  margin: 0 auto;
  height: 1000px;
  
  position: relative;
  margin-top: -160px;
  background-image:url(../images/background-img3.png) ;
  background-position: 50% 0;
  background-color: #0d0d0e;
  background-repeat: no-repeat;
  
}
.content-three-title{
  margin: 0 auto;
  text-align: center;
 
}
.content_three_content{
  margin: 0 auto;
  text-align: center;
  max-width: 1500px;
}


.content-top{
   padding-top: 120px;
}
.content-three-title p{
  padding-top: 15px;
  font-size: 18px;
  line-height: 30px;
  color: #a0a0a0;
   letter-spacing: 8px;
}
.content-three-img{
  padding-top: 50px;
}
.content-three-title-one{
  position: absolute;
  margin-top: -480px;
  margin-left:200px;
  z-index: 5;
}
.content-three-title-two{
  position: absolute;
  margin-top: -480px;
  margin-left:1140px;
  z-index: 5;
}
.content-three-title-three{
  position: absolute;
  margin-top: -210px;
  margin-left:670px;
  z-index: 5;
}
.fb-two{
  position: absolute;
  z-index: 999;
  margin: auto;
  max-width: 1400px;
  right: 0px;
  margin-top: -100px;

}
.fb-two img{
  width: 80%;
  height: 80%;
}
.content_four{
  margin: auto;
  height: 900px;
  background-image:url(../images/background-img4.png) ;
  background-position: 50% 0;
  background-repeat: no-repeat;
  
}

.title-server{
  margin: auto;
  text-align: center;
  
}
.title-server img{
  padding-top: 150px;
  
}
.title-server p{
  padding-top: 20px;
  font-size: 18px;
  line-height: 30px;
  color: #a0a0a0;
  letter-spacing: 8px;
}
.content-four-module{
  max-width: 1400px;
  margin: auto;
  margin-top: 150px;
  overflow: hidden;
}
.module{
  float: left;
  text-align: center;
  margin-left: 120px;
}
.module h3{
margin-bottom: 10px;
font-size: 32px;
color: #333;
font-weight: 300;
}
.module p{
font-size: 16px;
color: #8c8c8c;
}
.content-four-module:nth-child(1){
  margin-left: 100px;
}


.content_five{
  margin: 0 auto;
  height: 900px;
  background-image:url(../images/background-img5.png) ;
  background-position: 50% 0;
  background-repeat: no-repeat;
  background-color: #0d0d0e;
  
}
.content-five-content{
  margin: auto;
  max-width: 1600px;
  height: 100%;
}
.content-five-left{
  width: 50%;
  height: 100%;
  float: left;
}
.content-five-right{
  width: 50%;
  height: 100%;
  float:right;
}
.module-five{
  position: absolute;
  z-index: 1;
  margin-top: 300px;
  clear: both;
}
.module-six{
  position: absolute;
  z-index: 5;
  margin-top: 240px;
  margin-left: 70px;
  animation: jump 3s linear infinite;
}
.module-seven{
  position: absolute;
  z-index: 5;
  margin-top: 225px;
  margin-left: 470px;
  clear: both;
  animation: jump 3s linear infinite;
}
.module-eight{
  position: absolute;
  z-index: 5;
  margin-top: 435px;
  margin-left: 375px;
  clear: both;
  animation: jump 3s linear infinite;
}
.content-five-title-img{
  margin-top: 250px;
  margin-left: 140px;
}
.content-five-right p{
    margin-left: 140px;
    margin-top: 50px;
    width: 310px;
    font-size: 18px;
    line-height: 30px;
    color: #a0a0a0;
}
.detaiil-inoformation{
  margin-left: 150px;
  margin-top: 80px;
}
.detaiil-inoformation a{
  color: #323232;;
  background-color:#ffc625;
  background-image: linear-gradient(90deg,#ffc625,#ffc92a,#ffde7d);
  padding: 15px 100px;
  text-align: center;
  text-decoration: none;
  border-radius: 30px;
}
@keyframes jump {
    0% {
    transform: translateY(0) ;
  }
    25% {
        transform: translateY(10px);
    }
    50% {
        transform: translateY(20px) ;
       
    }
    75% {
        ransform: translateY(10px) ;
    }
    100% {
        transform: translateY(0) ;
    }
}
@keyframes fadeIn {
        0%{
            opacity: 0;       
        -webkit-transform: translate3d(0,30%,0);
        -moz-transform:translate3d(0,30%,0);
        -ms-transform:translate3d(0,30%,0);
        -o-transform: translate3d(0,30%,0);
        transform:translate3d(0,30%,0);
        }
        100%{
            opacity: 1;
            -webkit-transform: translate3d(0,0%,0);
            -moz-transform:translate3d(0,0%,0);
            -ms-transform: translate3d(0,0%,0);
            -o-transform: translate3d(0,0%,0);
            transform: translate3d(0,0%,0);
        }
    }
    .fadeInOn{
        animation-name: fadeIn ;
        -webkit-animation-name: fadeIn ;
        animation-duration: 3s;
        -webkit-animation-duration: 3s;
    }
</style>
