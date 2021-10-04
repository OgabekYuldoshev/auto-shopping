<template>
  <a :href="'/product/'+product.slug">
  <div class="card">
    <img src="@/assets/product.png" alt="product img" />
    <span>
      {{product.price}} тг
    </span>
    <p>
      {{product.name}}
    </p>
  </div>
  </a>
</template>

<script>
export default {
    props:{
        product: Object
    }
}
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  background: #fcfcfc;
  border: 1px solid rgba(45, 121, 121, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 10px 20px rgba(42, 121, 122, 0.15);
  border-radius: 20px;
  cursor: pointer;
}
.card > img {
  align-self: center;
}
.card > span {
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  color: #18a7a7;
  margin: 10px 0px;
}
.card > p:hover {
  color: red;
}
</style>
