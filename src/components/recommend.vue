<template>
    <el-row class="recommend">
        <el-col :span="4">&nbsp;</el-col>
        <el-col :span="16" :style="{backgroundImage:'Url('+bg+')'}">
            <!-- <el-image :src="imgs[0]"></el-image> -->
            <el-col :span="14" class="zong">
                <h3>{{ name }}</h3>
               
                <p>{{ caption }}</p>
                <div class="mybutton">查看专题&nbsp; ></div>
                <el-row class="label">
                    <el-col :span="1">
                        <i class="el-icon-mouse"></i>
                    </el-col>
                    <el-col :span="6">本期游戏推荐</el-col>
                    <el-col :span="4">共三款</el-col>
                    <el-col :span="11">&nbsp;</el-col>
                </el-row>
                <el-row class="img" :gutter="10">
                    <el-col :span="8">
                        <el-image :src="imgs[0]"></el-image>
                    </el-col>
                    <el-col :span="8">
                        <el-image :src="imgs[1]"></el-image>
                    </el-col>
                    <el-col :span="8">
                        <el-image :src="imgs[2]"></el-image>
                    </el-col>
                </el-row>
            </el-col>
        </el-col>
    </el-row>
</template>

<script>
export default {
    data() {
        return {
            name: "策略之上，在塔防战场中获胜",
            caption:
                "运筹帷幄之中，决胜千里之外。任你万军压境，我自据塔防守，协同防御，造最强防线痛击来敌。随着时代变化，塔防也日新月异起来，创新玩法之下，依然是游戏本质：保护自己，消灭敌人。",
            imgs: [
                require("@/assets/recommend1.png"),
                require("@/assets/recommend2.png"),
                require("@/assets/recommend3.png")
            ],
            bg: require("@/assets/tuijian.png")
        };
    }
};
</script>

<style scoped>
.recommend {
    margin: 20px;
    color: white;
    text-align: left;
}

/* .recommend > .el-col:last-child {
    height: 400px;
} */
.recommend > .el-col:last-child > .el-col {
    /* background-color: yellow; */
    padding: 30px;
}
.mybutton {
    text-align: center;
    padding: 5px;
    width: 140px;
    background-color: darkorange;
    font-size: 16px;
    font-weight: bold;
    color: black;
    border-radius: 5px;
    margin: 10px 0px;
}
.zong > h3 {
    font-size: 38px;
    margin: 10px 0px;
}
.zong > p {
    color: rgba(255, 255, 255, 0.6);
}

.label {
    text-align: center;
    font-size: 18px;
    margin: 25px 0px;
}
.label > .el-col:nth-of-type(3) {
    font-size: 14px;
    text-align: left;
    padding-top: 5px;
    font-family: "黑体";
    color: rgba(255, 255, 255, 0.8);
}
.img {
    margin: 15px 0px;
}
.img > .el-col {
    overflow: hidden;
}
.img > .el-col > .el-image {
    transition: all 0.5s ease;
}
.img > .el-col > .el-image:hover {
   
    transform: scale(1.3);
    transition: all 0.5s ease;
}
</style>