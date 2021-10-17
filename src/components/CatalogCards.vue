<template>
  <div class="catalog">
    <div class="catalog-text">
      <span>Главная / Запчасти / Колодки тормозные дисковые</span>
      <h1>Колодки тормозные дисковые</h1>
      <p v-if="type === 'column'">Горящие предложения недели</p>
    </div>
    <div v-if="type === 'row'" class="flex-cards-container">
      <div class="flex-one">
        <div v-for="n in nums" :key="n" class="flex-card">
          <a href="/product/hello">
            <img src="@/assets/product.png" alt="" srcset="" />
          </a>

          <div class="main-option">
            <div class="flex-title">
              <a href="/product/hello">
                <h3>Шины зимние</h3>
              </a>
              <span>99 999 тг.</span>
            </div>
            <div class="flex-options">
              <span>
                б/у, 265/65/R17
              </span>
              Зимние шипованные 265/65/R17 состояние новых шин
              <p></p>
            </div>
            <div class="flex-action">
              <span>Алматы</span>
              <span>22 сентября</span>
              <span>22 просмотра</span>
              <button>
                <i class="fas fa-shopping-cart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-two">
        <p>Горящие предложения недели</p>
        <a href="/product/hello" class="flexcards">
          <div v-for="n in nums" :key="n" class="flex-small-card">
            <img src="@/assets/product.png" alt="" srcset="" />
            <div>
              <h5>Колодки тормозные дисковые</h5>
              <p>Toyota Camry</p>
              <span>99 999 тг.</span>
            </div>
          </div>
        </a>
      </div>
    </div>
    <div v-if="type === 'column'" class="cards-container">
      <div v-for="n in nums" :key="n" class="card">
        <a href="/product/hello">
          <img src="../assets/product.png" alt="" srcset="" />
        </a>
        <div class="card-title">
          <a href="/product/hello">
            <p>Колодки тормозные дисковые</p>
          </a>
          <span>Toyota Camry</span>
        </div>
        <div class="card-action">
          <span>99 999 тг.</span>
          <button>
            <i class="fas fa-shopping-cart"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["type"],
  data() {
    return {
      nums: [1, 2, 3, 4, 5, 6],
    };
  },
};
</script>

<style scoped>
.flex-small-card div > span {
  font-weight: bold;
}
.flex-small-card div > p {
  font-size: 12px;
  padding: 5px 0px;
}
.flex-small-card img {
  width: 50%;
  object-fit: cover;
}
.flex-small-card {
  padding: 5px;
  margin: 5px 0px;
  display: flex;
  gap: 5px;
  background: #e9f7f7;
}
.flex-two > p {
  font-size: 14px;
  margin-bottom: 10px;
  font-weight: bold;
}
.flexcards {
  color: black;
}
.flex-action span {
  font-weight: bold;
}
.flex-action button {
  padding: 10px;
  border: none;
  color: white;
  cursor: pointer;
  background: #00766c;
  border-radius: 3px;
}
.flex-action {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.flex-options {
  display: grid;
  margin: 20px 0px;
}
.flex-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.flex-title span {
  font-weight: bold;
}
.main-option {
  padding: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.flex-card {
  display: flex;
  align-items: center;
  background: #e9f7f7;
  padding: 10px 5px;
}

.flex-cards-container {
  display: flex;
  padding: 0px 10px;
  gap: 10px;
}
.flex-one {
  width: 75%;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.flex-two {
  width: 25%;
}
.catalog-text p {
  font-weight: bold;
}
.cards-container {
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
}
.card {
  padding: 15px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgba(31, 175, 172, 0.1);
}
.card-title p {
  font-size: 14px;
  line-height: 16px;
  cursor: pointer;
  font-weight: bold;
}
.card-title p:hover {
  color: red;
}
.card-title span {
  line-height: 50px;
  color: gray;
}
.card-action {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.card-action span {
  font-weight: 900;
}
.card-action button {
  padding: 10px;
  border: none;
  color: white;
  cursor: pointer;
  background: #00766c;
  border-radius: 3px;
}
</style>
