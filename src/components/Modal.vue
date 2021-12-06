
<template>
<teleport
 to='#modal'>
  <div class="modal" v-if="isOpen">
    <h2>我是个弹框</h2>
    <slot></slot>
    <!-- //~在slot标签添加样式无效 -->
    <slot style="color:blue"></slot>
  <!-- //~拥有命名的插槽不能被不含slot属性的标签内容替换，会显示slot的默认值（具名slot具有对应性） -->
    <slot name="name">我有命名，我的内容替换不了</slot>
    <slot name="header">
      <header>
        header
      </header>
    </slot>
    <slot name="footer">
      <footer>
        footer

      </footer>
    </slot>
    <button @click="buttonClick">关闭</button>

</div>

</teleport>
</template>

<script lang='ts'>
import { defineComponent } from "vue"

export default defineComponent({
  name:'Modal',
  props:{
    isOpen:Boolean,
  },
  emits:{
    'close-modal':null
  },
  setup(props,context) {
    const buttonClick = () => {
      context.emit('close-modal')

    }

    return { buttonClick
} }, }
)
</script>
<style  scoped>
/* @import url(); 引入css类 */
.modal {
  width:200px;
  border: 2px solid black;
  position: fixed;

  left: 50%;
  top: 50%;
  margin-left: -100px;
  margin-top: -100px;

}

</style>
