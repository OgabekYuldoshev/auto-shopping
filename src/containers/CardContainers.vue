<template>
  <div class="main">
    <h1>Хиты продаж</h1>
    <div class="containers">
      <Card v-for="p in products" :key="p.price" :product="p" />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
  components: { Card },
  data() {
    return {
      products: [
        {
          img: "@/assets/product.png",
          price: 20000,
          name: "RENAULT Корпус фильтра масляного (с радиатором)",
          slug: "rent",
        },
        {
          img: "@/assets/product.png",
          price: 20000,
          name: "RENAULT Корпус фильтра масляного (с радиатором)",
          slug: "rent",
        },
        {
          img: "@/assets/product.png",
          price: 20000,
          name: "RENAULT Корпус фильтра масляного (с радиатором)",
          slug: "rent",
        },
        {
          img: "@/assets/product.png",
          price: 20000,
          name: "RENAULT Корпус фильтра масляного (с радиатором)",
          slug: "rent",
        },
        {
          img: "@/assets/product.png",
          price: 20000,
          name: "RENAULT Корпус фильтра масляного (с радиатором)",
          slug: "rent",
        },
      ],
    };
  },
};
</script>

<style scoped>
.main > h1 {
  font-weight: 600;
  font-size: 22px;
  color: #18a7a7;
}
.containers {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
}
</style>
