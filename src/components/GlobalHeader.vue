<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
    <a class="navbar-brand" href="#">者也专栏</a>
    <ul v-if="!user.isLogin" class="list-inline mb-0">
       <li class="list-inline-item"><a href="#" class="btn btn-outline-light my-2">登陆</a></li>
      <li class="list-inline-item"><a href="#" class="btn btn-outline-light my-2">注册</a></li>
    </ul>
    <ul v-else>
      <li  class="list-inline-item">
        <DropDown :title="`你好！${user.name}`"/>

      </li>
    </ul>

  </nav>

</template>

<script lang='ts'>
import {defineComponent, PropType} from 'vue'
import DropDown from './DropDown.vue'

export interface Users {
  isLogin:boolean,
  name?:string,
  id?:number,
}
export default defineComponent(
   {
    name:'GlobalHeader',
    components:{
      DropDown
    },
    props:{
      user:{
        type:Object as PropType<Users>,
        required:true,

      }
    },
    setup() {
       return { }
    },
}
)
</script>
<style >
/* @import url(); 引入css类 */

</style>
