<template>
    <div id="notice">
        <el-row class="noticeCaption">
            <el-col :span="4">&nbsp;</el-col>
            <el-col :span="16">热点预告</el-col>
        </el-row>

        <el-row class="notice">
            <el-col :span="3">&nbsp;</el-col>
            <el-col :span="1">
                <i class="el-icon-arrow-left" @click="seach(0)"></i>
            </el-col>
            <el-col :span="16">
                <el-col class="flag" v-for="items in currentdata" :key="items.id">
                    <transition>
                        <contont :item="items"></contont>
                    </transition>
                </el-col>
            </el-col>
            <el-col :span="1">
                <i class="el-icon-arrow-right" @click="seach(1)"></i>
            </el-col>
            <el-col :span="3">&nbsp;</el-col>
        </el-row>
    </div>
</template>
<script>
import contont from "@/components/noticeComponent";
export default {
    data() {
        return {
            list: [
                {
                    id: 1,
                    type: "&nbsp;",
                    date: "7月10日",
                    img: require("./../assets/notice1.jpg"),
                    caption: "使命召唤OL",
                    remark: "WeGame独家福利",
                    inner: {
                        imgUrl: require("./../assets/noticeinner01.png"),
                        name: "使命召唤OL",
                        date: "7月10日",
                        evaluation: "68.5% (3158条评测)",
                        type: ["机甲", "多人联机", "冷兵器"]
                    }
                },
                {
                    id: 2,
                    type: "现也更新",
                    date: "7月",
                    img: require("./../assets/notice2.jpg"),
                    caption: "NBA2KOL2",
                    remark: "FUN肆迎新秀",
                    inner: {
                        imgUrl: require("./../assets/noticeinner01.png"),
                        name: "使命召唤OL",
                        date: "7月10日",
                        evaluation: "68.5% (3158条评测)",
                        type: ["机甲", "多人联机", "冷兵器"]
                    }
                },
                {
                    id: 3,
                    type: "现也开服",
                    date: "7月10日",
                    img: require("./../assets/notice3.jpg"),
                    caption: "登录领嘉年华福利",
                    remark: "嘉年华福利来袭",
                    inner: {
                        imgUrl: require("./../assets/noticeinner01.png"),
                        name: "使命召唤OL",
                        date: "7月10日",
                        evaluation: "68.5% (3158条评测)",
                        type: ["机甲", "多人联机", "冷兵器"]
                    }
                },
                {
                    id: 4,
                    type: "现也开服",
                    date: "7月10日",
                    img: require("./../assets/notice4.jpg"),
                    caption: "1剑网3",
                    remark: '上线领"一甲及第鸭"',
                    inner: {
                        imgUrl: require("./../assets/noticeinner01.png"),
                        name: "使命召唤OL",
                        date: "7月10日",
                        evaluation: "68.5% (3158条评测)",
                        type: ["机甲", "多人联机", "冷兵器"]
                    }
                },
                {
                    id: 5,
                    type: "现也开服",
                    date: "7月10日",
                    img: require("./../assets/notice5.jpg"),
                    caption: "铁甲雄兵",
                    remark: "服装半藏皮肤华丽登场",
                    inner: {
                        imgUrl: require("./../assets/noticeinner01.png"),
                        name: "使命召唤OL",
                        date: "7月10日",
                        evaluation: "68.5% (3158条评测)",
                        type: ["机甲", "多人联机", "冷兵器"]
                    }
                },

                {
                    id: 6,
                    type: "&nbsp;",
                    date: "7月10日",
                    img: require("./../assets/notice1.jpg"),
                    caption: "使命召唤OL",
                    remark: "WeGame独家福利",
                    inner: {
                        imgUrl: require("./../assets/noticeinner01.png"),
                        name: "使命召唤OL",
                        date: "7月10日",
                        evaluation: "68.5% (3158条评测)",
                        type: ["机甲", "多人联机", "冷兵器"]
                    }
                },
                {
                    id: 7,
                    type: "现也更新",
                    date: "7月",
                    img: require("./../assets/notice2.jpg"),
                    caption: "NBA2KOL2",
                    remark: "FUN肆迎新秀",
                    inner: {
                        imgUrl: require("./../assets/noticeinner01.png"),
                        name: "使命召唤OL",
                        date: "7月10日",
                        evaluation: "68.5% (3158条评测)",
                        type: ["机甲", "多人联机", "冷兵器"]
                    }
                },
                {
                    id: 8,
                    type: "现也开服",
                    date: "7月10日",
                    img: require("./../assets/notice3.jpg"),
                    caption: "登录领嘉年华福利",
                    remark: "嘉年华福利来袭",
                    inner: {
                        imgUrl: require("./../assets/noticeinner01.png"),
                        name: "使命召唤OL",
                        date: "7月10日",
                        evaluation: "68.5% (3158条评测)",
                        type: ["机甲", "多人联机", "冷兵器"]
                    }
                },
                {
                    id: 9,
                    type: "现也开服",
                    date: "7月10日",
                    img: require("./../assets/notice4.jpg"),
                    caption: "1剑网3",
                    remark: '上线领"一甲及第鸭"',
                    inner: {
                        imgUrl: require("./../assets/noticeinner01.png"),
                        name: "使命召唤OL",
                        date: "7月10日",
                        evaluation: "68.5% (3158条评测)",
                        type: ["机甲", "多人联机", "冷兵器"]
                    }
                },
                {
                    id: 10,
                    type: "现也开服",
                    date: "7月10日",
                    img: require("./../assets/notice5.jpg"),
                    caption: "铁甲雄兵",
                    remark: "服装半藏皮肤华丽登场",
                    inner: {
                        imgUrl: require("./../assets/noticeinner01.png"),
                        name: "使命召唤OL",
                        date: "7月10日",
                        evaluation: "68.5% (3158条评测)",
                        type: ["机甲", "多人联机", "冷兵器"]
                    }
                }
            ],
            msg: "hello",
            currentdata: [],
            current: 5
        };
    },
    methods: {
        seach(leftOrRight) {
            // console.log(leftOrRight)
            var i = this.current;
            var j;
            var length = this.currentdata.length;
            if (leftOrRight == 0) {
                ///
                if (i == 0) {
                } else {
                    // for (i=i-1; i < i + 5; i++) {
                    this.currentdata = [];
                    for (j = i - 1; j < i + 4; j++) {
                        this.currentdata.push(this.list[j]);
                    }
                    this.current -= 1;
                }
            } else {
                //右
                if (i == 5) {
                } else {
                    this.currentdata = [];
                    for (j = i + 1; j < i + 6; j++) {
                        this.currentdata.push(this.list[j]);
                    }
                    this.current += 1;
                }
            }
        }
    },
    components: {
        contont
    },
    created() {
        var i = this.current;
        var j;
        for (j = i; j < i + 5; j++) {
            this.currentdata.push(this.list[j]);
        }
        console.log(this.currentdata);
    }
};
</script>
<style scoped>
* {
    margin: 0px;
    padding: 0px;
}

#notice {
    margin: 20px;
    text-align: left;
}
.notice {
    text-align: center;
}
.noticeCaption > .el-col:last-child {
    background-color: white;
    line-height: 80px;
    font-size: 30px;
}
.notice > .el-col:nth-of-type(2),
.notice > .el-col:nth-of-type(4) {
    /* height: 440px; */
    line-height: 440px;
    text-align: center;
}
.notice > .el-col:nth-of-type(2) i,
.notice > .el-col:nth-of-type(4) i {
    width: 40px;
    background-color: rgba(0, 0, 0, 0.2);
    height: 80;
    line-height: 80px;
    border-radius: 5px;
    color: rgba(255, 255, 255, 0.5);
}
.notice > .el-col:nth-of-type(2) i:hover,
.notice > .el-col:nth-of-type(4) i:hover {
    background-color: rgba(0, 0, 0, 0.5);
    color: rgba(255, 255, 255, 1);
    transition: all 0.5s ease;
}
.notice > .el-col:nth-of-type(3) {
    /* //height: 440px; */
    background-color: white;
    /* background-color: green; */
}
.notice > .el-col:nth-of-type(3) > .flag {
    width: 20%;
}
</style>