<template>
  <h2>{{title}}</h2>
  <p>likes : {{likes}}</p>
  <p>isPublished: {{isPublished}}</p>
  <p>commentIds: {{commentIds}}</p>
  <p>author: {{author}}</p>

<!--1. 부모컴포넌트에서 자식컴포넌트의 이벤트 직접 발생시키기-->
  <button type="button" @click="childFunc" ref="btn">click</button>
<!--3. 부모컴포넌트에서 자식컴포넌트의 데이터 옵션 값 직접 변경하기-->
  <h1>{{msg}}</h1>
<!--5. 부모컴포넌트에서 자식컴포넌트의 데이터 옵션 값 동기화하기-->
  <button type="button" @click="childFunc2" ref="btn2">5. 자식 컴포넌트 데이터 변경</button>
</template>

<script>
export default {
  name: "PageTitle",
  data(){
    return {
      msg: '4. 자식 컴포넌트로 부터 보내는 메시지',
      msg2 : '5. 초기 메시지',
    };
  },
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
    customValidator: {
      validator: function(value){
        //값이 꼭 아래 세 문자열 중 하나와 일치해야 함
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    }
  },
  methods: {
    childFunc(){
      console.log('1. 부모 컴포넌트에서 직접 발생시킨 이벤트');
    },
    callFromParent(){
      console.log('2. 부모 컴포넌트에서 직접 호출한 함수');
    },
    childFunc2(){
      this.msg2 = '5. 변경된 메시지';
    }
  },
  /* 4. 자식컴포넌트에서 부모컴포넌트로 이벤트 / 데이터 전달하기
  *   자식컴포넌트가 마운트되면 $emit을 통해 부모컴포넌트의 send-message 이벤트 호출, msg 데이터를 파라미터로 전송
  * */
  mounted() {
    this.$emit('send-message', this.msg);
  }
}
</script>

<style scoped>

</style>