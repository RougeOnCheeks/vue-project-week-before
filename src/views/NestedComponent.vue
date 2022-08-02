<template>
  <div>
<!--    <PageTitle title="부모컴포넌트에서 자식컴포넌트로 props"/>--><!--정적 값 전달-->
    <page-title
        :title="title"
        :likes="post.likes"
        :is-published="isShow()"
        :comment-ids="post.commentIds"
        :author="post.author"
        @send-message="sendMessage" ref="child_component" /><!--ref는 유일한 키값을 사용해야 한다.-->

  </div>
  <div>
    <button type="button" @click="changeChildData">3. Change Child Data</button>
  </div>
  <div>
    <button type="button" @click="checkChild">5. 자식 컴포넌트 데이터 조회</button>
  </div>
</template>

<script>
import PageTitle from "@/components/PageTitle";
export default {
  name: "NestedComponent",
  data(){
    return{
      title: '동적 title',
      post:{
        likes: 42,
        commentIds: [1, 2, 3],
        author: {
          name: 'YJ Noh',
          secondName: 'Liliana'
        },
      },
    }
  },
  components: {PageTitle},
  methods:{
    isShow(){
      if(this.post.likes > 50){
        return true;
      } else{
        return false;
      }
    },
    /* 3. $ref로 자식컴포넌트에 접근, 데이터 옵션 직접 변경 */
    changeChildData(){
      this.$refs.child_component.msg = "3. 부모 컴포넌트가 변경한 데이터";
    },
    /* 4. 자식컴포넌트 마운트될때 send-message 이벤트 호출, msg 데이터 파라미터로 받음 */
    sendMessage(data){
      console.log(data);
    },
    checkChild(){
      alert(this.msg2);
    }
  },
  mounted() {
    /* 1. 자식 컴포넌트 버튼 객체에 ref="btn"으로 접근할수 있도록 함 */
    this.$refs.child_component.$refs.btn.click();
    /* 2. $refs 사용하여 접근하게 되면 자식 컴포넌트 내에 정의된 모든 함수 호출 가능 */
    this.$refs.child_component.callFromParent();
  },
  /* 5. computed 사용 시 자식 컴포넌트에 정의된 데이터 옵션 값의 변경사항을 항상 동기화 할 수 있음 */
  computed:{
    msg2(){
      return this.$refs.child_component.msg2;
    }
  }
}
</script>

<style scoped>

</style>