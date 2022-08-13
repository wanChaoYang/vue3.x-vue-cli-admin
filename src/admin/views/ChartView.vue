<template>
  <div>
    <div class="p-b-15">
       <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <el-icon><Folder /></el-icon> 图标
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="bg-fff p-v-20 p-both15">
      <div class="plugins-tips">
        vue-schart：vue.js封装sChart.js的图表组件。 访问地址：
        <a href="https://github.com/qdzhaoxiaodao/vue-schart" target="_blank"
          >vue-schart</a
        >
        <div class="flex-dom flex-between">
          <div class="wid50">
            <div class="content-title">柱状图</div>
            <Schart class="schart" canvasId="bar" :options="options1"> </Schart>
          </div>
          <div class="wid50">
            <div class="content-title">折线图</div>
            <Schart class="schart" canvasId="line" :options="options2"></Schart>
          </div>
        </div>
        <div class="flex-dom flex-between">
          <div class="wid50">
            <div class="content-title">柱状图</div>
            <Schart class="schart" canvasId="pie" :options="options3"> </Schart>
          </div>
          <div class="wid50">
            <div class="content-title">折线图</div>
            <Schart class="schart" canvasId="ring" :options="options4"></Schart>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script >
import Schart from "vue-schart";
export default {
  name: "schart",
  components: { Schart },
  setup() {
    const options1 = {
      type: "bar",
      title: {
        text: "最近一周各品类销售图",
      },
      bgColor: "#fbfbfb",
      labels: ["周一", "周二", "周三", "周四", "周五"],
      datasets: [
        {
          label: "家电",
          fillColor: "rgba(241, 49, 74, 0.5)",
          data: [234, 278, 270, 190, 230],
        },
        {
          label: "百货",
          data: [164, 178, 190, 135, 160],
        },
        {
          label: "食品",
          data: [144, 198, 150, 235, 120],
        },
      ],
    };
    const options2 = {
      type: "line",
      title: {
        text: "最近几个月各品类销售趋势图",
      },
      bgColor: "#fbfbfb",
      labels: ["6月", "7月", "8月", "9月", "10月"],
      datasets: [
        {
          label: "家电",
          data: [234, 278, 270, 190, 230],
        },
        {
          label: "百货",
          data: [164, 178, 150, 135, 160],
        },
        {
          label: "食品",
          data: [114, 138, 200, 235, 190],
        },
      ],
    };
    const options3 = {
      type: "pie",
      title: {
        text: "服装品类销售饼状图",
      },
      legend: {
        position: "left",
      },
      bgColor: "#fbfbfb",
      labels: ["T恤", "牛仔裤", "连衣裙", "毛衣", "七分裤", "短裙", "羽绒服"],
      datasets: [
        {
          data: [334, 278, 190, 235, 260, 200, 141],
        },
      ],
    };
    const options4 = {
      type: "ring",
      title: {
        text: "环形三等分",
      },
      showValue: false,
      legend: {
        position: "bottom",
        bottom: 40,
      },
      bgColor: "#fbfbfb",
      labels: ["vue", "react", "angular"],
      datasets: [
        {
          data: [500, 500, 500],
        },
      ],
    };

    return {
      options1,
      options2,
      options3,
      options4,
    };
  },
};
</script>
<style lang='less' scoped>
.schart {
  width: 100%;
  height: 300px;
}
</style>