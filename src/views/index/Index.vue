<template>
  <div>
    <!-- width="100%" -->
    <el-header style="width: 40%">
      <nav>
        <!-- @select="handleSelect" -->
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#FFFFFF"
          text-color="#303133"
          active-text-color="#ffd04b"
        >
          <!-- 音乐网站 -->
          <!-- <span>音乐网站</span> -->

          <el-menu-item index="1"
            ><router-link to="/songlist">歌曲</router-link></el-menu-item
          >
          <!-- <router-link to="/singerlist">歌手</router-link> -->
          <!-- <el-menu-item index="2" disabled
            >歌手</el-menu-item
          > -->
          <!-- <el-menu-item index="2"><router-link to="/list">歌手</router-link></el-menu-item> -->
          <el-menu-item index="3" ><router-link to="/list">歌单</router-link></el-menu-item>
          <el-menu-item index="4" v-if="adminVisable"
            ><router-link to="/upload" >上传</router-link></el-menu-item
          >
          <el-menu-item index="5" @click="logout()">退出登录</el-menu-item>
          <el-menu-item index="6" v-if="adminVisable"
            ><router-link to="/user">用户管理</router-link></el-menu-item
          >
          <!-- <el-menu-item index="3" disabled>歌单</el-menu-item> -->
        </el-menu>
      </nav>
    </el-header>
    <router-view></router-view>
  </div>
</template>

<script>
import {
  logoutApi
} from "../../api";
export default {
  name: "toIndex",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      adminVisable: false,
    };
  },
  methods: {
    checkUser() {
      if (window.localStorage.getItem("username") == "admin") {
        this.adminVisable = true;
      } else {
        this.adminVisable = false;
      }
      if(window.localStorage.getItem("username")==""){
        this.$router.replace("/");
      }
      // if(window.localStorage.getItem('roles')=="admin")
    },
    logout() {
      // logoutApi()
      //   .then((res) => {
      //     if (res.status === 200) {
      //       this.$router.replace("/");
      //       window.localStorage.setItem("username","")
      //     }
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
      // window.localStorage.setItem("username", "");
      this.$router.replace("/");
      window.localStorage.setItem("username","")
    },
  },
  mounted() {
    this.checkUser();
  },
};
</script>

<style>
/* .logout{
  margin-right: 0;
} */
.el-header {
  margin-left: 400px;
}
/* .el-menu-item{
  font-size: 20px;
} */
</style>