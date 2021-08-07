<template>
    <div id="leader">
        <!-- <h3>sas</h3> -->
        <el-row>
            <el-col :span="4">&nbsp;</el-col>
            <el-col :span="16">
                <el-row class="leaderMain">
                    <el-col :span="3">
                        <h3>排行榜</h3>
                    </el-col>
                    <el-col :span="18">
                        <el-menu
                            :default-active="activeIndex"
                            class="el-menu-demo"
                            mode="horizontal"
                            @select="handleSelect"
                        >
                            <el-menu-item
                                v-for="(item,index) in rowDates"
                                :key="item"
                                :index="formal(index)"
                            >{{item}}</el-menu-item>
                        </el-menu>
                    </el-col>
                    <el-col :span="3">
                        <el-button round>更多榜单</el-button>
                    </el-col>
                </el-row>
                <el-row>
                    <leader-components :dates="retdata()" />
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import leaderComponents from "@/components/leaderComponents";
export default {
    data() {
        return {
            activeIndex: "0",
            rowDates: [
                "火爆",
                "热销",
                "最新",
                "口碑",
                "关注",
                "折扣",
                "更新",
                "热度",
                "测试"
            ],
            item:0,
            leaderBoardDates: [
                {
                    id: 1,
                    name: "火爆",
                    caption: ["火爆新品", "本周热销", "新游上架"],
                    dates: {
                        one: [
                            {
                                id: 1,
                                image: require("@/assets/leader1-1-1.jpg"),
                                name: "梦三国2",
                                type: "免费",
                                top: 0,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 2,
                                image: require("@/assets/leader1-1-2.jpg"),
                                name: "永恒之塔",
                                type: "免费",
                                top: 1,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 3,
                                image: require("@/assets/leader1-1-3.jpg"),
                                name: "激战2",
                                type: "免费",
                                top: 0,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                                
                            },
                            {
                                id: 4,
                                image: require("@/assets/leader1-1-4.jpg"),
                                name: "龙之谷",
                                type: "免费",
                                top: 2,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 5,
                                image: require("@/assets/leader1-1-5.jpg"),
                                name: "机动战士敢达",
                                type: "免费",
                                top: 1,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 6,
                                image: require("@/assets/leader1-1-6.jpg"),
                                name: "红莲之王",
                                type: "免费",
                                top: 1,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 7,
                                image: require("@/assets/leader1-1-7.jpg"),
                                name: "现下世界",
                                type: "免费",
                                top: 2,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            }
                        ],
                        two: [
                            {
                                id: 1,
                                image: require("@/assets/leader1-2-1.jpg"),
                                name: "饥荒：联机版",
                                price: 24,
                                discount: 1,
                                top: 0,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 2,
                                image: require("@/assets/leader1-2-2.jpg"),
                                name: "古剑奇谭三",
                                price: 99,
                                discount: 0.32,
                                top: 0,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 3,
                                image: require("@/assets/leader1-2-3.jpg"),
                                name: "古剑奇谭1-3合辑包",
                                price: 187,
                                discount: 0.32,
                                top: 0,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 4,
                                image: require("@/assets/leader1-2-4.jpg"),
                                name: "中国式家长",
                                price: 36,
                                discount: 1,
                                top: 1,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 5,
                                image: require("@/assets/leader1-2-5.jpg"),
                                name: "恶果之地",
                                price: 38,
                                discount: 1,
                                top: 2,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 6,
                                image: require("@/assets/leader1-2-6.jpg"),
                                name: "红莲之王",
                                price: 38,
                                discount: 1,
                                top: 0,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 7,
                                image: require("@/assets/leader1-2-7.jpg"),
                                name: "隐形守护者完整版",
                                price: 64,
                                discount: 0.88,
                                top: 0,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            }
                        ],
                        three: [
                            {
                                id: 1,
                                image: require("@/assets/leader1-3-1.jpg"),
                                name: "红莲之王",
                                data: "2020-07-09",
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 2,
                                image: require("@/assets/leader1-3-2.jpg"),
                                name: "机动 战士敢达Online",
                                data: "2020-07-03",
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 3,
                                image: require("@/assets/leader1-3-3.jpg"),
                                name: "激战2",
                                data: "2020-06-16",
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 4,
                                image: require("@/assets/leader1-3-4.jpg"),
                                name: "永恒之塔",
                                data: "2020-06-09",
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 5,
                                image: require("@/assets/leader1-3-5.jpg"),
                                name: "仙侠世界2",
                                data: "2020-06-09",
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 6,
                                image: require("@/assets/leader1-3-6.jpg"),
                                name: "亦春秋",
                                data: "2020-06-03",
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 7,
                                image: require("@/assets/leader1-3-7.jpg"),
                                name: "节奏快打",
                                data: "2020-05-28",
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            }
                        ]
                    }
                },
                {
                    id: 2,
                    name: "热销",
                    caption: ["本周热销", "最新上架", "口碑佳作"],
                    dates: {
                        one: [
                            {
                                id: 1,
                                image: require("@/assets/leader1-1-1.jpg"),
                                name: "饥荒：联机版",
                                type: "24",
                                top: 0,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 2,
                                image: require("@/assets/leader1-1-2.jpg"),
                                name: "古剑奇谭三",
                                type: "免费",
                                top: 1,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 3,
                                image: require("@/assets/leader1-1-3.jpg"),
                                name: "古剑奇谭1",
                                type: "60",
                                top: 0,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 4,
                                image: require("@/assets/leader1-1-4.jpg"),
                                name: "中国式家长",
                                type: "36",
                                top: 2,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 5,
                                image: require("@/assets/leader1-1-5.jpg"),
                                name: "仙剑奇侠传合辑包",
                                type: "90",
                                top: 1,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 6,
                                image: require("@/assets/leader1-1-6.jpg"),
                                name: "隐形守护者完整版",
                                type: "56",
                                top: 1,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 7,
                                image: require("@/assets/leader1-1-7.jpg"),
                                name: "仙剑奇侠传四",
                                type: "21",
                                top: 2,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            }
                        ],
                        two: [
                            {
                                id: 1,
                                image: require("@/assets/leader1-2-1.jpg"),
                                name: "霓虹深渊",
                                price: "2020-07-14",
                                discount: 1,
                                top: 0,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 2,
                                image: require("@/assets/leader1-2-2.jpg"),
                                name: "红莲之王",
                                price: "2020-07-09",
                                discount: 0.32,
                                top: 0,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 3,
                                image: require("@/assets/leader1-2-3.jpg"),
                                name: "机动战士敢达",
                                price: "2020-07-03",
                                discount: 0.32,
                                top: 0,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 4,
                                image: require("@/assets/leader1-2-4.jpg"),
                                name: "激战2",
                                price: "2020-06-16",
                                discount: 1,
                                top: 1,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 5,
                                image: require("@/assets/leader1-2-5.jpg"),
                                name: "永恒之塔",
                                price: "2020-06-09",
                                discount: 1,
                                top: 2,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 6,
                                image: require("@/assets/leader1-2-6.jpg"),
                                name: "仙侠世界2",
                                price: "2020-06-09",
                                discount: 1,
                                top: 0,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 7,
                                image: require("@/assets/leader1-2-7.jpg"),
                                name: "亦春秋",
                                price: "2020-06-03",
                                discount: 0.88,
                                top: 0,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            }
                        ],
                        three: [
                            {
                                id: 1,
                                image: require("@/assets/leader1-3-1.jpg"),
                                name: "中国式家长",
                                data: "周推荐率 100%",
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 2,
                                image: require("@/assets/leader1-3-2.jpg"),
                                name: "最终幻想14",
                                data: "周推荐率 93.8%",
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 3,
                                image: require("@/assets/leader1-3-3.jpg"),
                                name: "古剑奇谭三",
                                data: "周推荐率 87.5%",
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 4,
                                image: require("@/assets/leader1-3-4.jpg"),
                                name: "QQ炫舞",
                                data: "周推荐率 86.2%",
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 5,
                                image: require("@/assets/leader1-3-5.jpg"),
                                name: "英雄联盟",
                                data: "周推荐率 85.5%",
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 6,
                                image: require("@/assets/leader1-3-6.jpg"),
                                name: "QQ飞车",
                                data: "周推荐率 85.4%",
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 7,
                                image: require("@/assets/leader1-3-7.jpg"),
                                name: "饥荒：联机版",
                                data: "推荐率76.1%",
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            }
                        ]
                    }
                },
                {
                    id: 3,
                    name: "最新",
                    caption: ["新游上架", "口碑佳作", "最多关注"],
                    dates: {
                        one: [
                            {
                                id: 1,
                                image: require("@/assets/leader1-1-1.jpg"),
                                name: "霓虹深渊",
                                type: "2020-07-14",
                                top: 0,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 2,
                                image: require("@/assets/leader1-1-2.jpg"),
                                name: "红莲之王",
                                type: "2020-07-09",
                                top: 1,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 3,
                                image: require("@/assets/leader1-1-3.jpg"),
                                name: "机动战士敢达",
                                type: "2020-07-03",
                                top: 0,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 4,
                                image: require("@/assets/leader1-1-4.jpg"),
                                name: "激战2",
                                type: "2020-06-16",
                                top: 2,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 5,
                                image: require("@/assets/leader1-1-5.jpg"),
                                name: "永恒之塔",
                                type: "2020-06-10",
                                top: 1,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 6,
                                image: require("@/assets/leader1-1-6.jpg"),
                                name: "仙侠世界2",
                                type: "2020-06-09",
                                top: 1,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 7,
                                image: require("@/assets/leader1-1-7.jpg"),
                                name: "亦春秋",
                                type: "2020-06-03",
                                top: 2,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            }
                        ],
                        two: [
                            {
                                id: 1,
                                image: require("@/assets/leader1-2-1.jpg"),
                                name: "中国式家长",
                                price: "周推荐率 100%",
                                discount: 1,
                                top: 0,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 2,
                                image: require("@/assets/leader1-2-2.jpg"),
                                name: "最终幻想14",
                                price: "周推荐率 93.8%",
                                discount: 0.32,
                                top: 0,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 3,
                                image: require("@/assets/leader1-2-3.jpg"),
                                name: "古剑奇谭三",
                                price: "周推荐率 87.5%",
                                discount: 0.32,
                                top: 0,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 4,
                                image: require("@/assets/leader1-2-4.jpg"),
                                name: "QQ炫舞",
                                price: "周推荐率 86.2%",
                                discount: 1,
                                top: 1,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 5,
                                image: require("@/assets/leader1-2-5.jpg"),
                                name: "英雄联盟",
                                price: "周推荐率 85.5%",
                                discount: 1,
                                top: 2,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 6,
                                image: require("@/assets/leader1-2-6.jpg"),
                                name: "QQ飞车",
                                price: "周推荐率 85.4%",
                                discount: 1,
                                top: 0,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 7,
                                image: require("@/assets/leader1-2-7.jpg"),
                                name: "饥荒：联机版",
                                price: "周推荐率 76.1%",
                                discount: 0.88,
                                top: 0,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            }
                        ],
                        three: [
                            {
                                id: 1,
                                image: require("@/assets/leader1-3-1.jpg"),
                                name: "饥荒：联机版",
                                data: "周关注数 7818人",
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 2,
                                image: require("@/assets/leader1-3-2.jpg"),
                                name: "穿越火线",
                                data: "周关注数 6019人",
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 3,
                                image: require("@/assets/leader1-3-3.jpg"),
                                name: "古剑奇谭三",
                                data: "周关注数 4353人",
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 4,
                                image: require("@/assets/leader1-3-4.jpg"),
                                name: "英雄联盟",
                                data: "周关注数 2006人",
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 5,
                                image: require("@/assets/leader1-3-5.jpg"),
                                name: "QQ飞车",
                                data: "周关注数 1920人",
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 6,
                                image: require("@/assets/leader1-3-6.jpg"),
                                name: "地下城与勇士",
                                data: "周关注数 1676人",
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 7,
                                image: require("@/assets/leader1-3-7.jpg"),
                                name: "古剑奇谭",
                                data: "周关注数 1566人",
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            }
                        ]
                    }
                },
                {
                    id: 4,
                    name: "口碑",
                    caption: ["口碑最佳", "最多关注", "折扣促销"],
                    dates: {
                        one: [
                            {
                                id: 1,
                                image: require("@/assets/leader1-1-1.jpg"),
                                name: "中国式家长",
                                type: "周推荐率 100%",
                                top: 0,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 2,
                                image: require("@/assets/leader1-1-2.jpg"),
                                name: "最终幻想14",
                                type: "周推荐率 93.8%",
                                top: 1,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 3,
                                image: require("@/assets/leader1-1-3.jpg"),
                                name: "古剑奇谭三",
                                type: "周推荐率 87.5%",
                                top: 0,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 4,
                                image: require("@/assets/leader1-1-4.jpg"),
                                name: "QQ炫舞",
                                type: "周推荐率 86.2%",
                                top: 2,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 5,
                                image: require("@/assets/leader1-1-5.jpg"),
                                name: "英雄联盟",
                                type: "周推荐率 85.5%",
                                top: 1,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 6,
                                image: require("@/assets/leader1-1-6.jpg"),
                                name: "QQ飞车",
                                type: "周推荐率 85.4%",
                                top: 1,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 7,
                                image: require("@/assets/leader1-1-7.jpg"),
                                name: "饥荒：联机版",
                                type: "周推荐率 76.1%",
                                top: 2,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            }
                        ],
                        two: [
                            {
                                id: 1,
                                image: require("@/assets/leader1-2-1.jpg"),
                                name: "饥荒：联机版",
                                price: "周关注数 7818人",
                                discount: 1,
                                top: 0,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 2,
                                image: require("@/assets/leader1-2-2.jpg"),
                                name: "穿越火线",
                                price: "周关注数 6019人",
                                discount: 0.32,
                                top: 0,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 3,
                                image: require("@/assets/leader1-2-3.jpg"),
                                name: "古剑奇谭三",
                                price: "周关注数 4353人",
                                discount: 0.32,
                                top: 0,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 4,
                                image: require("@/assets/leader1-2-4.jpg"),
                                name: "英雄联盟",
                                price: "周关注数 2006人",
                                discount: 1,
                                top: 1,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 5,
                                image: require("@/assets/leader1-2-5.jpg"),
                                name: "QQ飞车",
                                price: "周关注数 1920人",
                                discount: 1,
                                top: 2,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 6,
                                image: require("@/assets/leader1-2-6.jpg"),
                                name: "地下城与勇士",
                                price: "周关注数 1676人",
                                discount: 1,
                                top: 0,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 7,
                                image: require("@/assets/leader1-2-7.jpg"),
                                name: "古剑奇谭",
                                price: "周关注数 1566人",
                                discount: 0.88,
                                top: 0,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            }
                        ],
                        three: [
                            {
                                id: 1,
                                image: require("@/assets/leader1-3-1.jpg"),
                                name: "霓虹深渊",
                                data: "6",
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 2,
                                image: require("@/assets/leader1-3-2.jpg"),
                                name: "联动福利扩展包",
                                data: "3",
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 3,
                                image: require("@/assets/leader1-3-3.jpg"),
                                name: "古剑奇谭",
                                data: "12",
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 4,
                                image: require("@/assets/leader1-3-4.jpg"),
                                name: "小三���大英雄",
                                data: "21",
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 5,
                                image: require("@/assets/leader1-3-5.jpg"),
                                name: "手机帝国",
                                data: "12",
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 6,
                                image: require("@/assets/leader1-3-6.jpg"),
                                name: "古剑奇谭三",
                                data: "32",
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 7,
                                image: require("@/assets/leader1-3-7.jpg"),
                                name: "神舞幻想",
                                data: "29",
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            }
                        ]
                    }
                },
                {
                    id: 5,
                    name: "关注",
                    caption: ["最多关注", "折扣促销", "最近更新"],
                    dates: {
                        one: [
                            {
                                id: 1,
                                image: require("@/assets/leader1-1-1.jpg"),
                                name: "饥荒：联机版",
                                type: "周关注数 7818人",
                                top: 0,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 2,
                                image: require("@/assets/leader1-1-2.jpg"),
                                name: "穿越火线",
                                type: "周关注数 6019人",
                                top: 1,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 3,
                                image: require("@/assets/leader1-1-3.jpg"),
                                name: "古剑奇谭三",
                                type: "周关注数 4353人",
                                top: 0,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 4,
                                image: require("@/assets/leader1-1-4.jpg"),
                                name: "英雄联盟",
                                type: "周关注数 2006人",
                                top: 2,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 5,
                                image: require("@/assets/leader1-1-5.jpg"),
                                name: "QQ飞车",
                                type: "周关注数 1920人",
                                top: 1,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 6,
                                image: require("@/assets/leader1-1-6.jpg"),
                                name: "地下城与勇士",
                                type: "周关注数 1676人",
                                top: 1,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 7,
                                image: require("@/assets/leader1-1-7.jpg"),
                                name: "古剑奇谭",
                                type: "周关注数 1566人",
                                top: 2,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            }
                        ],
                        two: [
                            {
                                id: 1,
                                image: require("@/assets/leader1-2-1.jpg"),
                                name: "霓虹深渊",
                                price: 6,
                                discount: 1,
                                top: 0,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 2,
                                image: require("@/assets/leader1-2-2.jpg"),
                                name: "联动福利扩展包",
                                price: 3,
                                discount: 0.32,
                                top: 0,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 3,
                                image: require("@/assets/leader1-2-3.jpg"),
                                name: "古剑奇谭",
                                price: 12,
                                discount: 0.31,
                                top: 0,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 4,
                                image: require("@/assets/leader1-2-4.jpg"),
                                name: "小三角大英雄",
                                price: 21,
                                discount: 0.31,
                                top: 1,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 5,
                                image: require("@/assets/leader1-2-5.jpg"),
                                name: "手机帝国",
                                price: 12,
                                discount: 0.32,
                                top: 2,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 6,
                                image: require("@/assets/leader1-2-6.jpg"),
                                name: "古剑奇谭三",
                                price: 32,
                                discount: 0.32,
                                top: 0,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 7,
                                image: require("@/assets/leader1-2-7.jpg"),
                                name: "神舞幻想",
                                price: 29,
                                discount: 0.33,
                                top: 0,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            }
                        ],
                        three: [
                            {
                                id: 1,
                                image: require("@/assets/leader1-3-1.jpg"),
                                name: "红莲之王",
                                data: "2020-07-15",
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 2,
                                image: require("@/assets/leader1-3-2.jpg"),
                                name: "忍者村大战2",
                                data: "2020-07-14",
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 3,
                                image: require("@/assets/leader1-3-3.jpg"),
                                name: "迷你世界",
                                data: "2020-07-14",
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 4,
                                image: require("@/assets/leader1-3-4.jpg"),
                                name: "天涯明月刀",
                                data: "2020-07-13",
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 5,
                                image: require("@/assets/leader1-3-5.jpg"),
                                name: "克瑞因的纷争",
                                data: "2020-07-11",
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 6,
                                image: require("@/assets/leader1-3-6.jpg"),
                                name: "幸福勇者",
                                data: "2020-07-10",
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 7,
                                image: require("@/assets/leader1-3-7.jpg"),
                                name: "铁甲雄兵",
                                data: "2020-07-10",
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            }
                        ]
                    }
                },
                {
                    id: 6,
                    name: "折扣",
                    caption: ["折扣促销", "最近更新", "最高热度"],
                    dates: {
                        one: [
                            {
                                id: 1,
                                image: require("@/assets/leader1-1-1.jpg"),
                                name: "霓虹深渊",
                                type: "6",
                                top: 0,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 2,
                                image: require("@/assets/leader1-1-2.jpg"),
                                name: "联动福利扩展包",
                                type: "3",
                                top: 1,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 3,
                                image: require("@/assets/leader1-1-3.jpg"),
                                name: "古剑奇谭",
                                type: "12",
                                top: 0,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 4,
                                image: require("@/assets/leader1-1-4.jpg"),
                                name: "小三角大英雄",
                                type: "21",
                                top: 2,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 5,
                                image: require("@/assets/leader1-1-5.jpg"),
                                name: "手机帝国",
                                type: "12",
                                top: 1,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 6,
                                image: require("@/assets/leader1-1-6.jpg"),
                                name: "古剑奇谭三",
                                type: "32",
                                top: 1,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 7,
                                image: require("@/assets/leader1-1-7.jpg"),
                                name: "神舞幻想",
                                type: "29",
                                top: 2,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            }
                        ],
                        two: [
                            {
                                id: 1,
                                image: require("@/assets/leader1-2-1.jpg"),
                                name: "红莲之王",
                                price: "2020-07-15",
                                discount: 1,
                                top: 0,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 2,
                                image: require("@/assets/leader1-2-2.jpg"),
                                name: "忍者村大战2",
                                price: "2020-07-14",
                                discount: 0.32,
                                top: 0,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 3,
                                image: require("@/assets/leader1-2-3.jpg"),
                                name: "迷你世界",
                                price: "2020-07-14",
                                discount: 0.31,
                                top: 0,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 4,
                                image: require("@/assets/leader1-2-4.jpg"),
                                name: "天涯明月刀",
                                price: "2020-07-13",
                                discount: 0.31,
                                top: 1,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 5,
                                image: require("@/assets/leader1-2-5.jpg"),
                                name: "克瑞因的纷争",
                                price: "2020-07-11",
                                discount: 0.32,
                                top: 2,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 6,
                                image: require("@/assets/leader1-2-6.jpg"),
                                name: "幸福勇者",
                                price: "2020-07-10",
                                discount: 0.32,
                                top: 0,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 7,
                                image: require("@/assets/leader1-2-7.jpg"),
                                name: "铁甲雄兵",
                                price: "2020-07-10",
                                discount: 0.33,
                                top: 0,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            }
                        ],
                        three: [
                            {
                                id: 1,
                                image: require("@/assets/leader1-3-1.jpg"),
                                name: "红莲之王",
                                data: "2020-07-15",
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 2,
                                image: require("@/assets/leader1-3-2.jpg"),
                                name: "忍者村大战2",
                                data: "2020-07-14",
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 3,
                                image: require("@/assets/leader1-3-3.jpg"),
                                name: "迷你世界",
                                data: "2020-07-14",
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 4,
                                image: require("@/assets/leader1-3-4.jpg"),
                                name: "天涯明月刀",
                                data: "2020-07-13",
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 5,
                                image: require("@/assets/leader1-3-5.jpg"),
                                name: "克瑞因的纷争",
                                data: "2020-07-11",
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 6,
                                image: require("@/assets/leader1-3-6.jpg"),
                                name: "幸福勇者",
                                data: "2020-07-10",
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 7,
                                image: require("@/assets/leader1-3-7.jpg"),
                                name: "铁甲雄兵",
                                data: "2020-07-10",
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            }
                        ]
                    }
                },
                {
                    id: 7,
                    name: "更新",
                    caption: ["最近更新", "最高热度", "最新测试"],
                    dates: {
                        one: [
                            {
                                id: 1,
                                image: require("@/assets/leader1-1-1.jpg"),
                                name: "红莲之王",
                                type: "2020-07-15",
                                top: 0,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 2,
                                image: require("@/assets/leader1-1-2.jpg"),
                                name: "忍者村大战2",
                                type: "2020-07-14",
                                top: 1,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 3,
                                image: require("@/assets/leader1-1-3.jpg"),
                                name: "迷你世界",
                                type: "2020-07-14",
                                top: 0,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 4,
                                image: require("@/assets/leader1-1-4.jpg"),
                                name: "天涯明月刀",
                                type: "2020-07-13",
                                top: 2,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 5,
                                image: require("@/assets/leader1-1-5.jpg"),
                                name: "克瑞因的纷争",
                                type: "2020-07-11",
                                top: 1,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 6,
                                image: require("@/assets/leader1-1-6.jpg"),
                                name: "幸福勇者",
                                type: "2020-07-10",
                                top: 1,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 7,
                                image: require("@/assets/leader1-1-7.jpg"),
                                name: "铁甲雄兵",
                                type: "2020-07-10",
                                top: 2,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            }
                        ],
                        two: [
                            {
                                id: 1,
                                image: require("@/assets/leader1-2-1.jpg"),
                                name: "英雄联盟",
                                price: '腾讯运营',
                                discount: 1,
                                top: 0,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 2,
                                image: require("@/assets/leader1-2-2.jpg"),
                                name: "穿越火线",
                                price: '腾讯运营',
                                discount: 0.32,
                                top: 0,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 3,
                                image: require("@/assets/leader1-2-3.jpg"),
                                name: "地下城与勇士",
                                price: '腾讯运营',
                                discount: 0.31,
                                top: 0,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 4,
                                image: require("@/assets/leader1-2-4.jpg"),
                                name: "红莲之王",
                                price: '免费',
                                discount: 0.31,
                                top: 1,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 5,
                                image: require("@/assets/leader1-2-5.jpg"),
                                name: "三国杀",
                                price: '免费',
                                discount: 0.32,
                                top: 2,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 6,
                                image: require("@/assets/leader1-2-6.jpg"),
                                name: "逆战",
                                price: '腾讯运营',
                                discount: 0.32,
                                top: 0,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 7,
                                image: require("@/assets/leader1-2-7.jpg"),
                                name: "饥荒：联机版",
                                price: 24,
                                discount: 0.95,
                                top: 0,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            }
                        ],
                        three: [
                            {
                                id: 1,
                                image: require("@/assets/leader1-3-1.jpg"),
                                name: "超级巴基球",
                                data: "2020-04-15",
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 2,
                                image: require("@/assets/leader1-3-2.jpg"),
                                name: "永进",
                                data: "2020-01-28",
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 3,
                                image: require("@/assets/leader1-3-3.jpg"),
                                name: "快到碗里来",
                                data: "2020-01-17",
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 4,
                                image: require("@/assets/leader1-3-4.jpg"),
                                name: "龙魂：学院奇闻",
                                data: "2019-12-24",
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 5,
                                image: require("@/assets/leader1-3-5.jpg"),
                                name: "幸福勇者",
                                data: "2019-07-05",
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 6,
                                image: require("@/assets/leader1-3-6.jpg"),
                                name: "艾兰岛",
                                data: "2018-12-11",
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            }
                        ]
                    }
                },
                {
                    id: 8,
                    name: "热度",
                    caption: ["最高热度", "最新测试", "火爆新品"],
                    dates: {
                        one: [
                            {
                                id: 1,
                                image: require("@/assets/leader1-1-1.jpg"),
                                name: "英雄联盟",
                                type: "腾讯运营",
                                top: 0,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 2,
                                image: require("@/assets/leader1-1-2.jpg"),
                                name: "穿越火线",
                                type: "腾讯运营",
                                top: 1,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 3,
                                image: require("@/assets/leader1-1-3.jpg"),
                                name: "地下城与勇士",
                                type: "腾讯运营",
                                top: 0,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 4,
                                image: require("@/assets/leader1-1-4.jpg"),
                                name: "红莲之王",
                                type: "免费",
                                top: 2,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 5,
                                image: require("@/assets/leader1-1-5.jpg"),
                                name: "三国杀",
                                type: "免费",
                                top: 1,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 6,
                                image: require("@/assets/leader1-1-6.jpg"),
                                name: "逆战",
                                type: "腾讯运营",
                                top: 1,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 7,
                                image: require("@/assets/leader1-1-7.jpg"),
                                name: "饥荒：联机版",
                                type: "￥24",
                                top: 2,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            }
                        ],
                        two: [
                            {
                                id: 1,
                                image: require("@/assets/leader1-2-1.jpg"),
                                name: "超级巴基球",
                                price: "2020-04-15",
                                discount: 1,
                                top: 0,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 2,
                                image: require("@/assets/leader1-2-2.jpg"),
                                name: "永进",
                                price: "2020-01-28",
                                discount: 0.32,
                                top: 0,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 3,
                                image: require("@/assets/leader1-2-3.jpg"),
                                name: "快到碗里来",
                                price: "2020-01-17",
                                discount: 0.31,
                                top: 0,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 4,
                                image: require("@/assets/leader1-2-4.jpg"),
                                name: "龙魂：学院奇闻",
                                price: "2019-12-24",
                                discount: 0.31,
                                top: 1,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 5,
                                image: require("@/assets/leader1-2-5.jpg"),
                                name: "幸福勇者",
                                price: "2019-07-05",
                                discount: 0.32,
                                top: 2,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 6,
                                image: require("@/assets/leader1-2-6.jpg"),
                                name: "艾兰岛",
                                price: "2018-12-11",
                                discount: 0.32,
                                top: 0,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            }
                        ],
                        three: [
                            {
                                id: 1,
                                image: require("@/assets/leader1-3-1.jpg"),
                                name: "永恒之塔",
                                data: "免费",
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 2,
                                image: require("@/assets/leader1-3-2.jpg"),
                                name: "梦三国2",
                                data: "免费",
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 3,
                                image: require("@/assets/leader1-3-3.jpg"),
                                name: "激战2",
                                data: "免费",
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 4,
                                image: require("@/assets/leader1-3-4.jpg"),
                                name: "机动战士敢达",
                                data: "免费",
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 5,
                                image: require("@/assets/leader1-3-5.jpg"),
                                name: "龙之谷",
                                data: "免费",
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 6,
                                image: require("@/assets/leader1-3-6.jpg"),
                                name: "仙侠世界2",
                                data: "免费",
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 7,
                                image: require("@/assets/leader1-3-7.jpg"),
                                name: "霓虹深渊",
                                data: "￥52",
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            }
                        ]
                    }
                },
                {
                    id: 9,
                    name: "测试",
                    caption: ["最新测试", "火爆新品", "本周热销"],
                    dates: {
                        one: [
                            {
                                id: 1,
                                image: require("@/assets/leader1-1-1.jpg"),
                                name: "超级巴基球",
                                type: "2020-04-15",
                                top: 0,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 2,
                                image: require("@/assets/leader1-1-2.jpg"),
                                name: "永进",
                                type: "2020-01-28",
                                top: 1,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 3,
                                image: require("@/assets/leader1-1-3.jpg"),
                                name: "快到碗里来",
                                type: "2020-01-17",
                                top: 0,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 4,
                                image: require("@/assets/leader1-1-4.jpg"),
                                name: "龙魂：学院奇闻",
                                type: "2019-12-24",
                                top: 2,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 5,
                                image: require("@/assets/leader1-1-5.jpg"),
                                name: "幸福勇者",
                                type: "2019-07-05",
                                top: 1,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 6,
                                image: require("@/assets/leader1-1-6.jpg"),
                                name: "艾兰岛",
                                type: "2018-12-11",
                                top: 1,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            }
                        ],
                        two: [
                            {
                                id: 1,
                                image: require("@/assets/leader1-2-1.jpg"),
                                name: "永恒之塔",
                                price: '免费',
                                discount: 1,
                                top: 0,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 2,
                                image: require("@/assets/leader1-2-2.jpg"),
                                name: "梦三国2",
                                price: '免费',
                                discount: 0.32,
                                top: 0,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 3,
                                image: require("@/assets/leader1-2-3.jpg"),
                                name: "激战2",
                                price: '免费',
                                discount: 0.32,
                                top: 0,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 4,
                                image: require("@/assets/leader1-2-4.jpg"),
                                name: "机动战士敢达",
                                price: '免费',
                                discount: 1,
                                top: 1,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 5,
                                image: require("@/assets/leader1-2-5.jpg"),
                                name: "龙之谷",
                                price: '免费',
                                discount: 1,
                                top: 2,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 6,
                                image: require("@/assets/leader1-2-6.jpg"),
                                name: "仙侠世界2",
                                price: '免费',
                                discount: 1,
                                top: 0,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 7,
                                image: require("@/assets/leader1-2-7.jpg"),
                                name: "霓虹深渊",
                                price: 52,
                                discount: 0.9,
                                top: 0,
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            }
                        ],
                        three: [
                            {
                                id: 1,
                                image: require("@/assets/leader1-3-1.jpg"),
                                name: "饥荒：联机版",
                                data: "￥24",
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 2,
                                image: require("@/assets/leader1-3-2.jpg"),
                                name: "古剑奇谭三",
                                data: "￥32",
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 3,
                                image: require("@/assets/leader1-3-3.jpg"),
                                name: "古剑奇谭1",
                                data: "￥60",
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 4,
                                image: require("@/assets/leader1-3-4.jpg"),
                                name: "中国式家长",
                                data: "￥36",
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 5,
                                image: require("@/assets/leader1-3-5.jpg"),
                                name: "仙剑奇侠传合辑包",
                                data: "￥90",
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 6,
                                image: require("@/assets/leader1-3-6.jpg"),
                                name: "隐形守护者完整版",
                                data: "￥56",
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            },
                            {
                                id: 7,
                                image: require("@/assets/leader1-3-7.jpg"),
                                name: "仙剑奇侠传四",
                                data: "￥21",
                                inner: {
                                    imgUrl: require("@/assets/noticeinner01.png"),
                                    name: "使命召唤OL",
                                    date: "7月10日",
                                    evaluation: "68.5% (3158条评测)",
                                    type: ["机甲", "多人联机", "冷兵器"]
                                }
                            }
                        ]
                    }
                }
            ]
        };
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event)
        },
        handleSelect(item) {
            this.item = item;
        },
        formal(i) {
            return i + "";
        },
        retdata(){
            return this.leaderBoardDates[this.item]
        }
    },
    components: {
        leaderComponents
    }
};
</script>
<style scoped>
#leader {
    text-align: left;
}
#leader > .el-row {
    margin: 0px 20px;
}
.leaderMain {
    margin-bottom: 15px;
}
.leaderMain > .el-col:first-child {
    line-height: 60px;
    margin: 5px 0px;
    font-size: 22px;
    /* text-align: center; */
    font-weight: bold;
}
.leaderMain > .el-col:nth-of-type(2) {
    height: 40px;
    line-height: 40px;
    margin-top: 5px;
}
.leaderMain > .el-col:last-child {
    height: 40px;
    line-height: 40px;
    margin: 15px 0px;

    text-align: center;
}
.leaderMain > .el-col:nth-of-type(2) .el-menu {
    background-color: rgba(0, 0, 0, 0);
}
.leaderMain > .el-col:nth-of-type(2) .el-menu .el-menu-item:hover,
.leaderMain > .el-col:nth-of-type(2) .el-menu .el-menu-item:focus {
    background-color: rgba(0, 0, 0, 0);
}
.leaderMain > .el-col:last-child .el-button {
    background-color: rgba(0, 0, 0, 0);
    border-color: rgba(0, 0, 0, 0.5);
}
</style>