<template>
    <div class="zong">
        <div class="heater">
            &nbsp; &nbsp;
            <img class="img1" src="../assets/wegamelogo.png" />
            <div class="spanFa">
                <span>我遇到问题</span>&nbsp; &nbsp;
                <span>Wiki索引</span>&nbsp; &nbsp;
                <span>FAQ</span>&nbsp; &nbsp;
                <span class="span1">中文</span>&nbsp; &nbsp; 
                <span class="span1">|</span>&nbsp; &nbsp;
                <span>English</span>&nbsp; &nbsp;
            </div>
            <div class="img2">
                <img src="../assets/xinxilogo.png" />
            </div>
        </div>
        <div class="nav">
            <div class="rightnav">
                <div class="ziti">
                    <h1>欢迎来到WeGame开发者平台</h1>
                    <p>你需要登录才能进行相关操作</p>
                </div>
            </div>
            <div class="leftnav">
                <div class="navkuang">
                    <div class="tubiao">
                        <el-tabs v-model="activeName" @tab-click="handleClick">
                            <el-tab-pane   name="first">
                                <span slot="label">
                                    &nbsp;<el-button size="medium" type="warning" icon="el-icon-message"  plain ></el-button>
                                </span>
                                <div class="neikuang">   
                                    <strong>
                                        <p class="denglu">登录</p>
                                    </strong>
                                    <el-input
                                        class="login-input error"
                                        value
                                        placeholder="请输入邮箱账号"
                                        v-model="input1"
                                        clearable
                                        @blur="emailLogin()"
                                    ></el-input>
                                    <p v-text="notice1" class="notice"></p>
                                    <el-input
                                        placeholder="请输入6-9位的密码"
                                        show-password
                                        v-model="input2"
                                        @blur="passwordLogin()"
                                    ></el-input>
                                    <p v-text="notice2" class="notice" ></p>
                                    <el-button type="warning" class="loginbutton">登 录</el-button>
                                    <div class="divspan">
                                        <span>忘记密码</span>&nbsp;
                                        <span class="span2">|</span>&nbsp;
                                        <span>注册新用户</span>
                                    </div>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane name="second">
                                     <span slot="label">
                                            <el-button size="medium" type="warning" icon="el-icon-user-solid"  plain ></el-button>
                                     </span>
                                <div class="username">
                                    <p class="p1">快速安全登录</p>
                                    <p class="p2">请使用QQ手机扫描二维码登录</p>
                                    <p> <img src="../assets/dim.png" /> </p>
                                </div>
                                <div class="divspan2">
                                    <span>账号密码登录</span>&nbsp;
                                    <span class="span3">|</span>&nbsp;
                                    <span>注册新账户</span>&nbsp;
                                    <span class="span3">|</span>&nbsp;
                                    <span>意见反馈</span>
                                </div>
                            </el-tab-pane>
                        </el-tabs>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <br />
            <br />
            <table class="foottab" border="0" cellspacing="0" cellpadding="0">
                <tr>
                    <td style="width:50%;">
                        <img src="../assets/twodim.png" />
                        <p>
                            扫码关注“WeGame开发者”公众号
                            <br />及时获取平台服务动向
                        </p>
                    </td>
                    <td style="border-left:1px solid rgb(169, 170, 172);">
                        <p>
                            COPYRIGHT © 1998 – 2020 TENCENT. ALL RIGHTS RESERVED.
                            <br />腾讯公司版权所有
                        </p>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            input1: "",
            input2: "",
            notice1: "",
            notice2: "",
            activeName:"first"
        };
    },
    methods: {
        emailLogin() {
            // alert(12);
            let re = /^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/;
            // let inputbox = this.value;
            // alert(this.input1)
            if (re.test(this.input1)) {
                this.notice1 = " "; //输入正确
            } else {
                //验证不成功，执行以下代码
                this.notice1 = "邮箱验证不成功，请重新输入";
            }
        },
        passwordLogin() {
            let rel = /^[0-9a-zA-Z]{6,9}$/;
            if (rel.test(this.input2)) {
                this.notice2 = ""; //输入错误
            } else {
                this.notice2 = "密码输入不正确，请重新修改"; //验证正确
            }
        },
        handleClick(tab, event){
            console.log(tab, event);
        }
    }
};
</script>
<style scoped>
body {
    margin: 0;
    padding: 0;
}
.zong > .heater {
    background-color: black;
    height: 60px;
    margin: -8px;
    color: white;
}
.zong > .heater > .spanFa > .span1{
    color:gray;
}
.zong > .heater > .img1 {
    padding-top: 10px;
    padding-left: 11px;
}
.zong > .heater > .img2 {
    float: right;
    margin-top: 1%;
    text-align: right;
}
.zong > .heater > .img2 >img {
   width:34px;height:34px;
}
.spanFa {
    float: right;
    margin-top: 20px;
    margin-right: 30px;
    font-size: 14px;
}
.zong > .nav {
    margin: 0 auto;
    width: 75%;
    margin-top: 1%;
}
.zong > .nav > .rightnav {
    background-image: url(../assets/backgroundtp.png);
    height: 633px;
    width: 55%;
    float: left;
}
.zong > .nav > .rightnav > .ziti {
    padding-top: 160px;
    margin-left: 130px;
}
.zong > .nav > .leftnav {
    float: right;
    width: 45%;
    height: 100%;
}
.zong > .nav > .leftnav > .navkuang {
    border: 1px solid rgb(151, 129, 129);
    width: 80%;
    height: 400px;
    margin-top: 120px;
}
.zong > .nav > .leftnav > .navkuang > .tubiao {
    padding-top: 1%;
}
.neikuang {
    margin: 0 auto;
    width: 80%;
    margin-top: 25px;
}
.notice{
    height:10px; 
    font-size:14px; 
    color:red;
}
.denglu {
    width: 100%;
    font-size: 20px;
    text-align: center;
}
.neikuang > .loginbutton{
    width:100%; 
    height:60px;
     font-size:20px;
}
.neikuang > .divspan{
    padding-top:8%;
    float:right; 
    font-size:14px; 
    color: grey;
}
.neikuang > .divspan > .span2{
    color: darkgrey;
}
.divspan2{
    padding-top:18%;
    float: right; 
    font-size:14px;
    color: grey;
    padding-right: 10%;
}
.divspan2 > .span3{
    padding-top:16%;
    color:gray;
}
.username {
    text-align: center;
}
.username .p1 {
    font-size: 20px;
}
.username .p2 {
    font-size: 14px;
}
.footer {
    clear: both;
    margin: 0 auto;
}
.foottab {
    width: 100%;
    text-align: center;
    color: rgb(169, 170, 172);
    background-color: whitesmoke;
}
</style>