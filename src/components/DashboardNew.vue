<template>
    <div>

        <div class="container" align="center">

            <el-row :gutter="20">

                <el-col :xs="24" :sm="24" :lg="24">
                    <el-upload
                            list-type="picture-card"
                            :disabled="true"
                            :file-list="fileList">
                    </el-upload>


                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :xs="24" :sm="24" :lg="24" style="text-align: center">
                    <el-carousel
                            :autoplay="true"
                            :interval="1000"
                            type="card"
                            height="530px"
                            style="margin-top: 1%">
                        <el-carousel-item v-for="item in imageList" :key="item">
                            <el-image :src=item></el-image>
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
                    'https://vue-image.oss-cn-shenzhen.aliyuncs.com/DSCF0395.JPG',
                    'https://vue-image.oss-cn-shenzhen.aliyuncs.com/DSCF0411.JPG',
                    'https://vue-image.oss-cn-shenzhen.aliyuncs.com/DSCF0430.JPG',
                    'https://vue-image.oss-cn-shenzhen.aliyuncs.com/DSCF0445.JPG',
                    'https://vue-image.oss-cn-shenzhen.aliyuncs.com/DSCF0227.JPG',
                    'https://vue-image.oss-cn-shenzhen.aliyuncs.com/DSCF0229.JPG',
                    'https://vue-image.oss-cn-shenzhen.aliyuncs.com/DSCF0233.JPG',
                    'https://vue-image.oss-cn-shenzhen.aliyuncs.com/DSCF0237.JPG',
                    'https://vue-image.oss-cn-shenzhen.aliyuncs.com/DSCF0260.JPG',
                    'https://vue-image.oss-cn-shenzhen.aliyuncs.com/DSCF0289.JPG',
                    'https://vue-image.oss-cn-shenzhen.aliyuncs.com/DSCF0294.JPG',
                    'https://vue-image.oss-cn-shenzhen.aliyuncs.com/DSCF0307.JPG',
                    'https://vue-image.oss-cn-shenzhen.aliyuncs.com/DSCF0337.JPG',
                    'https://vue-image.oss-cn-shenzhen.aliyuncs.com/DSCF0392.JPG',
                    'https://vue-image.oss-cn-shenzhen.aliyuncs.com/DSCF0393.JPG'
                ],
                dialogImageUrl: 'https://vue-image.oss-cn-shenzhen.aliyuncs.com/DSCF0395.JPG',
                dialogVisible: false
            }
        },
        mounted() {
            this.imageList.forEach((item, index, arr) => {
                let file={};
                file.url=item;
                file.name='asdasd'+index;
                this.fileList.push(file);
            })


            window.addEventListener('resize', function () {
//                barChart.resize();
            })
        }
    }
</script>
<!--<style rel="stylesheet/scss" lang="scss" scoped>-->
    <!--.container {-->
        <!--padding: 20px 20px 20px 20px;-->
        <!--background-color: rgb(240, 242, 245);-->
        <!--.chart-wrapper {-->
            <!--width: 100%;-->
            <!--/*height: 380px;*/-->
            <!--background: #fff;-->
            <!--margin-bottom: 20px;-->
        <!--}-->
    <!--}-->
<!--</style>-->
