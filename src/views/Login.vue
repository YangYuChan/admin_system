<template>
    <div class="login-container">
        <div class="login-content">
            <div class="login-box">
                <header class="login-title">{{ $t('login.title') }}</header>
                <section class="login-panel">
                    <el-form :label-position="labelPosition" label-width="80px" :model="loginForm" ref="loginForm" :rules="rules">
                        <el-form-item :label="$t('login.username')" prop="username">
                            <el-input v-model="loginForm.username"></el-input>
                        </el-form-item>
                        <el-form-item :label="$t('login.password')" prop="password">
                            <el-input v-model="loginForm.password" type="password"></el-input>
                        </el-form-item>
                         <el-form-item>
                            <el-button type="primary" @click="submitForm('loginForm')">{{ $t('login.logIn')}}</el-button>
                            <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
                        </el-form-item>
                     </el-form>
                     <div class="forget_password">{{ $t('login.forgetpwd')}} <a href="">{{ $t('login.here')}}</a> </div>
                     <div class="change-lang">
                        <el-radio-group v-model="lang" size="small" @change="changeLang(lang)">
                            <el-radio label="zh">
                                简体中文
                            </el-radio>
                            <el-radio label="en">
                                English
                            </el-radio>
                         </el-radio-group>
                        </div>
                </section>
            </div>
            <img src="../assets/img/login_bg.jpg" alt="" class="bg">
        </div>
    </div>
</template>
<script>
    import _globel from '@/assets/js/common'
    import md5 from  '@/assets/js/md5'
    import Cookies from 'js-cookie'  
    const chooseLanguage = Cookies.get('language');
    var vaildate;
    if(chooseLanguage === 'en'){
        vaildate = require('@/utils/vaildate_en')
    } else {
        vaildate = require('@/utils/vaildate_zh')
    }
    // import { validUsername, validPassword } from '@/utils/vaildate_zh'  // 解构赋值
    import { mapState, mapMutations } from 'vuex'
  export default {
    data() {
      return {
        labelPosition: 'top',
        path:_globel.path,
        md5: md5.hex_md5,
        lang: 'zh',
        loginForm: {
          username: '',
          password: '',
        },
        rules: {
          username: [
            { required: true, validator: vaildate.validUsername, trigger: 'blur' },
          ],
          password: [
            { required: true, validator: vaildate.validPassword, trigger: 'blur' }
          ],
        },
      }
    },
    computed:{
        language() {
            return this.$store.getters.language
        }
    },
    methods:{
        ...mapMutations(['setLanguage']),
        changeLang(lang) {
            this.$i18n.locale = lang
            this.$store.dispatch('app/setLanguage', lang)
            if(lang === 'en'){
                console.log('en')
                vaildate = require('@/utils/vaildate_en')
            } else {
                console.log('zh')
                vaildate = require('@/utils/vaildate_zh')
            }
            this.$message({
                message: 'Switch Language Success',
                type: 'success'
            })
        },
        submitForm(loginForm){  
            let pwd = md5(this.loginForm.password)
            this.$refs[loginForm].validate((valid) => {
                if (valid) {
                    this.$axios({
                        url: this.path + '/api/Report/CheckLogin',
                        method: 'post',
                        data: {
                            username:this.loginForm.username,
                            password:pwd
                        },
                        headers: {
                            'Content-Type': 'application/json',
                            'signature':'6854a0b52b2a040be38ba973cdb3064b'
                        }
                    }).then(res => {
                        if(res.data.Success == true){
                            this.$message({
                                message: res.data.Msg,
                                type: 'success'
                            });
                            localStorage.setItem("token",res.data.Data.token);
                            this.$router.push("/merchantReport")
                        } else {
                            this.$message({
                                message: res.data.Msg,
                                type: 'error'
                            });
                        }

                    }).catch(error => {

                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(){

        },
    }
  }
</script>
<style lang="scss" scoped>
.login-box{
    position: relative;
    width: 400px;
    margin: 150px auto;
    .logo{
            text-align: center;
            img{
                width: 100px;
            }
        }
    .login-title{
        font-size: 32px;
        height: 42px;
        color: #ffffff;
        text-align: center;
        margin: 30px auto;
        font-weight: 100;
    }
    .login-panel{
        height: 400px;
        background: rgba(0,0,0,0.4);
        padding: 30px 50px;
        text-align: left;
        .el-form-item{
            color: #ffffff;
            margin-bottom: 12px;
        } 
        .el-button--primary{
            width: 100%;
            margin-top: 30px;
        }
        .forget_password{
            margin-top: 30px;
            color: #dddddd;
            height: 20px;
            a{
                color: #ffffff;
                &:hover{
                    text-decoration: underline
                }
            }
        }
        .change-lang{
            color: #dddddd;
            margin-top: 15px;
            .font{
                display: inline-block;
                width: 100px;
            }
        }
    }
}
.bg {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -99;
}
</style>
