<template>
    <div>
        <div class="container" align="center">
            <el-row :gutter="20">
                <el-col :xs="24" :sm="24" :lg="12">
                    <div id="line-box" class="chart-wrapper" align="center">
                    </div>
                </el-col>

                <el-col :xs="24" :sm="24" :lg="12">
                    <div id="line-box1" class="chart-wrapper" align="center">
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :xs="24" :sm="24" :lg="24">
                    <div id="line-box2" class="chart-wrapper-one" align="center">
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>

    import { get, post } from '../util/http';
    import echarts from 'echarts'

    const API_ROOT = process.env.API_ROOT;
    const WS_ROOT = process.env.WS_ROOT;

    export default {

        data() {
            return {
                timer: '',
                xAxisTime: [],

                indexCountData:[],
                sellCountData:[],
                secCountData:[],

                websock: null
            }
        },
        mounted() {
            this.initWebSocket();

            let myChart = echarts.init(document.getElementById('line-box'),'light');
            let myChart1 = echarts.init(document.getElementById('line-box1'),'light');
            let myChart2 = echarts.init(document.getElementById('line-box2'),'light');

            window.addEventListener('resize', function () {
                myChart.resize();
                myChart1.resize();
                myChart2.resize();
            })
        },
        beforeDestroy() {
            this.websock.close()
        },
        methods: {

            drawLine() {

                let option= {
                    title:{
                        text: '首页优惠券点击量'
                    },
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
                        data: ['iphone xs 点击量', 'iphone 11 点击量']
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
                            name: 'iphone xs 点击量',
                            type: 'line',
                            stack: '总量',
                            data: this.indexCountData
                        },
                        {
                            name: 'iphone 11 点击量',
                            type: 'line',
                            stack: '总量',
                            data: this.sellCountData
                        }
                    ]
                };
                let option1= {
                    title:{
                        text: '热销商品访问量'
                    },
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
                        data: ['电脑', '手机', '平板']
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
                            name: '电脑',
                            type: 'line',
                            stack: '总量',
                            areaStyle: {},
                            data: this.indexCountData
                        },
                        {
                            name: '手机',
                            type: 'line',
                            stack: '总量',
                            areaStyle: {},
                            data: this.sellCountData
                        },
                        {
                            name: '平板',
                            type: 'line',
                            stack: '总量',
                            areaStyle: {},
                            data: this.secCountData
                        }
                    ]
                };

                let option2 = {
                    title:{
                        text: '秒杀活动成交数'
                    },
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
                        data: ['ipad 秒杀成交数', 'mac book 秒杀成交数', 'mac pro 秒杀成交数']
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
                            name: 'ipad 秒杀成交数',
                            type: 'line',
                            stack: '总量',
                            data: this.indexCountData
                        },
                        {
                            name: 'mac book 秒杀成交数',
                            type: 'line',
                            stack: '总量',
                            data: this.sellCountData
                        },
                        {
                            name: 'mac pro 秒杀成交数',
                            type: 'line',
                            stack: '总量',
                            data: this.secCountData
                        }
                    ]
                };

                let myChart = echarts.init(document.getElementById('line-box'),'light');
                let myChart1 = echarts.init(document.getElementById('line-box1'),'light');
                let myChart2 = echarts.init(document.getElementById('line-box2'),'light');


                myChart.setOption(option, true);
                myChart1.setOption(option1, true);
                myChart2.setOption(option2, true);
            },
            initWebSocket(){
                this.websock = new WebSocket(WS_ROOT);
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


                if (this.xAxisTime.length >= 15){
                    this.indexCountData.shift();
                    this.sellCountData.shift();
                    this.secCountData.shift();
                    this.xAxisTime.shift();
                }

                this.indexCountData.push(data.indexCount);
                this.sellCountData.push(data.sellCount);
                this.secCountData.push(data.secCount);


                var date = new Date(data.currTime);

                var hour = date.getHours()<10?'0'+date.getHours():date.getHours();
                var minute = date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes();
                var second = date.getSeconds()<10?'0'+date.getSeconds():date.getSeconds();


                this.xAxisTime.push(hour + ':'+minute + ':'+second);

                this.drawLine();
            }
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
        .chart-wrapper-one {
            width: 100%;
            height: 380px;
            background: #fff;
        }
    }
</style>
