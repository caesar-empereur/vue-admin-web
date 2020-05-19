<template>
    <div>
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

                <el-col :xs="24" :sm="24" :lg="12">
                    <div id="pie-box" class="chart-wrapper" align="center">
                    </div>
                </el-col>

                <el-col :xs="24" :sm="24" :lg="12">
                    <div id="ring-box" class="chart-wrapper" align="center">
                    </div>
                </el-col>

            </el-row>
        </div>
    </div>
</template>

<script>

    import echarts from 'echarts'

    export default {
    data() {
        return {}
    },
    mounted() {
        let barOptions = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                bottom: 'bottom',
                data: ['Industries', 'Technology', 'Forex', 'Gold', 'Forecasts']
            },
            calculable: true,
            series: [
                {
                    name: 'WEEKLY WRITE ARTICLES',
                    type: 'pie',
                    roseType: 'radius',
                    radius: [15, 95],
                    center: ['50%', '38%'],
                    data: [
                        { value: 320, name: 'Industries' },
                        { value: 240, name: 'Technology' },
                        { value: 149, name: 'Forex' },
                        { value: 100, name: 'Gold' },
                        { value: 59, name: 'Forecasts' }
                    ],
                    animationEasing: 'cubicInOut',
                    animationDuration: 2600
                }
            ]
        };

        let pieOption = {
            legend: {},
            tooltip: {},
            dataset: {
                source: [
                    ['product', '2015', '2016', '2017'],
                    ['Matcha Latte', 43.3, 85.8, 93.7],
                    ['Milk Tea', 83.1, 73.4, 55.1],
                    ['Cheese Cocoa', 86.4, 65.2, 82.5],
                    ['Walnut Brownie', 72.4, 53.9, 39.1]
                ]
            },
            xAxis: {type: 'category'},
            yAxis: {},
            series: [
                {type: 'bar'},
                {type: 'bar'},
                {type: 'bar'}
            ]
        };

        let lineOption = {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['邮件营销', '联盟广告', '视频广告']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '邮件营销',
                    type: 'line',
                    stack: '总量',
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: '联盟广告',
                    type: 'line',
                    stack: '总量',
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: '视频广告',
                    type: 'line',
                    stack: '总量',
                    data: [150, 232, 201, 154, 190, 330, 410]
                }
            ]
        };

        let ringOption = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
                bottom: 'bottom',
                data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        {value: 335, name: '直接访问'},
                        {value: 310, name: '邮件营销'},
                        {value: 234, name: '联盟广告'},
                        {value: 135, name: '视频广告'},
                        {value: 1548, name: '搜索引擎'}
                    ]
                }
            ]
        };

        let barChart = echarts.init(document.getElementById('bar-box'),'light');
        barChart.setOption(barOptions, true);

        let lineChart = echarts.init(document.getElementById('line-box'),'light');
        lineChart.setOption(lineOption, true);

        let pieChart = echarts.init(document.getElementById('pie-box'),'light');
        pieChart.setOption(pieOption, true);

        let ringChart = echarts.init(document.getElementById('ring-box'),'light');
        ringChart.setOption(ringOption, true);

        window.addEventListener('resize', function () {
            barChart.resize();
            lineChart.resize();
            pieChart.resize();
            ringChart.resize();

        })
    }
};
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
