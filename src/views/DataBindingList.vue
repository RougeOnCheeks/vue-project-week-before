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
      productList: [],
      type: 'A'
    };
  },
  created() {
    this.getList();
  },
  methods: {
    async getList(){
      this.productList = await this.$api("https://bcd33e38-9719-4b81-aa76-7e5a63c52ef9.mock.pstmn.io/list", "get");
    }
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