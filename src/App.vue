<template>
  <div id="id">
      <h1>{{count}}</h1>
      <h1>{{double}}</h1>
      <ul>
        <li v-for="num in number" :key="num"><h1>{{ num }}
</h1></li>
      </ul>
      <h1>{{person.name}}</h1>
      <button @click="increment">添加👍</button>
  </div>
</template>

<script lang="ts">
import {computed,reactive,toRefs} from 'vue'
interface IDateProps {
  count: number
  double: number
  increment(): void
  number: number[]
  person:{name?:string}

}

export default {
  name: 'App',
  setup(){
    // const count = ref(0)
    // //*computed的参数是一个函数
    // const double = computed(()=> count.value*2)
    // const increment = ()=> {
    //   count.value++
    // }

    //*reactive是一个函数，接受一个对象，可以把分散的变量方法都合并在一个对象里面
    const data:IDateProps = reactive({
      count: 0,
      increment: ()=>data.count++,
      double: computed(()=>data.count*2),
      number:[1,2,3,4],
      person:{}
    })
    //*不能直接这样返回，因为这样返回出来的是类型而不是值，可以用toRefs
    // return {...data}
    //? vue3中可以直接修改属性的值
    data.number[2] = 1000
    data.person.name = "John"

    const refData = toRefs(data)
    return {...refData
}

  }
};
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}
li {
  list-style: none;
}


</style>
