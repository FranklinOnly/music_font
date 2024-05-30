<template>
  <el-card>
    <div class="player">
      <div class="pic">
        <img src="../../asset/img/loveStory.png" />
      </div>
      <div class="right">
        <span>歌名：{{ song }}</span>
        <br />
        <span>歌手：{{ singer }}</span>
        <!-- <audio controls src="../../asset/mp3/lovestory.mp3"></audio> -->
        <audio controls :src="musicUrl"></audio>
        <!-- <audio controls :src="musicUrl">{{ musicUrl }}</audio> -->
        <!-- <audio id="music" ref="audio" controls>
        <source :src="musicUrl" />
      </audio> -->
      </div>
    </div>
  </el-card>
</template>

<script>
import { playSongApi } from "../../api";
export default {
  name: "Player",
  data() {
    return {
      baseurl: "http://localhost:8080/static/",
      singer: "Talor Swift",
      song: "Love Story",
      musicUrl: "lovestory.mp3",
    };
  },
  methods: {
    play() {
      let data = {
        url: this.musicUrl,
      };
      playSongApi(data)
        .then((res) => {
          if (res.status === 200)
            // http://localhost:8080/static/lovestory.mp3
            this.musicUrl = this.baseurl + data.url;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.play();
  },
};
</script>

<style>
img {
  width: 80px;
  height: 95px;
}
.pic {
  float: left;
}
.right {
  background-color: #409eff;
}
audio {
  margin-top: 7px;
}
.player {
  position: fixed;
  margin-left: 500px;
  margin-top: 550px;
}
</style>