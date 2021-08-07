<template>
    <div id="wegame">
        <div>
            <div>
                <headerTop :flag='flag' />
            </div>

            <div :style="{backgroundImage:'Url('+bg+')'}">
                <!-- 导航 -->
                <div>
                    <navFirstRow></navFirstRow>
                </div>

                <!-- 轮播 -->
                <carousel />
                <!-- 热门预告 -->
                <notice></notice>
                <!-- 排行榜 -->
                <leaderBoard />
                <!-- 测试专区 -->
                <testArea />
                <!-- 最近更新 -->
                <updatecomp />
                <!-- 蛋蛋君推荐 -->
                <recommend />
            </div>
            
            <div><myfooter /></div>
        </div>
    </div>
</template>

<script>
// import bz from "./assets/bz.jpg";

import headerTop from "@/components/headerTop";
import navFirstRow from "@/components/navFirstRow";
import carousel from "@/components/carousel";
import notice from "@/components/notice";
import leaderBoard from "@/components/leaderBoard";
import testArea from "@/components/testArea";
import updatecomp from "@/components/update";
import recommend from "@/components/recommend";
import myfooter from "@/components/footer";

export default {
    data() {
        return {
            bg: require("@/assets/main-bj.jpg"),
            flag:[true,false,false,false,false]
        };
    },
    components: {
        headerTop,
        navFirstRow,
        carousel,
        notice,
        leaderBoard,
        testArea,
        updatecomp,
        recommend,
        myfooter
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
    margin: 0;
    padding: 0;
}
#wegame {
    width: 100%;
    margin: 0 auto;
}
/* .el-header, */
.el-main {
    /* margin-top: -8px; */
    background-color: white;
    color: #333;
    text-align: center;
    /* color: var(--color); */
    /* height: 500px; */
}
/* .el-container > div:first-child{
    background-color: black;
    margin: 0px;
} */
</style>
