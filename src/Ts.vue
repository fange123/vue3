<template>
<div class="" id='ts'>
  <h1>hello world</h1>

</div>
</template>

<script lang='ts'>
//~defineComponent是为了让vue服务于ts存在的

import {defineComponent} from 'vue'

const component = defineComponent({
  name:'Ts',
  props:{
    msg:{
      required: true,
      type: String
    }
  },
  setup(props,context) {
    props.msg
    return{}
    },

})
export default component
</script>
<style  scoped>
/* @import url(); 引入css类 */

</style>
