<template>
  <div>
    <el-container class="container">
      <!-- <el-header><h1>歌曲列表</h1></el-header> -->

      <el-container>
        <el-aside width="600px">
          <el-card class="card">
            <img src="../../asset/img/流行.png" />
            <h3>流行歌单详情</h3>
          </el-card>
          <el-table :data="tableData" style="width: 100%" max-height="650">
            <el-table-column fixed prop="id" label="id" width="100">
            </el-table-column>
            <el-table-column prop="name" label="歌曲名" width="120">
            </el-table-column>
            <el-table-column prop="singer" label="演唱者" width="120">
            </el-table-column>
            <el-table-column prop="time" label="收录入库时间" width="120">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="120">
              <template slot-scope="scope">
                <el-button
                  @click.native.prevent="playmusic(scope.row.id)"
                  type="text"
                  size="large"
                >
                  播放
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-aside>
      </el-container>
      <el-card>
        <div class="player">
          <div class="pic">
            <img src="../../asset/img/流行.png" />
          </div>
          <div class="right">
            <span>歌名：{{ song }}</span>
            <br />
            <span>歌手：{{ singer }}</span>
            <br />
            <audio controls :src="musicUrl" type="audio/mpeg"></audio>
            <br />
            <span>歌词：{{ lyric }}</span>
          </div>
        </div>
      </el-card>
    </el-container>
  </div>
</template>

<script>
import { SongFindCategoryApi, SongFindIdApi } from "../../api";
export default {
  name: "toPops",
  data() {
    return {
      category: "流行",
    };
  },
  components: {
    Player: () => import("../play/player.vue"),
  },
  methods: {
    playmusic(id) {
      // console.log(id)
      SongFindIdApi(id)
        .then((res) => {
          if (res.status === 200) {
            // console.log(res.data.data)
            this.addUrl = res.data.data.url;
            this.song = res.data.data.name;
            this.singer = res.data.data.singer;
            this.lyric = res.data.data.lyric;
            this.musicUrl = this.baseurl + this.addUrl;
            console.log(this.musicUrl);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    findSongByCategory() {
      this.category = "流行";
      console.log(this.category);
      SongFindCategoryApi(this.category)
        .then((res) => {
          if (res.status === 200) {
            this.tableData = res.data.data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    play() {
      this.musicUrl = this.baseurl + this.addUrl;
    },
  },
  data() {
    return {
      baseurl: "http://localhost:8080/static/",
      singer: "Talor Swift",
      song: "Love Story",
      lyric: "We were both young when I first saw you.....",
      addUrl: "lovestory.mp3",
      musicUrl: "",
      tableData: [
        {
          id: "",
          name: "",
          singer: "",
          time: "",
        },
      ],
      formInline: {
        user: "",
      },
    };
  },
  mounted() {
    this.findSongByCategory();
  },
};
</script>

<style scoped>
.el-header {
  color: #333;
  margin-left: 400px;
}

.el-aside {
  /* background-color: #d3dce6; */
  color: #333;
  margin-left: 400px;
  /* text-align: center; */
  /* line-height: 200px; */
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

span {
  font-size: 20px;
}

.container {
  height: 1000px;
}

.el-form {
  margin-top: 10px;
  margin-bottom: -20px;
}

img {
  width: 200px;
  height: 200px;
}
audio {
  margin-top: 7px;
}

.right {
  width: 400px;
}
</style>