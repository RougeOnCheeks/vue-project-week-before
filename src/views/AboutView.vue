<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
export default {
  name: "AboutView",  //컴포넌트 이름
  components: {}, //다른 컴포넌트 사용 시 컴포넌트를 import 하고, 배열로 저장
  data(){   //html과 자바스크립트 코드에서 사용할 데이터 변수 선언 (리액트의 state)
    return{
      sampleData: ''
    };
  },
  setup(){},  //컴포지션 API 구현하는 메소드
  created() {}, //컴포넌트가 생성되면 실행 : 화면에서 제일 먼저 보여줘야 하는 데이터 영역 정의
  mounted() {}, //template에 정의된 html 코드가 랜더링 된 후 실행 : 화면 로딩 이후에 삽입되어도 되는 데이터 혹은 html 객체 정의
  unmounted() {}, //unmount가 완료된 후 실행
  methods: {} //컴포넌트 내에서 사용할 메소드 정의. 꼭 this를 통해서 접근한다. (로직)
}
</script>
