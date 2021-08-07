<template>
	<div>
		<div class="we-frame-wrap" id="main">
			<div class="we-frame-header"></div>
			<div class="we-frame-row">
				<div class="we-frame-col">
					<div class="page-feedback-web-hd">
						<h1 class="page-feedback-web-tit">帮助反馈</h1>
						<p class="page-feedback-web-subtit">你可以在线填写问题反馈，也可以在下方查询使用帮助.</p>
						<a href="#" class="we-button we-button--primary we-button--size-1"><span>去反馈</span></a>
					</div>
					<div class="feedback-help feedback-help--web">
						<div class="we-tabs">
							<div class="we-tabs-hd">
								<ul class="we-tabs-nav">
									<li class="cur">
										<a href="#" class="we-tabs-item">常用问题</a>
									</li>
								</ul>
							</div>
							<div class="we-tabs-bd">
								<div class="feedback-help-toolbar">
									<div class="feedback-help-toolbar-search">
										<div class="we-search">
											<p class="we-search-main">
											<input type="text" tag="helpInput" @focus="changeborder" @blur="loseborder" placeholder="请输入关键字"  class="we-search-input" v-bind:class="{'focusc' : istrue}">
											<span class="we-search-delete"></span>
											<span class="we-search-submit" id="submit"></span>
										    </p>
										</div>
									</div>
								</div>
								<div class="we-tabs-pane">
									<div>
										<ul class="feedback-questions">
											<li>
												<a href="#" class="feedback-questions-item">常见错误代码查询</a>
											</li>
											<li>
												<a href="#" class="feedback-questions-item">LOL进入游戏无法连接到服务器？</a>
											</li>
											<li>
												<a href="#" class="feedback-questions-item">WeGame启动游戏失败/闪退</a>
											</li>
											<li>
												<a href="#" class="feedback-questions-item">游戏更新失败怎么办</a>
											</li>
											<li>
												<a href="#" class="feedback-questions-item">游戏被封号了怎么办？</a>
											</li>
											<li>
												<a href="#" class="feedback-questions-item">WeGame下载游戏失败</a>
											</li>
											<li>
												<a href="#" class="feedback-questions-item">wegame dnf助手一键换装/一键连发/一键静步/双开功能失效？</a>
											</li>
											<li>
												<a href="#" class="feedback-questions-item">WeGame提示安装包损坏。</a>
											</li>
											<li>
												<a href="#" class="feedback-questions-item">DNF助手全功能失效要如何解决</a>
											</li>
											<li>
												<a href="#" class="feedback-questions-item">WeGame更新游戏失败</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	export default {
	  name: 'helpfeedback',
	  data:function(){
		return{
			istrue:false
		}
	  },
	  methods:{
		  changeborder(){
			  this.istrue=true
		  },
		  loseborder(){
			  this.istrue=false;
		  }
		 }
	  }
	
	
	
</script>

<style>
	.feedback-questions-item {
	    font-size: 13px;
	    color: #3c3c3c;
	    cursor: pointer;
	}
	.feedback-questions>li:before {
	    content: "";
	    position: absolute;
	    left: 0;
	    top: 7px;
	    width: 4px;
	    height: 4px;
	    border-radius: 50%;
	    background: #e4e4e4;
	}
	.feedback-questions>li {
	    position: relative;
	    padding-left: 16px;
	    margin: 18px 0;
	}
	.feedback-questions>li>a:hover{
		color: #FBC652;
	}
	h1, h2, h3, h4, h5, h6 {
	    font-size: 100%;
	    font-weight: 400;
	}
	body, button, input, select, textarea {
	    font-family: Helvetica Neue,Helvetica,Arial,Roboto,PingFang SC,Hiragino Sans GB,Microsoft YaHei UI,Microsoft YaHei,"\5FAE\8F6F\96C5\9ED1",sans-serif;
	    font-size: 12px;
	    line-height: 1.5;
	}
	.we-frame-footer, .we-frame-header, .we-frame-row, .we-frame-wrap {
	  width: 100%;
	}
	.we-frame-footer, .we-frame-header, .we-frame-row {
	    padding-left: calc(100vw - 100%);
	}
	.we-frame-col, .we-frame-container {
	    width: 100%;
	    max-width: 1000px;
	    margin: 0 auto;
	}
	*, :after, :before {
	    box-sizing: border-box;
	}
	.we-frame-col, .we-frame-container {
	    width: 100%;
	    max-width: 1000px;
	    margin: 0 auto;
	}
	.page-feedback-web-hd{
		position: relative;
		padding: 40px 174px 30px 0;
	}
	.page-feedback-web-tit{
		font-size: 24px;
		color: #3c3c3c;
	}.page-feedback-web-subtit{
		font-size: 14px;
		color: #757575;
	}
	.page-feedback-web-hd .we-button{
		position: absolute;
		right: 0;
		top: 50%;
		width: 164px;
		height: 38px;
		margin-top: -15px;
		font-size: 14px;
	}
	a:active, a:hover, a:link, a:visited {
	    text-decoration: none;
	}
	.we-button--size-full, .we-button--size-l {
	    line-height: 34px;
	    padding: 0 17px;
	}
	.we-button--primary {
	    border-color: #ffb300;
	    background-color: rgba(255,202,40,.5);
	}
	.we-button, .we-button:hover {
	    color: #3c3c3c;
	}
	.we-button {
	    display: inline-block;
	    line-height: 24px;
	    padding: 0 12px;
	    font-size: 12px;
	    border-style: solid;
	    border-width: 1px;
	    border-radius: 26px;
	    text-align: center;
	    cursor: pointer;
	    white-space: nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;
	}
	a, img {
	    -webkit-user-drag: none;
	}
	.we-button--size-full, .we-button--size-1 {
	    line-height: 34px;
	    padding: 0 17px;
	}
	.feedback-help--web{
		margin-bottom: 102px;
		background-color: #fff;
	}
	.feedback-help--web,.feedback-help--web .we-tabs{
		position: relative;
	}
	.feedback-help, .feedback-help .we-tabs {
	    position: absolute;
	    left: 0;
	    top: 0;
	    width: 100%;
	    height: 100%;
	}
	.feedback-help--web .we-tabs {
	    padding-left: 250px;
	}
	.feedback-help .we-tabs {
	    padding-left: 140px;
	}

	.feedback-help--web .we-tabs-hd {
	    width: 250px;
	    border-right: 1px solid #e4e4e4;
	    background-color: #f4f4f4;
	    overflow: visible;
	}
	.feedback-help .we-tabs-hd {
	    position: absolute;
	    left: 0;
	    top: 0;
	    width: 140px;
	    background: #eee;
	}
	
	.feedback-help--web .we-tabs-bd {
	    position: relative;
	    padding: 32px 40px 88px;
	    min-height: 780px;
	}
	.feedback-help .we-tabs-bd {
	    padding: 0 17px 0 35px;
	}
	.feedback-help .we-tabs-bd, .feedback-help .we-tabs-hd {
	    height: 100%;
	    overflow: hidden;
	    overflow-y: auto;
	}
	.feedback-help--web .we-tabs-nav {
	    padding: 20px 0;
	}
	.feedback-help .we-tabs-nav, .feedback-help .we-tabs-nav>li {
	    display: block;
	}
	.we-tabs-nav {
	    display: inline-block;
	    vertical-align: middle;
	}
	.feedback-help .we-tabs-nav>li.cur {
	    background: #fafafa;
	}
	.feedback-help .we-tabs-nav>li {
	    float: none;
	}
	
	.we-tabs-nav>li {
	    position: relative;
	    float: left;
	}
	.feedback-help--web .we-tabs-nav>li.cur:before {
	    z-index: 0;
	    right: -1px;
	    width: 100%;
	    background-color: #fff;
	}
	
	.feedback-help--web .we-tabs-nav>li.cur:after, .feedback-help--web .we-tabs-nav>li.cur:before {
	    content: "";
	    position: absolute;
	    top: 0;
	    height: 100%;
	}
	.feedback-help--web .we-tabs-nav>li.cur:after {
	    z-index: 1;
	    left: 0;
	    width: 3px;
	    background-color: #ffca28;
	}
	.we-tabs-nav:after {
	    content: "";
	    display: block;
	    width: 0;
	    height: 0;
	    clear: both;
	}
	.we-tabs-nav>li.cur .we-tabs-item {
	    cursor: default;
	}
	
	.feedback-help--web .we-tabs-item {
	    position: relative;
	    height: 42px;
	    padding: 0 12px 0 60px;
	    font-size: 14px;
	    line-height: 42px;
	    color: #757575;
	}

	a:active, a:hover, a:link, a:visited {
	    text-decoration: none;
	}
	.we-tabs-item {
	    display: block;
	    cursor: pointer;
	}
	.feedback-help--web .we-tabs {
	    padding-left: 250px;
	}
	.feedback-help--web .we-tabs-hd {
	    width: 250px;
	    border-right: 1px solid #e4e4e4;
	    background-color: #f4f4f4;
	    overflow: visible;
	}
	.feedback-help--web .we-tabs-item {
	    position: relative;
	    height: 42px;
	    padding: 0 12px 0 60px;
	    font-size: 14px;
	    line-height: 42px;
	    color: #757575;
	}
 .we-button--size-1:hover{
	background-color:rgb(255 179 0);
}

   .we-search, .we-search-main {
       position: relative;
   }
   .we-search-main {
       overflow: hidden;
       border-radius: 27px;
   }
   p{
	   color: #757575;
   }
   ::-webkit-scrollbar {
       width: 6px;
       height: 6px;
       background: transparent;
   }
   .feedback-help--web, .feedback-help--web .we-tabs {
       position: relative;
   }
   .feedback-help--web .we-tabs-bd {
       position: relative;
       padding: 32px 40px 88px;
       min-height: 780px;
   }
   .feedback-help-toolbar-search {
       padding-bottom: 32px;
       border-bottom: 1px solid #e4e4e4;
   }
   .feedback-help-toolbar-search .we-search-input {
       height: 32px;
       line-height: 24px;
       padding-left: 32px;
       padding-right: 78px;
   }
   .we-search-input {
       display: block;
       width: 100%;
       height: 27px;
       padding: 3px 49px 3px 9px;
       font-size: 14px;
       line-height: 19px;
       background-color: #fff;
       border: 1px solid #e4e4e4;
       border-radius: 27px;
       color: #757575;
	   outline:none;
   }
   input {
       writing-mode: horizontal-tb !important;
       text-rendering: auto;
       color: -internal-light-dark(black, white);
       letter-spacing: normal;
       word-spacing: normal;
       text-transform: none;
       text-indent: 0px;
       text-shadow: none;
       display: inline-block;
       text-align: start;
       appearance: textfield;
       background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
       -webkit-rtl-ordering: logical;
       cursor: text;
       margin: 0em;
       font: 400 13.3333px Arial;
       padding: 1px 2px;
       border-width: 2px;
       border-style: inset;
       border-color: -internal-light-dark(rgb(118, 118, 118), rgb(195, 195, 195));
       border-image: initial;
   }
   .feedback-help-toolbar-search .we-search-delete {
       top: 1px;
       right: 48px;
       width: 30px;
       height: 30px;
       display: none;
   }
   .we-search-delete {
       position: absolute;
       top: 1px;
       right: 32px;
       width: 25px;
       height: 25px;
       cursor: pointer;
       opacity: .6;
   }
   .feedback-help-toolbar-search .we-search-submit {
       top: 1px;
       width: 48px;
       height: 30px;
       border-radius: 0 30px 30px 0;
   }
   .we-search-submit {
       top: 1px;
       right: 1px;
       width: 32px;
       height: 25px;
       cursor: pointer;
       border-left: 1px solid #e4e4e4;
       border-radius: 0 25px 25px 0;
   }
   .we-search-submit, .we-search-submit:after {
       position: absolute;
   }
   .we-search-submit:after {
       content: "";
       left: 50%;
       top: 50%;
       width: 13px;
       height: 13px;
       margin: -6px 0 0 -8px;
       background-image: url(../image/search-icon.4718dde9.png);
   }
   .we-search-submit, .we-search-submit:after {
       position: absolute;
   }
   .we-search-submit:hover{
	   background-color: #FFCA28;
   }
   .focusc{
	   border-color:rgb(255,179,0);
   }
</style>
