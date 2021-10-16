<template>
  <div class="sellers">
    <div v-for="c in 4" :key="c" class="seller">
      <div>
        <h4>Happy store</h4>
        <StarRating star-size="20" rating="3" />
        <p>
          125 отзывов
        </p>
      </div>
      <div>
        <li>
          <p>Доставка из:</p>
          <h4>г. Алматы</h4>
        </li>
        <li>
          <p>Срок доставки:</p>
          <h4>Под заказ, до 10 дней</h4>
        </li>
        <li>
          <p>В наличии:</p>
          <h4>1 шт.</h4>
        </li>
        <li>
          <p>Состояние:</p>
          <h4>Новый</h4>
        </li>
      </div>
      <div>
        <span>16 385 ₸</span>
      </div>
      <div class="buttons">
        <button class="one">СЕРВИС</button>
        <button class="two">ВЫБРАТЬ</button>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
export default {
  components: {
    StarRating,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.buttons .one {
  width: 50%;
  padding: 8px 0px;
  color: black;
  font-weight: bolder;
  border: 2px solid #e11c43;
  cursor: pointer;
  background: transparent;
  border-radius: 100px;
}
.buttons .two {
  width: 50%;
  padding: 8px 0px;
  color: white;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  background: #e11c43;
  border-radius: 100px;
}
.buttons {
  gap: 10px;
  margin: 25px 0px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.seller > div:nth-child(3) span {
  font-weight: bold;
}
.seller > div:nth-child(1) {
  width: 20%;
}
.seller > div:nth-child(2) {
  width: 30%;
}
.seller > div:nth-child(3) {
  width: 20%;
}
.seller > div:nth-child(4) {
  width: 30%;
}
/* .seller > div {
    width: 25%;
} */
.seller > div:nth-child(2) {
  display: grid;
  gap: 5px;
  /* flex-direction: column; */
}
.seller > div:nth-child(2) li {
  display: flex;
  gap: 10px;
  font-size: 14px;
}
.sellers {
  display: grid;
}
.seller {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  padding: 20px 0px;
}
.seller > div:nth-child(1) h4 {
  padding-bottom: 10px;
}
.seller > div:nth-child(1) p {
  padding-top: 10px;
}
</style>
