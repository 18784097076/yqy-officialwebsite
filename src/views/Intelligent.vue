<template>
  <div class="intelligent">
    <div class="part-one">
      <bar></bar>
    </div>
    <div class="part-two">
      <h3>基于互联网 + 大数据</h3>
      <div class="tabs">
        <div class="tab-title" :class="{activeTab:showTab==='a'}" @click="activeTab1">
          <img src="img/intelligent/notebook.png" alt="">
          <p>设备上云</p>
        </div>
        <div class="tab-title" :class="{activeTab:showTab==='b'}" @click="activeTab2">
          <img src="img/intelligent/notebook.png" alt="">
          <p>共享设备</p>
        </div>
        <div class="tab-title" :class="{activeTab:showTab==='c'}" @click="activeTab3">
          <img src="img/intelligent/notebook.png" alt="">
          <p>共享维护</p>
        </div>
        <div class="tab-title" :class="{activeTab:showTab==='d'}" @click="activeTab4">
          <img src="img/intelligent/notebook.png" alt="">
          <p>共享用工</p>
        </div>
        <div class="tab-title" :class="{activeTab:showTab==='e'}"  @click="activeTab5">
          <img src="img/intelligent/notebook.png" alt="">
          <p>共享设计师</p>
        </div>
      </div>
      <div class="tab-box">
        <transition name="fade">
          <div class="tab-content" v-if="showTab==='a'" :key="'a'">
            <div class="con-left">
              <img src="img/intelligent/1.png" alt="">
            </div>
            <div class="con-right">
              <h3>设备上云</h3>
              <p>业务订单突然激增，临时倒班严重缺人，怎么办？共享用工为您提供可选择的各类操作技师，让企业为人工“按需买单轻松应对用工荒。</p>
              <a href="javascript:;">了解详情</a>
            </div>
          </div>
          <div class="tab-content" v-else-if="showTab==='b'" :key="'b'">
            <div class="con-left">
              <img src="img/intelligent/1.png" alt="">
            </div>
            <div class="con-right">
              <h3>共享设备</h3>
              <p>业务订单突然激增，临时倒班严重缺人，怎么办？共享用工为您提供可选择的各类操作技师，让企业为人工“按需买单轻松应对用工荒。</p>
              <a href="javascript:;">了解详情</a>
            </div>
          </div>
          <div class="tab-content" v-else-if="showTab==='c'" :key="'c'">
            <div class="con-left">
              <img src="img/intelligent/1.png" alt="">
            </div>
            <div class="con-right">
              <h3>共享维护</h3>
              <p>业务订单突然激增，临时倒班严重缺人，怎么办？共享用工为您提供可选择的各类操作技师，让企业为人工“按需买单轻松应对用工荒。</p>
              <a href="javascript:;">了解详情</a>
            </div>
          </div>
          <div class="tab-content" v-else-if="showTab==='d'" :key="'d'">
            <div class="con-left">
              <img src="img/intelligent/1.png" alt="">
            </div>
            <div class="con-right">
              <h3>共享用工</h3>
              <p>业务订单突然激增，临时倒班严重缺人，怎么办？共享用工为您提供可选择的各类操作技师，让企业为人工“按需买单轻松应对用工荒。</p>
              <a href="javascript:;">了解详情</a>
            </div>
          </div>
          <div class="tab-content" v-else-if="showTab==='e'" :key="'e'">
            <div class="con-left">
              <img src="img/intelligent/1.png" alt="">
            </div>
            <div class="con-right">
              <h3>共享设计师</h3>
              <p>业务订单突然激增，临时倒班严重缺人，怎么办？共享用工为您提供可选择的各类操作技师，让企业为人工“按需买单轻松应对用工荒。</p>
              <a href="javascript:;">了解详情</a>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <div class="part-three">
      <h3>设备上云平台</h3>
      <p>基于互联网+、云计算、物联网的云服务平台</p>
      <div class="cloud-bg">
        <div class="cloud-plat">
          <div @mouseenter="enterItem1" @mouseleave="leaveItem1">
            <h3>介绍标题2</h3>
            <p>介绍文字介绍文字介绍文字介绍文字</p>
            <a href="javascript:;" v-show="show1">了解详情</a>
          </div>
          <div @mouseenter="enterItem2" @mouseleave="leaveItem2">
            <h3>介绍标题2</h3>
            <p>介绍文字介绍文字介绍文字介绍文字</p>
            <a href="javascript:;" v-show="show2">了解详情</a>
          </div>
          <div @mouseenter="enterItem3" @mouseleave="leaveItem3">
            <h3>介绍标题2</h3>
            <p>介绍文字介绍文字介绍文字介绍文字</p>
            <a href="javascript:;" v-show="show3">了解详情</a>
          </div>
        </div>
      </div>
    </div>
    <div class="part-four">
      <h3>共享人才</h3>
      <p>解决中小微企业创意创新人才缺乏问题</p>
      <div class="share">
        <div class="tabs">
          <div :class="{activeTab:showShareTab==='first'}" class="tab-title" @click="clickShareTab1">共享维保</div>
          <div :class="{activeTab:showShareTab==='second'}" class="tab-title" @click="clickShareTab2">共享计师</div>
          <div :class="{activeTab:showShareTab==='third'}" class="tab-title" @click="clickShareTab3">共享设计师</div>
        </div>
        <div class="tab-box">
          <transition name="my-fade">
            <div class="tab-content" v-if="showShareTab==='first'" :key="1">
              <div class="con-left">
                <img src="img/intelligent/2.png" alt="">
              </div>
              <div class="con-right">
                <h3>共享维保</h3>
                <p>业务订单突然激增，临时倒班严重缺人，怎么办？共享用工为您提供可选择的各类操作技师，让企业为人工“按需买单轻松应对用工荒。</p>
                <a href="javascript:;">了解详情</a>
              </div>
            </div>
            <div class="tab-content" v-else-if="showShareTab==='second'" :key="2">
              <div class="con-left">
                <img src="img/intelligent/2.png" alt="">
              </div>
              <div class="con-right">
                <h3>共享计师</h3>
                <p>业务订单突然激增，临时倒班严重缺人，怎么办？共享用工为您提供可选择的各类操作技师，让企业为人工“按需买单轻松应对用工荒。</p>
                <a href="javascript:;">了解详情</a>
              </div>
            </div>
            <div class="tab-content" v-else-if="showShareTab==='third'" :key="3">
              <div class="con-left">
                <img src="img/intelligent/2.png" alt="">
              </div>
              <div class="con-right">
                <h3>共享设计师</h3>
                <p>业务订单突然激增，临时倒班严重缺人，怎么办？共享用工为您提供可选择的各类操作技师，让企业为人工“按需买单轻松应对用工荒。</p>
                <a href="javascript:;">了解详情</a>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
    <div class="contact">
      <h3>联系我们</h3>
      <p>关于使用场景和技术架构的更多咨询， 请联系我们的销售和技术支持团队</p>
      <a href="javascript:;">联系我们</a>
    </div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import Bar from '../components/Bar.vue'
import FooterBar from '../components/FooterBar.vue'
export default {
  data() {
    return {
      showTab: "a",
      show1: false,
      show2: false,
      show3: false,
      showShareTab: "first"
    };
  },
  components:{
    Bar,
    FooterBar
  },
  methods: {
    activeTab1(e) {
      this.showTab = "a";
      // console.log(e);
    },
    activeTab2() {
      this.showTab = "b";
    },
    activeTab3() {
      this.showTab = "c";
    },
    activeTab4() {
      this.showTab = "d";
    },
    activeTab5() {
      this.showTab = "e";
    },
    enterItem1() {
      this.show1 = true;
    },
    leaveItem1() {
      this.show1 = false;
    },
    enterItem2() {
      this.show2 = true;
    },
    leaveItem2() {
      this.show2 = false;
    },
    enterItem3() {
      this.show3 = true;
    },
    leaveItem3() {
      this.show3 = false;
    },
    clickShareTab1() {
      this.showShareTab = "first";
    },
    clickShareTab2() {
      this.showShareTab = "second";
    },
    clickShareTab3() {
      this.showShareTab = "third";
    }
  }
};
</script>

<style lang="scss">
.activeTab {
  border-bottom: 3px solid #478cd3;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade1-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.my-fade-enter-active,
.my-fade-leave-active {
  transition: opacity 0.5s;
}
.my-fade-enter, .my-fade-leave-to /* .fade1-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.intelligent {
  min-width: 1000px;
  .part-one {
    height: 874px;
    background: url(../../public/img/intelligent/BG.png) no-repeat center;
    background-size: cover;
  }
  .part-two {
    padding-top: 80px;
    width: 1200px;
    margin: 0 auto;
    h3 {
      text-align: center;
      padding-bottom: 30px;
    }
    .tabs {
      display: flex;
      width: 700px;
      margin: 20px auto;
      justify-content: space-between;
      .tab-title {
        width: 14%;
        text-align: center;
        &:hover {
          cursor: pointer;
        }
        p {
          color: #333;
          font-size: 15px;
          margin: 15px 0;
        }
      }
    }
    .tab-box {
      height: 372px;
      border: 1px solid rgba(229, 229, 229, 1);
      position: relative;
      .tab-content {
        height: 333px;
        width: 1129px;
        position: absolute;
        top: 15px;
        left: 22px;
        display: flex;
        .con-right {
          padding-left: 25px;
          h3 {
            font-size: 28px;
            font-weight: 400;
            color: rgba(116, 116, 116, 1);
            padding-top: 32px;
            text-align: left;
          }
          p {
            font-size: 14px;
            color: #747474;
            font-weight: 400;
          }
          a {
            text-decoration: none;
            display: inline-block;
            width: 164px;
            height: 49px;
            text-align: center;
            line-height: 49px;
            background: linear-gradient(
              to right,
              #478cd3,
              rgba(22, 179, 252, 0.39)
            );
            box-shadow: 2px 15px 24px 3px rgba(17, 161, 252, 0.2);
            color: #fff;
            font-size: 14px;
            margin-top: 40px;
          }
        }
      }
    }
  }
  .part-three {
    margin: auto;
    text-align: center;
    > h3 {
      font-size: 34px;
      font-weight: 400;
      color: #333;
      padding-top: 60px;
      padding-bottom: 20px;
    }
    .cloud-bg {
      background: #ecf3f9;
      .cloud-plat {
        width: 1200px;
        height: 480px;
        display: flex;
        margin: 0 auto;
        justify-content: space-between;
        margin-top: 20px;
        > div {
          width: 376px;
          color: #fff;
          h3 {
            padding-top: 137px;
            font-size: 28px;
          }
          p {
            font-size: 15px;
            padding-top: 15px;
          }
          a {
            display: inline-block;
            width: 208px;
            height: 52px;
            line-height: 52px;
            border: 2px solid rgba(255, 255, 255, 1);
            margin-top: 100px;
            text-decoration: none;
            color: #fff;
          }
        }
        > div:first-child {
          background: url(../../public/img/intelligent/cloud1.png) center;
          background-size: cover;
        }
        > div:nth-child(2) {
          background: url(../../public/img/intelligent/cloud2.png) center;
          background-size: cover;
        }
        > div:nth-child(3) {
          background: url(../../public/img/intelligent/cloud3.png) center;
          background-size: cover;
        }
      }
    }
  }
  .part-four {
    color: #333;
    text-align: center;
    padding-top: 100px;
    > h3 {
      font-size: 34px;
      font-weight: 400;
    }
    p {
      font-size: 20px;
      font-weight: 400;
      margin: 10px 0 60px;
    }
    .share {
      width: 1200px;
      margin: 0 auto;
      .tabs {
        display: flex;
        .tab-title {
          padding: 5px 50px 25px 20px;
          cursor: pointer;
        }
      }
      .tab-box {
        height: 450px;
        border: 1px solid rgba(229, 229, 229, 1);
        position: relative;
        .tab-content {
          height: 450px;
          width: 1129px;
          position: absolute;
          top: 10px;
          left: 10px;
          display: flex;
          .con-right {
            padding-left: 25px;
            text-align: left;
            h3 {
              font-size: 28px;
              font-weight: 400;
              color: rgba(116, 116, 116, 1);
              padding-top: 32px;
            }
            p {
              font-size: 14px;
              color: #747474;
              font-weight: 400;
            }
            a {
              text-decoration: none;
              display: inline-block;
              width: 164px;
              height: 49px;
              text-align: center;
              line-height: 49px;
              background: linear-gradient(
                to right,
                #478cd3,
                rgba(22, 179, 252, 0.39)
              );
              box-shadow: 2px 15px 24px 3px rgba(17, 161, 252, 0.2);
              color: #fff;
              font-size: 14px;
            }
          }
        }
      }
    }
  }
  .contact{
    height:420px;
    background: url(../../public/img/流通参数.png) no-repeat center;
    background-size: cover;
    margin-top:100px;
    text-align:center;
    >h3{
      padding-top:80px;
      font-size:34px;
    }
    >p{
      font-size:16px;
      font-weight: bold;
      padding-top:30px;
      padding-bottom: 60px;
    }
    >a{
      display: inline-block;
      width:152px;
      height:42px;
      background:linear-gradient(-88deg,rgba(71,140,211,0.39),rgba(22,179,252,0.39));
      box-shadow:2px 15px 24px 3px rgba(17,161,252,0.2);
      text-decoration: none;
      line-height: 42px;
      color:#fff;
    }
  }
}
</style>
