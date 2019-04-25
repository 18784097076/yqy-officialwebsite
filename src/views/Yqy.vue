// <template>
//   <div class="index">
//     <div class="first-section">
//       <div class="top-bar">
//         <div class="all-nav" @mouseenter="show" @mouseleave="hidden">
//           <img src="../../public/img/TB17mppCFOWBuNjy0FiXXXFxVXa-36-28.png" alt="">
//         </div>
//         <div class="logo">
//           <img src="img/logo.png" alt="">
//         </div>
//         <div class="common-menu">
//           <ul class="menu-list">
//             <li class="search-box">
//               <input type="text" class="common-search" placeholder="搜索">
//               <img src="img/header-search.png" alt="" class="icon-search">
//             </li>
//             <li><a href="http://">控制台</a></li>
//             <li><a href="http://">登录</a></li>
//             <li class="register"><a href="http://">注册</a></li>
//           </ul>
//         </div>
//       </div>
//       <ul class="service-list" :style="{display:isShow}">
//         <li>了解华为云</li>
//         <li>产品</li>
//         <li>解决方案</li>
//       </ul>
//       <ul>
//         <li>推荐</li>
//         <li>安全</li>
//         <li>智能服务</li>
//         <li></li>
//       </ul>
//       <el-menu class="nav-list" mode="horizontal" active-text-color="#eee" background-color="transparent" text-color="#fff">
//         <el-menu-item index="1">最新活动</el-menu-item>
//         <el-submenu index="2">
//           <template  slot="title">产品</template>
//           <el-menu-item index="2-1">选项1</el-menu-item>
//           <el-menu-item index="2-2">选项2</el-menu-item>
//           <el-menu-item index="2-3">选项3</el-menu-item>
//         </el-submenu>
//         <el-menu-item index="3">合作伙伴</el-menu-item>
//         <el-menu-item index="4">支持与服务</el-menu-item>
//       </el-menu>
//     </div>
//     <div class="two-section">
//       <div class="content-box">
//         <div class="con-title">
//           <span class="main-title">益智造</span>
//           <span class="sub-title"></span>
//         </div>
//         <hr>
//         <p class="desc">副标题文字副标题文字副标题文字副标题文字副标题文字文字副标题文字副标题文字副标题文字副标题文字副标题文字字副标题文字副标题文字副标题文字副标题文字副标题文字</p>
//         <button>了解更多</button>
//       </div>
//     </div>
//     <div class="three-section">

//     </div>
//     <div class="four-section">

//     </div>
//     <div class="five-section">

//     </div>
//     <div class="six-section">

//     </div>
//   </div>
// </template>

// <script>
// export default {
  
// }
// </script>

// <script>
// import TopBar from '../components/TopBar.vue'
// export default {
//   data(){
//     return {
//       isShow: 'none'
//     }
//   },
//   components:{
//     TopBar
//   },
//   methods:{
//     show(){
//       this.isShow = 'block'
//     },
//     hidden(){
//       this.isShow = 'none'
//     }
//   }
// }
// </script>

// <style lang="scss">  
// .index{
//   min-width: 1000px;
//   .first-section{
//     height: calc(100vh - 206px);
//     background: url(../../public/img/1.png) no-repeat center;
//     background-size: cover;
//     .top-bar{
//       height: 40px;
//       line-height: 40px;
//       font-size:14px;
//       border-bottom: 1px solid rgba(255,255,255,0.15);
//       .all-nav{
//         margin-left:16px;
//         width:18px;
//         float:left;
//         cursor: pointer;
//         img{
//           width: 18px;
//         }
//       }
//       .logo{
//         float:left;
//         margin-left:67px;
//         margin-top:8px;
//         cursor: pointer;
//         img{
//           width: 71px;
//         }
//       }
//       .common-menu{
//         float:right;
//         .menu-list{
//           list-style: none;
//           display: flex;
//           >li{
//             padding:0 10px;
//             height: 40px;
//             a{
//               text-decoration: none;
//               color:#fff;
//             }
//           }
//           .register{
//             background: #478CD3;
//           }
//           .search-box{
//             position: relative;
//             .common-search{
//               width: 170px;
//               height: 40px;
//               outline:none;
//               border:none;
//               background: rgba(255,255,255,0.05);
//               padding-left: 10px;
//             }
//             .icon-search{
//               position: absolute;
//               top: 11px;
//               right: 15px;
//               cursor: pointer;
//             }
//           }     
//         }   
//       }
//     }
//     .service-list{
//       width: 100px;
//       border:1px solid red;
//       color:#fff;
//       background:#212020;  
//       list-style: none;
//       li{
//         padding-left:15px;
//         line-height: 40px;
//       }
//     }
//     .nav-list{
//       border-bottom:1px solid rgba(255,255,255,0.15);

//     }
//   }
//   .two-section{
//     height: calc(100vh + 206px);
//     background: url(../../public/img/2.png) no-repeat center;
//     background-size: cover;
//     .content-box{
      
//     }
//   }
//   .three-section{
//     height: 100vh;
//     background: url(../../public/img/3.png) no-repeat center;
//     background-size: cover;
//   }
//   .four-section{
//     height: 100vh;
//     background: url(../../public/img/4.png) no-repeat center;
//     background-size: cover;
//   }
//   .five-section{
//     height: 100vh;
//     background: #6599FF;
//   }
//   .six-section{
//     height: 100vh;
//     background: url(../../public/img/6.png) no-repeat center;
//     background-size: cover;
//   }
// }
// </style>
