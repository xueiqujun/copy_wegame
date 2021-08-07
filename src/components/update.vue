<template>
    <div class="update">
        
        <div>
            <el-row :gutter="10">
                <el-col :span="4">&nbsp;</el-col>
                <el-col :span="16" class="comp">
                    <h3>最近更新</h3>
                    <el-col :span="8">
                        <updateComp :date="date[0]" />
                    </el-col>
                    <el-col :span="8" >
                        <updateComp :date="date[1]" />
                    </el-col>
                    <el-col :span="8">
                        <updateComp :date="date[2]" />
                    </el-col>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import updateComp from "@/components/updateComponents";
export default {
    data() {
        return {
            date: [
                {
                    id: '2',
                    image: require("@/assets/update01.png"),
                    imagemini: require("@/assets/updatemini01.jpg"),
                    caption:"忍者村大战2",
                    type:[
                        '电子竞技','maba','二次元'
                    ],
                    name:"7月15日7：00-10：00版本更新公告",
                    contont:"亲爱的忍村学员：感谢大家对《忍者村大战2》的支持，为给大家带来更好的游戏体验，我们将于7月15日7:...",
                    view:2623,
                    data:"2020-07-14"
                },
                {
                    id: '2',
                    image: require("@/assets/update02.png"),
                    imagemini: require("@/assets/updatemini02.jpg"),
                    caption:"迷你世界",
                    type:[
                        '沙盒','多人联机','Q版画风'
                    ],
                    name:"冲上云霄，全新飞行载具登场！",
                    contont:"冲上云霄，全新飞行载具登场！彩虹旋风，小马宝莉正版授权皮肤上线！还有暑期系列活动，快来迷你世界体验吧！",
                    view:4912,
                    data:"2020-07-14"
                },
                {
                    id: '3',
                    image: require("@/assets/update03.png"),
                    imagemini: require("@/assets/updatemini03.jpg"),
                    caption:"天涯明月刀",
                    type:[
                        'MMORPG','免费','大型游戏'
                    ],
                    name:"\"天泪迷局\"夏季版本门派、商店综合玩法更",
                    contont:"三、门派相关 神刀 1、饮沧海·破军效果调整：不再获得沧海、星辰、天羽扬威效果。但会获得强化·天...",
                    view:17803,
                    data:"2020-07-13"
                }
            ]
        };
    },
    methods: {},
    components: {
        updateComp
    }
};
</script>

<style scoped>
.update {
    margin: 20px;
    text-align: left;
}
.comp > h3:first-child{
    font-size: 26px;
    line-height: 60px;
    
}
</style>