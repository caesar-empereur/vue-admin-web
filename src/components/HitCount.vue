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

                indexCountData:[],
                sellCountData:[],
                secCountData:[],

                websock: null
            }
        },
        mounted() {
            this.initWebSocket();
        },
        beforeDestroy() {
            this.websock.close()
        },
        methods: {
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
                        data: ['首页访问量', '促销页面访问量', '秒杀页面访问量']
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
                            name: '首页访问量',
                            type: 'line',
                            stack: '总量',
                            areaStyle: {},
                            data: this.indexCountData
                        },
                        {
                            name: '促销页面访问量',
                            type: 'line',
                            stack: '总量',
                            areaStyle: {},
                            data: this.sellCountData
                        },
                        {
                            name: '秒杀页面访问量',
                            type: 'line',
                            stack: '总量',
                            areaStyle: {},
                            data: this.secCountData
                        }
                    ]
                };

                myChart.setOption(option, true);
            },
            initWebSocket(){
                const wsuri = "wss://47.113.188.83:9090/wss";
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

<style scoped>

    #line-box {
        width: 1400px;
        height: 800px;
        margin: 0 auto;
        margin-bottom:0;
    }
</style>
