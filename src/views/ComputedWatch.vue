<template>
  <h1>Full Name :  {{fullName}}</h1>
  <button type="button" @click="changeName">변경</button>
</template>

<script>
export default {
  name: "ComputedWatch",
  data(){
    return {
      firstName: 'YJ',
      lastName: 'Noh',
      fullName: ''
    }
  },
  watch: {
    firstName(){
      this.fullName = this.firstName + ' ' + this.lastName;
    },
    lastName(){
      this.fullName = this.firstName + ' ' + this.lastName;
    }
  },
  methods: {
    changeName(){
      this.firstName = 'Liliana';
    }
  }
}
</script>

<style scoped>

</style>