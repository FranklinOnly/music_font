<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>登录</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click="register()">注册</el-button>
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
            :rules="[
              { required: true, message: '请输入账号', trigger: 'blur' },
            ]"
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
            :rules="[
              { required: true, message: '请输入密码', trigger: 'blur' },
            ]"
          >
            <el-input
              type="password"
              v-model="Form.password"
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

import {loginApi} from "../../api/index"
export default {
  name: "toLogin",
  data() {
    return {
      Form: {
        password: "",
        username: "",
      },
    };
  },
  methods: {
    submitForm() {
      let data = {
        username:this.Form.username,
        password:this.Form.password
      }
      loginApi(data)    
      .then( (res) => {
          if (res.status === 200)
          if(res.data.data.username!=null &&res.data.data.password!=null){
            if(res.data.data.username=="admin"){
              window.localStorage.setItem('username','admin')
              // console.log(window.localStorage.getItem('roles'))
              // this.$router.replace({path:'/songList'})
            }
            else{
              window.localStorage.setItem('username','user')
            }
            // window.localStorage.setItem('username',res.data.data.username)
            this.$router.replace({path:'/songList'})
          }else{
            alert("输入有误，请重新输入！")
          }
      })
      .catch((err) => {
          console.log(err)
      })
    },

    
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    register(){
        this.$router.replace("/register")
    }
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