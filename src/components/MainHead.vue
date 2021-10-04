<template>
  <div class="main">
    <img src="@/assets/mask.png" alt="mask" class="mask" />
    <div class="main-ch">
      <div class="container">
        <h1>
          Подобрать детали
        </h1>
        <p>найдите недостающие детали именно на ваше транспортное стредство</p>
        <div class="selector">
          <select id="select">
            <option value="" disabled selected>Год выпуска</option>
          </select>
          <select id="select">
            <option value="" disabled selected>Марка</option>
          </select>
          <select id="select">
            <option value="" disabled selected>Модель</option>
          </select>
          <select id="select">
            <option value="" disabled selected>Тип кузова</option>
          </select>
        </div>
        <button>НАЙТИ ДЕТАЛИ</button>
      </div>
    </div>
    <div class="s-cards">
      <div class="card" v-for="card in cards" :key="card.p">
        <img src="@/assets/fax.png" alt="img" />
        <p v-html="card.p"></p>
      </div>
      <div class="card btn">
        <i style="color:#0A9764; font-size:20px;" class="fas fa-plus-circle"></i>
        <p>Подать объявление</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          img: "@/assets/fax.png",
          p: "Выбирайте по цене, скорости доставки или расположению",
        },
        {
          img: "oil",
          p: "<strong>589 837</strong> запчастейи масел в каталоге",
        },
        {
          img: "user",
          p: "Средний рейтинг продавцов <strong>4.83 из 5</strong>",
        },
      ],
    };
  },
};
</script>

<style scoped>
.main {
  background: linear-gradient(90deg, #4cb8c4 0%, #3cd3ad 100%);
  height: 450px;
  position: relative;
}
.mask {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  user-select: none;
}
.main-ch {
  width: 1140px;
  margin: auto;
  padding: 40px 0;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 80px;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(110px);
  border-radius: 20px;
}
.container > h1 {
  font-weight: 800;
  font-size: 36px;
  text-align: center;
  text-transform: uppercase;
}
.container > p {
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  font-variant: small-caps;
  text-transform: uppercase;
}
.container > button {
  padding: 10px 50px;
  background: #e11c43;
  box-shadow: 0px 4px 15px rgba(45, 121, 121, 0.5);
  border-radius: 100px;
  color: white;
  border: none;
  cursor: pointer;
}
.selector {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
  padding: 20px 0px;
}
#select {
  padding: 10px;
  border-radius: 5px;
}
.s-cards {
  position: absolute;
  bottom: -20%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 20px;
}
.card {
  border-radius: 5px;
  box-shadow: 0px 4px 20px rgba(45, 121, 121, 0.5);
  width: 220px;
  padding: 20px 10px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.card p {
  padding-top: 10px;
  text-align: center;
}
.btn{
  cursor: pointer;
}
</style>
