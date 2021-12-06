import { onMounted, onUnmounted, ref } from "vue";

export const useKeyPress = (code:string) => {
  const press = ref(false)
  const keyup = () => {
   press.value = false

  }
  const keydown = (e:KeyboardEvent) => {
    if(e.key === code)
      press.value = true

  }
  onMounted(() => {
    document.addEventListener('keydown',keydown)
    document.addEventListener('keyup',keyup)})

  onUnmounted(()=> {
    document.removeEventListener('keydown',keydown)
    document.removeEventListener('keyup',keyup)
  })


  return press;
}
