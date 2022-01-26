
<template>
  <q-page class="flex flex-center">
    {{$store.state.mes.userName}}
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';

import { useStore } from 'vuex'
export default defineComponent({
  name: 'PageIndex',
  setup(){
    const $store = useStore()
    return{
      $store
    }
  },
})
</script>
