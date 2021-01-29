<template>
  <div class="password">
    <!-- 头部返回 -->
    <back title="修改登录密码"></back>
    <!-- 表单 -->
    <div class="form-ui">
      <el-form :model="ruleForm" ref="ruleForm" class="demo-ruleForm">
        <el-form-item>
          <el-input v-model="ruleForm.oldpwd" placeholder="原始密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="ruleForm.newpwd" placeholder="新密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="ruleForm.checkpwd" placeholder="确认密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="ruleForm.validation" placeholder="验证码"></el-input>
          <validation></validation>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">确定</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        oldpwd: "",
        newpwd: "",
        checkpwd: "",
        validation: ""
      },
    }
  },
}
</script>