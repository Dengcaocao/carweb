<template>
  <div class="login">
    <el-dialog
      title="登录"
      :visible.sync="dialogVisible_login"
      width="600"
      :close-on-click-modal="false"
    >
      <el-form :model="form" :rules="rules" ref="loginForm" class="form-ui">
        <el-form-item prop="username">
          <el-input
            placeholder="请输入用户名或邮箱"
            v-model="form.username"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            placeholder="密码"
            v-model="form.password"
          ></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input placeholder="验证码" v-model="form.code"></el-input>
          <validation :form="form"></validation>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login('loginForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
import sha1 from "js-sha1";
import {setToken,setUsername} from "@/utils/cookies.js"
import { Login } from "@/api/login.js";
export default {
  data() {
    return {
      dialogVisible_login: true,
      form: {
        username: "1536698087@qq.com",
        password: "",
        code: "",
      },
      // 验证表单
      rules: {
        username: [{ required: true, message: "请输入邮箱", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
      }
    }
  },
  methods: {
    login(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let form = {
            username: this.form.username,
            password: this.form.password,
            code: this.form.code,
          }
          // 对密码进行加密
          form.password = sha1(form.password);
          Login(form).then((res) => {
            let {data,message,resCode} = res.data
            if(resCode === 0) {
              /**
               * 登录成功
               * 1.设置cookies
               * 2.提示用户
               * 3.返回首页
               */
              // 写入token
              setToken(data.token)
              // 写入用户名
              setUsername(data.username)
              this.$router.push('/')
              this.$notify({
                title: '登录成功',
                message: '',
                type: 'success'
              })
            }else {
              // 登录失败
              this.$notify({
                  title: '登录失败',
                  message: message,
                  type: 'error'
              })
            }
          })
        } else {
          return false
        }
      })
    }
  }
}
</script>