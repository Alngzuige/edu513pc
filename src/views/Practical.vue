<template>
  <div class="practical">
    <div class="banner">
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in 3" :key="item">
          <h3 class="medium">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="practical-main">
      <div class="content-left">
        <el-tabs v-model="activeName">
          <el-tab-pane label="资讯日报" name="message">
            <div style="height:840px"></div>
          </el-tab-pane>
          <el-tab-pane label="行业干货" name="industry">
            <ul class="list">
              <li
                class="item"
                v-for="(item, index) in PracticalList"
                :key="index"
              >
                <div
                  class="item-img"
                  :style="{ backgroundImage: 'url(' + item.pictureUrl + ')' }"
                ></div>
                <div class="item-text">
                  <p class="p1">{{ item.title }}</p>
                  <p class="p2">{{ item.instructions }}</p>
                  <div class="item-text-btm">
                    <p>
                      <img :src="item.logo" alt="" /><span>{{
                        item.schoolName
                      }}</span>
                    </p>
                    <p>
                      <span>{{ item.createTime }}</span
                      ><span>{{ item.browseCount }}</span>
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="content-right">
        <div class="header">
          实训课程
        </div>
        <el-collapse v-model="collapseName" accordion>
          <el-collapse-item
            v-for="(item, index) in CourseTraining"
            :key="index"
            :title="item.courseName"
            :name="index"
          >
            <p class="p1">
              <span>${{ item.coursePrice }}</span>
              {{ item.teacherName }}
            </p>
            <div
              class="img"
              :style="{ backgroundImage: 'url(' + item.coursePicture + ')' }"
            ></div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 切换列表名称
      activeName: "industry",
      // 获取资讯内容
      PracticalList: [],
      // 获取实训手风琴内容
      CourseTraining: [],
      // 选项卡默认显示内容
      collapseName: 0,
    };
  },
  methods: {
    async getPracticalList() {
      const { data: res } = await this.$http.post("article/getAllArticleList", {
        page: 1,
        plate: 2,
        size: 10,
        typeId: "213",
      });
      this.PracticalList = res.data.list;
    },
    async getCourseTraining() {
      const { data: res } = await this.$http.get(
        "courseInfo/getCourseTraining"
      );
      this.CourseTraining = res.data;
      console.log(res);
    },
  },
  created() {
    this.getPracticalList();
    this.getCourseTraining();
  },
};
</script>
<style lang="scss" scoped>
.practical {
  width: 100%;
  background-color: #f5f5f5;
  .banner {
    width: 100%;
    height: 226px;
    background: #31425a;
    overflow: hidden;
    margin-bottom: 20px;
    background-image: url(https://front.513.com/front/articles/banner_img_bg%402x.png);
  }
  .practical-main {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .content-left {
      width: 880px;
      box-sizing: border-box;
      padding: 20px;
      background-color: #fff;
      .list {
        .item {
          display: flex;
          justify-content: space-between;
          margin-top: 40px;
          .item-img {
            width: 290px;
            height: 164px;
            background-repeat: no-repeat;
            background-position: 50%;
            background-size: cover;
          }
          .item-text {
            width: 530px;
            .p1 {
              font-size: 18px;
              font-weight: 400;
              color: #333;
              line-height: 41px;
            }
            .p2 {
              height: 80px;
              overflow: hidden;
              font-size: 14px;
              font-weight: 400;
              color: grey;
              line-height: 20px;
              margin-bottom: 6px;
            }
            .item-text-btm {
              display: flex;
              justify-content: space-between;
              p {
                display: flex;
                align-items: center;
                margin-right: 12px;
                font-size: 14px;
                font-weight: 400;
                color: #bfbfbf;
                span {
                  margin: 0 5px;
                }
                img {
                  width: 34px;
                }
              }
            }
          }
        }
      }
    }
    .content-right {
      width: 300px;
      box-sizing: border-box;
      padding: 14px;
      background-color: #fff;
      .header {
        height: 44px;
        border-bottom: 1px solid #e6e6e6;
        font-size: 18px;
        font-weight: 400;
        color: #666;
        line-height: 36px;
      }
      .p1 {
        span {
          color: red;
          margin: 0 5px;
        }
        margin-bottom: 5px;
      }
      .img {
        width: 273px;
        height: 158px;
        background-repeat: no-repeat;
        background-position: 50%;
        background-size: cover;
      }
    }
  }
}
</style>
