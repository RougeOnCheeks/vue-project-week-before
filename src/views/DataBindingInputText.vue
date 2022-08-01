<template>
  <ul>
    <li>
      input type text : <input type="text" v-model="valueModel"/>
    </li>
    <li>
      input type number : <input type="number" v-model.number="numberModel"/>
    </li>
    <li>
      textarea : <textarea v-model="message"></textarea>
    </li>
    <li>
      selectbox :
      <select v-model="city">
        <option value="02">서울</option>
        <option value="21">부산</option>
        <option value="064">제주</option>
      </select>
    </li>
    <!--true-value, false-value를 지정하여 체크/해제 되었을때 기본값을 변경할 수 있다.-->
    <li>
      checkbox : <label><input type="checkbox" v-model="checked" true-value="yes" false-value="no"> {{checked}} </label>
    </li>
    <li>
      multiple checkbox :
      <label><input type="checkbox" value="서울" v-model="checked2">서울 </label>
      <label><input type="checkbox" value="부산" v-model="checked2">부산 </label>
      <label><input type="checkbox" value="제주" v-model="checked2">제주 </label>
      <br>
      <span>체크한 지역: {{checked2}}</span>
    </li>
    <li>
      radio :
      <label><input type="radio" v-bind:value="radioValue1" v-model="picked">서울 </label>
      <label><input type="radio" v-bind:value="radioValue2" v-model="picked">부산 </label>
      <label><input type="radio" v-bind:value="radioValue3" v-model="picked">제주 </label>
      <br/>
      <span>선택한 지역: {{picked}}</span>
    </li>
    <li>
      image :
      <img :src="imgSrc"/>
    </li>
    <li>
      <input type="text" v-model="textValue"/>
      <button type="button" v-bind:disabled="textValue==''">Click</button>
    </li>
    <li>
      <div class="container" v-bind:class="{'active': isActive, 'text-red': hasError}">Class Binding</div>
<!--      아래와 같이 배열로도 가능 but 특정 조건에 따른 클래스 바인딩 처리를 true/false로 할수 없음-->
      <div class="container" v-bind:class="[activeClass, errorClass]">Class Binding</div>
    </li>
    <li>
      <div :style="[baseStyle, addStyle]">인라인 스타일 바인딩</div>
    </li>
  </ul>
</template>
<script>
export default {
  name: "DataBindingExamples",
  data(){
    return{
      valueModel: 'South Korea',
      numberModel: 3,
      message: "여러줄을 입력할 수 있는 textarea 입니다.",
      city: "064",
      checked: true,
      checked2: [],
      picked: '',
      radioValue1: '서울',
      radioValue2: '부산',
      radioValue3: '제주',
      imgSrc: "https://kr.vuejs.org/images/logo.png",
      textValue: "",
      isActive: true,
      hasError: false,
      activeClass: 'active',
      errorClass: 'text-red',
      baseStyle: 'background-color: yellow; width: 100%; height:200px;',
      addStyle: 'color: red; font-weight:bold;'
    };
  }
}
</script>

<style lang="scss" scoped>
ul{
  text-align: start;
}
li{
  & + &{
    margin-top: 10px;
  }
}
img{
  width: 30px;
  height: auto;
}
.container{
  width: 100%;
  height: 200px;
}
.active{
  background-color: yellow;
  font-weight: bold;
}
.text-red{
  color: red;
}
</style>