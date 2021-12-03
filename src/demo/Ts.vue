<template>
  <div id="ts">
    <h1>我是ts</h1>

    <Modal>
      <!-- //~插槽可以获取到父组件里的内容 -->
      <h3 style='color:red'>子元素+{{name}}</h3>

      <!-- //~具名插槽 -->
     <template v-slot:header></template>
      <template v-slot:footer></template>

    </Modal>



  </div>
</template>

<script lang="ts">
import Modal from "../components/Modal.vue";
import { ref } from 'vue';


export default {
  name: "Ts",
  components: {
    Modal,

  },
  setup() {
    const name = ref('zhanghaiyu')


    return {
      name



    };
  },
};
</script>

<style>

</style>

