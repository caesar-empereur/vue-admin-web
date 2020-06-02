<template>
    <div>

        <div class="container" align="center">

            <el-row :gutter="20">

                <el-col :xs="24" :sm="24" :lg="24">
                    <el-upload
                            list-type="picture-card"
                            :disabled="true"
                            :file-list="fileList"
                            style="margin-top: 2%">
                    </el-upload>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :xs="24" :sm="24" :lg="24" style="text-align: center">
                    <el-carousel
                            :autoplay="true"
                            :interval="3000"
                            type="card"
                            height="580px"
                            style="margin-top: 4%">
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
                    'https://vue-image.oss-cn-shenzhen.aliyuncs.com/DSCF0294.JPG'
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
            console.log(this.fileList);

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
