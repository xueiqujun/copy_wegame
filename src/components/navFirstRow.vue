<template>
    <el-row class="mian-first-row">
        <el-col :span="4">&nbsp;</el-col>
        <el-col :span="6">
            <el-row>
                <el-menu
                    :default-active="activeIndex"
                    class="el-menu-demo"
                    mode="horizontal"
                    @select="handleSelect"
                >
                    <el-menu-item index="1">精选&nbsp;&nbsp;&nbsp;&nbsp;</el-menu-item>
                    <el-menu-item index="2">测试区</el-menu-item>
                    <el-submenu index="3">
                        <template slot="title">所有内容</template>
                        <el-menu-item index="3-1">排行榜</el-menu-item>
                        <el-menu-item index="3-2">娱乐应用</el-menu-item>
                        <el-menu-item index="3-3">更多内容</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-row>
        </el-col>
        <el-col :span="10">
            <el-row class="first-row-Scend">
                <el-col :span="14">
                    <div>
                        <span>大型网游</span>
                        <el-divider direction="vertical"></el-divider>
                        <span>单机</span>
                        <el-divider direction="vertical"></el-divider>
                        <span>激战2休闲</span>
                        <el-divider direction="vertical"></el-divider>
                        <span>男人的浪漫</span>
                    </div>
                </el-col>
                <el-col :span="10">
                    <el-autocomplete
                        class="inline-input"
                        v-model="state1"
                        :fetch-suggestions="querySearch"
                        placeholder="红莲之王"
                        @select="handleSelect"
                    >
                        <el-button slot="append" icon="el-icon-search" class="search"></el-button>
                    </el-autocomplete>
                </el-col>
            </el-row>
        </el-col>
        <el-col :span="6"></el-col>
    </el-row>
</template>
<script>
export default {
    name: "App",
    data() {
        return {
            activeIndex: "1",
            restaurants: [],
            state1: ""
        };
    },
    methods: {
        querySearch(queryString, cb) {
            var restaurants = this.restaurants;
            var results = queryString
                ? restaurants.filter(this.createFilter(queryString))
                : restaurants;
            // 调用 callback 返回建议列表的数据
            cb(results);
        },
        createFilter(queryString) {
            return restaurant => {
                return (
                    restaurant.value
                        .toLowerCase()
                        .indexOf(queryString.toLowerCase()) === 0
                );
            };
        },
        loadAll() {
            return [
                { value: "永恒之塔" },
                { value: "机甲雄兵" },
                { value: "机动战士敢达Online" },
                { value: "剑网3" },
                { value: "梦三国" }
            ];
        },
        handleSelect(item) {
            console.log(item);
        }
    },
    mounted() {
        this.restaurants = this.loadAll();
    }
};
</script>
<style scoped>
.first-row-Scend .el-col .el-breadcrumb {
    /* display: inline-block; */
    line-height: 60px;
    height: 60px;
    color: red;
}
.mian-first-row {
    line-height: 50px;
    box-shadow: 0px 0px 10px 0px black;
    background-color: white;
}
.el-menu-demo {
    border-bottom-color: rgba(0, 0, 0, 0);
}
</style>