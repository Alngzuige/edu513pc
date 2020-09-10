<template>
  <div>
    <div class="swiper">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide>
          <img src="../static/images/home/bg_img@2x.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../static/images/home/bg_img@2x.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="../static/images/home/bg_img@2x.png" />
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="container">
      <div class="header">
        <h1>关于513教育</h1>
        <p>
          513电商学院以联合全国高校，培养跨境电商人才为核心，以聚合知名跨境电商企业，
          解决企业用人需求为根本，帮助高校学生提供就业方向，为跨境电商行业挖掘人才、
          推荐人才、培训人才，最终实现人才与企业无缝对接的商业模式。
        </p>
      </div>
      <div class="header-2">
        <div class="item">
          <img src="../static/images/home/img_bg01@2x.png" alt="" />
          <div class="item-text">
            <h1>跨境电商理论+实训</h1>
            <p>
              提供专业的在线学习平台供学生学习电商理论知识；提供跨境
              电商仿真实训创新平台，注重在线视频授课与实训教学的结合。
            </p>
          </div>
        </div>
        <div class="item">
          <img src="../static/images/home/img_bg02@2x.png" alt="" />
          <div class="item-text">
            <h1>实践课</h1>
            <p>
              通过实践课深入了解企业、跨境电商，了解将要从事的工作方向；
              开展素拓活动，让大学生感受深圳充满激情与活力的人文气息。
            </p>
          </div>
        </div>
      </div>
      <div class="handpick">
        <h1>精选跨境电商课程</h1>
        <div class="content">
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
        </div>
        <button>更多</button>
      </div>
    </div>
    <div class="Amazon">
      <div class="contner">
        <div class="header">
          <h1>亚马逊仿真实训平台</h1>
          <p>
            提供跨境电商仿真实训创新平台，注重在线视频授课结合
            实训，学生可以结合实际操作步骤，模拟出真实业务操作步骤，易用性和真实性。针对零基
            础起步，完成新开店、选品、发布产品、产品管理、仿真发货、推广营运等实操，学完可直
            接上岗就业。
          </p>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        //循环模式开启
        loop: true,
        //自动切换
        autoplay: {
          //每隔2000毫秒切换一次
          delay: 2000,
          //如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay
          //如果设置为true 如拖动、点击、触碰后，自动切换将会停止
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.swiper {
  width: 100%;
}
.container {
  width: 1200px;
  margin: 50px auto;
  .header {
    width: 858px;
    margin: 0 auto;
    text-align: center;
    p {
      font-size: 16px;
      color: #666;
      text-align: left;
      margin: 40px 0;
    }
  }
  .header-2 {
    display: flex;
    justify-content: space-around;
    .item {
      position: relative;
      .item-text {
        box-sizing: border-box;
        padding: 35px;
        position: absolute;
        color: #fff;
        top: 0;
        h1 {
          font-size: 28px;
          margin-bottom: 20px;
        }
        p {
          font-size: 14px;
        }
      }
    }
  }
  .handpick {
    text-align: center;
    .content {
      margin: 40px 0;
      display: flex;
      justify-content: space-between;
      .item {
        width: 280px;
        height: 250px;
        border: 1px solid #ccc;
      }
      .item:hover {
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      }
    }
    button {
      width: 96px;
      height: 40px;
      border: 1px solid #ccc;
      outline: none;
      border-radius: 2px;
      font-size: 14px;
      font-weight: 400;
      color: grey;
      background-color: #ffffff;
      cursor: pointer;
    }
  }
}
.Amazon {
  width: 100%;
  height: 746px;
  background-color: #f5f5f5;
  .contner {
    width: 1200px;
    margin: 50px auto;
    overflow: hidden;
    .header {
      width: 858px;
      margin: 50px auto;
      text-align: center;
      p {
        font-size: 16px;
        color: #666;
        text-align: left;
        margin: 40px 0;
      }
    }
  }
}
</style>
