data1 = [
    [
        {
            value: 326,
            name: '机动车',
            itemStyle: {
                color: '#c0504d'
            }
        },
        {
            value: 246,
            name: '燃煤',
            itemStyle: {
                color: '#4f81bd'
            }
        },
        {
            value: 146,
            name: '扬尘',
            itemStyle: {
                color: '#8064a1'
            }
        },
        {
            value: 144,
            name: '工业生产',
            itemStyle: {
                color: '#9aba59'
            }
        },
        {
            value: 138,
            name: '其他',
            itemStyle: {
                color: '#4babc5'
            }
        }
    ],
    [
        {
            value: 298,
            name: '机动车',
            itemStyle: {
                color: '#c0504d'
            }
        },
        {
            value: 348,
            name: '燃煤',
            // selected:true,
            itemStyle: {
                color: '#4f81bd'
            }
        },
        {
            value: 99,
            name: '扬尘',
            itemStyle: {
                color: '#8064a1'
            }
        },
        {
            value: 77,
            name: '工业生产',
            itemStyle: {
                color: '#9aba59'
            }
        },
        {
            value: 178,
            name: '其他',
            itemStyle: {
                color: '#4babc5'
            }
        }
    ],
    [
        {
            value: 384,
            name: '机动车',
            itemStyle: {
                color: '#c0504d'
            }
        },
        {
            value: 137,
            name: '燃煤',
            // selected:true,
            itemStyle: {
                color: '#4f81bd'
            }
        },
        {
            value: 151,
            name: '扬尘',
            itemStyle: {
                color: '#8064a1'
            }
        },
        {
            value: 217,
            name: '工业生产',
            itemStyle: {
                color: '#9aba59'
            }
        },
        {
            value: 111,
            name: '其他',
            itemStyle: {
                color: '#4babc5'
            }
        }
    ],
    [
        {
            value: 303,
            name: '机动车',
            itemStyle: {
                color: '#c0504d'
            }
        },
        {
            value: 151,
            name: '燃煤',
            // selected:true,
            itemStyle: {
                color: '#4f81bd'
            }
        },
        {
            value: 198,
            name: '扬尘',
            itemStyle: {
                color: '#8064a1'
            }
        },
        {
            value: 210,
            name: '工业生产',
            itemStyle: {
                color: '#9aba59'
            }
        },
        {
            value: 138,
            name: '其他',
            itemStyle: {
                color: '#4babc5'
            }
        }
    ]
];
data2 = [
    [
        {value: 135, name: '柴油车'},
        {value: 130, name: '非道路移动源'},
        {value: 45, name: '汽油车'},
        {value: 16, name: '其他机动车'},
        {value: 155, name: '民用燃煤'},
        {value: 91, name: '工业燃煤'},
        {value: 103, name: '道路扬尘'},
        {value: 32, name: '施工扬尘'},
        {value: 11, name: '其他扬尘'},
        {value: 79, name: '其他工业'},
        {value: 29, name: '钢铁'},
        {value: 19, name: '炼油'},
        {value: 17, name: '水泥'},
        {value: 138, name: '其他'}
    ],
    [
        {value:126, name:'柴油车'},
        {value:118, name:'非道路移动源'},
        {value:40, name:'汽油车'},
        {value:14, name:'其他机动车'},
        {value:228, name:'民用燃煤'},
        {value:120, name:'工业燃煤'},
        {value:72, name:'道路扬尘'},
        {value:19, name:'施工扬尘'},
        {value:8, name:'其他扬尘'},
        {value:49, name:'其他工业'},
        {value:15, name:'炼油'},
        {value:13, name:'钢铁'},
        {value:178, name:'其他'},
    ],
    [
        {value:160, name:'柴油车'},
        {value:153, name:'非道路移动源'},
        {value:54, name:'汽油车'},
        {value:17, name:'其他机动车'},
        {value:137, name:'工业燃煤'},
        {value:104, name:'道路扬尘'},
        {value:36, name:'施工扬尘'},
        {value:11, name:'其他扬尘'},
        {value:153, name:'其他工业'},
        {value:24, name:'炼油'},
        {value:23, name:'水泥'},
        {value:16, name:'钢铁'},
        {value:112, name:'其他'},
    ],
    [
        {value:124, name:'柴油车'},
        {value:123, name:'非道路移动源'},
        {value:41, name:'汽油车'},
        {value:15, name:'其他机动车'},
        {value:151, name:'工业燃煤'},
        {value:136, name:'道路扬尘'},
        {value:47, name:'施工扬尘'},
        {value:15, name:'其他扬尘'},
        {value:94, name:'其他工业'},
        {value:81, name:'钢铁'},
        {value:18, name:'水泥'},
        {value:17, name:'炼油'},
        {value:138, name:'其他'},
    ]
];
var chart1 = document.getElementById('chart1');
var chart2 = document.getElementById('chart2');
var chart3 = document.getElementById('chart3');
var chart4 = document.getElementById('chart4');
// $(".chart").width(0.225*document.documentElement.clientWidth);
// $(".chart").height(0.225*document.documentElement.clientWidth);
var option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {d}%"
    },
    legend: {
        show: false
    },
    series: [
        {
            name: 'pm2.5',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '60%'],
            label: {
                normal: {
                    position: 'inner',
                    textStyle: {
                        fontSize: 24,
                        fontWeight: 'bolder',
                    },
                    formatter: ' {b} \n  {d}%  ',
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: []
        },
        {
            name: '分类',
            type: 'pie',
            radius: ['60%', '85%'],
            label: {
                normal: {
                    textStyle: {
                        fontSize: 24,
                        fontWeight: 'bolder',
                    },
                    formatter: ' {b|{b}：} \n  {d}%  ',
                    backgroundColor: 'rgba(0,0,0,0)',
                    borderColor: 'rgba(0,0,0,0)',
                    borderWidth: 0,
                    borderRadius: 4,
                    rich: {
                        b: {
                            fontSize: 24,
                            fontWeight: 'bolder',
                        },
                    }
                }
            },
            data: []
        }
    ],
    color: [
        '#d8a9a8',
        '#40699b',
        '#7f9a48',
        '#695185',
        '#3a8ca2',
        '#cb7b38',
        '#4f80bc',
        '#bf504d',
        '#9aba59',
        '#4babc5',
        '#f69546'
    ]
};
option.series[0].data = data1[0];
option.series[1].data = data2[0];
var myChart = echarts.init(chart1);
myChart.setOption(option);
option.series[0].data = data1[1];
option.series[1].data = data2[1];
myChart = echarts.init(chart2);
myChart.setOption(option);
option.series[0].data = data1[2];
option.series[1].data = data2[2];
myChart = echarts.init(chart3);
myChart.setOption(option);
option.series[0].data = data1[3];
option.series[1].data = data2[3];
myChart = echarts.init(chart4);
myChart.setOption(option);
