<template>
  <div class="Coures">
    <div class="coures-mian">
      <div class="coures-top">
        <ul class="ul-top">
          <li
            v-for="(item, index) in courseClass"
            :key="item.id"
            @click="addClass(index, item.sign)"
            :class="{ active: index == current }"
          >
            {{ item.title }}
          </li>
        </ul>
        <ul>
          <li
            v-for="(item, index) in allPrice"
            :key="item.id"
            :class="{ active: index == currentTwo }"
            @click="addClassTwo(index)"
          >
            {{ item.title }}
          </li>
        </ul>
      </div>
      <div class="coures-sort">
        <ul class="list">
          <li
            class="item"
            v-for="(item, index) in allSort"
            :key="item.id"
            @click="addClssThree(index)"
            :class="{ active: index == currentThree }"
          >
            {{ item.title }}
          </li>
        </ul>
      </div>
      <div class="coures-content">
        <ul class="list">
          <li class="item" v-for="item in couresData" :key="item.courseIdSign">
            <div>
              <img :src="item.coursePicture" alt="" />
              <p class="p1">{{ item.courseName }}</p>
            </div>
            <p class="p2">{{ item.teacherName }}【{{ item.schoolName }}】</p>
            <p class="p3">
              <span>{{ item.studyCount }}已学</span
              ><span class="money" v-if="item.coursePrice !== '免费'"
                >￥{{ item.coursePrice }}</span
              >
              <span class="mianfei" v-else>{{ item.coursePrice }}</span>
            </p>
          </li>
        </ul>
      </div>
      <div class="paging">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="total - 0"
          @current-change="add"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 请求获取课程对象
      couresList: {
        // 课程价格 0 全部 1免费 2付费
        courseType: "0",
        // 课程三级分类
        gradeThree: "0",
        // 页码
        page: 1,
        // 每页的数据
        size: 8,
        // 课程综合排序 0.综合排序 1.精选推荐 2.最新 3.最热
        sort: "0",
      },
      // 选择第几个标签
      current: 0,
      currentTwo: 0,
      currentThree: 0,
      // 请求到课程对象的数据
      couresData: [],
      // 总条数
      total: 0,
      // 分类课程
      courseClass: [
        { id: 1, title: "全部", sign: "0" },
        { id: 2, title: "跨境电商", sign: "213" },
        { id: 3, title: "电子竞技", sign: "216" },
        { id: 4, title: "AI人工智能", sign: "219" },
        { id: 5, title: "精英提升", sign: "225" },
        { id: 6, title: "兴趣培养", sign: "228" },
        { id: 7, title: "区块链", sign: "231" },
        { id: 8, title: "新媒体", sign: "234" },
        { id: 9, title: "新电商设计", sign: "237" },
      ],
      // 是否免费
      allPrice: [
        { id: 0, title: "全部" },
        { id: 1, title: "免费" },
        { id: 2, title: "付费" },
      ],
      // 课程综合排序
      allSort: [
        { id: 0, title: "综合排序" },
        { id: 1, title: "精选推荐" },
        { id: 2, title: "最新" },
        { id: 3, title: "最热" },
      ],
    };
  },
  created() {
    this.getCouresList();
  },
  methods: {
    // 获取课程信息
    async getCouresList() {
      const { data: res } = await this.$http.post(
        "courseInfo/getAllCourseRecommendedList",
        this.couresList
      );
      this.total = res.data.total;
      this.couresData = res.data.list;
    },
    // 监听页码发生变化更新内容
    add(newsize) {
      this.couresList.page = newsize;
      this.getCouresList();
    },
    // 点击分类变换颜色并且筛选内容
    async addClass(index, sign) {
      this.current = index;
      this.couresList.gradeThree = sign;
      const { data: res } = await this.$http.post(
        "courseInfo/getAllCourseRecommendedList",
        this.couresList
      );
      console.log(res);
      this.getCouresList();
    },
    addClassTwo(index) {
      this.currentTwo = index;
      this.couresList.courseType = index;
      this.getCouresList();
    },
    addClssThree(index) {
      this.currentThree = index;
      this.couresList.sort = index;
      this.getCouresList();
    },
  },
};
</script>

<style lang="scss" scoped>
.Coures {
  width: 100%;
  margin: 50px 0;
  min-height: calc(100vh - 340px);
}
.coures-mian {
  width: 1200px;
  margin: 0 auto;
  .coures-top {
    width: 1200px;
    background-color: #f5f5f5;
    .ul-top {
      border-bottom: 1px solid #e6e6e6;
    }
    ul {
      height: 50px;
      line-height: 50px;
      display: flex;
      .active {
        color: #28bbac;
      }
      li {
        margin: 0 20px;
        font-size: 14px;
        font-weight: 400;
        color: grey;
        cursor: pointer;
      }
    }
  }
  .coures-sort {
    width: 1200px;
    margin: 0 auto;
    margin-top: 15px;
    .list {
      width: 100%;
      display: flex;
      border-bottom: 1px solid #e6e6e6;
      line-height: 30px;
      .item {
        padding: 0 10px;
        margin: 0 20px;
        font-size: 14px;
        font-weight: 400;
        color: grey;
        cursor: pointer;
      }
      .active {
        color: #28bbac;
        border-bottom: 2px solid #28bbac;
      }
    }
  }
  .coures-content {
    .list {
      width: 100%;
      display: flex;
      // justify-content: space-around;
      // align-content: flex-start;
      flex-wrap: wrap;
      .item {
        width: 280px;
        height: 270px;
        border: 1px solid #e6e6e6;
        border-radius: 4px;
        margin: 20px 8px;
        img {
          width: 100%;
          border-radius: 4px;
          cursor: pointer;
        }
        .p1 {
          width: 250px;
          height: 16px;
          line-height: 16px;
          font-size: 16px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-weight: 400;
          color: #333;
          padding-left: 10px;
          margin-top: 20px;
          margin-bottom: 9px;
        }
        .p2 {
          font-size: 12px;
          font-weight: 400;
          color: grey;
          padding-left: 10px;
          padding-right: 20px;
          margin-top: 7px;
          display: flex;
          justify-content: space-between;
        }
        .p3 {
          display: flex;
          justify-content: space-between;
          height: 20px;
          margin-top: 12px;
          font-size: 12px;
          line-height: 20px;
          padding: 0 10px;
          color: #999;
          .mianfei {
            color: #33b16e;
          }
          .money {
            color: red;
          }
        }
      }
      .item:hover {
        box-shadow: 0 6px 22px 0 rgba(0, 0, 0, 0.23);
      }
    }
  }

  .paging {
    width: 100%;
    display: flex;
    justify-content: center;
  }
}
</style>
