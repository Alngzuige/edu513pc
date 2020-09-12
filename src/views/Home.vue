<template>
  <div class="home">
    <div class="block">
      <el-carousel height="728px">
        <el-carousel-item>
          <img src="../static/images/home/bg_img@2x.png" alt="" />
        </el-carousel-item>
        <el-carousel-item>
          <img src="../static/images/home/bg_img@2x.png" alt="" />
        </el-carousel-item>
        <el-carousel-item>
          <img src="../static/images/home/bg_img@2x.png" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <Container></Container>
  </div>
</template>

<script>
import Container from "./home/container";
export default {
  components: {
    Container,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.block {
  height: 100%;
}
</style>
