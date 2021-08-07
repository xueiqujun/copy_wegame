<template>
  <div class="phonedownload">
    <div class="content-one" id="abtain-one" >
       <div class="content-detail">
        <div class="content-one-left">
              <div class="ML-one"><img src="../images/Module1.png" /></div>
              <div class="ML-two"><img src="../images/Module2.png"/></div>
              <div class="ML-three">
                <div class="logo-box"><img src="../images/Module5.png"/></div>
                <div class="logo-mod"><img src="../images/Module4.png"/></div>
              </div>
              <div class="ML-four"><img src="../images/Module3.png"/></div>
        </div>
        <div class="content-one-right">
          <div class="title-content-first"><img src="../images/title.png"></div>
            <div class="content-title-two"><img src="../images/content-title.png" ></div>
            <div class="code-button">
              <div class="qrcode"><img src="../images/qrcode.png"></div>
              <div class="download-button">
              <el-row class="btn">
                <p><a href=""><i class="el-icon-download"></i>iPhone</a></p>
                <p><a href=""><i class="el-icon-download"></i>Android</a></p>
              </el-row>
              </div>
            </div>
        </div>
       </div>
    </div>
    <div class="content-two" >
      <div class="content-two-abtain" id="abtain-two">
        <div class="content-two-left">
            <img src="../images/content-two-left.png" alt="">
        </div>
        <div class="content-two-right">
          <div class="content-two-title"><img src="../images/content-two-title.png"></div>
          <div class="content-two-bigicon"><span>1</span><img  src="../images/biggear.png"></div>
          <div class="content-two-littleicon"><img src="../images/littlegear.png"></div>
        </div>
      </div>
    </div>
    <div class="content-three">
      <div class="content-three-abtain" id="abtain-three">
          <div class="content-three-left">
            <div class="content-three-littleicon"><img  src="../images/littlegear.png"></div>
            <div class="content-three-bigicon"><span>2</span><img  src="../images/biggear.png"></div>
            <div class="content-three-title"><img  src="../images/content-three-title.png"></div>
          </div>
          <div class="content-three-right">
            <div class="content-right-75"><img src="../images/content-three-75.png"></div>
            <div class="xszk"><img src="../images/xszk.png" ></div>
            <div class="content-right-img"><img src="../images/content-three-right.png"></div>
            <div class="appzx"><img src="../images/appzx.png"></div>
            <div class="content-right-85"><img src="../images/content-three-85.png"></div>
          </div>
       </div>
     </div>

    <div class="content-four">
      <div class="content-four-abtain" id="abtain-four">
        <div class="content-four-left">
          <div class="content-four-img"><img src="../images/content-four-left.png"></div>
        </div>
        <div class="content-four-right">
          <div class="content-four-title"><img src="../images/content-four-title.png"></div>
          <div class="content-four-bigicon"><span>3</span><img src="../images/biggear.png"></div>
          <div class="content-four-littleicon"><img src="../images/littlegear.png"></div>
        </div>
      </div>
    </div>

    <div class="content-five">
      <div class="content-five-abtain" id="abtain-five">
        <div class="content-five-left">
          <div class="content-five-bigicon"><span>4</span><img src="../images/biggear.png"></div>
          <div class="content-five-littleicon"><img src="../images/littlegear.png"></div>
          <div class="content-five-img"><img src="../images/content-five-title.png"></div>
        </div>
        <div class="content-five-right">
          
          <div class="right-content">
            <div class="control-img"><div class="content-five-bgimg"><img src="../images/content-five-background-txt.png"></div></div>
            <div class="whitephone"><img src="../images/whitephone.png"></div>
            <div class="icon-dy"><img src="../images/douyu.png"></div>
            <div class="pic-one"><img src="../images/content-five-right-one.png"></div>
            <div class="pic-two"><img src="../images/content-five-right-two.png"></div>
            <div class="icon-qe"><img src="../images/qie.png"></div>
            <div class="icon-hy"><img src="../images/huya.png"></div> 
          </div>
            
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
        var divTopthree = abtainthree.getBoundingClientRect().top;
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
  name: 'phonedownload',
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
a{
  text-decoration: none;
  color: #0d0d0e;
}
.phonedownload{
  width: 100%;
  height: 100%;
  margin: 0 auto;
  clear: both;
}
.content-one{
  height: 1000px;
  background-image:url(../images/content-one-background.png) ;
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
  animation:fadeInUp 2s .2s ease both;
 
}
.content-one-left{
  width: 50%;
  float: left;
  vertical-align: middle;
  align-content: center;
 
}
.content-one-left{
  width: 50%;
  height: 100%;
}
.content-one-right{
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
.logo-box{
  height: 500px;
  z-index: 999;
  margin-top: -150px;
  margin-left: 30px;
  position: absolute;
  animation: jump 3s linear infinite;
}
.logo-mod{
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
.content-one-right{
  float: left;
  width: 30%;
  height: 100%;
  
}
.title-content-first{
  margin-top:250px;
  margin-left: 140px;
  
}
.content-title-two{
  
  margin-top: 25px;
  margin-left: 140px;
}
.code-button{
  margin-left: 140px;
  width: 450px;
  height: 400px;
}
.qrcode{
  float: left;
  margin-top: 20px;
}
.download-button{
   float: left;
}
.download-button p{
  color: #323232;
  background-color:#ffc625;
  background-image: linear-gradient(90deg,#ffc625,#ffc92a,#ffde7d); 
  padding: 15px 50px;
  text-align: center;
  border-radius: 30px;
}
.download-button .btn p:hover{
  cursor: pointer;
   background-color:#ffffff;
   transition: 1s;
}
.btn:nth-child(1){
  margin-top: 25px;
  margin-left: 10px;
}
.btn :nth-child(2){
  margin-top: 20px;
}
.content-two{
   height: 850px;
  background-image:url(../images/content-two-background.png) ;
  background-position: 50% 0;
  background-repeat: no-repeat;
}
.content-two-abtain{
  margin: auto;
  max-width:1800px;
  height: 100%;

  
}
.content-two-left{
  width: 30%;
  float: left;
  text-align: center;
  padding-top: 100px;
  margin-left: 200px;
}
.content-two-right{
  width: 50%;
  float: right;
  padding-top: 400px;
  padding-left:100px;
  text-align: center;
}
.content-two-title{
  float: left;
  padding-left: 80px;
}
.content-two-bigicon{
  float: left;
  margin-top: -50px;
  
}
.content-two-bigicon img{
    transform: rotate(360deg);
    animation: rotation 6s linear infinite;
    -moz-animation: rotation 6s linear infinite;
    -webkit-animation: rotation 6s linear infinite;
    -o-animation: rotation 6s linear infinite;
}
.content-two-littleicon img{
    transform: rotate(360deg);
    animation: unrotation 6s linear infinite;
    -moz-animation: unrotation 6s linear infinite;
    -webkit-animation: unrotation 6s linear infinite;
    -o-animation: unrotation 6s linear infinite;
}

  
.content-two-bigicon span{
  font-size: 80px;
  position: absolute;
  z-index: 5;
  margin-top: 15px;
  font-weight:bold;
  margin-left: 40px;
}
.content-two-littleicon{
  float: left;
  margin-top: 40px;
  margin-left: -30px;
}
.content-three-bigicon img{
    transform: rotate(360deg);
    animation: rotation 6s linear infinite;
    -moz-animation: rotation 6s linear infinite;
    -webkit-animation: rotation 6s linear infinite;
    -o-animation: rotation 6s linear infinite;
}
.content-three-littleicon img{
    transform: rotate(360deg);
    animation: unrotation 6s linear infinite;
    -moz-animation: unrotation 6s linear infinite;
    -webkit-animation: unrotation 6s linear infinite;
    -o-animation: unrotation 6s linear infinite;
}
.content-three{
  height: 850px;
  background-image:url(../images/content-three-background.png) ;
  background-position: 50% 0;
  background-repeat: no-repeat;
}
.content-three-abtain{
  margin: auto;
  max-width:1400px;
  height: 100%;
}
.content-three-left{
  width: 40%;
  float: left;
  text-align: center;
  padding-top: 350px;
  margin-left: 100px;

}
.content-three-right{
  width: 60%;
  float: right;
  padding-top: 120px;
  margin-left: -200px;
  text-align: center;

}
.content-three-title{
  float: left;
  margin-top: -20px;
  margin-left: -80px;
}
.content-three-bigicon{
  float: left;
  margin-top: -60px;
  margin-left: -30px;
}
.content-four-bigicon img{
    transform: rotate(360deg);
    animation: rotation 6s linear infinite;
    -moz-animation: rotation 6s linear infinite;
    -webkit-animation: rotation 6s linear infinite;
    -o-animation: rotation 6s linear infinite;
}
.content-four-littleicon img{
    transform: rotate(360deg);
    animation: unrotation 6s linear infinite;
    -moz-animation: unrotation 6s linear infinite1;
    -webkit-animation: unrotation 6s linear infinite;
    -o-animation: unrotation 6s linear infinite;
}
.content-three-bigicon span{
  font-size: 80px;
  position: absolute;
  z-index: 5;
  color: #ffffff;
  margin-top: 15px;
  font-weight:bold;
  margin-left: 40px;
}
.content-three-littleicon{
  float: left;
  margin-top: 40px;
  margin-top: 30px;
}
.content-right-75{
  float: left;
  margin-top: 450px;
}
.xszk{
  position: absolute;
  margin-top: 150px;
  margin-left: 100px;
  z-index: 5;
}
.content-right-img{
  float: left;
  margin-left: 20px;
}
.appzx{
   position: absolute;
   margin-top: 300px;
   margin-left: 400px;
   z-index: 5;
}
.content-right-85{
  float: left;
  margin-top: 180px;
  margin-left: 20px;
}
.content-four{
  height: 850px;
  background-image:url(../images/content-four-background.png) ;
  background-position: 50% 0;
  background-repeat: no-repeat;
}
.content-four-abtain{
  margin: auto;
  max-width:1600px;
  height: 100%;
}
.content-four-left{
  width: 30%;
  float: left;
  text-align: center;
  padding-top: 110px;
  margin-left: 200px;

}
.content-four-right{
  width: 50%;
  float: left;
  padding-top: 350px;
  text-align: center;
}
.content-four-title{
  float: left;
  margin-left: 50px;
}
.content-four-bigicon{
  position: absolute;
  margin-left: 580px;
  margin-top: -30px;
}
.content-four-bigicon img{
    transform: rotate(360deg);
    animation: rotation 6s linear infinite;
    -moz-animation: rotation 6s linear infinite;
    -webkit-animation: rotation 6s linear infinite;
    -o-animation: rotation 6s linear infinite;
}
.content-four-littleicon img{
    transform: rotate(360deg);
    animation: unrotation 6s linear infinite;
    -moz-animation: unrotation 6s linear infinite;
    -webkit-animation: unrotation 6s linear infinite;
    -o-animation: unrotation 6s linear infinite;
}
.content-four-bigicon span{
  font-size: 80px;
  position: absolute;
  z-index: 5;
  margin-top: 15px;
  font-weight:bold;
  margin-left: 40px;
}
.content-four-littleicon{
  position: absolute;
  margin-left: 540px;
  margin-top: 60px;
}
.content-five{
  height: 850px;
  background-image:url(../images/content-five-background.png) ;
  background-position: 50% 0;
  background-repeat: no-repeat;
}
.content-five-abtain{
  margin: auto;
  max-width:1600px;
  height: 100%;
}
.content-five-left{
  width:500px;
  float: left;
  text-align: center;
  z-index: 5;
  margin-top: 370px;
  margin-left: 200px;

}
.content-five-right{
  width: 50%;
  float: left;
  text-align: center;
  
}
.content-five-img{
  float: left;
  margin-left: 80px;
}
.content-five-bigicon{
  position: absolute;
  margin-top: -60px;
  margin-left: 50px;
}
.content-five-bigicon img{
    transform: rotate(360deg);
    animation: rotation 6s linear infinite;
    -moz-animation: rotation 6s linear infinite;
    -webkit-animation: rotation 6s linear infinite;
    -o-animation: rotation 6s linear infinite;
}
.content-five-littleicon img{
    transform: rotate(-360deg);
    animation: unrotation 5s linear infinite;
    -moz-animation: unrotation 5s linear infinite;
    -webkit-animation: unrotation 5s linear infinite;
    -o-animation: unrotation 5s linear infinite;
    
}
.content-five-bigicon span{
  font-size: 80px;
  position: absolute;
  color: #ffffff;
  z-index: 5;
  margin-top: 15px;
  font-weight:bold;
  margin-left: 40px;
}
.content-five-littleicon{
  position: absolute;
  margin-top: 30px;
  margin-left: 10px;
}
.control-img{
 position: absolute;;
  width: 650px;
  height: 350px;

  overflow: hidden;
}
.content-five-bgimg{
  position: absolute;
  width: 1000px;
  height: 350px;
  z-index: 1;
  animation: imgScroll 4s linear 0s infinite;
}
.right-content{
  margin-left: 50px;
  margin-top: 250px;
  width: 500px;
}


.whitephone{
  position: absolute;
  margin-left:150px;
  z-index: 5;
  margin-top: -100px;
}
.pic-one{
  position: absolute;
  margin-left: 175px;
  margin-top: -35px;
  z-index: 5;
  animation:qiehuan 5s infinite;
  opacity: 1;
}
@keyframes qiehuan {
0%{ opacity: 0.5;}
50%{ opacity: 0.8;}
70%{ opacity: 1;}
100%{ opacity: 0;}
}
.pic-two{
  position: absolute;
  margin-left: 175px;
  margin-top: -35px;
  z-index: 5;
  animation:qiehuantwo 5s infinite;
  opacity: 0;
}
@keyframes qiehuantwo {
0%{ opacity: 0;}
50%{ opacity: 0;}
100%{ opacity: 1;}
}

.icon-dy{
  position: absolute;
  z-index: 10;
  margin-top: 120px;
  margin-left: 70px;
}
.icon-hy{
  position: absolute;
  z-index: 10;
  margin-top:220px;
  margin-left: 470px;
}
.icon-qe{
  position: absolute;
  z-index: 10;
  margin-top: 0px;
  margin-left: 480px;
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
@keyframes imgScroll {
             0% {
                right: -400px;
            }
            25% {
                right: -100px
            }
            50% {
                right: 200px;
            }
            75% {
                right: 500px;
            }
            100% {
                right: 800px;    
        }
}

@keyframes rotation{
    from {-webkit-transform: rotate(0deg);}
    to {-webkit-transform: rotate(360deg);}
  }
@keyframes unrotation{
    from {-webkit-transform: rotate(0deg);}
    to {-webkit-transform: rotate(-360deg);}
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
