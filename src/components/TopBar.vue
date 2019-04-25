<template>
  <div class="top-bar">
    <div class="all-nav" @mouseenter="isShowList=true">
      <img src="../../public/img/TB17mppCFOWBuNjy0FiXXXFxVXa-36-28.png" alt="">
    </div>
    <div class="logo">
      <img src="img/logo.png" alt="">
    </div>
    <div class="common-menu">
      <ul class="menu-list">
        <li class="search-box">
          <input type="text" class="common-search" placeholder="搜索">
          <img src="img/header-search.png" alt="" class="icon-search">
        </li>
        <li><a href="http://">控制台</a></li>
        <li><a href="http://">登录</a></li>
        <li class="register"><a href="http://">注册</a></li>
      </ul>
    </div>
    
    <div v-show="isShowList" class="all-nav-wrapper">
      <div v-for="(item,i) of navList" @mouseenter="showNavDetail(item.nid,i)" :key="item.nid" >
        <a :class="`${item.nid == nid ?'active-nav':''}`" href="javascript:;">
          {{item.nname}} 
          <span class="greater">></span>
        </a>
      </div>
    </div>
    <div class="all-nav-level" v-show="showDetailList" @mouseleave="showDetailList=false;isShowThree=false">
      <div v-for="(item,i) of navDeatil.nlist" :key="item.pid" @mouseenter="showThree(i)">
        {{item.pname}}
        <span class="greater">></span>
      </div>
    </div>
    <div class="three-menu" v-show="isShowThree" @mouseleave="isShowThree=false">
      <div v-for="(item,i) of threeList" :key="i">
        {{item.aname}}
      </div>
    </div>
  </div>
</template>    

<script>
export default {
  data(){
    return {
      isShowList:false,
      showNavList:false,
      navList:[
        {nid:1,nname:'产品',nlist:[{pid:1,pname:'云计算'},{pid:2,pname:'安全'},{pid:3,pname:'大数据'}]},
        {nid:2,nname:'解决方案',nlist:[{pid:1,pname:'通用'},{pid:2,pname:'行业'},{pid:3,pname:'大数据'}]},
        {nid:3,nname:'开发者',nlist:[{pid:1,pname:'开发平台'},{pid:2,pname:'资源'},{pid:3,pname:'计算'}]},
        {nid:4,nname:'云市场',nlist:[{pid:1,pname:'心选商场'},{pid:2,pname:'api市场'},{pid:3,pname:'服务与培训'}]}
      ],
      listItem:[
        {pid:1,aid:1,aname:'弹性计算',alist:[{sid:1,sname:'云服务器'},{sid:2,sname:'批量计算'},{sid:3,sname:'容器服务'}]},
        {pid:2,aid:2,aname:'存取数据',alist:[{sid:1,sname:'计算'},{sid:2,sname:'存储'},{sid:3,sname:'网络'}]},
        {pid:3,aid:3,aname:'数据库服务',alist:[{sid:1,sname:'企业应用'},{sid:2,sname:'专业市场'},{sid:3,sname:'安全服务'}]}
      ],
      nid:-1,
      navDeatil:[],
      showDetailList:false,   //2级菜单
      showNav:'none',    //1级菜单
      threeList:[],    //3级菜单
      isShowThree:false
    }
  },
  methods:{
    showNavDetail(id,i){
      console.log(id,i)
      this.nid = id,
      this.navDeatil = this.navList[i]
      console.log(this.navDeatil)
      // this.showDetailList = 'block'      //展示2级菜单
      // this.showNav = 'block'    //展示1级菜单
      this.showDetailList = true
    },
    //进入一级菜单，显示二级菜单
    showItemDetail(){
      
    },
    isShow(){
      this.showNav = 'none'
    },
    showThree(id){
      console.log(id)
      this.threeList = this.listItem[id]
      console.log(this.threeList)
      this.isShowThree = true
    }
  }
}
</script>   

<style lang="scss" scoped>
.active-nav{
  color: #a53333 !important;
}
.top-bar {
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  position: relative;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  .all-nav {
    margin-left: 16px;
    width: 18px;
    float: left;
    cursor: pointer;
    img {
      width: 18px;
    }
  }
  .logo {
    float: left;
    margin-left: 67px;
    margin-top: 8px;
    cursor: pointer;
    img {
      width: 71px;
    }
  }
  .common-menu {
    float: right;
    .menu-list {
      list-style: none;
      display: flex;
      > li {
        padding: 0 10px;
        height: 40px;
        a {
          text-decoration: none;
          color: #fff;
        }
      }
      .register {
        background: #478cd3;
      }
      .search-box {
        position: relative;
        .common-search {
          width: 170px;
          height: 40px;
          outline: none;
          border: none;
          background: rgba(255, 255, 255, 0.05);
          padding-left: 10px;
        }
        .icon-search {
          position: absolute;
          top: 11px;
          right: 15px;
          cursor: pointer;
        }
      }
    }
  }
  .all-nav-wrapper{
    position:absolute;
    top:40px;
    width:120px;
    color:#fff;
    padding-left:10px;
    padding-right:20px;
    background:#212634;
    z-index:10;
    a{
      text-decoration: none;
      color:#fff;
      position: relative;
      .greater{
        position: absolute;
        left:100px;
      }
    }
  }
  .all-nav-level{
    position:absolute;
    top:40px;
    left:150px;
    width:120px;
    color:#fff;
    background: #333;
    padding:0 20px;
    z-index:10;
    >div .greater{
      position: absolute;
      left:120px;
    }
  }
  .three-menu{
    width:500px;
    height:500px;
    background: #444141;
    position:absolute;
    left:310px;
    top:40px;
    z-index:10;
  }
}
</style>  