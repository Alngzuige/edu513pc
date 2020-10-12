<template>
  <div class="contaner">
    <div class="header">
      <div>
        <img src="../static/images/home/logo@2x.png" alt="" />
      </div>
      <div class="nav">
        <p
          :class="index == navIndex ? 'router-link-exact-active' : ''"
          @click="To(item.url)"
          v-for="(item, index) in tabList"
          :key="index"
        >
          {{ item.name }}
        </p>
        <!-- <router-link tag="p" to="/">首页</router-link>
        <router-link tag="p" to="/course">课程</router-link>
        <router-link tag="p" to="/information">实训</router-link>
        <router-link tag="p" to="/job">就业</router-link>
        <router-link tag="p" to="/practical">资讯</router-link> -->
      </div>
      <div class="seach">
        <div class="input">
          <input type="text" placeholder="搜索感兴趣的课程" />
        </div>
        <div v-if="show">
          <p class="color" @click="loginDialogVisible = true">登录</p>
          <p>|</p>
          <p @click="(loginDialogVisible = true), (tigger = false)">注册</p>
        </div>
        <div v-else>
          <p class="color">已登录</p>
        </div>
      </div>
    </div>
    <!-- 注册提示框 -->
    <!-- <el-dialog :visible.sync="registerDialogVisible" width="23%">
      
    </el-dialog> -->
    <!-- 登录提示框 -->
    <el-dialog :visible.sync="loginDialogVisible" width="23%">
      <div v-if="tigger">
        <div class="zhuce">
          <span class="p1">登录</span>
          <span class="p2" @click="tigger = false">免费注册</span>
        </div>
        <el-form :model="loginForm" :rules="registerRules" ref="loginForm">
          <el-form-item prop="mobile">
            <el-input
              prefix-icon="el-icon-search"
              v-model="loginForm.phone"
              placeholder="请输入手机号码"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              prefix-icon="el-icon-search"
              v-model="loginForm.password"
              placeholder="请输入密码"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item prop="mobileCode">
            <el-input
              prefix-icon="el-icon-search"
              v-model="loginForm.code"
              placeholder="请输入验证码"
            ></el-input>
          </el-form-item>
        </el-form>
        <el-row>
          <el-col :span="24">
            <button class="registerBtn" @click="loginBtn">登录</button>
          </el-col>
        </el-row>
      </div>
      <div v-else>
        <div class="zhuce">
          <span class="p1">注册</span>
          <span class="p2" @click="tigger = true">已有账号，去登陆</span>
        </div>
        <el-form
          :model="registerForm"
          :rules="registerRules"
          ref="registerForm"
        >
          <el-form-item prop="mobile">
            <el-input
              prefix-icon="el-icon-search"
              v-model="registerForm.mobile"
              placeholder="请输入手机号码"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              prefix-icon="el-icon-search"
              v-model="registerForm.password"
              placeholder="请输入密码"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item prop="mobileCode">
            <el-input
              prefix-icon="el-icon-search"
              v-model="registerForm.mobileCode"
              placeholder="请输入验证码"
            ></el-input>
          </el-form-item>
        </el-form>
        <el-row>
          <el-col :span="24">
            <button class="registerBtn" @click="registerBtn">注册</button>
          </el-col>
        </el-row>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabList: [
        {
          name: "首页",
          url: "/",
        },
        {
          name: "课程",
          url: "/course",
        },
        {
          name: "实训",
          url: "/information",
        },
        {
          name: "就业",
          url: "/job",
        },
        {
          name: "资讯",
          url: "/practical",
        },
      ],
      navIndex: 0,
      // 注册提示弹窗
      registerDialogVisible: false,
      loginDialogVisible: false,
      tigger: true,
      show: true,
      // 注册表单的内容
      registerForm: {
        mobile: "",
        mobileCode: "",
        openId: "123456",
        password: "",
      },
      // 登录表单内容
      loginForm: {
        code: "1234",
        password: "f0204a887dbebbebd909d5418427e082",
        phone: "13544063178",
      },
      // 注册表单验证
      registerRules: {
        mobile: [
          { required: true, message: "请输入电话号码", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        mobileCode: [
          { required: true, message: "请输入验证码", trigger: "blur" },
        ],
      },
    };
  },
  created() {
    this.showName();
    3
  },
  watch: {
    $route(to, from) {
      this.getUrl(to.path);
    },
  },
  methods: {
    getUrl(url) {
      this.tabList.forEach((item, index) => {
        if (item.url == url) {
          this.navIndex = index;
          console.log("当前选中项是", this.navIndex);
        }
      });
    },
    showName() {
      const tokenStr = window.sessionStorage.getItem("token");
      if (tokenStr) {
        return (this.show = false);
      }
    },
    To(pach) {
      if (pach === "/job") {
        const tokenStr = window.sessionStorage.getItem("token");
        if (!tokenStr) {
          this.$message.error("请登录！");
          return (this.loginDialogVisible = true);
        } else {
          this.$router.push(pach);
        }
      } else {
        this.$router.push(pach);
      }
    },
    async registerBtn() {
      const data = await this.$http.post("register", this.registerForm);
      console.log(data);
    },
    async loginBtn() {
      const data = await this.$http.post("login", {
        code: "1234",
        // openId: "1234",
        password: "f0204a887dbebbebd909d5418427e082",
        phone: "13544063178",
      });
      console.log(data.data.data.token);
      if (data.status !== 200) {
        return this.$message({
          showClose: true,
          message: "登录失败，用户名或密码错误",
          type: "error",
        });
      }
      window.sessionStorage.setItem("token", data.data.data.token);
      this.$message.success("登录成功");
      this.show = false;
      this.loginDialogVisible = false;
    },
  },
  mounted() {
    this.getUrl(this.$route.path);
  },
};
</script>

<style lang="scss" scoped>
.contaner {
  box-shadow: 0 1px 7px 0 rgba(0, 0, 0, 0.18);
  position: relative;
}
.header {
  width: 1200px;
  height: 80px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .nav {
    width: 300px;
    display: flex;
    justify-content: space-between;
    p {
      cursor: pointer;
      &:hover {
        color: #28bbac;
      }
      &.router-link-exact-active {
        color: #28bbac;
      }
    }
  }
  .seach {
    width: 400px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    div {
      display: inherit;
      p {
        margin: 0 3px;
        cursor: pointer;
      }
    }
    .input {
      width: 255px;
      height: 30px;
      border: 1px solid #ccc;
      border-radius: 20px;
      box-sizing: border-box;
      padding: 0 20px;
      input {
        width: 100%;
        border: none;
        outline: none;
      }
    }
  }
}
.color {
  color: #28bbac;
}
.registerBtn {
  width: 100%;
  color: #fff;
  background-color: #28bbac;
  border-color: #28bbac;
  cursor: pointer;
  text-align: center;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  border: none;
}
.registerBtn:hover {
  background: #77d1cd;
  border-color: #77d1cd;
  color: #fff;
}
.zhuce {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .p1 {
    color: #333;
    font-size: 20px;
    line-height: 41px;
    font-weight: 500;
  }
  .p2 {
    color: #28bbac;
  }
  .p2:hover {
    cursor: pointer;
    color: #77d1cd;
  }
}
</style>
