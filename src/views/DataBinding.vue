<template>
  <h1>Hello, {{title}}</h1><!--문자열 데이터 바인딩-->
  <div>
    <div>{{htmlString}}</div>
    <div v-html="htmlString"></div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      title: 'World',
      htmlString: '<p style="color:red;">This is a red String.</p>'
    };
  }
}
</script>