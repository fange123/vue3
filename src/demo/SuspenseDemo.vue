<template>
<h1>{{ result }}</h1>
</template>

<script lang='ts'>
import {defineComponent} from 'vue'
export default defineComponent({
    name:'Suspense',
    //~Suspense需要返回一个异步对象，like promise
    setup() {
       return new Promise((resolve)=>{
         setTimeout(()=>{
         return resolve({
           result:'成功'
           })
        },2000) })

    },
})
</script>
<style  scoped>
/* @import url(); 引入css类 */

</style>
