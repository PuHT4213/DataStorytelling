window.addEventListener('load', function() {
    // CSV 数据
var csvData =
 `年份,妇女,儿童,男性,Grand Total
2017,10721,23995,10398,45128
2018,9347,20061,8658,38088
2019,10609,22301,9614,42526
2020,5618,11764,5232,22614
2021,7113,17113,7139,31365
2022,13208,28596,12072,53879
2023,12386,28162,10868,51421`;

// 解析 CSV 数据为数组
var lines = csvData.split("\n");
var headers = lines[0].split(",");
var data = [];
for (var i = 1; i < lines.length; i++) {
  var currentLine = lines[i].split(",");
  var rowData = {};
  for (var j = 0; j < headers.length; j++) {
    rowData[headers[j]] = currentLine[j];
  }
  data.push(rowData);
}

// 生成河流图的数据格式
var riverData = [];
for (var i = 0; i < data.length; i++) {
  var year = data[i]["年份"];
  var female = parseFloat(data[i]["妇女"]);
  var children = parseFloat(data[i]["儿童"]);
  var male = parseFloat(data[i]["男性"]);
  riverData.push([year, female, "妇女"], [year, children, "儿童"], [year, male, "男性"]);
}

// 初始化echarts实例
// var myChart2 = echarts.init(document.getElementById('main'));
var chartDom = document.getElementById('river_dyx');
var myChart2 = echarts.init(chartDom, null, { renderer: 'svg' }); // 使用 SVG 渲染器

// 指定图表的配置项和数据
var option2 = {
  title: {
    text: '中东地区难民分布河流图',
    left: 'center', // 标题水平居中
    textStyle: {
      color: '#ffffff' // 将标题颜色设置为白色
    }
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'line',
      lineStyle: {
        color: 'rgba(0,0,0,0.2)',
        width: 2
      }
    },
        formatter: function(params) {
            var year = params[0].value[0];
            var content = year+"<br>";
            for (var i = 0; i < params.length; i++) {
                content += params[i].marker + " " +params[i].name + ": " + params[i].value[1] + "<br>";
            }
            return content;
        }

  },
  legend: {
    data: ['Female', 'Children', 'Male']
  },
  singleAxis: {
    top: 50,
    bottom: 50,
    axisTick: {},
    axisLabel: {},
    type: 'time',
    axisPointer: {
      animation: true,
    //   label: {
    //     show: true
    //   }
    },
    splitLine: {
      show: true,
      lineStyle: {
        type: 'dashed',
        opacity: 0.2
      }
    }
  },
  series: [
    {
      type: 'themeRiver',
      itemStyle: {
        emphasis: {
          shadowBlur: 20,
          shadowColor: 'rgba(0, 0, 0, 0.8)'
        }
      },
      data: riverData,
      color: ['#696969', '#A9A9A9', '#DCDCDC']
      // color: ['#dd6b66', '#e69d87', '#759aa0']
    }
  ]
};

// 使用刚指定的配置项和数据显示图表。
myChart2.setOption(option2);
console.log('1')
});
