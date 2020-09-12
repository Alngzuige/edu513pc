<template>
  <div class="footer">
    <div class="footer-container">
      <div class="container-left">
        <div class="left-top">
          <img src="../static/images/home/foot_logo@2x.png" />
          <ul>
            <li>
              <a href="#">首页</a>
            </li>
            <li>
              <a href="#">新闻资讯 </a>
            </li>
            <li>
              <a href="#">关于我们</a>
            </li>
            <li>
              <a href="#">APP下载</a>
            </li>
            <li>
              <a href="#">证书查询</a>
            </li>
          </ul>
        </div>
        <div class="left-footer">
          <div class="p1">
            <p>地址：深圳市南山区西丽同乐路1002号留仙文化园三栋3层</p>
            <p>
              Copyright ©伍壹叁在线教育（深圳）有限公司 版权所有
              粤ICP备19058570号-2
            </p>
          </div>
          <div class="p2">
            <img src="../static/images/home/phone@2x.png" alt="" />
            <span>400-8888-513</span>
          </div>
        </div>
      </div>
      <div class="container-right">
        <div>
          <img src="../static/images/home/WeChat@2x.png" alt="" />
          <p>513官方微信</p>
        </div>
        <div>
          <img src="../static/images/home/WeChat@2x.png" alt="" />
          <p>513官方微信</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 260px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #2f3e4a;
  color: #fff;
  .footer-container {
    width: 1200px;
    height: 150px;
    display: flex;
    justify-content: space-between;
    .container-left {
      width: 787px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .left-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        ul {
          width: 505px;
          display: flex;
          justify-content: space-between;
        }
      }
      .left-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .p1 {
          font-size: 14px;
          font-weight: 400;
          color: #e6e6e6;
        }
        .p2 {
          display: flex;
          align-items: center;
          span {
            margin-left: 15px;
            font-size: 28px;
            font-weight: 400;
            color: #fff;
          }
        }
      }
    }
    .container-right {
      width: 300px;
      display: flex;
      text-align: center;
      justify-content: space-between;
    }
  }
}
</style>
