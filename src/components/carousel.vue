<template>
    <div id="carousel">
        <el-row>
            <!-- 热门标签 -->
            <el-col :span="4" class="label">
                <div class="label-content">
                    <h4>热门标签</h4>
                    <hr />
                    <!-- <el-image :src="bj"></el-image> -->
                    <div v-for="label in labels" :key="label.id">
                        <p>{{ label.value }}</p>
                    </div>
                </div>
            </el-col>
            <!-- 轮播 -->
            <el-col :span="16" class="carousel">
                <el-carousel height="420px" direction="vertical" :autoplay="true" ref="carousel">
                    <el-carousel-item v-for="item in carouselImg" :key="item.id" :name="item.id">
                        <el-image :src="item.imgUrl"></el-image>
                    </el-carousel-item>
                    <div class="lab el-carousel__indicators el-carousel__indicators--vertical">
                        <p @mouseenter="setActiveItem(0)">
                            <a href="#">{{ carouselImg[0].lab}}</a>
                        </p>
                        <p @mouseenter="setActiveItem(1)">
                            <a href="#">{{ carouselImg[1].lab}}</a>
                        </p>
                        <p @mouseenter="setActiveItem(2)">
                            <a href="#">{{ carouselImg[2].lab}}</a>
                        </p>
                        <p @mouseenter="setActiveItem(3)">
                            <a href="#">{{ carouselImg[3].lab}}</a>
                        </p>
                        <p @mouseenter="setActiveItem(4)">
                            <a href="#">{{ carouselImg[4].lab}}</a>
                        </p>
                        <p @mouseenter="setActiveItem(5)">
                            <a href="#">{{ carouselImg[5].lab}}</a>
                        </p>
                        <p @mouseenter="setActiveItem(6)">
                            <a href="#">{{ carouselImg[6].lab}}</a>
                        </p>
                    </div>
                </el-carousel>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import carousel1 from "./../assets/carousel1.png";
import carousel2 from "./../assets/carousel2.png";
import carousel3 from "./../assets/carousel3.png";
import carousel4 from "./../assets/carousel4.png";
import carousel5 from "./../assets/carousel5.png";
import carousel6 from "./../assets/carousel6.png";
import carousel7 from "./../assets/carousel7.png";

export default {
    data() {
        return {
            carousel1,
            carousel2,
            carousel3,
            carousel4,
            carousel5,
            carousel6,
            carousel7,
            labels: [
                { id: 1, value: "篮球" },
                { id: 2, value: "大型网游" },
                { id: 3, value: "单机" },
                { id: 4, value: "免费" },
                { id: 5, value: "电子竞技" },
                { id: 6, value: "功能游戏" },
                { id: 7, value: "赛车竞速" },
                { id: 8, value: "动作冒险" },
                { id: 9, value: "FPS" },
                { id: 10, value: "角色扮演" }
            ],
            carouselImg: [
                { id: "1", imgUrl: carousel1, lab: "三国杀" },
                { id: "2", imgUrl: carousel2, lab: "激战2" },
                { id: "3", imgUrl: carousel3, lab: "古剑奇谭1-3合辑版" },
                { id: "4", imgUrl: carousel4, lab: "狙鸡冲榜拿外设" },
                { id: "5", imgUrl: carousel5, lab: "NBA2K Online2" },
                { id: "6", imgUrl: carousel6, lab: "永恒之塔" },
                { id: "7", imgUrl: carousel7, lab: "仙剑25周年" }
            ],
            beforeItem: 0
        };
    },
    methods: {
        setActiveItem(id) {
            this.$refs.carousel.setActiveItem(id);
        }
    }
};
</script>


<style scoped >
* {
    margin: 0px;
    padding: 0px;
}
/* color: var(--color); */
#carousel {
    margin: 20px;
}

.label-content {
    background-color: white;
    height: 100%;
    margin: 0 10%;
    padding: 10px;

    color: #636363;
}
.label-content > * {
    line-height: 50px;
}
.label-content > div {
    text-align: left;
    padding-left: 10%;
    line-height: 30px;
    font-size: 14px;
}

.el-carousel .el-image {
    height: 420px;
}
.lab {
    color: white;
    width: 20%;
    background-color: rgba(0, 0, 0, 0.8);
    position: absolute;
    right: 0px;
    height: 420px;
    line-height: 60px;
    text-align: left;
}
.lab a {
    width: 100%;
    display: inline-block;
    text-decoration: none;
    color: white;
    line-height: 60px;
}
.lab p:hover {
    background-color: rgba(255, 255, 255, 0.1);
}
.lab p {
    padding-left: 10%;
}
.el-carousel .el-carousel__indicator {
    display: none;
}
/*  */
</style>