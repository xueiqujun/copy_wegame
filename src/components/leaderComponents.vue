<template >
    <el-row :gutter="20" class="leaderComp">
        <el-col :span="8">
            <div class="leaderItem">
                <!-- .leaderItem > .el-row -->
                <h3 v-text="dates.caption[0]"></h3>
                <el-popover
                    placement="right-start"
                    v-for="item in dates.dates.one"
                    :key="item.id"
                    width="200px"
                    trigger="hover"
                    :open-delay="600"
                    class="leaderItem1"
                >
                    <div class="hoverContont">
                        <el-image :src="item.inner.imgUrl"></el-image>
                        <div class="detailed">
                            <h3>{{ item.inner.name }}</h3>
                            <p>{{ item.inner.date }}</p>
                            <p>{{ item.inner.type.join('/') }}</p>
                        </div>
                    </div>
                    <a href="#/xiangqing" slot="reference">
                        <el-row>
                            <el-col :span="3">{{ item.id }}</el-col>
                            <el-col :span="9">
                                <el-image :src="item.image"></el-image>
                            </el-col>
                            <el-col :span="9">
                                <h3>{{ stringName(item.name) }}</h3>
                                <p>{{item.type}}</p>
                            </el-col>
                            <el-col :span="3"></el-col>
                        </el-row>
                    </a>
                </el-popover>
            </div>
        </el-col>
        <el-col :span="8">
            <div class="leaderItem">
                <h3 v-text="dates.caption[1]"></h3>
                <el-popover
                    placement="right-start"
                    v-for="item in dates.dates.two"
                    :key="item.id"
                    width="200px"
                    trigger="hover"
                    :open-delay="600"
                    class="leaderItem1"
                >
                    <div class="hoverContont">
                        <el-image :src="item.inner.imgUrl"></el-image>
                        <div class="detailed">
                            <h3>{{ item.inner.name }}</h3>
                            <p>{{ item.inner.date }}</p>
                            <p>{{ item.inner.type.join('/') }}</p>
                        </div>
                    </div>
                    <a href="#/xiangqing" slot="reference">
                        <el-row>
                            <el-col :span="3">{{ item.id }}</el-col>
                            <el-col :span="9">
                                <el-image :src="item.image"></el-image>
                            </el-col>
                            <el-col :span="9">
                                <h3>{{ stringName(item.name) }}</h3>
                                <p>{{item.price}}</p>
                            </el-col>
                            <el-col :span="3"></el-col>
                        </el-row>
                    </a>
                </el-popover>
            </div>
        </el-col>
        <el-col :span="8">
            <div class="leaderItem">
                <h3 v-text="dates.caption[2]"></h3>
                <el-popover
                    placement="right-start"
                    v-for="item in dates.dates.three"
                    :key="item.id"
                    width="200px"
                    trigger="hover"
                    :open-delay="600"
                    class="leaderItem1"
                >
                    <div class="hoverContont">
                        <el-image :src="item.inner.imgUrl"></el-image>
                        <div class="detailed">
                            <h3>{{ item.inner.name }}</h3>
                            <p>{{ item.inner.date }}</p>
                            <p>{{ item.inner.type.join('/') }}</p>
                        </div>
                    </div>
                    <a href="#/xiangqing" slot="reference">
                        <el-row slot="reference">
                            <el-col :span="3">{{ item.id }}</el-col>
                            <el-col :span="9">
                                <el-image :src="item.image"></el-image>
                            </el-col>
                            <el-col :span="9">
                                <h3>{{ stringName(item.name) }}</h3>
                                <p>{{stringName(item.data)}}</p>
                            </el-col>
                            <el-col :span="3"></el-col>
                        </el-row>
                    </a>
                </el-popover>
            </div>
        </el-col>
    </el-row>
</template>

<script>
export default {
    props: ["dates"],
    methods: {
        onejie() {
            console.log(this.dates[0].caption[0]);
        },
        stringName(name) {
            if (name.length > 6) {
                return name.substring(0, 5) + "···";
            } else {
                return name;
            }
        }
    }
};
</script>
<style scoped>
a{
    color: black;
}
* {
    padding: 0px;
    margin: 0px;
}
.leaderComp > .el-col > div {
    background-color: white;
}
.leaderComp > .el-col:not(:first-child) {
    padding-left: 20px;
}

.leaderItem1 > a > .el-row {
    /* height: 60px; */
    line-height: 80px;
    text-align: center;
}
.leaderItem1 > a > .el-row > .el-col:nth-of-type(3) {
    line-height: 30px;
    text-align: left;
    padding: 10px 0px;
    font-size: 14px;
}
.leaderItem1 > a > .el-row > .el-col:nth-of-type(2) {
    /* padding-top: 10px; */
    /* padding-bottom: 9px; */
    line-height: 0px;
}
.leaderItem1 > a > .el-row > .el-col:nth-of-type(2) > .el-image {
    height: 60px;
    padding: 10px;
}
.leaderItem > h3 {
    line-height: 40px;
    display: inline-block;
    padding: 10px;
}
.leaderItem1 > a .el-row > .el-col:nth-of-type(1) {
    border-bottom: 1px white solid;
}
.leaderItem1 > a > .el-row {
    border-bottom: 1px rgba(0, 0, 0, 0.1) solid;
}
.hoverContont {
    padding: 0px;
}
.hoverContont .el-image {
    width: 200px;
}
.hoverContont > .detailed {
    padding: 5px 15px;
    line-height: 30px;
}
</style>