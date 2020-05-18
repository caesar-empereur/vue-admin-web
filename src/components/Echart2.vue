<template>
    <div>
        <div class="container" style="height: 100%">
            <div id="line-box">
            </div>
        </div>
    </div>
</template>

<script>

    import {get,post} from '../util/http';
    import response from '../assets/json/Echart1.json'
    import echarts from 'echarts'

    export default {

        data() {
            return {}
        },
        mounted() {
            let myChart = echarts.init(document.getElementById('line-box'),'light');
            let option = {
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
            myChart.setOption(option, true);
        }
    }
</script>

<style scoped>

    #line-box {
        width: 1400px;
        height: 800px;
        margin: 0 auto;
        margin-bottom:0;
    }
</style>
