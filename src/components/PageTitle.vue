<template>
  <h2>{{title}}</h2>
  <p>likes : {{likes}}</p>
  <p>isPublished: {{isPublished}}</p>
  <p>commentIds: {{commentIds}}</p>
  <p>author: {{author}}</p>
</template>

<script>
export default {
  name: "PageTitle",
  //props 유효성 검사
  props: {
    title: {
      type: [String, Number], //여러 타입 허용
      required: true
    },
    likes: {
      type: Number,
      default: 0
    },
    isPublished: Boolean,
    commentIds: Array,
    author: {
      type: Object,
      default: function(){
        return {message: 'error'}
      }
    },
    callback: {
      type: Function,
      default: function (){
        return 'Default Function'
      }
    },
    contactsPromise: Promise,
    customeValidator: {
      validator: function(value){
        //값이 꼭 아래 세 문자열 중 하나와 일치해야 함
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    }
  }
}
</script>

<style scoped>

</style>