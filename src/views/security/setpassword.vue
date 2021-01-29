<template>
  <div class="setpassword">
    <!-- 头部返回 -->
    <back title="设置资金密码"></back>
    <!-- 表单 -->
    <div class="form-ui">
      <el-form :model="ruleForm" ref="ruleForm" class="demo-ruleForm">
        <el-form-item>
          <el-input v-model="ruleForm.pwd" placeholder=""></el-input>
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
        pwd: "",
        validation: ""
      },
    }
  },
}
</script>