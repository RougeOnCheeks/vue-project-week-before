<template>
  <div>
    <div>
      <table>
        <thead>
          <tr>
            <th>제품명</th>
            <th>가격</th>
            <th>카테고리</th>
            <th>배송료</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="index" v-for="(product, index) in productList">
            <td>{{product.product_name}}</td>
            <td>{{product.price}}</td>
            <td>{{product.category}}</td>
            <td>{{product.delivery_price}}</td>
          </tr>
        </tbody>
      </table>
    </div>
<!--    조건에 따른 랜더링-->
    <div>
      <h1 v-if="type=='A'">A</h1>
      <h1 v-else-if="type=='B'">B</h1>
      <h1 v-else>C</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "DataBindingList",
  data(){
    return{
      productList: [
        {"product_name": "기계식키보드", "price": 25000, "category":"노트북/태블릿", "delivery_price":5000},
        {"product_name": "무선마우스", "price": 12000, "category":"노트북/태블릿", "delivery_price":5000},
        {"product_name": "태블릿거치대", "price": 32000, "category":"노트북/태블릿", "delivery_price":5000},
        {"product_name": "아이패드", "price": 725000, "category":"노트북/태블릿", "delivery_price":5000},
      ],
      type: 'A'
    };
  }
}
</script>

<style scoped>
table{
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%
}
td, th{
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>