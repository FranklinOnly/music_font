<template>
  <div>
    <el-card class="card">
      <el-table :data="userData" style="width: 100%" max-height="650">
        <el-table-column fixed prop="id" label="id" width="100">
        </el-table-column>
        <el-table-column prop="username" label="用户名" width="120">
        </el-table-column>
        <el-table-column prop="password" label="密码" width="120">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="120">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="deleteUser(scope.row.id)"
              type="danger"
              size="small"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import { UserFindApi, UserDeleteApi } from "../../api/index";
export default {
  name: "toUser",
  data() {
    return {
      userData: [
        {
          id: "",
          username: "",
          password: "",
        },
      ],
    };
  },
  methods: {
    UserFind() {
      UserFindApi()
        .then((res) => {
          if (res.status === 200) {
            this.userData = res.data.data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteUser(id) {
      UserDeleteApi(id)
        .then((res) => {
          if (res.status === 200) {
            console.log(res.data.data);
            if (res.data.data == 1) {
              this.$message({
                message: "删除成功！",
                type: "success",
              });
            } else {
              this.$message({
                message: "删除失败！",
                type: "success",
              });
            }
            this.UserFind();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.UserFind();
  },
};
</script>

<style scoped>
.card {
  margin-left: 400px;
  width: 40%;
}
</style>