<template>
    <div>

        <div class="container" align="center">

            <el-row :gutter="20">

                <el-col :xs="24" :sm="24" :lg="24">
                    <el-upload
                            action="https://jsonplaceholder.typicode.com/posts/"
                            list-type="picture-card"
                            :disabled="true"
                            :file-list="fileList"
                            style="margin-top: 2%">
                    </el-upload>
                </el-col>
            </el-row>

            <el-row :gutter="20">

                <el-col :xs="24" :sm="24" :lg="24" style="text-align: center">
                    <h2>{{text}}</h2>
                    <el-carousel
                            @change="changeImage"
                            :autoplay="true"
                            :interval="3000"
                            type="card"
                            height="580px"
                            style="margin-top: 2%">

                        <el-carousel-item v-for="item in imageList" :key="item.url">

                            <el-image :src=item.url></el-image>

                        </el-carousel-item>

                    </el-carousel>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>

    import echarts from 'echarts'

    export default {

        data() {
            return {
                fileList: [],

                imageList: [
                    {name:'卡帕多奇亚的日出，光线很柔和', url: 'https://vue-image.oss-cn-shenzhen.aliyuncs.com/DSCF0227.JPG'},
                    {name:'当气球升起的那一刻......',    url: 'https://vue-image.oss-cn-shenzhen.aliyuncs.com/DSCF0229.JPG'},
                    {name:'气球升的很高很高，那是我离天空最近的一次', url: 'https://vue-image.oss-cn-shenzhen.aliyuncs.com/DSCF0233.JPG'},
                    {name:'好想坐着热气球去飞行', url: 'https://vue-image.oss-cn-shenzhen.aliyuncs.com/DSCF0237.JPG'},
                    {name:'热气球从远远的地方落在草地上', url: 'https://vue-image.oss-cn-shenzhen.aliyuncs.com/DSCF0260.JPG'},
                    {name:'眼前的景色，像飞屋环游记一样', url: 'https://vue-image.oss-cn-shenzhen.aliyuncs.com/DSCF0289.JPG'},
                    {name:'很多热气球飘起来了，像一幅油画一样', url: 'https://vue-image.oss-cn-shenzhen.aliyuncs.com/DSCF0294.JPG'},
                    {name:'格雷梅的6点，日出的光线很梦幻', url: 'https://vue-image.oss-cn-shenzhen.aliyuncs.com/DSCF0337.JPG'},
                    {name:'热气球从这个山头飘到另一个山头', url: 'https://vue-image.oss-cn-shenzhen.aliyuncs.com/DSCF0348.JPG'},
                    {name:'地中海的日出', url: 'https://vue-image.oss-cn-shenzhen.aliyuncs.com/DSCF0465.JPG'},
                    {name:'安塔利亚的海，蓝的很纯粹', url: 'https://vue-image.oss-cn-shenzhen.aliyuncs.com/DSCF0393.JPG'},
                    {name:'我独自一人坐在海边，思考着思考着......', url: 'https://vue-image.oss-cn-shenzhen.aliyuncs.com/DSCF0395.JPG'},
                    {name:'我站起来，向大海远远的看去，看不到边际', url: 'https://vue-image.oss-cn-shenzhen.aliyuncs.com/DSCF0404.JPG'},
                    {name:'静静的思考，想起了我的童年，青春，梦想', url: 'https://vue-image.oss-cn-shenzhen.aliyuncs.com/DSCF0411.JPG'},
                    {name:'想起了所有的过往，回头看见了你', url: 'https://vue-image.oss-cn-shenzhen.aliyuncs.com/DSCF0423.JPG'},
                    {name:'日落了，灯火亮起来了，我要回家了', url: 'https://vue-image.oss-cn-shenzhen.aliyuncs.com/DSCF0445.JPG'},
                    {name:'圣索菲亚大教堂，从拜占庭到奥斯曼，我们一起在这里祈祷过', url: 'https://vue-image.oss-cn-shenzhen.aliyuncs.com/20200602200009.jpg'},
                    {name:'日落的博斯普鲁斯海峡，海风很凉爽', url: 'https://vue-image.oss-cn-shenzhen.aliyuncs.com/20200602200024.jpg'},
                    {name:'伊斯坦布尔的独立大街，那是奥尔汗-帕穆克出生的地方，他写下了土耳其民族对西方的思考', url: 'https://vue-image.oss-cn-shenzhen.aliyuncs.com/20200602200101.jpg'}
                ],
                text: ''
            }
        },
        mounted() {
            this.imageList.forEach((item, index, arr) => {
                if (this.fileList && this.fileList.length<10){
                    this.fileList.push(item);
                }
            })
        },
        methods:{
            changeImage(index) {
                console.log(this.imageList[index].url);
                this.text = this.imageList[index].name;
            }
        }
    }
</script>
