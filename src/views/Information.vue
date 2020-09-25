<template>
  <div class="information">
    <div class="information-main">
      <div class="header-top">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="推荐实训" name="first"></el-tab-pane>
          <el-tab-pane label="我的实训" name="second"></el-tab-pane>
        </el-tabs>
      </div>
      <div class="container">
        <div class="container-item" v-if="activeName == 'first'">
          <ul class="list">
            <li
              :class="{ item, border: index != 3 }"
              v-for="(item, index) in list"
              :key="index"
            >
              <div class="item-img">
                <img :src="item.trainPicture" alt="" />
              </div>
              <div class="item-text">
                <p class="p1">{{ item.trainName }}</p>
                <p>负责讲师：{{ item.teacherName }}</p>
                <p>
                  实训周期：{{ item.trainDay }}天（{{ item.trainTime }}学时）
                </p>
                <p class="p4">实训简介：{{ item.content }}</p>
                <el-button class="btn" type="small">实训详情</el-button>
              </div>
            </li>
          </ul>
        </div>
        <div class="container-item" v-else>
          <div class="mypractical"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
      // 假数据
      list: [
        {
          id: 10000,
          teacherName: "实训老师",
          schoolName: null,
          trainName: "2020新电商设计",
          content:
            "本课程致力于培养跨境电商视觉设计师的高端课程；课程根据目前最主流的国内外企业电商需求，全程采用实训案例教学。全方位的打造一批懂企业、客户需求的高端技能型电商视觉设计师；",
          trainPicture:
            "https://513-edu-image.oss-cn-shenzhen.aliyuncs.com/resources/10000/img_cover_022x.png",
          trainDescribe: null,
          trainScore: 5,
          trainDay: 48,
          trainTime: 280,
          facePerson:
            "1、具备大专及以上学历的计算机相关专业毕业生；３、社会在职具备同等学历人员，欲从事电商视觉设计相关工作",

          studyFlag: 0,
          hasCourse: 0,
        },
        {
          id: 10001,
          teacherName: "实训老师",
          schoolName: null,
          trainName: "大数据分析与可视化",
          content:
            "本课程是面向通用数据分析、Python数据分析、电商数据分析、电竞数据分析、量化投资数据分析等应用方向，培养具有创新思维能力、掌握数据分析基本理论和相关应用领域知识、能从事通用数据分析、Python数据分析以及电商、电竞、金融等专业领域的数据分析等相关工作的高级技术应用型人才，使学生在职场中具有强有力的竞争力。",
          trainPicture:
            "https://513-edu-image.oss-cn-shenzhen.aliyuncs.com/resources/10001/sx02.png",
          trainDescribe: "",
          trainScore: 5,
          trainDay: 48,
          trainTime: 280,
          facePerson:
            "1、具备大专及以上学历的电子商务、国际经济与贸易，外语系相关专业在校生或毕业生；2、社会在职具备同等学历28岁以下人员，欲从事电商相关工作；3、欲进行跨境电商创业人士",
          studyFlag: 0,
          hasCourse: 0,
        },
        {
          id: 10002,
          teacherName: "实训老师",
          schoolName: null,
          trainName: "亚马逊运营实操训练营",
          content:
            "本课程致力于培养全能型电商平台运营人员；课程根据目前最新的企业需求，全程采用实战老师指导、真实账号教学，全方位的打造一批会操作，会运营，会推广的电商平台运营人才；↵在15天时间内，分别从平台维护、产品选择、产品上架、产品站内推广、产品站外推广几大方面入手，全面打造紧跟企业需求的电商运营并全程使用真实账号操作，确保学员能真正实现学习即实训，结业即上岗。",
          trainPicture:
            "https://513-edu-image.oss-cn-shenzhen.aliyuncs.com/images/20200628/img_cover_012x.png",
          trainDescribe: "",
          trainScore: 5,
          trainDay: 15,
          trainTime: 50,
          facePerson:
            "1、具备大专及以上学历的电子商务、国际经济与贸易，外语系相关专业在校生或毕业生；2、社会在职具备同等学历28岁以下人员，欲从事电商相关工作；3、欲进行跨境电商创业人士",
          studyFlag: 0,
          hasCourse: 0,
        },
        {
          id: 10003,
          teacherName: "实训老师",
          schoolName: null,
          trainName: "HTML5",
          content:
            "超级文本标记语言（英文缩写：HTML）是为“网页创建和其它可在网页浏览器中看到的信息”设计的一种标记语言。网页的本质就是超级文本标记语言，通过结合使用其他的Web技术（如：脚本语言、公共网关接口、组件等），可以创造出功能强大的网页",
          trainPicture:
            "https://513-edu-image.oss-cn-shenzhen.aliyuncs.com/resources/10003/sx03.png",
          trainDescribe: "",
          trainScore: 5,
          trainDay: 48,
          trainTime: 280,
          facePerson:
            "1、具备大专及以上学历的电子商务、国际经济与贸易，外语系相关专业在校生或毕业生；2、社会在职具备同等学历28岁以下人员，欲从事电商相关工作；3、欲进行跨境电商创业人士",
          studyFlag: 0,
          hasCourse: 0,
        },
      ],
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
  created() {},
};
</script>
<style lang="scss" scoped>
.information {
  width: 100%;
  background-color: #f2f2f2;
  overflow: hidden;
  .information-main {
    width: 1200px;
    margin: 40px auto;
    .header-top {
      width: 100%;
      background-color: #fff;
      .el-tabs {
        width: 1150px;
        margin: 0 auto;
      }
    }
    .container {
      margin-top: 20px;
      padding: 30px;
      box-sizing: border-box;
      background-color: #fff;
      .container-item {
        width: 100%;
        .list {
          .item {
            display: flex;

            .item-img {
              max-width: 344px;
              overflow: hidden;
              border-radius: 4px;
              img {
                width: 344px;
                transition: all 0.3s ease;
                overflow: hidden;
              }
            }
            .item-text {
              width: 776px;
              position: relative;
              .btn {
                position: absolute;
                right: 0;
                top: 90px;
                border-radius: 2px;
                background-color: #28bbac;
                border-color: #28bbac;
                border: none;
                color: #fff;
              }
              .btn:hover {
                background: #77d1cd;
                border-color: #77d1cd;
                color: #fff;
              }
              .p1 {
                color: #1a1a1a;
                font-size: 18px;
                line-height: 18px;
                margin-bottom: 38px;
              }
              .p4 {
                height: 44px;
                line-height: 22px;
                text-overflow: ellipsis;
                overflow: hidden;
              }
              p {
                font-size: 14px;
                line-height: 14px;
                color: #999;
                margin: 19px 0 0 27px;
                text-overflow: ellipsis;
                overflow: hidden;
              }
            }
          }
          .item:hover {
            .p1 {
              color: #28bbac;
            }
            img {
              transform: scale(1.05);
            }
          }
          .border {
            padding-bottom: 20px;
            margin-bottom: 20px;
            border-bottom: 1px solid #e6e6e6;
          }
        }
        .mypractical {
          height: 500px;
          background-image: url("../static/images/course/aa.png");
          background-position: center;
        }
      }
    }
  }
}
</style>
