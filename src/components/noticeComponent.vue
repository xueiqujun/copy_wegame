<template>
    <div id="temp">
        <div class="caption">
            <h4>{{ item.date }}</h4>
            <p v-html="item.type"></p>
            <el-divider>
                <font></font>
            </el-divider>
        </div>
        <el-popover placement="right-start" width="200px" trigger="hover" :open-delay="600">
            <div class="hoverContont">
                <el-image :src="item.inner.imgUrl"></el-image>
                <div class="detailed">
                    <h3>{{ item.inner.name }}</h3>
                    <p>{{ item.inner.date }}</p>
                    <p>{{ item.inner.type.join('/') }}</p>
                </div>
            </div>
            <div class="contont" slot="reference">
                <!-- <el-image></el-image> -->
                <el-image :src="item.img"></el-image>
                <div>
                    <div>
                        <h4>{{item.caption}}</h4>
                        <p>{{ item.remark }}</p>
                    </div>

                    <el-row>
                        <el-col :span="12">进入活动</el-col>
                        <el-col :span="12">游戏详情</el-col>
                    </el-row>
                </div>
            </div>
        </el-popover>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    props: ["item"],
    methods: {}
};
</script>

<style scoped>
.caption {
    height: 75px;
    background-color: rgba(0, 0, 0, 0);
    margin-top: 5px;
}

.caption .el-divider font {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: orange;
}

.caption .el-divider {
    display: inline-block;
    background-color: orange;
    /* width: 50px; */
    margin: 5px 0px;
}
.caption > p {
    font-size: 12px;
}
.contont {
    position: relative;
    height: 340px;
    background-color: red;
    margin: 0px 5px;
    text-align: left;
}
.contont > .el-image {
    position: absolute;
    top: 0px;
}

.contont > div {
    position: absolute;
    width: 100%;
    background-color: white;
    bottom: 0px;
    line-height: 30px;
    transition: all 0.2s ease;
}
.contont > div > div {
    padding: 10px;
    font-size: 14px;
}
.contont > div > .el-row > .el-col {
    text-align: center;
    width: 50%;
    line-height: 40px;
    height: 0px;
    color: rgba(0, 0, 0, 0);
    transition: all 0.2s ease;
}
.contont > div > .el-row > .el-col:first-child {
    border-top: 1px #c9c9c9 solid;
    border-right: 1px #c9c9c9 solid;
}
.contont > div > .el-row > .el-col:last-child {
    border-top: 1px #c9c9c9 solid;
}

#temp:hover .contont > div > .el-row > .el-col {
    color: rgba(0, 0, 0, 1);
    height: 40px;
    transition: all 0.2s ease;
}
#temp:hover .contont > div {
    box-shadow: 0 20px 20px -20px;
    transition: all 0.2s ease;
}
.hoverContont {
    padding: 0px;
}
.hoverContont .el-image {
    width: 200px;
}
.hoverContont > .detailed{
    padding: 5px 15px;
    line-height: 30px;
}
</style>