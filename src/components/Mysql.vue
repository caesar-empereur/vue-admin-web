<template>
    <div>
        <div class="container" style="height: 100%">
            <div id="line-box">
            </div>
        </div>
    </div>
</template>

<script>

    import { get, post } from '../util/http';
    import echarts from 'echarts'

    const API_ROOT = process.env.API_ROOT;

    export default {

        data() {
            return {
                timer: '',
                xAxisTime: [],

                queryTimeData:[],
                dealTimeData:[],
                resTimeData:[],

                websock: null
            }
        },
        mounted() {
            this.initWebSocket();

            for (var i=0;i<20;i++){
                this.xAxisTime.push('2020-04-'+i);
                this.queryTimeData.push(this.randomInteger());
                this.dealTimeData.push(this.randomInteger());
                this.resTimeData.push(this.randomInteger());
            }
        },
        beforeDestroy() {
            this.websock.close()
        },
        methods: {
            randomInteger() {
                return Math.floor(Math.random() * (500 - 400)) + 400;
            },
            drawLine() {

                let myChart = echarts.init(document.getElementById('line-box'),'light');

                let option= {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            label: {
                                backgroundColor: '#6a7985'
                            }
                        }
                    },
                    legend: {
                        data: ['查询时间', '处理时间', '响应时间']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            boundaryGap: false,
                            data: this.xAxisTime
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            name: '查询时间',
                            type: 'line',
                            stack: '总量',
                            areaStyle: {},
                            data: this.queryTimeData
                        },
                        {
                            name: '处理时间',
                            type: 'line',
                            stack: '总量',
                            areaStyle: {},
                            data: this.dealTimeData
                        },
                        {
                            name: '响应时间',
                            type: 'line',
                            stack: '总量',
                            areaStyle: {},
                            data: this.resTimeData
                        }
                    ]
                };

                myChart.setOption(option, true);
            },
            initWebSocket(){
                const wsuri = "wss://constantinopolis.top/wss";
                this.websock = new WebSocket(wsuri);
                this.websock.onmessage = this.onMessage;
                this.websock.onopen = this.onOpen;
            },
            onOpen(){
                console.log("建立连接")
            },
            onMessage(msg){
                console.log('接收到消息');
                var data = JSON.parse(msg.data);
                console.log(data);

                this.queryTimeData.shift();
                this.dealTimeData.shift();
                this.resTimeData.shift();

                this.queryTimeData.push(data.queryTime);
                this.dealTimeData.push(data.dealTime);
                this.resTimeData.push(data.resTime);

                this.xAxisTime.shift();
                this.xAxisTime.push(data.date);

                this.drawLine();
            }
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
