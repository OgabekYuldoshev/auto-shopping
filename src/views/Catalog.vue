<template>
  <div>
    <div class="cont">
      <div class="one">
        <div class="switch">
          <button :class="type === 'row' ? 'active': null" @click="type = 'row'">
            <i class="fas fa-bars"></i>
          </button>
          <button :class="type === 'column' ? 'active': null" @click="type = 'column'">
            <i class="fas fa-th"></i>
          </button>
        </div>
        <select id="select">
          <option value="" selected>Алматы</option>
        </select>
        <div class="conditions">
          <h4>Состяние</h4>
          <ul class="condition">
            <li v-for="c in conditions" :key="c.value">
              <input name="condition" :id="c.value" type="radio" :value="c.value" />
              <label :for="c.value">{{c.name}}</label>
            </li>
          </ul>
          <h4>Сортировать</h4>
          <ul class="condition">
            <li v-for="c in filter" :key="c.value">
              <input name="filter" :id="c.value" type="radio" :value="c.value" />
              <label :for="c.value">{{c.name}}</label>
            </li>
          </ul>
          <ul class="condition payment">
            <li v-for="c in byPhoto" :key="c.value">
              <input name="byPhoto" :id="c.value" type="checkbox" :value="c.value" />
              <label :for="c.value">{{c.name}}</label>
            </li>
          </ul>

          <ul class="condition payment">
            <li v-for="c in payment" :key="c.value">
              <input name="payment" :id="c.value" type="radio" :value="c.value" />
              <label :for="c.value">{{c.name}}</label>
            </li>
          </ul>
        </div>
        
      </div>
      <div class="two">
        <CatalogCards :type="type" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/containers/Footer.vue";
import CatalogCards from "@/components/CatalogCards.vue";

export default {
  name: "Home",
  components: { Footer, CatalogCards },
  data() {
    return {
      type: "column",
      conditions: [
        {
          name: "Все",
          value: "all",
        },
        {
          name: "Новые",
          value: "new",
        },
        {
          name: "Б/у",
          value: "another",
        },
      ],
      payment: [
        {
          name: "В наличии",
          value: "pay",
        },
        {
          name: "На заказ",
          value: "order",
        },
      ],
      byPhoto: [
        {
          name: "Только с фото",
          value: "only-photo",
        },
        {
          name: "Доставка в бокс",
          value: "delevery",
        },
      ],
      filter: [
        {
          name: "по дате объявления",
          value: "date",
        },
        {
          name: "по цене",
          value: "price",
        },
        {
          name: "по рейтингу",
          value: "raiting",
        },
      ],
    };
  },
};
</script>

<style scoped>
.active{
  color: #3BAEAB;
}
.payment{
  padding-top:20px;
}
.conditions h4{
  margin-top: 15px;
  margin-bottom: 15px;
  font-weight: bold;
}
.condition {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.condition li {
  display: flex;
  align-items: center;
  gap: 10px;
  
}
.selector {
  padding: 20px 0px;
}
#select {
  margin: 10px 0px;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
}
.cont {
  width: 1140px;
  margin: auto;
  display: flex;
  padding: 20px 0px;
}
.one {
  width: 15%;
  padding: 0px 5px;
}
.two {
  width: 85%;
}
.switch {
  display: flex;
  gap: 10px;
  align-items: center;
}
.switch button {
  width: 35px;
  height: 35px;
  background: #ffffff;
  border: 1px solid rgba(134, 119, 119, 0.2);
  box-sizing: border-box;
  border-radius: 3px;
  cursor: pointer;
}
.switch button i {
  font-size: 25px;
}
</style>
