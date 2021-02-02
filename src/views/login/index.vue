<template>
  <div class="login">
    <el-dialog title="登录" 
        :visible.sync="dialogVisible_login" 
        width="600"
        :close-on-click-modal="false"
    >
      <el-form class="form-ui" :moedl="form">
        <el-form-item>
          <el-input
            placeholder="请输入用户名或邮箱"
            v-model="form.username"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="验证码"></el-input>
          <validation></validation>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
import {GetCode} from "@/api/login.js"
export default {
  data() {
    return {
      dialogVisible_login: true,
      form: {
        username: "1536698087@qq.com",
      },
    };
  },
  methods: {
    submitForm() {
      GetCode(this.form).then((res) => {
        console.log(res);
      });
    },
    // close() {
    //     this.$router.push('/')
    //     console.log('进入主页',this.$router)
    // }
  },
};
</script>