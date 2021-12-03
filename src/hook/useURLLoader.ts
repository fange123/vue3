import axios from "axios"
import { ref } from "vue"

const useURLLoader = <T>(url: string) => {
  const result = ref<T | null>(null)
  const loading = ref(true)
  const loaded = ref(false)
  const error = ref(null)

  axios.get(url).then((response) => {
    result.value = response.data
    loaded.value = true
    loading.value = false
  }).catch((e) => {
    error.value = e
    loading.value = false
  })

  return {
    result,loaded,error,loading
  }

}

export default useURLLoader
