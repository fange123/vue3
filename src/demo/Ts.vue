<template>
  <div id="ts">
    <h1>我是ts</h1>
    <p>{{error}}</p>

    <Modal :isOpen="modalIsOpen" @close-modal="closeModal">
      <!-- //~插槽可以获取到父组件里的内容 -->
      <h3 style='color:red'>子元素+{{name}}</h3>

      <!-- //~具名插槽 -->
     <template v-slot:header></template>
      <template v-slot:footer></template>

    </Modal>
    <button @click="modalOpen">打开</button>
    <Suspense>
      <template #default>
          <SuspenseDemo />
      </template>
      <template #fallback>
        <h1>loading...</h1>

      </template>
    </Suspense>
    <Suspense>
    <template #default>
      <DogShow />

    </template>
    <template #fallback>
      <h1>loading</h1>
    </template>

  </Suspense>





  </div>
</template>

<script lang="ts">
import Modal from "../components/Modal.vue";
import SuspenseDemo from './SuspenseDemo.vue'
import DogShow from "./DogShow.vue"

import { ref,onErrorCaptured } from 'vue';


export default {
  name: "Ts",
  components: {
    Modal,
    SuspenseDemo,
    DogShow


  },
  setup() {
    const name = ref('zhanghaiyu')
    const modalIsOpen = ref(false)
    const modalOpen = () => {
      modalIsOpen.value = true
    }

    const closeModal  = () => {
      modalIsOpen.value = false

    }
    const error = ref(null)
    onErrorCaptured((e:any)=>{
      error.value = e

      //~onErrorCaptured这个钩子函数返回一个boolean值，表示是否向上传播

      return true

    })


    return {
      name,
      modalIsOpen,
      modalOpen,
      closeModal,
      error


    };
  },
};
</script>

<style>

</style>

