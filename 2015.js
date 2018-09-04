data = [
    [
        {
            value:27.0,
            name:'燃煤',
            itemStyle: {
                color: '#4f81bd'
            }
        },
        {
            value:24.0,
            name:'扬尘',
            itemStyle: {
                color: '#c0504d'
            }

        },
        {
            value:18.0,
            name:'工业生产',
            itemStyle: {
                color: '#9aba59'
            }
        },
        {
            value:15.0,
            name:'机动车',
            itemStyle: {
                color: '#8064a1'
            }
        },
        {
            value:16.0,
            name:'其他',
            itemStyle: {
                color: '#4babc5'
            }
        }
    ],
    [
        {
            value:29.0,
            name:'燃煤',
            itemStyle: {
                color: '#4f81bd'
            }
        },
        {
            value:18.0,
            name:'扬尘',
            itemStyle: {
                color: '#c0504d'
            }

        },
        {
            value:25.0,
            name:'工业生产',
            itemStyle: {
                color: '#9aba59'
            }
        },
        {
            value:22.0,
            name:'机动车',
            itemStyle: {
                color: '#8064a1'
            }
        },
        {
            value:6.0,
            name:'其他',
            itemStyle: {
                color: '#4babc5'
            }
        }
    ],
];
var chart5 = document.getElementById('chart5');
var chart6 = document.getElementById('chart6');
// $(".chart").width(0.3*document.documentElement.clientWidth);
// $(".chart").height(0.3*document.documentElement.clientWidth);
option = {
    title: {
        show: false
    },

    tooltip : {
        trigger: 'item',
        formatter: "{b} : {d}%"
    },

    series : [
        {
            name:'访问来源',
            type:'pie',
            radius : '75%',
            center: ['50%', '50%'],
            data:[],
            labelLine: {
                normal: {
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            label: {
                normal: {
                    position: 'inner',
                    textStyle: {
                        fontSize: 24,
                        fontWeight: 'bolder',
                    },
                    formatter: ' {b} \n  {d}%  ',
                }
            }
        }
    ]
};
option.series[0].data = data[0];
var myChart = echarts.init(chart5);
myChart.setOption(option);
option.series[0].data = data[1];
var myChart = echarts.init(chart6);
myChart.setOption(option);
