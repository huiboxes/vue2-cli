<template>
  <div class="home">
    Home
  </div>
</template>

<script>
import getTest from '@/services'
import {onMounted,ref} from '@vue/composition-api'

export default {
  name: 'Home',
  setup(){
    const a = ref('')

    onMounted(()=>{

      a.value = getTest('test')
      console.log(a.value)
    })
    return {a}
  }
}
</script>

<style lang="scss" scoped>
  
</style>