<template>
  <div class="echarts-box">
    <div class="model-title">
      <b>图表</b>
      <span> ( G2 可视化图形 )</span>
    </div>
    <div class="echarts-container">
      <div class="line-echarts">
        <div id="mountNode" style="width:100%"></div>
      </div>
      <div class="columnar-echarts">
        <div id="mountNodeColumnar" style="width:100%"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ECharts",
  data() {
    return {
      data: [
        {
          date: "2018/8/1",
          type: "download",
          value: 4623
        },
        {
          date: "2018/8/1",
          type: "register",
          value: 2208
        },
        {
          date: "2018/8/1",
          type: "bill",
          value: 182
        },
        {
          date: "2018/8/2",
          type: "download",
          value: 6145
        },
        {
          date: "2018/8/2",
          type: "register",
          value: 2016
        },
        {
          date: "2018/8/2",
          type: "bill",
          value: 257
        },
        {
          date: "2018/8/3",
          type: "download",
          value: 508
        },
        {
          date: "2018/8/3",
          type: "register",
          value: 2916
        },
        {
          date: "2018/8/3",
          type: "bill",
          value: 289
        },
        {
          date: "2018/8/4",
          type: "download",
          value: 6268
        },
        {
          date: "2018/8/4",
          type: "register",
          value: 4512
        },
        {
          date: "2018/8/4",
          type: "bill",
          value: 428
        },
        {
          date: "2018/8/5",
          type: "download",
          value: 6411
        },
        {
          date: "2018/8/5",
          type: "register",
          value: 8281
        },
        {
          date: "2018/8/5",
          type: "bill",
          value: 619
        },
        {
          date: "2018/8/6",
          type: "download",
          value: 1890
        },
        {
          date: "2018/8/6",
          type: "register",
          value: 2008
        },
        {
          date: "2018/8/6",
          type: "bill",
          value: 87
        },
        {
          date: "2018/8/7",
          type: "download",
          value: 4251
        },
        {
          date: "2018/8/7",
          type: "register",
          value: 1963
        },
        {
          date: "2018/8/7",
          type: "bill",
          value: 706
        },
        {
          date: "2018/8/8",
          type: "download",
          value: 2978
        },
        {
          date: "2018/8/8",
          type: "register",
          value: 2367
        },
        {
          date: "2018/8/8",
          type: "bill",
          value: 387
        },
        {
          date: "2018/8/9",
          type: "download",
          value: 3880
        },
        {
          date: "2018/8/9",
          type: "register",
          value: 2956
        },
        {
          date: "2018/8/9",
          type: "bill",
          value: 488
        },
        {
          date: "2018/8/10",
          type: "download",
          value: 3606
        },
        {
          date: "2018/8/10",
          type: "register",
          value: 678
        },
        {
          date: "2018/8/10",
          type: "bill",
          value: 507
        },
        {
          date: "2018/8/11",
          type: "download",
          value: 4311
        },
        {
          date: "2018/8/11",
          type: "register",
          value: 3188
        },
        {
          date: "2018/8/11",
          type: "bill",
          value: 548
        },
        {
          date: "2018/8/12",
          type: "download",
          value: 4116
        },
        {
          date: "2018/8/12",
          type: "register",
          value: 3491
        },
        {
          date: "2018/8/12",
          type: "bill",
          value: 456
        },
        {
          date: "2018/8/13",
          type: "download",
          value: 6419
        },
        {
          date: "2018/8/13",
          type: "register",
          value: 2852
        },
        {
          date: "2018/8/13",
          type: "bill",
          value: 689
        },
        {
          date: "2018/8/14",
          type: "download",
          value: 1643
        },
        {
          date: "2018/8/14",
          type: "register",
          value: 4788
        },
        {
          date: "2018/8/14",
          type: "bill",
          value: 280
        },
        {
          date: "2018/8/15",
          type: "download",
          value: 445
        },
        {
          date: "2018/8/15",
          type: "register",
          value: 4319
        },
        {
          date: "2018/8/15",
          type: "bill",
          value: 176
        }
      ],
      columnData: [
        {
          company: "Apple",
          type: "整体",
          value: 30
        },
        {
          company: "Facebook",
          type: "整体",
          value: 35
        },
        {
          company: "Google",
          type: "整体",
          value: 28
        },
        {
          company: "Apple",
          type: "非技术岗",
          value: 40
        },
        {
          company: "Facebook",
          type: "非技术岗",
          value: 65
        },
        {
          company: "Google",
          type: "非技术岗",
          value: 47
        },
        {
          company: "Apple",
          type: "技术岗",
          value: 23
        },
        {
          company: "Facebook",
          type: "技术岗",
          value: 18
        },
        {
          company: "Google",
          type: "技术岗",
          value: 20
        },
        {
          company: "Apple",
          type: "技术岗",
          value: 35
        },
        {
          company: "Facebook",
          type: "技术岗",
          value: 30
        },
        {
          company: "Google",
          type: "技术岗",
          value: 25
        }
      ],
      lineChart: null
    };
  },
  mounted() {
    this.lineEcharts();
    this.columnEcharts()
  },
  methods: {
    lineEcharts() {
      let data = this.data;
      const lineChart = new G2.Chart({
        container: "mountNode",
        forceFit: true,
        height: 400,
        padding: [100, 20, 30, 45] // 上右下左
      });
      lineChart.source(data);
      lineChart.tooltip({
        follow: false,
        crosshairs: "y",
        htmlContent: function htmlContent(title, items) {
          var alias = {
            download: "当日累计下载量",
            register: "当日累计注册量",
            bill: "当日累计成交量"
          };
          var html = '<div class="custom-tooltip">';
          for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var color = item.color;
            var name = alias[item.name];
            var value = item.value;
            var domHead =
              '<div class="custom-tooltip-item" style="border-left-color:' +
              color +
              '">';
            var domName =
              '<div class="custom-tooltip-item-name">' + name + "</div>";
            var domValue =
              '<div class="custom-tooltip-item-value">' + value + "</div>";
            var domTail = "</div>";
            html += domHead + domName + domValue + domTail;
          }
          return html + "</div>";
        }
      });
      lineChart.axis("date", {
        label: {
          textStyle: {
            fill: "#aaaaaa"
          }
        }
      });
      lineChart.axis("value", {
        label: {
          textStyle: {
            fill: "#aaaaaa"
          },
          formatter: function formatter(text) {
            return text.replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
          }
        }
      });
      lineChart.legend(false);
      lineChart
        .line()
        .position("date*value")
        .color("type");

      lineChart.render();
      lineChart.showTooltip({
        x: 100 % -50,
        y: 100
      });
    },
    columnEcharts() {
        let data = this.columnData;
      var columnChart = new G2.Chart({
        container: "mountNodeColumnar",
        forceFit: true,
        height: 400,
        padding: "auto"
      });
      columnChart.source(data);
      columnChart.scale("value", {
        alias: "占比（%）",
        max: 75,
        min: 0,
        tickCount: 4
      });
      columnChart.axis("type", {
        label: {
          textStyle: {
            fill: "#aaaaaa"
          }
        },
        tickLine: {
          alignWithLabel: false,
          length: 0
        }
      });

      columnChart.axis("value", {
        label: {
          textStyle: {
            fill: "#aaaaaa"
          }
        },
        title: {
          offset: 50
        }
      });
      columnChart.legend({
        position: "top-center"
      });
      columnChart
        .interval()
        .position("type*value")
        .color("company")
        .opacity(1)
        .adjust([
          {
            type: "dodge",
            marginRatio: 1 / 32
          }
        ]);
      columnChart.render();
    }
  }
};
</script>
<style>
.custom-tooltip {
  width: 100% !important;
  height: 10% !important;
  position: absolute;
  top: 0px;
  left: 0px;
}

.custom-tooltip-item {
  width: 150px;
  height: 50px;
  position: relative;
  float: left;
  margin-left: 20px;
  border-left-style: solid;
  border-left-width: 5px;
}

.custom-tooltip-item:first-child {
  margin-left: 0;
}

.custom-tooltip-item-name {
  width: 80%;
  height: 20px;
  position: absolute;
  top: 0px;
  left: 10px;
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
}

.custom-tooltip-item-value {
  width: 80%;
  height: 30px;
  position: absolute;
  bottom: 0px;
  left: 10px;
  color: #262626;
  font-size: 22px;
  /*font-weight: bold*/
}
</style>
