<template>
<div class="">
<img :src="data?.message" alt="">

</div>
</template>

<script lang='ts'>
import {defineComponent} from 'vue'
import axios from 'axios'


export default defineComponent({
    name:'DogShow',
    async setup() {

      const result = await axios.get('https://dog.ceo/api/breeds/image/random')
       return { data:result.data}
    },
})
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>
