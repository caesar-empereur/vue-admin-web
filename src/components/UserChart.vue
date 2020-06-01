<template>
    <div>
        <!--<div class="container" style="height: 100%">-->
            <!--<div id="line-box">-->
            <!--</div>-->
        <!--</div>-->

        <div class="container" align="center">
            <el-row :gutter="20">

                <el-col :xs="24" :sm="24" :lg="12">
                    <div id="bar-box" class="chart-wrapper" align="center">
                    </div>
                </el-col>
                <el-col :xs="24" :sm="24" :lg="12">
                    <div id="line-box" class="chart-wrapper" align="center">
                    </div>
                </el-col>
            </el-row>

            <el-row :gutter="20">

                <el-col :xs="24" :sm="24" :lg="24">
                    <div id="pie-box" class="chart-wrapper" align="center">
                    </div>
                </el-col>

            </el-row>
        </div>
    </div>
</template>

<script>

    import echarts from 'echarts'
    import response from '../assets/json/Echart1.json'

    export default {

        data() {
            return {}
        },
        mounted() {
            let barOption = {
                title: {
                    text: '南丁格尔玫瑰图',
                    subtext: '纯属虚构',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                legend: {
                    left: 'center',
                    top: 'bottom',
                    data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
                },
                toolbox: {
                    show: true,
                    feature: {
                        mark: {show: true},
                        dataView: {show: true, readOnly: false},
                        magicType: {
                            show: true,
                            type: ['pie', 'funnel']
                        },
                        restore: {show: true},
                        saveAsImage: {show: true}
                    }
                },
                series: [
                    {
                        name: '半径模式',
                        type: 'pie',
                        radius: [20, 110],
                        center: ['25%', '50%'],
                        roseType: 'radius',
                        label: {
                            show: false
                        },
                        emphasis: {
                            label: {
                                show: true
                            }
                        },
                        data: [
                            {value: 10, name: 'rose1'},
                            {value: 5, name: 'rose2'},
                            {value: 15, name: 'rose3'},
                            {value: 25, name: 'rose4'},
                            {value: 20, name: 'rose5'},
                            {value: 35, name: 'rose6'},
                            {value: 30, name: 'rose7'},
                            {value: 40, name: 'rose8'}
                        ]
                    },
                    {
                        name: '面积模式',
                        type: 'pie',
                        radius: [30, 110],
                        center: ['75%', '50%'],
                        roseType: 'area',
                        data: [
                            {value: 10, name: 'rose1'},
                            {value: 5, name: 'rose2'},
                            {value: 15, name: 'rose3'},
                            {value: 25, name: 'rose4'},
                            {value: 20, name: 'rose5'},
                            {value: 35, name: 'rose6'},
                            {value: 30, name: 'rose7'},
                            {value: 40, name: 'rose8'}
                        ]
                    }
                ]
            };

            let pieOption = {
                title: {
                    text: 'NPM Dependencies'
                },
                animationDurationUpdate: 1500,
                animationEasingUpdate: 'quinticInOut',
                series : [
                    {
                        type: 'graph',
                        layout: 'none',
                        data: response.nodes.map(function (node) {
                            return {
                                x: node.x,
                                y: node.y,
                                id: node.id,
                                name: node.label,
                                symbolSize: node.size,
                                itemStyle: {
                                    color: node.color
                                }
                            };
                        }),
                        edges: response.edges.map(function (edge) {
                            return {
                                source: edge.sourceID,
                                target: edge.targetID
                            };
                        }),
                        emphasis: {
                            label: {
                                position: 'right',
                                show: true
                            }
                        },
                        roam: true,
                        focusNodeAdjacency: true,
                        lineStyle: {
                            width: 0.5,
                            curveness: 0.3,
                            opacity: 0.7
                        }
                    }
                ]
            };
            let lineOption = {
                legend: {},
                tooltip: {},
                dataset: {
                    source: [
                        ['product', '2012', '2013', '2014', '2015'],
                        ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
                        ['Milk Tea', 86.5, 92.1, 85.7, 83.1],
                        ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4]
                    ]
                },
                xAxis: [
                    {type: 'category', gridIndex: 0},
                    {type: 'category', gridIndex: 1}
                ],
                yAxis: [
                    {gridIndex: 0},
                    {gridIndex: 1}
                ],
                grid: [
                    {bottom: '55%'},
                    {top: '55%'}
                ],
                series: [
                    {type: 'bar', seriesLayoutBy: 'row'},
                    {type: 'bar', seriesLayoutBy: 'row'},
                    {type: 'bar', seriesLayoutBy: 'row'},
                    {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
                    {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
                    {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
                    {type: 'bar', xAxisIndex: 1, yAxisIndex: 1}
                ]
            };

            let barChart = echarts.init(document.getElementById('bar-box'),'light');
            let pieChart = echarts.init(document.getElementById('pie-box'),'light');
            let lineChart = echarts.init(document.getElementById('line-box'),'light');



            barChart.setOption(barOption);
            pieChart.setOption(pieOption);
            lineChart.setOption(lineOption);


            window.addEventListener('resize', function () {
                barChart.resize();
                pieChart.resize();
                lineChart.resize();
            })
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .container {
        padding: 20px 20px 20px 20px;
        background-color: rgb(240, 242, 245);
        .chart-wrapper {
            width: 100%;
            height: 380px;
            background: #fff;
            margin-bottom: 20px;
        }
    }
</style>
