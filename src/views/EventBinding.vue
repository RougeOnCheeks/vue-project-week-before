<template>
  <div>
<!--    <button type="button" @click="increaseCounter">Add 1</button>-->
    <button type="button" @click="setCount(7)">Set 7</button><!--클릭이벤트를 통해 함수로 파라미터 전달-->
    <button type="button" @click="one(), two()">Click</button><!--여러개 함수 호출-->
    <p>The counter is : {{counter}} </p>
  </div>
<!--onchange 이벤트-->
  <div>
    <select v-model="selectedValue" @change="changeSelect">
      <option value="서울">서울</option>
      <option value="부산">부산</option>
      <option value="제주">제주</option>
    </select>
  </div>

</template>

<script>
export default {
  name: "EventBinding",
  data(){
    return{
      counter: 0,
      selectedValue: '',
    };
  },
  methods: {
    increaseCounter(){
      this.counter = this.counter + 1;
    },
    setCount(counter){
      this.counter = counter;
    },
    one(){
      alert('One');
    },
    two(){
      alert('Two');
    },
    changeSelect(){
      alert(this.selectedValue);
    }
  }
}
</script>

<style scoped>

</style>