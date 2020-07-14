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
                    {name:'在那一天的清晨，无数的眼睛，都曾看见这金色的曙光', url: 'https://vue-image.oss-cn-shenzhen.aliyuncs.com/DSCF0227.JPG'},
                    {name:'当气球升起的那一刻，有关飞行的梦想',    url: 'https://vue-image.oss-cn-shenzhen.aliyuncs.com/DSCF0229.JPG'},
                    {name:'那时候我们有梦，关于文学，关于爱情，关于穿越世界的旅行', url: 'https://vue-image.oss-cn-shenzhen.aliyuncs.com/DSCF0233.JPG'},
                    {name:'背起自己小小的行囊，走到别人无法企及的远方', url: 'https://vue-image.oss-cn-shenzhen.aliyuncs.com/DSCF0237.JPG'},
                    {name:'每一次远航归来，都有很多故事可以诉说', url: 'https://vue-image.oss-cn-shenzhen.aliyuncs.com/DSCF0260.JPG'},
                    {name:'飞屋环游记', url: 'https://vue-image.oss-cn-shenzhen.aliyuncs.com/DSCF0289.JPG'},
                    {name:'爱自己是终生浪漫的开始', url: 'https://vue-image.oss-cn-shenzhen.aliyuncs.com/DSCF0294.JPG'},
                    {name:'去冒险吧，像他们一样，趁你还年轻，趁她还未老', url: 'https://vue-image.oss-cn-shenzhen.aliyuncs.com/DSCF0337.JPG'},
                    {name:'黎明的黑暗褪去，金色的曙光笼罩着地平线', url: 'https://vue-image.oss-cn-shenzhen.aliyuncs.com/DSCF0348.JPG'},
                    {name:'地中海的日出，翻滚着蔚蓝色的波浪，闪耀着金色的晨光', url: 'https://vue-image.oss-cn-shenzhen.aliyuncs.com/DSCF0465.JPG'},
                    {name:'我想和你一起生活，在这海边小镇，共享无尽的日出日落', url: 'https://vue-image.oss-cn-shenzhen.aliyuncs.com/DSCF0393.JPG'},
                    {name:'我独自一人坐在海边......', url: 'https://vue-image.oss-cn-shenzhen.aliyuncs.com/DSCF0395.JPG'},
                    {name:'我站起来，看见蓝色的大海和帆影', url: 'https://vue-image.oss-cn-shenzhen.aliyuncs.com/DSCF0404.JPG'},
                    {name:'静下来了，那里的宁静是缓慢降临的', url: 'https://vue-image.oss-cn-shenzhen.aliyuncs.com/DSCF0411.JPG'},
                    {name:'当蓝色的夜坠落在海边时，没人看见我们手牵着手', url: 'https://vue-image.oss-cn-shenzhen.aliyuncs.com/DSCF0423.JPG'},
                    {name:'我就要动身离去，每一轮日夜，我都听到海水拍打海岸的声音', url: 'https://vue-image.oss-cn-shenzhen.aliyuncs.com/DSCF0445.JPG'},
                    {name:'圣索菲亚大教堂，从拜占庭到奥斯曼，从君士坦丁堡到伊斯坦布尔，我们一起在这里祈祷过', url: 'https://vue-image.oss-cn-shenzhen.aliyuncs.com/20200602200009.jpg'},
                    {name:'即使最伟大的奥斯曼建筑也带有某种简单的朴素，表明帝国终结的忧伤，痛苦地面对欧洲逐渐消失的目光，' +
                    '面对不治之症般必须忍受的老式穷困。认命的态度滋养了伊斯坦布尔的内视灵魂', url: 'https://vue-image.oss-cn-shenzhen.aliyuncs.com/20200602200024.jpg'},
                    {name:'奥斯曼帝国瓦解后，世界几乎遗忘了伊斯坦布尔的存在。我出生的城市在它两千年的历史中从不曾如此贫穷、破败、孤立。她对我而言一直是个废墟之城，' +
                    '充满帝国斜阳的忧伤。我的一生不是对抗这种忧伤，就是让她成为自己的忧伤', url: 'https://vue-image.oss-cn-shenzhen.aliyuncs.com/20200610095225.jpg'},
                    {name:'戈蒂耶也在脏乱之中发现了忧伤之美。他有着浪漫主义文学对希腊罗马废墟和消失的文明遗迹及其威严所具有的兴奋心情', url: 'https://vue-image.oss-cn-shenzhen.aliyuncs.com/20200602200101.jpg'}
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
