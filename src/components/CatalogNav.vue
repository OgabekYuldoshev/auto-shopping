<template>
  <div class="catalog">
    <ul>
      <li>Каталог</li>
      <li v-for="c in catalog" :key="c">
        <a class="links" href="/catalog">
          {{ c }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      catalog: [
        "ТО / фильтра",
        "Тормозная система",
        "Двигатель / выхлоп",
        "Подвеска / рулевое",
        "Коробка передач",
        "Охлождение / отопление",
        "Электрика / освещение",
        "Кузов / элементы",
      ],
    };
  },
};
</script>

<style scoped>
.catalog {
  background: #f5f5f5;
}
.catalog > ul {
  width: 1140px;
  padding: 10px 0px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
}
.links {
  color: black;
}
.links:hover {
  color: red;
}
</style>
