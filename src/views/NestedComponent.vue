<template>
  <div>
<!--    <PageTitle title="부모컴포넌트에서 자식컴포넌트로 props"/>--><!--정적 값 전달-->
    <page-title
        :title="title"
        :likes="post.likes"
        :is-published="isShow()"
        :comment-ids="post.commentIds"
        :author="post.author"
    />

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
    }
  }
}
</script>

<style scoped>

</style>