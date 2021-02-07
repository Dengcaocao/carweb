<template>
    <button type="button" class="validation" :class="{'no-active': disabled}" :disabled="disabled" @click="getCode">{{disabled ? '剩余'+updateTiem+'秒' : '获取验证码'}}</button>
</template>
<script>
import {GetCode} from "@/api/login.js"
export default {
    props: {
        form: Object
    },
    data() {
        return {
            // 验证码
            code: '',
            disabled: false,
            timer: null,
            time: 60
        }
    },
    computed: {
        // 跟新时间
        updateTiem() {
            return this.time
        }
    },
    methods: {
        getCode() {
            GetCode(this.form).then((res) => {
                let {resCode,message} = res.data
                if(resCode === 0) {
                    /**
                     * 
                     * 2.显示提示消息，禁用60s
                     */
                    let title = message.split('，')[0]
                    this.code = message.split('：')[1].trim()
                    this.disabled = true
                    // 刷新时间
                    this.timer = setInterval(() => {
                        if(this.time <= 0) {
                            this.disabled = false
                            this.time = 60
                            clearInterval(this.timer)
                        }
                        this.time --
                    },1000)
                    this.$notify({
                        title,
                        message: this.code,
                        type: 'success'
                    })
                }else {
                    this.$notify({
                        title: '提示',
                        message,
                        type: 'error'
                    })
                }
            })
        }
    }
}
</script>
<style scoped>
    .no-active{
        color: #666 !important;
    }
</style>