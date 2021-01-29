<template>
    <div class="tel">
        <!-- 返回组件 -->
        <back title="绑定手机号"></back>
        <!-- 表单 -->
        <div class="form-ui">
            <el-form :model="ruleForm" class="demo-ruleForm">
                <el-form-item>
                <el-input v-model="ruleForm.tel" placeholder="请输入手机号"></el-input>
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
                tel: '',
                validation: ''
            }
        }
    },
}
</script>