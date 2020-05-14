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
            myChart.hideLoading();
            let option = {
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
            myChart.setOption(option);
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
