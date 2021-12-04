<template>
    <div class="login-wrap">
        <div class="ms-login">
            <div class="ms-title">土耳其旅行</div>
            <el-form :model="param" :rules="rules" ref="login" label-width="0px" class="ms-content">
                <el-form-item prop="username">
                    <el-input v-model="param.username" placeholder="用户名">
                        <el-button slot="prepend" icon="el-icon-user"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                        type="password"
                        placeholder="密码"
                        v-model="param.password"
                        @keyup.enter.native="submitForm()"
                    >
                        <el-button slot="prepend" icon="el-icon-lock"></el-button>
                    </el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm()">登录</el-button>
                </div>
                <p class="login-tips">用户名admin, 密码123456</p>
            </el-form>
        </div>
    </div>
</template>

<script>

import { get, post} from '../util/http';
import { getToken, setToken} from '../util/auth';

export default {
    data: function() {
        return {
            param: {
                username: 'admin',
                password: '123456',
            },
            rules: {
                username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
            },
        };
    },
    methods: {
        submitForm() {
            // post('/login', this.param)
            //     .then((response) => {
            //         console.log(response);
            //         if (response.success){
            //             console.log('设置 token ' + response.token);
            //             setToken(response.token);
            //             this.$router.push('/');
            //         } else {
            //             this.$message.error(response.message);
            //         }
            //     })
          console.log('设置 token ' + "ERUEI4VTUI4684EYB8Y6845Y84");
          setToken("ERUEI4VTUI4684EYB8Y6845Y84");
          this.$router.push('/');
        },
    },
};
</script>

<style scoped>
.login-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(https://vue-image.oss-cn-shenzhen.aliyuncs.com/DSCF0233.JPG);
    background-size: 100%;
}
.ms-title {
    width: 100%;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    border-bottom: 1px solid #ddd;
}
.ms-login {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 350px;
    margin: -190px 0 0 -175px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.3);
    overflow: hidden;
}
.ms-content {
    padding: 30px 30px;
}
.login-btn {
    text-align: center;
}
.login-btn button {
    width: 100%;
    height: 36px;
    margin-bottom: 10px;
}
.login-tips {
    font-size: 12px;
    line-height: 30px;
    color: #fff;
}
</style>
