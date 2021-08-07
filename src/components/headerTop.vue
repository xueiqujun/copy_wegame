<template>
    <header class="header">
        <el-row>
            <el-col :span="8">
                <el-row>
                    <el-col>
                        <el-image :src="logo" class="img"></el-image>
                    </el-col>
                </el-row>
            </el-col>
            <el-col :span="8">
                <el-row class="first" ref="first">
                    <el-col :span="4" :class="{bg:flag[0]}">
                        <a href="#/">商店</a>
                    </el-col>
                    <el-col :span="5" :class="{bg:flag[1]}">
                        <a href="#/pc">客户端</a>
                    </el-col>
                    <el-col :span="5" :class="{bg:flag[2]}">
                        <a href="#/phone">移动端</a>
                    </el-col>
                    <el-col :span="5" :class="{bg:flag[3]}">
                        <a href="#/Wingplan">翼计划</a>
                    </el-col>
                    <el-col :span="5" :class="{bg:flag[4]}">
                        <a href="#/searchHelp">帮助反馈</a>
                    </el-col>
                </el-row>
            </el-col>
            <el-col :span="8">
                <el-row>
                    <el-col :span="6" :offset="6">
                        <a href="#/hardware">开发者平台</a>
                    </el-col>
                    <el-col :span="6">
                        <el-button type="info" round class="userButton">下载客户端</el-button>
                    </el-col>
                    <el-col :span="6">
                        <a href="#">登录</a>
                    </el-col>
                    
                </el-row>
            </el-col>
        </el-row>
    </header>
</template>
<script>
import logo from "./../assets/wegame-logo.png";
export default {
    data() {
        return {
            logo,
           
            
        };
    },
    props: ["flag"],
    components: {
    
    }
};
</script>
<style scoped>
.title{
    /* width:100%; */
    text-align: center;
   height: 60px;
    
}
.header a {
    color: #a9a9a9;
    text-decoration: none;
}
.header a:hover {
    color: white;
}
* {
    margin: 0;
    padding: 0;
}
.header {
    height: 80px;
    line-height: 80px;
    background-color: #191919;
    color: #a9a9a9;
    margin: 0 auto;
    text-align: center;
    /* margin-top: -8px; */
}
.img {
    line-height: 0px;
}
header > .el-row > .el-col:not(:last-child) > .el-row > .el-col:hover {
    color: white;
}
header
    > .el-row
    > .el-col:last-child
    > .el-row
    > .el-col:not(:nth-of-type(2)):hover {
    color: white;
}
.userButton {
    background-color: black;
    color: #a9a9a9;
}
.userButton:hover {
    background-color: yellow;
    color: black;
}
.header > .el-row > .el-col:first-child > .el-row > .el-col {
    padding-top: 15px;
    height: 70px;
}

.bg {
    background-color: rgba(255, 255, 255, 0.2);
}
</style>