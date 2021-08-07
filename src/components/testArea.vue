<template>
    <div id="test">
        <el-row class="test-area">
            <el-col :span="4">&nbsp;</el-col>
            <el-col :span="16">
                <h3>测试专区</h3>
                <div :style="{backgroundImage: 'url('+bg+')' }">
                    <el-row>
                        <el-col :span="11">
                            <h3>最新玩法，免费抢先体验</h3>
                            <p>专区内的游戏均为测试版本，无任何商业化，我们每天会限量发放体验资格，期待您的参与，相信有潜力的游戏会给您更多惊喜！</p>
                        </el-col>
                        <el-col :offset="8" :span="5">
                            <el-button type="warning">进入专区</el-button>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="6">
                            <div>
                                <el-image :src="testColumn[0].image"></el-image>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="secend">
                                <div>
                                    <h3>超级巴基球</h3>
                                    <p>足球 / 电子竞技 / 科幻 / 体育竞技</p>
                                </div>
                                <div>
                                    <p>
                                        兄弟萌，《超级巴基球》新手教程上线啦！这一期视频是为了萌新小朋友制作，
                                        如果你是排名第一，轻松carry，队友掉线也能悠闲进球获胜的大神，那么你完
                                        全可以忽略这条动态~不然……
                                    </p>
                                    <div style="margin-top:10px">
                                        <i class="el-icon-view"></i>
                                        <span>25884&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;来自开发者</span>
                                    </div>
                                </div>
                                <div>
                                    <el-progress
                                        
                                        :text-inside="true"
                                        :stroke-width="22"
                                        :percentage="20"
                                        status="warning"
                                    ></el-progress>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div>
                                <el-image :src="testColumn[1].image"></el-image>
                                <div>
                                    <h3>{{ testColumn[1].name }}</h3>
                                    <p>{{ testColumn[1].type.join(' / ') }}</p>
                                </div>
                                <div>
                                    <p>限时全量放号中</p>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div>
                                <el-image :src="testColumn[2].image"></el-image>
                                <div>
                                    <h3>{{ testColumn[2].name }}</h3>
                                    <p>{{ testColumn[1].type.join(' / ') }}</p>
                                </div>
                                <div>
                                    <p>限时全量放号中</p>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
// 最新玩法，免费抢先体验
//
export default {
    data() {
        return {
            bg: require("@/assets/testarea.png"),
            testColumn: [
                {
                    image: require("@/assets/test01.jpg")
                },
                {
                    image: require("@/assets/test03.jpg"),
                    name: "永进",
                    type: ["动作冒险", "潜行", "冒险", "解谜", "独立游戏"]
                },
                {
                    image: require("@/assets/test04.jpg"),
                    name: "快到碗里来",
                    // 闯关 独立游戏 动作 冒险 解谜 动作过关
                    type: [
                        "闯关",
                        "独立游戏",
                        "动作",
                        "冒险",
                        "解谜",
                        "动作过关"
                    ]
                }
            ]
        };
    },
    methods: {}
};
</script>

<style scoped>
.secend {
    color: black;
    padding: 10px 20px 10px 10px;
}

.secend > div:first-child p {
    font-size: 12px;
    line-height: 28px;
    margin-bottom: 5px;
}
.secend > div:nth-of-type(2) {
    margin-top: 10px;
    background-color: rgba(0, 0, 0, 0.2);
    height: 150px;
    padding: 10px;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.5);
}
.secend > div:nth-of-type(3) {
    margin: 20px 0px;
}
.test-area {
    margin: 20px;
    text-align: left;
}
.test-area > .el-col:last-child > div {
    padding: 20px;
}

.test-area > .el-col:last-child > div > .el-row:first-child > .el-col {
    padding: 0px 8px;
}
.test-area
    > .el-col:last-child
    > div
    > .el-row:first-child
    > .el-col:first-child
    h3 {
    font-size: 34px;
    line-height: 60px;
}
.test-area
    > .el-col:last-child
    > div
    > .el-row:first-child
    > .el-col:first-child {
    font-size: 14px;
    color: white;
    height: 100px;
}
.test-area
    > .el-col:last-child
    > div
    > .el-row:first-child
    > .el-col:last-child {
    text-align: center;
    height: 100px;
    position: relative;
}
.test-area
    > .el-col:last-child
    > div
    > .el-row:first-child
    > .el-col:last-child
    > .el-button {
    width: 60%;
    position: absolute;
    bottom: 5px;
    left: 20%;
    color: black;
}
.test-area > .el-col:last-child > h3 {
    line-height: 60px;
    margin: 5px 0px;
    font-size: 22px;
    /* text-align: center; */
    font-weight: bold;
}

.test-area > .el-col:last-child > div > .el-row:last-child .el-col {
    color: white;
    background-color: rgba(0, 0, 0, 0);
    margin-top: 10px;
}
.test-area
    > .el-col:last-child
    > div
    > .el-row:last-child
    .el-col:nth-of-type(2) {
    background-color: white;
    height: 320px;
}

.test-area > .el-col:last-child > div > .el-row:last-child .el-col > div {
    margin: 0px 10px;
    height: 320px;
    /* background-color: red; */
}
.test-area
    > .el-col:last-child
    > div
    > .el-row:last-child
    .el-col
    > div:first-child {
    margin: 0px 0px 0px 10px;
    overflow: hidden;
}
.test-area
    > .el-col:last-child
    > div
    > .el-row:last-child
    .el-col:nth-of-type(1)
    > div
    .el-image {
    height: 320px;
    /* transform: scale(1.0); */
    transition: all 0.5s ease;
}
.test-area
    > .el-col:last-child
    > div
    > .el-row:last-child
    .el-col:nth-of-type(1)
    > div
    .el-image:hover {
    transform: scale(1.2);
    transition: all 0.5s ease;
}
.test-area
    > .el-col:last-child
    > div
    > .el-row:last-child
    .el-col:nth-of-type(3)
    > div:first-child,
.test-area
    > .el-col:last-child
    > div
    > .el-row:last-child
    .el-col:nth-of-type(4)
    > div:first-child {
    background-color: white;
    color: black;
    overflow: hidden;
}
.test-area
    > .el-col:last-child
    > div
    > .el-row:last-child
    .el-col:nth-of-type(4)
    > div:first-child
    > div:nth-of-type(2),
.test-area
    > .el-col:last-child
    > div
    > .el-row:last-child
    .el-col:nth-of-type(3)
    > div:first-child
    > div:nth-of-type(2) {
    margin: 10px 10px 0px 10px;
    padding-bottom: 30px;
    font-size: 14px;
    border-bottom: 1px rgba(0, 0, 0, 0.2) solid;
}
.test-area
    > .el-col:last-child
    > div
    > .el-row:last-child
    .el-col:nth-of-type(4)
    > div:first-child
    > div:nth-of-type(2)
    > h3,
.test-area
    > .el-col:last-child
    > div
    > .el-row:last-child
    .el-col:nth-of-type(3)
    > div:first-child
    > div:nth-of-type(2)
    > h3 {
    font-size: 24px;
    margin-bottom: 5px;
}

.test-area
    > .el-col:last-child
    > div
    > .el-row:last-child
    .el-col:nth-of-type(4)
    > div:first-child
    > div:nth-of-type(3),
.test-area
    > .el-col:last-child
    > div
    > .el-row:last-child
    .el-col:nth-of-type(3)
    > div:first-child
    > div:nth-of-type(3) {
    line-height: 50px;
    margin: 10px;
    text-align: center;
    font-size: 14px;
}
.test-area
    > .el-col:last-child
    > div
    > .el-row:last-child
    .el-col:nth-of-type(4)
    .el-image,
.test-area
    > .el-col:last-child
    > div
    > .el-row:last-child
    .el-col:nth-of-type(3)
    .el-image {
    transition: all 0.5s ease;
}
.test-area
    > .el-col:last-child
    > div
    > .el-row:last-child
    .el-col:nth-of-type(4)
    .el-image:hover,
.test-area
    > .el-col:last-child
    > div
    > .el-row:last-child
    .el-col:nth-of-type(3)
    .el-image:hover {
    transform: scale(1.2);
    transition: all 0.5s ease;
}
</style>