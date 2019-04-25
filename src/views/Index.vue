<template>
<!-- Index.vue和Bar.vue是正确的 -->
  <div class="index">
    <div class="first-section">
      <div class="one-floor">
        <!-- <top-bar></top-bar> -->
        <bar></bar>
        <ul class="top-bar-nav">
          <li @mouseenter="showList=true" @mouseleave="showList=false" v-for="(item,index) of navList" :key="index"><a href="javascript:;">{{item.nname}}</a></li>
        </ul>
        <div class="output" v-show="showList" @mouseenter="showList=true" @mouseleave="showList=false">
          这是展示导航详情
        </div>
        <div class="con-box">
          <h2>设备上云 轻松管控</h2>
          <h5>大数据 云平台</h5>
          <a href="">了解详情</a>
        </div>
        <!-- <div class="block">
          <el-carousel>
            <el-carousel-item v-for="item in 4" :key="item">
             <img src="img/1.png" alt="">
            </el-carousel-item>
          </el-carousel>
        </div> -->
      </div>
      <div class="understand">
        <h5>了解我们</h5>
        <p>></p>
      </div>
    </div>
    <div class="two-section">
      <div class="content-box">
        <div class="con-title">
          <span class="main-title">益智造</span>
          <span class="sub-title">副标题</span>
        </div>
        <div class="line"></div>
        <p class="desc">副标题文字副标题文字副标题文字副标题文字副标题文字文字副标题文字副标题文字副标题文字副标题文字副标题文字字副标题文字副标题文字副标题文字副标题文字副标题文字</p>
        <button class="more-btn">了解更多</button>
      </div>
    </div>
    <div class="three-section">
      <div class="app-content">
        <div class="app-left">
          <div class="hot-app">
            <div></div>
            <h4>睿贝云外贸软件</h4>
            <p>睿贝云外贸软件睿贝云外贸软件睿贝云外贸软件睿贝云外贸软件睿贝云外贸软</p>
          </div>
          <div class="hot-app">
            <div></div>
            <h4>睿贝云外贸软件</h4>
            <p>睿贝云外贸软件睿贝云外贸软件睿贝云外贸软件睿贝云外贸软件睿贝云外贸软</p>
          </div>
          <div class="hot-app">
            <div></div>
            <h4>睿贝云外贸软件</h4>
            <p>睿贝云外贸软件睿贝云外贸软件睿贝云外贸软件睿贝云外贸软件睿贝云外贸软</p>
          </div>
        </div>
        <div class="content-box">
          <div class="con-title">
            <span class="main-title">益智造</span>
            <span class="sub-title">副标题</span>
          </div>
          <div class="line"></div>
          <p class="desc">副标题文字副标题文字副标题文字副标题文字副标题文字文字副标题文字副标题文字副标题文字副标题文字副标题文字字副标题文字副标题文字副标题文字副标题文字副标题文字</p>
          <button class="more-btn">了解更多</button>
        </div>
      </div>
    </div>
    <div class="four-section">
      <div class="service-content">
        <div class="content-box">
          <div class="con-title">
            <span class="main-title">益服务</span>
            <span class="sub-title">副标题</span>
          </div>
          <div class="line"></div>
          <p class="desc">副标题文字副标题文字副标题文字副标题文字副标题文字文字副标题文字副标题文字副标题文字副标题文字副标题文字字副标题文字副标题文字副标题文字副标题文字副标题文字</p>
          <button class="more-btn">了解更多</button>
        </div>
        <div class="service-right">
          <div>
            <div class="left-img">
              <img src="img/01.png" alt="">
            </div>
            <div class="right-desc">
              <h4>某某某服务</h4>
              <p>介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍</p>
            </div>
          </div>
          <div>
            <div class="left-img">
              <img src="img/02.png" alt="">
            </div>
            <div class="right-desc">
              <h4>某某某服务</h4>
              <p>介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍</p>
            </div>
          </div>
          <div>
            <div class="left-img">
              <img src="img/03.png" alt="">
            </div>
            <div class="right-desc">
              <h4>某某某服务</h4>
              <p>介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍</p>
            </div>
          </div>
          <div>
            <div class="left-img">
              <img src="img/04.png" alt="">
            </div>
            <div class="right-desc">
              <h4>某某某服务</h4>
              <p>介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍</p>
            </div>
          </div>
          <div>
            <div class="left-img">
              <img src="img/05.png" alt="">
            </div>
            <div class="right-desc">
              <h4>某某某服务</h4>
              <p>介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍</p>
            </div>
          </div>
          <div>
            <div class="left-img">
              <img src="img/06.png" alt="">
            </div>
            <div class="right-desc">
              <h4>某某某服务</h4>
              <p>介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="five-section">
      <div class="market-content">
        <div class="market-left"></div>
        <div class="content-box">
          <div class="con-title">
            <span class="main-title">益市场</span>
            <span class="sub-title">副标题</span>
          </div>
          <div class="line"></div>
          <p class="desc">副标题文字副标题文字副标题文字副标题文字副标题文字文字副标题文字副标题文字副标题文字副标题文字副标题文字字副标题文字副标题文字副标题文字副标题文字副标题文字</p>
          <button class="more-btn">了解更多</button>
        </div>
      </div>
    </div>
    <div class="six-section">
      <div class="content-box">
        <div class="con-title">
            <span class="main-title">益政务</span>
            <span class="sub-title">副标题</span>
        </div>
        <div class="line"></div>
        <p class="desc">副标题文字副标题文字副标题文字副标题文字副标题文字文字副标题文字副标题文字副标题文字副标题文字副标题文字字副标题文字副标题文字副标题文字副标题文字副标题文字</p>
        <button class="more-btn">了解更多</button>
      </div>
    </div>
    <div class="seven-section">
      <div class="advice">
        <div class="advice-left">
          <div class="advice-top-one">
            <img src="img/banner.png" alt="">
            <h4>世界AI产业发展蓝皮书：4%被调研企业</h4>
            <p>来源：智东西（zhidxcom）　看点：全球知名的比特币矿机销售商特大陆在港交所递交招股书，其2018年…</p>
          </div>
          <div class="advice-bottom">
            <div class="bottom-left">
              <img src="img/banner.png" alt="">
              <h4>世界AI产业发展蓝皮书：4%被调研企业</h4>
              <p>来源：智东西（zhidxcom）　看点：全球知名的比特币矿机销售商特大陆在港交所递交招股书，其2018年…</p>
            </div>
            <div class="bottom-right">
              <img src="img/banner.png" alt="">
              <h4>世界AI产业发展蓝皮书：4%被调研企业</h4>
              <p>来源：智东西（zhidxcom）　看点：全球知名的比特币矿机销售商特大陆在港交所递交招股书，其2018年…</p>
            </div>
          </div>
        </div>
        <div class="content-box">
          <div class="con-title">
            <span class="main-title">益政务</span>
            <span class="sub-title">副标题</span>
          </div>
          <div class="line"></div>
          <p class="desc">副标题文字副标题文字副标题文字副标题文字副标题文字文字副标题文字副标题文字副标题文字副标题文字副标题文字字副标题文字副标题文字副标题文字副标题文字副标题文字</p>
          <button class="more-btn">了解更多</button>
        </div>
      </div>
    </div>
    <div class="about-us">
      <h3>联系我们</h3>
      <p>关于使用场景和技术架构的更多咨询， 请联系我们的销售和技术支持团队</p>
      <a href="">联系我们</a>
    </div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import TopBar from '../components/TopBar.vue'
import Bar from '../components/Bar.vue'
import FooterBar from '../components/FooterBar.vue'
export default {
  data(){
    return {
      navList:[
        {nid:1,nname:'最新活动'},
        {nid:2,nname:'产品',plist:[{pid:1,pname:'产品1'},{pid:2,pname:'产品2'},{pid:3,pname:'产品3'}]},
        {nid:3,nname:'合作伙伴'},
        {nid:4,nname:'支持与服务'}
      ],
      bgColor:'',
      activeIndex:1,
      showList:false
    }
  },
  components:{
    TopBar,
    FooterBar,
    Bar
  },
  methods:{
    changeColor(i){
      console.log(i)
      this.activeIndex = i 
    }
  }
}
</script>

<style lang="scss">  
.cgColor{
  background: #eee;
}
.index{
  min-width: 1000px;
  .first-section{
    height: 100vh;  
    position: relative;
    .one-floor{
      height:81vh;
      background: url(../../public/img/1.png) no-repeat center;
      background-size: cover;
      .output{
        width:600px;
        height: 400px;
        background: #fff;
        position: absolute;
        top:90px;
        border-radius: 15px;
      }
      .block{
        height:81vh;
        width:100%;
        .el-carousel__container{
          height:81vh;
        }
      }
      .con-box{
        position: absolute;
        left:210px;
        top:215px;
        color:#fff;
        h2{
          font-size:48px;
        }
        h5{
          font-size:24px;
          padding-top:15px;
        }
        a{
          text-decoration: none;
          color:#fff;
          border:1px solid #fff;
          display:inline-block;
          width:156px;
          height:46px;
          line-height:46px;
          text-align:center;
          margin-top:30px;
        }
      }
      .top-bar-nav{
        width:100%;
        height:50px;
        line-height: 50px;
        list-style:none;
        position: absolute;
        top:40px;
        left:0;
        border-bottom:1px solid rgba(255,255,255,0.15);
        li{
          float:left;
          &:hover{
            background: #eee;
          }
        }
        a{
          text-decoration: none;
          padding:0 16px;
          color:#fff;
        }
      }
    }
    .understand{
      height: 19vh;
      width:100%;
      background:rgba(19,63,108,1);
      box-shadow:0px 4px 16px 0px rgba(0, 0, 0, 0.2);
      position:absolute;
      bottom:0;
      h5{
        color:#fff;
        text-align:center;
        padding-top:50px;
      }
      p{
        width:15px;
        height: 15px;
        color:#fff;
        margin:20px auto;
        transform: rotate(90deg)
      }
    }
  }
  .two-section{
    height: 100vh;
    background: url(../../public/img/2.png) no-repeat center;
    background-size: cover;
    display:flex;
    align-items:center;
    .content-box{
      width:40%;
      height:375px;
      padding-left:100px;
      color:#fff;
      .main-title{
        font-size:48px;
        font-weight:500;
      }
      .sub-title{
        font-size:22px;
        font-weight:500;
        padding-left:10px;
      }
      .line{
        width:90%;
        height:4px;
        background:#fff;
        margin-top:15px;
      }
      .desc{
        font-size:16px;
        width:415px;
        line-height:25px;
        margin-top:15px;
      }
      .more-btn{
        width:200px;
        height:46px;
        box-shadow:0px 4px 8px 0px rgba(0, 0, 0, 0.1);
        border-radius:23px;
        border:none;
        background:rgba(36,41,147,1);
        color:#fff;
        margin-top:50px;
      }
    }
  }
  .three-section{
    height: 100vh;
    background: url(../../public/img/3.png) no-repeat center;
    background-size: cover;
    .app-content{
      height:36%;
      padding-top:287px;
      padding-left:145px;
      .app-left{
        width:55%;
        height:100%;
        float:left;
        display:flex;
        justify-content:space-between;
        .hot-app{
          width:30%;
          background:linear-gradient(-88deg,rgba(113,130,233,1),rgba(113,192,235,1));
          box-shadow:2px 15px 24px 3px rgba(17,161,252,0.2);
          div{
            height:50%;
            background:#fff;
            border-radius:10px;
            margin:25px 25px 25px;
          }
          h4{
            text-align:center;
            font-size:18px;
          }
          p{
            padding:10px 10px;
            font-size:14px;
          }
        }
      };
     .content-box{
        width:30%;
        float:left;
        padding-left:100px;
        .main-title{
          font-size:48px;
          font-weight:500;
        }
        .sub-title{
          font-size:22px;
          font-weight:500;
          padding-left:10px;
        }
        .line{
          width:90%;
          height:4px;
          background:#333;
          margin-top:15px;
        }
        .desc{
          font-size:16px;
          width:415px;
          line-height:25px;
          margin-top:15px;
        }
        .more-btn{
          width:200px;
          height:46px;
          box-shadow:0px 4px 8px 0px rgba(0, 0, 0, 0.1);
          border-radius:23px;
          border:none;
          background:rgba(36,41,147,1);
          color:#fff;
          margin-top:50px;
        }
      }
    }
  }
  .four-section{
    height: 100vh;
    background: url(../../public/img/4.png) no-repeat center;
    background-size: cover;
    .service-content{
      width:85%;
      margin:0 auto;
      padding-top:200px;
      .content-box{
        width:40%;
        float:left;
        .main-title{
          font-size:48px;
          font-weight:500;
        }
        .sub-title{
          font-size:22px;
          font-weight:500;
          padding-left:10px;
        }
        .line{
          width:90%;
          height:4px;
          background:#333;
          margin-top:15px;
        }
        .desc{
          font-size:16px;
          width:415px;
          line-height:25px;
          margin-top:15px;
        }
        .more-btn{
          width:200px;
          height:46px;
          box-shadow:0px 4px 8px 0px rgba(0, 0, 0, 0.1);
          border-radius:23px;
          border:none;
          background:rgba(36,41,147,1);
          color:#fff;
          margin-top:50px;
        }
      }
      .service-right{
        width:60%;
        float:left;
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
        >div{
          width:45%;
          height:120px;
          margin-bottom:20px;
          display:flex;
          align-items:center;
          .left-img{
            width:20%;
            padding-left:20px;
          }
          .right-desc{
            padding-left:15px;
            width:80%;
            color:#fff;
            h4{
              font-size:18px;
              line-height:48px;
            }
            p{
              font-size:14px;
              line-height:19px;
              font-weight:500;
            }
          }
        }
        >div:first-child{
          background:linear-gradient(90deg,rgba(224,68,108,1),rgba(184,17,60,1));
          box-shadow:0px 6px 10px 0px rgba(0, 0, 0, 0.2);
        }
        >div:not(:first-child){
          background:linear-gradient(-88deg,rgba(113,130,233,1),rgba(113,192,235,1));
          box-shadow:2px 15px 24px 3px rgba(17,161,252,0.2);
        }
      }
    }
  }
  .five-section{
    height: 100vh;
    background: #6599FF;
    display:flex;
    align-items:center;
    .market-content{
      height:50%;
      width:80%;
      margin:0 auto;
      display:flex;
      .market-left{
        width:60%;
        height:100%;
        border:1px solid red;
        background:url(../../public/img/banner.png);
      }
      .content-box{
        width:40%;
        height:100%;
        padding-top:10px;
        padding-left:100px;
        color:#fff;
        .main-title{
          font-size:48px;
          font-weight:500;
        }
        .sub-title{
          font-size:22px;
          font-weight:500;
          padding-left:10px;
        }
        .line{
          width:90%;
          height:4px;
          background:#fff;
          margin-top:15px;
        }
        .desc{
          font-size:16px;
          width:415px;
          line-height:25px;
          margin-top:15px;
        }
        .more-btn{
          width:200px;
          height:46px;
          box-shadow:0px 4px 8px 0px rgba(0, 0, 0, 0.1);
          border-radius:23px;
          border:none;
          background:rgba(36,41,147,1);
          color:#fff;
          margin-top:50px;
        }
      }
    }
   
  }
  .six-section{
    height: 100vh;
    background: url(../../public/img/6.png) no-repeat center;
    background-size: cover;
    position:relative;
    .content-box{
      width:40%;
      height:375px;
      position:absolute;
      top:20%;
      padding-left:100px;
      color:#333;
      .main-title{
        font-size:48px;
        font-weight:500;
      }
      .sub-title{
        font-size:22px;
        font-weight:500;
        padding-left:10px;
      }
      .line{
        width:90%;
        height:4px;
        background:#fff;
        margin-top:15px;
      }
      .desc{
        font-size:16px;
        width:415px;
        line-height:25px;
        margin-top:15px;
      }
      .more-btn{
        width:200px;
        height:46px;
        box-shadow:0px 4px 8px 0px rgba(0, 0, 0, 0.1);
        border-radius:23px;
        border:none;
        background:rgba(36,41,147,1);
        color:#fff;
        margin-top:50px;
      }
    }
  }
  .seven-section{
    height:100vh;
    background:url(../../public/img/7.png) no-repeat center bottom;
    background-size:contain;
    display:flex;
    align-items:center;
    .advice{
      height:70%;
      width:85%;
      margin:50px auto;
      display:flex;
      .advice-left{
        width:60%;
        height:100%;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        img{
          width:100%;
          height:65%;
        }
        .advice-top-one{
          height:45%;
        }
        .advice-bottom{
          height:50%;
          display:flex;
          justify-content:space-between;
          .bottom-left,.bottom-right{
            width:48%;
          }
        }
      }
      .content-box{
        width:40%;
        padding-left:100px;
        padding-top:50px;
        color:#333;
        .main-title{
          font-size:48px;
          font-weight:500;
        }
        .sub-title{
          font-size:22px;
          font-weight:500;
          padding-left:10px;
        }
        .line{
          width:90%;
          height:4px;
          background:#333;
          margin-top:15px;
        }
        .desc{
          font-size:16px;
          width:415px;
          line-height:25px;
          margin-top:15px;
        }
        .more-btn{
          width:200px;
          height:46px;
          box-shadow:0px 4px 8px 0px rgba(0, 0, 0, 0.1);
          border-radius:23px;
          border:none;
          background:rgba(36,41,147,1);
          color:#fff;
          margin-top:50px;
        }
      }
    }
  }
  .about-us{
    height:420px;
    background:url(../../public/img/8.png) no-repeat center;
    text-align: center;
    h3{
      padding-top:88px;
      font-size:34px;
    }
    p{
      padding-top:20px;
      padding-bottom:80px;
      font-size: 16px;
    }
    a{
      display: inline-block;
      width:152px;
      height:42px;
      line-height: 42px;
      text-decoration: none;
      background:linear-gradient(-88deg,rgba(71,140,211,0.39),rgba(22,179,252,0.39));
      box-shadow:2px 15px 24px 3px rgba(17,161,252,0.2);
      color:#fff;
    }
  }
}
</style>
