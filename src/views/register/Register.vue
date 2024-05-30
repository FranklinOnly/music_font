<template>
  <div>
    <p>{{ userList }}</p>
    <p v-for="item in userList" :key="item.id">{{ item }}</p>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>注册</span>
        <el-button
          style="float: right; padding: 3px 0"
          type="text"
          @click="login()"
          >登录</el-button
        >
      </div>
      <el-form
        :model="Form"
        status-icon
        ref="Form"
        label-width="100px"
        class="demo-ruleForm"
        size="small"
      >
        <el-form-item
          label="账号"
          prop="username"
          :rules="[{ required: true, message: '请输入账号', trigger: 'blur' }]"
        >
          <el-input
            type="text"
            v-model="Form.username"
            autocomplete="off"
            size="small"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="密码"
          prop="password"
          :rules="[{ required: true, message: '请输入密码', trigger: 'blur' }]"
        >
          <el-input
            type="password"
            v-model="Form.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="确认密码"
          prop="repassword"
          :rules="[
            { required: true, message: '请再次输入密码', trigger: 'blur' },
          ]"
        >
          <el-input
            type="repassword"
            v-model="Form.repassword"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm()" size="medium"
            >提交</el-button
          >
          <el-button @click="resetForm('Form')" size="medium">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { registerApi } from "../../api/index";
export default {
  name: "toRegister",
  data() {
    return {
      Form: {
        password: "",
        username: "",
        repassword: "",
        role: "user",
      },
    };
  },
  methods: {
    submitForm() {
      if(this.Form.username=="admin"){
        alert("不允许使用该名称！")
        this.$router.replace({ path: "/register" });
      }
      if (this.Form.password != this.Form.repassword) {
        alert("密码不一致！");
        this.$router.replace({ path: "/register" });
      }
      let data = {
        username: this.Form.username,
        password: this.Form.password,
        role: this.Form.role,
      };
      registerApi(data)
        .then((res) => {
          if (res.status === 200)
            // if(res.data.data.role=="admin"){
            //   window.localStorage.setItem('roles','admin')
            // }
            // else{
            //   window.localStorage.setItem('roles','user')
            // }
            // window.localStorage.setItem('username',res.data.data.username)
            // if(res.data.data==1){}
            this.$message({
              message: "注册成功！",
              type: "success",
            });
          this.$router.replace({ path: "/" });
        })
        .catch((err) => {
          console.log(err);
        });
    },

    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    login() {
      this.$router.replace("/");
    },
  },
};
</script>

<style scoped>
.form {
  width: 800px;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 400px;
  margin-left: 35%;
  margin-top: 10%;
}
</style>