<template>
<ProvideInjectChild/>
</template>

<script>
import ProvideInjectChild from "@/views/ProvideInjectChild";
export default {
  name: "ProvideInject",
  components: {ProvideInjectChild},
  data(){
    return{
      items: ['A', 'B']
    };
  },
  //props 대신 provide 써서 한번에 전달. 전달하고자 하는 데이터를 provide 안에 정의한다.
  provide(){
    return{
      itemLength: this.items.length
    };
  },
}
</script>

<style scoped>

</style>