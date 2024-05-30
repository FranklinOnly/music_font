<template>
  <div>
    <el-card class="bigcard">
      <!-- @click="toEA()" -->
      <el-card class="card" @click.native="toEA()">
        <img src="../../asset/img/欧美.png" />
        <h3>欧美</h3>
      </el-card>
      <!-- <Pop /> -->
      <el-card class="card" @click.native="toPOP()">
        <img src="../../asset/img/流行.png" />
        <h3>流行</h3>
      </el-card>
      <el-card class="card" @click.native="toChinese()">
        <img src="../../asset/img/华语.png" />
        <h3>华语</h3>
      </el-card>
      <el-card class="card" @click.native="toRock()">
        <img src="../../asset/img/摇滚.png"  />
        <h3>摇滚</h3>
      </el-card>
      <el-card class="card" @click.native="toEA()">
        <img src="../../asset/img/欧美.png" />
        <h3>欧美</h3>
      </el-card>
      <!-- <Pop /> -->
      <el-card class="card" @click.native="toPOP()">
        <img src="../../asset/img/流行.png" />
        <h3>流行</h3>
      </el-card>
      <el-card class="card" @click.native="toChinese()">
        <img src="../../asset/img/华语.png" />
        <h3>华语</h3>
      </el-card>
      <el-card class="card" @click.native="toRock()">
        <img src="../../asset/img/摇滚.png"  />
        <h3>摇滚</h3>
      </el-card>
    </el-card>
  </div>
</template>

<script>
// import Pop from "../playlist/pop.vue"
export default {
  name: "toSongerList",
  data() {
    return {};
  },
  // components:{
  //   Pop
  // },
  methods: {
    toPOP() {
      this.$router.replace("/pop");
    },
    toEA() {
      this.$router.replace("/EA");
    },
    toChinese() {
      this.$router.replace("/Chinese");
    },
    toRock() {
      this.$router.replace("/rock");
    },
  },
};
</script>

<style scoped>
.bigcard {
  width: 900px;
  margin-left: 300px;
}
.card {
  float: left;
  width: 200px;
  margin: 5px;
  text-align: center;
}
img {
  width: 150px;
  height: 150px;
}
</style>