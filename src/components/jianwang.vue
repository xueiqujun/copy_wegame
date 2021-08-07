<template>
  
  <div>
    <div><myheader :flag="flag"/></div>
    <div>
      <!-- 头部背景 -->
      <div class="top"> 
       <div class="buju">
         <div class="word1"><p>精选 > 剑网3</p></div>
          <div class="tu"><img src="@/assets/12.jpg" width="110px" height="160px"></div>
            <div class="word2">
              <p>剑网3</p>
              <p class="t1"><b>游戏详情</b></p>
            </div>
       </div>
      </div>
    </div>
    <el-container>
      <el-main>
         <div class="bg">
           <div class="buju">
                <!-- 走马灯 -->
                <div class="deng">
                   <div class="video">
                      <el-carousel :interval="2000" arrow="always" height="430px">
                        <el-carousel-item v-for="item in 4" :key="item">
                          <h3>{{ item }}</h3>
                        </el-carousel-item>
                      </el-carousel>
                   </div>
                </div>
                <!-- 版本信息   -->
                <div class="banben">
                            <div class="bt"><p class="fa"><b>发行日期</b></p></div>
                            <div class="btxx"><p class="fa">2019-06-20</p></div>
                            <div class="bt"><p class="fa"><b>推荐率</b></p></div>
                            <div class="btxx"><p class="fa"><b>81.5%</b>(2372条评测)</p></div>
                            <div class="bt"><p class="fa"><b>开发商</b></p></div>
                            <div class="btxx"><p class="fa">珠海金山网络游戏公司科技</p></div>
                            <div class="bt"><p class="fa"><b>运营</b></p></div>
                            <div class="btxx"><p class="fa">成都西山居世游科技</p></div>
                            <div class="bt"><p class="fa"><b>发行平台</b></p></div>
                            <div class="btxx"><p class="fa">WeGame</p></div>
                       <div class="bq">
                            <el-button>MMORPG</el-button>
                            <el-button>武侠</el-button>
                            <el-button>唯美画面</el-button>
                            <el-button>剧情丰富</el-button>
                            <el-button>角色扮演</el-button>
                            <el-button>中国文化</el-button>
                            <el-button><i class="el-icon-plus"></i></el-button>
                       </div>
                       <div class="down"><el-button>立即下载</el-button></div>
                </div>
                <!-- 游戏详情 -->
                <div class="xq">
                  <h2 class="title" >游戏详情</h2>
                  <div class="xqlr">
                     <div class="gc">
                       <h4>《剑网3》“结庐在江湖”今日公测海量内容正式上线</h4>
                       <p>“家有美墅，冠绝唐宋。”《剑网3》年度资料片"结庐在江湖”今日震撼公测!綬侠士瞩目的家园系统今天就要和大家见面啦!
                         开放式小区全民有房,纳户外无缝打通，心仪挂件随意摆放,家具太小自由缩放,管家侍女贴心服务,趣味积木自由搭建。此外本次更新还有海量惊喜交互与超多趣味休闲玩法，让
                         你全方位体验居家休闲的自在生活!更有新服加开，更有海量福利回馈精彩上线,开启江湖畅玩新体验!</p><br/>
                       <el-divider></el-divider><br/>
                       <el-button type="text" @click="dialogVisible = true" class="zhong">查看详情</el-button>
                        <el-dialog title="" :visible.sync="dialogVisible" width="50%" :before-close="handleClose">
                           <div style="margin-left:30px;margin-right:30px;">
                             <h2 style="margin-bottom:30px; ">2020年5月22日12:00新服开放：双线四区 江湖故人</h2>
                             <p style=" color:orange;margin-bottom:30px;">喜迎毕业，好礼相送！值此千万学子科考之时，《剑网3》特推出毕业季“仲夏风月”系列福利活动，祝愿所有学子都能金榜题名、蟾宫折桂，取得最理想的成绩！全民福利，多重好礼，毕业季活动精彩不断，还有喜迎萌新暖心活动让人眼前一亮！</p>
                             <img src="@/assets/71.jpg" width="650px;">
                             <img src="@/assets/72.png" width="650px;">
                             <img src="@/assets/73.png" width="650px;">
                             <img src="@/assets/74.png" width="650px;">
                             <img src="@/assets/75.png" width="650px;">
                             <img src="@/assets/76.png" width="650px;">
                           </div>
                        </el-dialog>
                     </div>
                  </div>
                  <div style="height:60px;">
                     <h2 class="title" style="margin-top:30px;float:left;">更新与活动</h2>
                     <div class="ck" style="float:right"><el-button type="text" @click="dialogVisible = true">查看全部</el-button></div>
                  </div>
                  <div class="xqlr">
                    <div class="hd">
                       <div>
                         <img src="@/assets/ks.png" width="630px" height="130px">
                       </div>
                    </div>
                    <div class="hd">
                       <div>
                         <img src="@/assets/31.png" width="630px" height="125px">
                       </div>
                    </div><div class="hd">
                       <div>
                         <img src="@/assets/32.png" width="630px" height="130px">
                       </div>
                    </div>
                  </div>
                  <div class="cp">
                     <h2 class="title" style="margin-top:30px;float:left;">用户评测</h2>
                     <P style="margin-left:20px;margin-top:32px;float:left;color:gray">您的声音对我们至关重要</P>
                  </div> 
                  <div class="hd" style="padding-top:25px;padding-bottom:25px;margin-top:90px;text-align: center;color:gray;">
                    <span>只有玩过游戏后才能发表评测噢~</span>
                  </div>
                  <div class="hd">
                    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                        <el-tab-pane label="最有价值" name="first">
                          <img src="@/assets/42.png" width="630px" height="300px">
                          <img src="@/assets/43.png" width="630px" height="280px">
                          <img src="@/assets/44.png" width="630px" height="300px">
                          <img src="@/assets/41.png" width="630px" height="230px">
                          <img src="@/assets/45.png" width="630px" height="200px">
                          <img src="@/assets/46.png" width="630px" height="200px">
                          <img src="@/assets/47.png" width="630px" height="200px">
                        </el-tab-pane>
                        <el-tab-pane label="最近评测" name="second">
                          <br/>
                           <el-divider content-position="center"> <p style="color:gray;">10天之类的评测 </p></el-divider><br/>
                           <img src="@/assets/55.png" width="630px" height="300px">
                           <img src="@/assets/51.png" width="630px" height="210px">
                           <img src="@/assets/52.png" width="630px" height="240px">
                           <img src="@/assets/53.png" width="630px" height="200px">
                            <img src="@/assets/43.png" width="630px" height="290px">
                             <img src="@/assets/47.png" width="630px" height="210px">
                             <img src="@/assets/41.png" width="630px" height="240px">
                        </el-tab-pane>
                        <el-tab-pane label="最新版本" name="third">
                            <img src="@/assets/61.png" width="630px" height="400px">
                            <img src="@/assets/52.png" width="630px" height="240px">
                           <img src="@/assets/53.png" width="630px" height="200px">
                            <img src="@/assets/43.png" width="630px" height="290px">
                             <img src="@/assets/47.png" width="630px" height="210px">
                        </el-tab-pane>
                    </el-tabs>
                  </div>
                </div>
                 <div class="pz">
                        <h4>应用特性</h4>
                            <div class="tx" style="width:40px"><i class="el-icon-share" style="margin:8px;"></i></div>
                            <div class="txx" style="width:195px"><p class="x1">仅支持QQ账号</p></div>
                 </div>
                 <div class="pz">
                           <h4>最低配置要求</h4>
                            <div class="tx"><p class="x1">内存</p></div>
                            <div class="txx"><p class="x2">4 GB</p></div>
                            <div class="tx"><p class="x1">显卡</p></div>
                            <div class="txx"><p class="x2">GeForce GT 610</p></div>
                            <div class="tx"><p class="x1">硬盘</p></div>
                            <div class="txx"><p class="x2">38 GB</p></div>
                            <div class="tx"><p class="x1">CPU</p></div>
                            <div class="txx"><p class="x2">	Intel(R) Core(TM) i3</p></div>
                            <div class="tx"><p class="x1">系统</p></div>
                            <div class="txx"><p class="x2" style="margin-top:3px">建议使用win7、win8、win10 64位系统</p></div>
                 </div>
                  <div class="pz">
                           <h4>语言</h4>
                            <div class="tx"><p class="x1">界面</p></div>
                            <div class="txx"><p class="x2">中文简体</p></div>
                             <div class="tx"><p class="x1">音频</p></div>
                            <div class="txx"><p class="x2">中文简体</p></div>
                             <div class="tx"><p class="x1">文本</p></div>
                            <div class="txx"><p class="x2">中文简体</p></div>
                           
                 </div>
           </div>
         </div>
      </el-main>
    </el-container>
    <div><myfooter/></div>
  </div>


</template>

<script>
import myfooter from "@/components/footer"
import myheader from "@/components/headerTop"

export default {
  name: 'jian',
  data () {
    return {
       dialogVisible: false,
        activeName: 'first',
        flag:[true,false,false,false,false]
    };
  },
   methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
        handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    components:{
      myfooter,
      myheader
    }
}
</script>


<style scoped>
/* 全局 */
*{
  margin: 0px;
  padding: 0px;
  }
  .title{
    font-family: "宋体";
    font-size: 22px;
    background-color:transparent;
    color: #3C3C3C ;
  }
  /* 头部背景图部分 */
  .top{
    height: 250px;
    background-image: url('../assets/11.jpg');
    background-repeat:no-repeat;
  }
  .word1{
    color: rgb(158, 155, 155);
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 16px;
  }
  .tu{
    float: left;
  }
  .word2{
    margin-top: 20px;
    margin-left: 45px;
    float: left;
    color:white;
    font-size: 30px;
  }
 
  .buju{ /* 中间布局 */
    margin-left: 270px;
    margin-right: 270px;
  }

  .t1{
    margin-top: 92px;
    margin-left: -10px;
    padding-bottom: 13px;
    font-size: 18px;
    color: black;
    border-bottom:4px solid orange;
    font-family: "黑体";
    width: 80px;
    }
  /* 中间部分大背景 */
  .bg{
    height: 3520px;
    width: 100%;
    background-image: url('../assets/bg.png');
    background-attachment: fixed;
  }
  /*走马灯*/
  .deng{
    width: 650px;
    float: left;
    margin-top: 30px;
  }
  .video{
    width: 100%;
    background-color: black;
  }
 .el-carousel__item h3 
 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-image: url('../assets/21.jpg');
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-image: url('../assets/22.jpg');
  }
  /*版本信息*/
  .banben{
    margin-top: 30px;
    padding-top: 20px;
    padding-left: 30px;
    padding-bottom: 20px;
    padding-right: 30px;
    height: 390px;
    background-color:white ;
    width: 252px;
    float: left;
  }
  .bt{
    border-radius: 5px;
    background-color:#EDEDED;
    width: 80px;
    float: left;
    margin-top: 2px;
  }
  .btxx{
    margin-top: 2px;
    border-radius: 5px;
    background-color:#F2F2F2;
    width: 172px;
    float: left;
  }
  .fa{
    font-size: 12px;
    text-align:center;
    margin-top: 8px;
    margin-bottom: 8px;
    color: #757575;
  }
  .bq{
    margin-top: 190px;
  }
  .bq > .el-button{
    margin-top: 5px;
    border-radius: 2px;
    border: 1px solid #EDEDED;
    padding: 5px;
    font-size: 12px;
    color: black;
    margin-left: 0px;

  }
  .bq > .el-button:hover{
    border:1px solid #EDEDED;
    background-color: #F2F2F2;
  }
  .down > .el-button{
    margin-top: 90px;
    background-color: #3B9CFF;
    width: 252px;
    height: 50px;
    font-size: 25px;
    font-family: '微软雅黑';
    color: white;
  }
  /*游戏详情页面 */
  .xq{
     width: 650px;
    float: left;
    margin-top: 30px;
  }
  .gc{
    margin-top: 30px;
    padding:30px ;
    background-color: white;
    border-radius: 3px;
  }
  .gc > p {
    margin-top: 40px;
    font-size: 14px;
    line-height: 22px;
    color: gray ;
  }
  .zhong{
    margin-left: 250px;
  }
  .hd{
    margin-top: 25px;
    padding:10px ;
    background-color: white;
    border-radius: 3px;
  }
  /* 跟新与活动 */
  .ck > .el-button{
    margin-top: 35px;
    border-radius: 2px;
    border: 1px solid gray;
    padding: 8px;
    width: 80px;
    font-size: 12px;
    color: black;
    margin-left: 0px;
    background-color: transparent;
  }
  .ck > .el-button:hover{
    border:1px solid #EDEDED;
    background-color: #F2F2F2;
  }
  /* 配置页面 */
  .pz{
    float: left;
    width: 251px;
    margin-left: 20px;
    margin-top: 30px;
    padding: 20px;
    border-radius: 3px;
    background-color: white;
  }
  .pz > h4{
    margin-bottom: 20px;
  }
  .tx{
    border-radius: 5px;
    background-color:#EDEDED;
    float: left;
    height: 40px;
    width: 70px;
    font-size: 25px;
    margin-top: 2px;
    text-align: center;
  }
  .txx{
    margin-top: 2px;
    border-radius: 5px;
    background-color:#F2F2F2;
    float: left;
    height: 40px;
    width: 165px;
    margin-left: 3px;
  }
  .x1{
    font-size: 12px;
    margin-top: 13px;
    text-align: center;
    color: #757575;
  }
  .x2{
    padding-left: 10px;
     font-size: 12px;
    margin-top: 13px;
    color: black;
  }

</style>
