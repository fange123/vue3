<template>
<div class="dropdown">
  <a href="#" class="btn btn-outline-light my-2 dropdown-toggle" @click.prevent="toggleOpen">{{title}}</a>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" :style="{display:'block'}" v-if='isOpen'>
    <li><a class="dropdown-item" href="#">编辑资料</a></li>
    <li><a class="dropdown-item" href="#"> 新建文章</a></li>
  </ul>

</div>
</template>

<script lang='ts'>
import { ref } from 'vue'
export default {
    name:'DropDown',
    props:{
      title:{
        type:String,
        required:true,
      }
    },
    setup() {
      const isOpen = ref(false)

      const toggleOpen = () => {
        isOpen.value = !isOpen.value
      }
       return {
         isOpen,

         toggleOpen


       }
    },
}
</script>
<style>
/* @import url(); 引入css类 */

</style>
