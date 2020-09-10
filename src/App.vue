<template>
  <div id="app">
    <div class="header">
      <div>
        <img src="./static/images/home/logo@2x.png" alt="" />
      </div>
      <div class="nav">
        <router-link tag="p" to="/">首页</router-link>
        <router-link tag="p" to="/course">课程</router-link>
        <router-link tag="p" to="/information">实训</router-link>
        <router-link tag="p" to="/job">就业</router-link>
        <router-link tag="p" to="/practical">资讯</router-link>
      </div>
      <div class="seach">
        <div class="input">
          <input type="text" placeholder="搜索感兴趣的课程" />
        </div>
        <div>
          <p>登录</p>
          <p>|</p>
          <p>注册</p>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
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
</style>
