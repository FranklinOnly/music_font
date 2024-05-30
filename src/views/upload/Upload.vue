<template>
  <el-card>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="歌曲名" prop="name" required style="width: 80%">
        <el-input v-model="ruleForm.name" placeholder="请填写歌曲名"></el-input>
      </el-form-item>
      <el-form-item label="演唱者" prop="singer" required style="width: 80%">
        <el-input
          v-model="ruleForm.singer"
          placeholder="请填写演唱者"
        ></el-input>
      </el-form-item>
      <el-form-item label="音乐类型" prop="category"  required>
        <el-select v-model="ruleForm.category" placeholder="音乐类型">
            <el-option label="流行" value="流行"></el-option>
            <el-option label="欧美" value="欧美"></el-option>
            <el-option label="华语" value="华语"></el-option>
            <el-option label="摇滚" value="摇滚"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="歌词" prop="lyric" required style="width: 80%">
        <el-input v-model="ruleForm.lyric" placeholder="请填写歌词"></el-input>
      </el-form-item>
      <el-form-item label="专辑" prop="album" required style="width: 80%">
        <el-input v-model="ruleForm.album" placeholder="请填写所属专辑"></el-input>
      </el-form-item>
      <el-form-item label="入库时间" required>
        <el-col :span="11">
          <el-form-item prop="time">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="ruleForm.time"
              style="width: 100%"
            ></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="音乐文件" prop="file">
        <!-- :on-success="handleAvatarSuccess"
        v-model="ruleForm.file" -->
        <!-- action="https://jsonplaceholder.typicode.com/posts/" -->
        <el-upload
          class="avatar-uploader"
          action="#"
        :http-request="submitFile"
          
          :show-file-list="true"
          :before-upload="beforeAvatarUpload"
          :file-list="fileList"
          v-model="ruleForm.file"
          placeholder="请上传音乐文件"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item>
          <!-- 'ruleForm' -->
        <el-button type="primary" @click="submitForm('ruleForm')"
          >上传</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
import {SongAddApi,SongUploadApi} from "../../api";
export default {
  name: "toupload",
  data() {
    return {
      imageUrl: "",
      file:[],
      fileList: [], // 用于存储文件列表
      ruleForm: {
        name: "",
        singer: "",
        time: "",
        category:"",
        lyric:"",
        album:"",
        url:".mp3",
        // file:"", 
      },
      rules: {
        name: [{ required: true, message: "请输入歌曲名", trigger: "blur" }],
        singer: [{ required: true, message: "请输入演唱者", trigger: "blur" }],
        time: [
          {
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        category: [{ required: true, message: "请输入歌曲类型", trigger: "blur" }],
        lyric: [{ required: true, message: "请输入歌词", trigger: "blur" }],
        album: [{ required: true, message: "请输入所属专辑", trigger: "blur" }],
      },
    };
  },
  methods: {
    formatDate(time) {
      if (time) {
        const date = new Date(time);
        const Y = `${date.getFullYear()}-`;
        const M = `${date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}-`;
        const D = `${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()} `;
        return Y + M + D;
        // return Y + M + D
      }
      return time;
    },
    // handleAvatarSuccess(res, file) {
    // //   this.ruleForm.url = URL.createObjectURL(file.raw);
    // },
    beforeAvatarUpload(file) {
      const isMP3 = file.type === "audio/mp3" || file.type === "audio/mpeg";
      const isLt2M = file.size / 1024 / 1024 < 15;

      if (!isMP3) {
        this.$message.error("上传头像图片只能是 mp3 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 15MB!");
      }
      return isMP3 && isLt2M;
    },
    submitFile(ruleForm){
        const data = new FormData();
        data.append('file',ruleForm.file);
        this.ruleForm.url=ruleForm.file.name
        SongUploadApi(data)
            .then((res) => {
            if (res.status === 200) {
                this.$message({
                    message: "上传文件成功！",
                    type: "success",
                });
            }
        })
        .catch((err) => {
        console.log(err);
        });
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
        this.ruleForm.time=this.formatDate(this.ruleForm.time)
        SongAddApi(this.ruleForm)
            .then((res) => {
            if (res.status === 200) {
                this.$message({
                    message: "歌曲添加成功！",
                    type: "success",
                });
            }
        })
        .catch((err) => {
        console.log(err);
        });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
           
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  /* position: relative; */
  /* margin-left: 100px; */
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.el-card {
  width: 600px;
  margin-left: 400px;
}
</style>