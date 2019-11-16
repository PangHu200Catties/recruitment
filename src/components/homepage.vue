<template>
  <!--<link rel="stylesheet" href="/static/layui-v2.5.5/layui/css/layui.css" >-->
  <!--<script src="/static/build/layui.js"></script>-->
  <div id="wrap">
    <div id="header">
        <div id="header-box">
          <router-link to="" id="logo" style="display: block">闪聘</router-link>
          <div id="city-box">
            <i class="layui-icon layui-icon-location"
               style="color: #00d7c6;float: left;margin-top: 15px"></i>
            <ul id="header-box-title">
              <li>首页</li>
              <li>首页</li>
            </ul>
          </div>

        </div>
      </div>
    <div id="width-conf">
      <div id="search">
        <el-input v-model="input" placeholder="请输入内容" style="width:80%;"></el-input>
        <div id="search-button">搜索</div>
      </div>
      <div id="banner">
        <div id="banner-context">
          <dl class="cont">
            <dd>
              <b>技术</b>
              <a href="">java</a>
              <a href="">web前端</a>
              <a href="">算法工程师</a>
              <a href="">测试</a>
            </dd>
          </dl>
          <dl class="cont">
            <dd>
              <b>技术</b>
              <a href="">java</a>
              <a href="">web前端</a>
              <a href="">算法工程师</a>
              <a href="">测试</a>
            </dd>
          </dl>
          <dl class="cont">
            <dd>
              <b>技术</b>
              <a href="">java</a>
              <a href="">web前端</a>
              <a href="">算法工程师</a>
              <a href="">测试</a>
            </dd>
          </dl>
          <dl class="cont">
            <dd>
              <b>技术</b>
              <a href="">java</a>
              <a href="">web前端</a>
              <a href="">算法工程师</a>
              <a href="">测试</a>
            </dd>
          </dl>
          <dl class="cont">
            <dd>
              <b>技术</b>
              <a href="">java</a>
              <a href="">web前端</a>
              <a href="">算法工程师</a>
              <a href="">测试</a>
            </dd>
          </dl>
          <dl class="cont">
            <dd>
              <b>技术</b>
              <a href="">java</a>
              <a href="">web前端</a>
              <a href="">算法工程师</a>
              <a href="">测试</a>
            </dd>
          </dl>
          <dl class="cont">
            <dd>
              <b>技术</b>
              <a href="">java</a>
              <a href="">web前端</a>
              <a href="">算法工程师</a>
              <a href="">测试</a>
            </dd>
          </dl>
          <dl class="cont">
            <dd>
              <b>技术</b>
              <a href="">java</a>
              <a href="">web前端</a>
              <a href="">算法工程师</a>
              <a href="">测试</a>
            </dd>
          </dl>
          <dl class="cont">
            <dd>
              <b>技术</b>
              <a href="">java</a>
              <a href="">web前端</a>
              <a href="">算法工程师</a>
              <a href="">测试</a>
            </dd>
          </dl>
          <dl class="cont">
            <dd>
              <b>技术</b>
              <a href="">java</a>
              <a href="">web前端</a>
              <a href="">算法工程师</a>
              <a href="">测试</a>
            </dd>
          </dl>

        </div>
        <div id="banner-img">
          <div class="big-banner-img"><img src="../assets/banner1.jpg"></div>
          <div class="mini-banner-img"><img src="../assets/minibanner1.jpg"></div>
          <div class="big-banner-img"><img src="../assets/banner2.jpg"></div>
          <div class="mini-banner-img"><img src="../assets/minibanner2.jpg"></div>
          <div class="big-banner-img"><img src="../assets/banner3.jpg"></div>
          <div class="mini-banner-img"><img src="../assets/minibanner3.jpg"></div>
          <div class="mini-banner-img"><img src="../assets/minibanner4.jpg"></div>
          <div class="mini-banner-img" style="width: 257px"><img src="../assets/minibanner5.jpg" style="width: 257px"></div>
          <div class="mini-banner-img"><img src="../assets/minibanner6.jpg"></div>
        </div>
      </div>
      <h3>
        <span>程序员</span>
        <span>建筑</span>
        <span>美容</span>
        <span>程序员</span>
        <span>程序员</span>
      </h3>
      <div id="job-bar">
        <div class="job-card"  v-for="(p,index) in companySet">
          <p class="job-name">{{p.position.positionName}}</p>
          <span class="salary">{{p.position.lowestSalary}}k-{{p.position.highestSalary}}k</span>
          <div class="job-text">
            {{p.address.province}}
            <span class="vline"></span>
              {{p.position.startYearRequire}}-{{p.position.endYearRequire}}<div v-if="p.position.endYearRequire==''">以上</div>
            <span class="vline"></span>
            <!--{{}}-->
          </div>
          <div class="job-compony">
            <div class="layui-inline">
              <img src="https://img.bosszhipin.com/boss/avatar/avatar_5.png"  >
            </div>
            阿里巴巴集团
            <span class="user-name">吴先生
              <span class="vline"></span>
              技术专家
            </span>

          </div>
        </div>

        <!--<div class="job-card"  style="float:right;margin-right: 0px">-->

      </div>
      <button type="button" class="layui-btn" style="width: 385px;background-color: #5dd5c8">查看更多</button>
      <h3  style="margin-top: 35px;">
        <span>程序员</span>
        <span>建筑</span>
        <span>美容</span>
        <span>程序员</span>
        <span>程序员</span>
      </h3>
      <div id="company-bar">
        <div class="company-card">
          <a href="" class="company-info">
            <img src="https://img.bosszhipin.com/beijin/upload/tmp/20190417/d7eb2db092f535a10a3921bf4237ecea3b152cfc359b87eae09b77d7e08a4396.png?x-oss-process=image/resize,w_100,limit_0"  />
            <h4>亚信科技</h4>
            <p>已上市
              <span class="vline"></span>
              计算机软件
            </p>
            <div class="company-text">

            </div>
          </a>
          <div class="company-num">
            422个职位招聘
          </div>
        </div>
        <div class="company-card">
          <a href="" class="company-info">
            <img src="https://img.bosszhipin.com/beijin/upload/tmp/20190417/d7eb2db092f535a10a3921bf4237ecea3b152cfc359b87eae09b77d7e08a4396.png?x-oss-process=image/resize,w_100,limit_0"  />
            <h4>亚信科技</h4>
            <p>已上市
              <span class="vline"></span>
              计算机软件
            </p>
            <div class="company-text">

            </div>
          </a>
          <div class="company-num">
            422个职位招聘
          </div>
        </div>
        <div class="company-card">
          <a href="" class="company-info">
            <img src="https://img.bosszhipin.com/beijin/upload/tmp/20190417/d7eb2db092f535a10a3921bf4237ecea3b152cfc359b87eae09b77d7e08a4396.png?x-oss-process=image/resize,w_100,limit_0"  />
            <h4>亚信科技</h4>
            <p>已上市
              <span class="vline"></span>
              计算机软件
            </p>
            <div class="company-text">

            </div>
          </a>
          <div class="company-num">
            422个职位招聘
          </div>
        </div>
        <div class="company-card" style="margin-right: 0px;float: right">
          <a href="" class="company-info">
            <img src="https://img.bosszhipin.com/beijin/upload/tmp/20190417/d7eb2db092f535a10a3921bf4237ecea3b152cfc359b87eae09b77d7e08a4396.png?x-oss-process=image/resize,w_100,limit_0"  />
            <h4>亚信科技</h4>
            <p>已上市
              <span class="vline"></span>
              计算机软件
            </p>
          </a>
          <div class="company-num">
            422个职位招聘
          </div>
        </div>

      </div>
      <button type="button" class="layui-btn" style="width: 385px;background-color: #5dd5c8">查看更多</button>
      <h3  style="margin-top: 35px;">
        <span style="color: #00c2b3">热门城市</span>
      </h3>
      <div id="city-bar">
        <a><div class="bg"><img class="city-img" src="https://static.zhipin.com/zhipin-geek/v92/web/geek/images/city_101010100.png"></div></a>
        <a><div class="bg"><img class="city-img" src="https://static.zhipin.com/zhipin-geek/v92/web/geek/images/city_101020100.png"></div></a>
        <a><div class="bg"><img class="city-img" src="https://static.zhipin.com/zhipin-geek/v92/web/geek/images/city_101030100.png"></div></a>
        <a><div class="bg"><img class="city-img" src="https://static.zhipin.com/zhipin-geek/v92/web/geek/images/city_101110100.png"></div></a>
        <a><div class="bg"><img class="city-img" src="https://static.zhipin.com/zhipin-geek/v92/web/geek/images/city_101190400.png"></div></a>
        <a><div class="bg"><img class="city-img" src="https://static.zhipin.com/zhipin-geek/v92/web/geek/images/city_101200100.png"></div></a>
        <a><div class="bg"><img class="city-img" src="https://static.zhipin.com/zhipin-geek/v92/web/geek/images/city_101190100.png"></div></a>
        <a><div class="bg"><img class="city-img" src="https://static.zhipin.com/zhipin-geek/v92/web/geek/images/city_101250100.png"></div></a>
        <a><div class="bg"><img class="city-img" src="https://static.zhipin.com/zhipin-geek/v92/web/geek/images/city_101270100.png"></div></a>
        <a><div class="bg"><img class="city-img" src="https://static.zhipin.com/zhipin-geek/v92/web/geek/images/city_101280100.png"></div></a>
        <a><div class="bg"><img class="city-img" src="https://static.zhipin.com/zhipin-geek/v92/web/geek/images/city_101280600.png"></div></a>
        <a><div class="bg"><img class="city-img" src="https://static.zhipin.com/zhipin-geek/v92/web/geek/images/city_101060100.png"></div></a>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default{
    data(){
      return{
        companySet:[],
        input:''
      }
    },
    mounted:function (){
      this.selectPosition();
    },
    methods:{
        selectPosition:function () {
          var url = "api/homepage/listPosition";
          axios.get(url).then(res=>{
              this.companySet = res.data;
              console.log(res.data)

          })
        }
    }
  }
</script>
<style>

  *{ margin:0;
    padding:0;
  }
  body{
    background-color: #f6f6f8;
  }

  #width-conf{
    width: 78%;
    margin: auto;
  }
  #wrap{
    width: 100%;
    height: 2054px;
  }
  /*159*/
  #header{
    width:100%;
    height: 49px;
    border: solid 1px;
    background-color: #202329;
  }
  #header-box{
    width: 78%;
    height: 49px;
    margin: auto;
    border: solid 1px white;
  }
  #logo{
    color: #00d7c6;
    line-height: 49px;
    float: left;
    text-decoration:none;
    font-size: 26px;
  }
  #city-box{
    border: solid 1px white;
    width: 20%;
    height: 49px;
    float: left;
    margin-left: 15px;
  }
  #header-box-title{

  }
  #header-box-title li{
    display: inline-block;
    float: left;
    font-size: 15px;
    color: white;
    margin: 13px 0 0 10px;
  }

  #search{
    border: solid 1px;
    height: 130px;
  }
  #search input{
    width: 74%;
    margin: 0 0px 0 0px;
    float: left;
    height: 44px;
    position: relative;
    top: 25px;
    border-radius: 0px;
  }
  #search-button{
    float: left;
    position: relative;
    top: 25px;
    left:882px;
    width: 140px;
    height: 44px;
    background-color: #55cbc4;
    color: white;
    line-height: 44px;
  }

  #banner{
    height: 500px;
  }
  #banner-context{
    width: 367px;
    height:470px ;
    float: left;
  }
  #banner-img{
    width: 798px;
    height:470px ;
    float: left;
    margin-left: 19px;
  }
  .img-top:hover{
    cursor: pointer;
  }
  .cont{
    height: 47px;
    background-color: white;
  }
  .cont dd{
    text-align: center;
    line-height: 47px;
    float: left;
    margin-left: 20px;
  }
  .cont dd b{
    font-weight: 600;
    color: #414a60;
    font-size: 15px;
  }
  .cont dd a{
    color: #61687c;
    font-size: 13px;
    display: inline-block;
    line-height: 28px;
    margin-left: 18px;
  }
  .cont:hover{
    background-color: #55cbc4;
  }
  .big-banner-img{
    float: left;
    margin: 0px 0 0 5px;
  }
  .big-banner-img:hover{
    cursor: pointer;
  }
  .mini-banner-img:hover{
    cursor: pointer;
  }
  .mini-banner-img{
    float: left;
    width: 260px;
    height: 112px ;
    margin: 0px 0 5px 5px;

  }
  .mini-banner-img img{
    width: 262px;
    height: 112px ;
  }
  #width-conf h3{
    height: 45px;
    line-height: 45px;
  }
  #width-conf h3 span{
    float: left;
    display: inline-block;
    margin-right: 40px;
    line-height: 45px;
    color: #8d92a1;
    cursor: pointer;
    font-size: 14px;
    font-weight: 400;
  }
  #job-bar{
    height: 420px;
  }
  .job-card{
    width: 384px;
    height: 130px;
    background-color:white;
    float: left;
    margin: 0px 10px 15px 0;
  }
  .job-name{
    height: 35px;
    line-height: 35px;
    font-size: 15px;
    color: #61687c;
    width: 144px;
    float: left;
    margin: 2px 0 0  20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
    display: inline-block;
  }
  .salary{
    display: inline-block;
    color: #fc6c38;
    float: right;
    margin: 10px 20px 0 0;
  }
  .job-text{
    font-size: 12px;
    color: #61687c;
    border-bottom: dashed 1px #e3e7ed;
    width: 344px;
    line-height: 28px;
    display: inline-block;
    text-align: left;
    margin-top: 7px;
  }
  .job-compony{
    display: block;
    height: 30px;
    width: 384px;
    margin: 12px 0 0 0;
    line-height: 30px;
    text-align: left;
  }
  .job-compony:hover{
    background-color: ;
  }
  .layui-inline{
    float: left;
    margin-left: 20px;
  }
  .layui-inline img{
    width: 30px;
    margin-right: 15px;
  }
  .user-name{
    margin-left: 10px;
    font-size: 12px;
    color: #8d92a1;
  }
  .vline{
    display: inline-block;
    width: 1px;
    height: 12px;
    vertical-align: middle;
    background: #e0e0e0;
    margin: 0 10px;
  }

  #company-bar{
    height: 453px;
  }
  .company-card{
    background-color: white;
    width: 284px;
    height: 140px;
    float: left;
    margin: 0 16px 16px 0 ;
  }
  .company-info{
    width: 244px;
    height: 77px;
    margin: 0 20px;
    padding-top: 20px;
    /*#ededed*/
    border-bottom: dashed 1px black;
    display: block;
  }
  .company-info img{
    width: 57px;
    height: 57px;
     float: left;
  }
  .company-info h4{
    height: 25px;
    line-height: 25px;
    font-size: 16px;
    font-weight: 400;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: right;
  }
  .company-info p{
    height: 40px;
    line-height: 41px;
    color: #898e9d;
    font-size: 12px;
    display: inline-block;
    white-space: nowrap;
   float: right;
  }
  .company-num{
    width: 244px;
    height: 42px;
    margin:  0 auto;
    text-align: left;
    line-height: 42px;
    color: #898e9d;
    font-size: 12px;
    display: inline-block;
    white-space: nowrap;
  }

  #city-bar{
    height: 165px;
  }
  .city-img{
    width: 194px;
    height: 80px;

  }
  .city-img:hover{
    cursor: pointer;
  }
  .bg{
    width: 194px;
    height: 80px;
    background-color: blue;
    opacity:1;
    float: left;
    margin: 0 3px 3px 0;
  }
  .bg:hover{
    opacity:0.7;
  }
</style>
