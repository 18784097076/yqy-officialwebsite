<template>
  <div class="top-bar">
    <div class="all-nav" @mouseenter="showOne">
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
    <div class="all-list" @mouseenter="enterAll" @mouseleave="leaveAll">
      <transition name="fade1">
        <div class="one-menu" v-show="isShowOne" @mouseleave="leaveOne">
          <div v-for="(item,i) of navList" :key="i" @mouseenter="selectOne(i)" >
            {{item.nname}}
            <span class="greater">></span>
          </div>
        </div>
      </transition>

      <transition name="fade2">
        <div class="two-menu" v-show="isShowTwo" @mouseleave="leaveTwo">
          <div v-for="(item,i) of twoList" :key="i" @mouseenter="selectTwo(i)">
            {{item.pname}}
            <span class="greater"> > </span>
          </div>
        </div>
      </transition>

      <transition name="fade3">
        <div class="three-menu" v-show="isShowThree" @mouseleave="leaveThree">
          <div v-for="(item,i) of threeList" :key="i">
            
          </div>
        </div>
      </transition>
    </div>
    
  </div>
</template>    

<script>
export default {
  data() {
    return {
      isEnterAll:false,
      navList: [
        //一级菜单列表
        {
          nid: 1,
          nname: "产品",
          nlist: [
            {
              pid: 1,
              pname: "云计算", //2级菜单列表
              plist: [
                {
                  aid: 1,
                  aname: "弹性计算", //三级菜单列表
                  alist: [
                    { sid: 1, sname: "云服务器" }, //4级菜单列表
                    { sid: 2, sname: "批量计算" },
                    { sid: 3, sname: "容器服务" }
                  ]
                },
                { aid: 2, aname: "存储数据" }
              ]
            },
            { pid: 2, pname: "安全" },
            { pid: 3, pname: "大数据" }
          ]
        },
        {
          nid: 2,
          nname: "解决方案",
          nlist: [
            { pid: 1, pname: "通用" },
            { pid: 2, pname: "行业" },
            { pid: 3, pname: "大数据" }
          ]
        },
        {
          nid: 3,
          nname: "开发者",
          nlist: [
            { pid: 1, pname: "开发平台" },
            { pid: 2, pname: "资源" },
            { pid: 3, pname: "计算" }
          ]
        },
        {
          nid: 4,
          nname: "云市场",
          nlist: [
            { pid: 1, pname: "心选商场" },
            { pid: 2, pname: "api市场" },
            { pid: 3, pname: "服务与培训" }
          ]
        }
      ],
      twoList: [], //2级菜单列表
      index: -1, // 选中第一级菜单中的某项时将下标保存
      threeList: [],
      isShowOne: false, //是否显示一级菜单
      isShowTwo: false, //是否显示二级菜单
      isShowThree: false, //是否显示三级菜单
      isEnterAll:false,
      listItem: [
        {
          pid: 1,
          aid: 1,
          aname: "弹性计算",
          alist: [
            { sid: 1, sname: "云服务器" },
            { sid: 2, sname: "批量计算" },
            { sid: 3, sname: "容器服务" }
          ]
        },
        {
          pid: 2,
          aid: 2,
          aname: "存取数据",
          alist: [
            { sid: 1, sname: "计算" },
            { sid: 2, sname: "存储" },
            { sid: 3, sname: "网络" }
          ]
        },
        {
          pid: 3,
          aid: 3,
          aname: "数据库服务",
          alist: [
            { sid: 1, sname: "企业应用" },
            { sid: 2, sname: "专业市场" },
            { sid: 3, sname: "安全服务" }
          ]
        }
      ]
    };
  },
  methods: {
    selectOne(i) {
      //选择一级菜单中的某一项时，得到二级菜单的数据
      //console.log(i);
      this.index = i;
      this.twoList = this.navList[i].nlist;
      //console.log(this.twoList);
      this.isShowTwo = true; //当选中一级菜单中的某一项时，显示二级菜单
    },
    selectTwo(i) {
      //选择二级菜单中的某一项时，得到三级菜单的数据
      this.threeList = this.navList[this.index].nlist[i];
      //console.log( this.threeList)
      this.isShowThree = true;
    },
    showOne() {
      //当选中三根线时，显示一级菜单
      this.isShowOne = true;
    },
    showTwo() {
      //当选中一级菜单中的某一项时显示二级菜单
      this.isShowTwo = true;
    },
    leaveThree() {
      //离开三级菜单时,隐藏三级菜单
      console.log("离开了3");
      // if(!this.isEnterAll){
        this.isShowThree = false;
      // }
    },
    leaveTwo() {
      //离开二级菜单时，还必须同时满足也离开了三级菜单，再隐藏二级菜单\
      console.log("离开了2");    
        // if(this.isEnterAll){
        //   this.isShowTwo = true
        // }else{
        //   this.isShowTwo = false
        // }
      if(this.isShowThree==false){
        this.isShowTwo = false
      }
    },
    leaveOne(){
      console.log('离开了1')
      if(this.isShowTwo == false&&this.isShowThree == false){
        this.isShowOne = false
      }
    },
    leaveAll(){
      this.isShowOne = false
      this.isShowTwo = false
      this.isShowThree = false
    },
    enterAll(){
      this.isEnterAll = true
    }
  }
};
</script>   

<style lang="scss">
.fade1-enter-active {
  transition: opacity 0.5s;
}
.fade1-leave-active {
  transition: opacity 0.8s;
}
.fade1-enter, .fade1-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.fade2-enter-active {
  transition: opacity 0.5s;
}
.fade2-leave-active {
  transition: opacity 0.5s;
}
.fade2-enter, .fade2-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.fade3-enter-active {
  transition: opacity 0.5s;
}
.fade3-leave-active {
  transition: opacity 0.3s;
}
.fade3-enter, .fade3-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.top-bar {
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  position: relative;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  position: relative;
  background:#1C2326;
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
  .all-list {
    position: absolute;
    top: 40px;
    display: flex;
    z-index: 10;
    width:800px;
    .one-menu {
      width: 150px;
      height: 100vh;
      background: #1a1818;
      color: #fff;
      padding-left: 20px;
      position: relative;
      .greater {
        color: #fff;
        position: absolute;
        left: 110px;
      }
    }
    .two-menu {
      width: 150px;
      height: 100vh;
      background: #262424;
      color: #fff;
      padding-left: 20px;
      position: relative;
      .greater {
        color: #fff;
        position: absolute;
        left: 110px;
      }
    }
    .three-menu {
      width: 500px;
      height: 100vh;
      background: #4d4a4a;
      color: #fff;
    }
  }
}

.active-nav {
  color: #a53333 !important;
}
</style>  