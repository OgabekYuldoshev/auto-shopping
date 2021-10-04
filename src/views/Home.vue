<template>
  <div>
    <MainHead />
    <div class="containers">
      <CardContainers />
      <h1>Необходимое для каждого авто</h1>
      <div class="cards">
        <div class="card">
          <div>
            <h3>Свечи</h3>
            <p>Свечи зажигания, свечи накала</p>
          </div>
          <img src="@/assets/2.png" alt="img" />
        </div>
        <div class="card">
          <div>
            <h3>Каталог ТО</h3>
            <p>Свечи зажигания, свечи накала</p>
          </div>
          <img src="@/assets/3.png" alt="img" />
        </div>
        <div class="card">
            <h3>Поиск запчастей по VIN номеру авто</h3>
            <div>
            <input type="text" placeholder="Введите номер детали, название или VIN">
            <button>
              <i class="fas fa-search"></i>
            </button>
            </div>
            <img src="@/assets/8.png" alt="img">
        </div>
        <div class="card">
          <div>
            <h3>Моторные масла</h3>
            <p>Свечи зажигания, свечи накала</p>
            <div>
              <button>
                1 л
              </button>
              <button>
                3 л
              </button>
              <button>
                5 л
              </button>
            </div>
          </div>
          <img src="@/assets/1.png" alt="img" />
        </div>
        <div class="card">
          <div>
            <h3>Каталог</h3>
            <p>Свечи зажигания, свечи накала</p>
          </div>
          <img src="@/assets/4.png" alt="img" />
        </div>
        <div class="card">
          <div>
            <h3>Коврики</h3>
            <p>Свечи зажигания, свечи накала</p>
          </div>
          <img src="@/assets/5.png" alt="img" />
        </div>
        <div class="card">
          <div>
            <h3>АКБ</h3>
            <p>Свечи зажигания, свечи накала</p>
            <div>
              <button>
                Прямая полярность
              </button>
              <button>
                Обратная полярность
              </button>
            </div>
          </div>
          <img src="@/assets/9.png" alt="img" />
        </div>
        <div class="card">
          <div>
            <h3>Кузовные запчасти</h3>
            <p>Свечи зажигания, свечи накала</p>
          </div>
          <img src="@/assets/7.png" alt="img" />
        </div>
        <div class="card">
          <div>
            <h3>Трансмиссионные масла</h3>
            <p>Свечи зажигания, свечи накала</p>
          </div>
          <img src="@/assets/6.png" alt="img" />
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import MainHead from "@/components/MainHead.vue";

import CardContainers from "@/containers/CardContainers.vue";
import Footer from "@/containers/Footer.vue";


export default {
  name: "Home",
  components: { MainHead, CardContainers, Footer },
};
</script>
<style scoped>
.containers {
  width: 1140px;
  margin: auto;
  padding: 50px 0px;
}
.containers > h1 {
  font-weight: 600;
  font-size: 22px;
  color: #18a7a7;
  padding: 30px 0px;
}
.cards {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
.card {
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
}
.card > div {
  padding: 0px 25px;
}
.card:nth-child(1),
.card:nth-child(2),
.card:nth-child(4),
.card:nth-child(5),
.card:nth-child(6),
.card:nth-child(7),
.card:nth-child(8),
.card:nth-child(9) {
  background: rgba(45, 121, 121, 0.05);
  align-items: center;
}
.card:nth-child(3) {
  grid-row: span 2 / span 2;
  background: #2d7979;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  padding: 20px;
}
.card:nth-child(3) img{
  width: 50%;
  position: absolute;
  bottom: 5%;
  right: 5%;
}
.card:nth-child(3) h3{
  width: 60%;
  color: white;
}
.card:nth-child(3) div{
  background: white;
  border-radius: 2px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.card:nth-child(3) div > input{
  background: transparent;
  border: none;
  padding: 10px;
}
.card:nth-child(3) div > input:focus{
  outline: none;
}
.card:nth-child(3) div > button{
  background: transparent;
  border: none;
  padding: 10px;
  cursor: pointer;
}
.card:nth-child(4) {
  grid-row: span 2 / span 2;
  align-items: center;
}
.card:nth-child(4) button {
  padding: 10px 30px;
  margin: 5px 0px;
  border: 2px solid #18a7a7;
  color: #18a7a7;
  font-weight: bold;
  cursor: pointer;
  box-sizing: border-box;
  border-radius: 5px;
  background: transparent;
}
.card:nth-child(7) {
  grid-row: span 2 / span 2;
}
.card:nth-child(7) button {
  padding: 10px 30px;
  margin: 5px 0px;
  border: 2px solid #18a7a7;
  color: #18a7a7;
  box-sizing: border-box;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  background: transparent;
}
.card:nth-child(7) p {
  padding-bottom: 20px;
}
.card:nth-child(4) p {
  padding-bottom: 20px;
}
</style>
