<template>
  <div id="id">
    <h2>鼠标点击位置：x:{{x}},y:{{y}}</h2>
      <h1>{{count}}</h1>
      <h1>{{double}}</h1>
      <div>
        <h1>狗</h1>
        <h1 v-if="loading">loading...</h1>
        <h1 v-if="loaded"><img :src="result?.message" alt="" style="width:100px"></h1>

      </div>
      <div>
        <h1>猫</h1>
        <h1 v-if="loading_">loading...</h1>
        <h1 v-if="loaded_"><img :src="result_?.[0].url" alt="" :style="{width:result_?.[0]?.width+'px', height:result_?.[0]?.height+'px'}"></h1>

      </div>

      <ul>
        <li v-for="num in number" :key="num"><h1>{{ num }}</h1></li>
      </ul>
      <h1>{{person.name}}</h1>
      <button @click="increment">添加👍</button>
      <h1>{{greeting}}</h1>
      <button @click="updateGreeting">标题</button>
  </div>
</template>

<script lang="ts">
import {computed,reactive,toRefs,onMounted,onUpdated,onRenderTriggered, ref, watch} from 'vue'
import useMousePosition from './hook/useMousePosition';
import useURLLoader from './hook/useURLLoader';

interface IDateProps {
  count: number
  double: number
  increment(): void
  number: number[]
  person:{name?:string}

}

interface IDog {
  message:string,
  status:string
}

interface ICat {
  breeds: [],
  height: number,
  id: string,
  url:string,
  width: number


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

    onUpdated(()=>console.log('onUpdated'))
    onMounted(()=>console.log('onMounted'))
    //? onRenderTriggered是做debug的时候用的，可以检测什么事件，做了什么事情
    onRenderTriggered((event)=> console.log(event))


    //*reactive是一个函数，接受一个对象，可以把分散的变量方法都合并在一个对象里面
    const data:IDateProps = reactive({
      count: 0,
      increment: ()=>data.count++,
      double: computed(()=>data.count*2),
      number:[1,2],
      person:{}
    })

    const greeting = ref('')
    const updateGreeting = () => {
      greeting.value+='hello'
    }
//? watch用来监听值的变化，比如在setup之前的
    // watch(greeting, (newValue, oldValue)=> {
    //   document.title = 'update' + greeting.value

    //   console.log(newValue);
    //   console.log(oldValue);

    // })
    //!如果想同时监听多个值，可以第一个参数改为数组：watch([],()=>{})
    //!数组里面必须是响应式的，不能直接写data.count，可以写成函数返回值的方式
    watch([greeting,()=>data.count], (newValue, oldValue)=> {
      document.title = 'update' + greeting.value+data.count

      console.log(newValue);
      console.log(oldValue);

    })

    //*不能直接这样返回，因为这样返回出来的是类型而不是值，可以用toRefs
    // return {...data}
    //? vue3中可以直接修改属性的值
    data.number[2] = 1000
    data.person.name = "John"

    const {x,y} = useMousePosition()
    const {result,loaded,loading} = useURLLoader<IDog>('https://dog.ceo/api/breeds/image/random')
    const {result:result_,loaded:loaded_,loading:loading_} = useURLLoader<ICat[]>('https://api.thecatapi.com/v1/images/search')

    const refData = toRefs(data)
    return {...refData,greeting,updateGreeting,x,y,result,loaded,loading,result_,loaded_,loading_
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
