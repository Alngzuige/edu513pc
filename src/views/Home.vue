<template>
  <div class="home">
    <div class="block">
      <el-carousel height="560px">
        <el-carousel-item v-for="item in advertising" :key="item.id">
          <img :src="item.advertImage" alt="" />
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
    return {
      // 存放获取的广告内容
      advertising: [],
    };
  },
  methods: {
    // 获取广告轮播图
    async getAdvertising() {
      const { data: res } = await this.$http.get(
        "adverting/getAllAdvertisingList"
      );
      this.advertising = res.data;
    },
  },
  created() {
    this.getAdvertising();
  },
};
</script>

<style lang="scss" scoped>
.block {
  height: 100%;
}
</style>
