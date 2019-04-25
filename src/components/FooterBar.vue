<template>
  <div class="footer-bar">
    <div class="footer-main">
      <el-row>
        <el-col :span="2">
          <img src="img/logo.png" alt="" class="logo">
        </el-col>
        <el-col :span="14">
          <el-row>
            <el-col :span="3" :offset="2">
              <a href="">首页</a>
            </el-col>
            <el-col :span="3">
              <a href="">益政务</a>
            </el-col>
            <el-col :span="3">
              <a href="">益服务</a>
            </el-col>
            <el-col :span="3">
              <a href="">益应用</a>
            </el-col>
            <el-col :span="3">
              <a href="">益市场</a>
            </el-col>
            <el-col :span="3">
              <a href="">益智造</a>
            </el-col>
            <el-col :span="3">
              <a href="">益资讯</a>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="8">
          <el-row>
            <el-col :span="10">
              
            </el-col>
            <el-col :span="14">客服电话:028964055852</el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row class="other">
        <el-col>益企云科技股份有限公司 蜀ICP备17040581号</el-col>
        <el-col>益企云平台版权所有 &copy; 2017 Copyright</el-col>
        <el-col>四川成都市锦江区百扬大厦29楼</el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
.footer-bar{
  height: 500px;
  background:rgba(46,48,51,1);
  display: flex;
  align-items: center;
  text-align: center;
  color:rgb(172,172,174);
  .footer-main{
    width:1200px;
    height:150px;
    margin:0 auto;
    text-align:center;
    color:rgb(172,172,174);
    font-size:12px;
    .logo{
      width:71px;
      height: 24px;
    }
    a{
      color:rgb(172,172,174);
      text-decoration: none;
      font-size:12px;
    }
    .other{
      color:rgb(172,172,174);
      font-size:12px;
      display: flex;
      text-align: left;
      padding:50px 0 0 5px;
    }
  }
}
</style>
