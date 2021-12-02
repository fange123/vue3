<template>
  <div id="id">
      <h1>{{count}}</h1>
      <h1>{{double}}</h1>
      <button @click="increment">添加👍</button>
  </div>
</template>

<script lang="ts">
import {ref,computed} from 'vue'

export default {
  name: 'App',
  setup(){
    const count = ref(0)
    //*computed的参数是一个函数
    const double = computed(()=> count.value*2)
    const increment = ()=> {
      count.value++
    }
    return {count,increment,double
}

  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
