<template>
    <div class="bank">
        <!-- 返回组件 -->
        <back title="绑定银行卡"></back>
        <!-- 表单 -->
        <div class="form-ui">
            <el-form :model="ruleForm" class="demo-ruleForm">
                <el-form-item>
                    <el-input v-model="ruleForm.name" placeholder="用户名"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="ruleForm.bankName" placeholder="请选择绑定的银行"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="ruleForm.tel" placeholder="预留手机号"></el-input>
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
                name: '',
                bankName: '',
                tel: '',
                validation: ''
            }
        }
    },
}
</script>