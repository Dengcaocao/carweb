<template>
    <div class="cars" @click="to">车辆列表</div>
</template>
<script>
export default {
    methods: {
        to(){
            this.$router.push('/user')
        }
    }
}
</script>
<style scoped>
    .cars{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99;
    }
</style>