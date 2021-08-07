<template>
    <el-row id="update">
        <div>
            <el-image :src="date.image"></el-image>
        </div>

        <el-row class="font">
            <el-col :span="4">
                <el-image :src="date.imagemini"></el-image>
            </el-col>
            <el-col :span="12">
                <p>{{date.caption}}</p>
                <p>{{date.type.join('/')}}</p>
            </el-col>
            <el-col :span="8">查看游戏 ></el-col>
        </el-row>
        <h3>{{date.name}}</h3>
        <p>{{date.contont}}</p>
        <hr />
        <el-row>
            <el-col :span="12">
                <i class="el-icon-view"></i>
                <font>{{date.view}}</font>
            </el-col>
            <el-col :span="12">
                <font>{{date.data}}</font>
            </el-col>
        </el-row>
    </el-row>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {},
    props: ["date"]
};
</script>

<style scoped>
* {
    margin: 0px;
    padding: 0px;
}
#update {
    text-align: left;
    color: rgba(0, 0, 0, 0.6);
    transition: all 0.5s ease;
    overflow: hidden; 
     height: 420px;
}
#update:hover {
    box-shadow: 0px 10px 10px -10px;
     transition: all 0.5s ease;
}


#update:hover > div:first-child {
    overflow: hidden;
    width: 100%;
}
#update > div:first-child > .el-image {
    transition: all 0.5s ease;   
}
#update > div:first-child > .el-image:hover {
    transform: scale(1.1);
    transition: all 0.5s ease;
}

#update > div:first-child > .el-image:first-child {
    width: 100%;
    height: 100%;
}
.font {
    margin-top: 10px;
    padding: 10px;
}

.font > .el-col:nth-of-type(2) {
    position: relative;
    text-align: left;
    font-size: 14px;
}
.font > .el-col:nth-of-type(2) p:last-child {
    font-size: 12px;
}
.font > .el-col:last-child {
    padding-top: 5px;
    text-align: right;
    right: 0px;
}
.font > .el-col:nth-of-type(2) {
    left: 60px;
}
.font > .el-col {
    position: absolute;
}
.font > .el-col:first-child {
    top: -35px;
    z-index: 1000;
}
#update > h3 {
    font-size: 16px;
    line-height: 30px;
    padding: 5px;
}
#update > p {
    font-size: 14px;
    line-height: 24px;
    padding: 5px;
}
#update > hr {
    margin: 5px;
}
#update > .el-row:last-child {
    padding: 5px 10px;
}
#update > .el-row:last-child > .el-col:first-child {
    text-align: left;
}
#update > .el-row:last-child > .el-col:last-child {
    text-align: right;
}
</style>