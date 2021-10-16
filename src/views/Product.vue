<template>
  <div>
    <div id="product">
      <p>Главная / Моторные масла / GAZPROMNEFT Super 10W-40</p>
      <div class="product-main">
        <div class="product-img">
          <InnerImageZoom
            src="https://om-beauty.com/wp-content/uploads/2015/11/product-img-1.jpg"
            zoomSrc="https://om-beauty.com/wp-content/uploads/2015/11/product-img-1.jpg"
          />
        </div>
        <div class="product-action">
          <h1>
            Моторное масло GAZPROMNEFT Super 10W-40 5л
          </h1>
          <div class="star">
            <div class="raiting">
              <StarRating star-size="20" rating="2" />
              <!-- <span>2</span> -->
            </div>
            <span>
              130 отзывов
            </span>
            <span>
              288 заказов
            </span>
          </div>
          <div class="price">
            <span>
              Цена
            </span>
            <span>
              16 385 ₸
            </span>
          </div>
          <div class="buttons">
            <button>ВЫБРАТЬ ПРОДАВЦА</button>
            <button>ЗАПИСАТЬСЯ НА СЕРВИС</button>
          </div>
          <div class="options">
            <div>
              <h4>Комплектация</h4>
              <p>объем: 5 л</p>
            </div>
          </div>
        </div>
      </div>
      <div class="control-buttons">
        <button
          :id="type === 'seller' ? 'active-button' : null"
          @click="type = 'seller'"
        >
          Продавцы
        </button>
        <button
          :id="type === 'comment' ? 'active-button' : null"
          @click="type = 'comment'"
        >
          Отзывы
        </button>
        <button
          :id="type === 'option' ? 'active-button' : null"
          @click="type = 'option'"
        >
          Характеристики
        </button>
      </div>
      <Seller v-show="type === 'seller'"/>
      <Comments v-show="type === 'comment'"/>
      <Options v-show="type === 'option'"/>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/containers/Footer.vue";
import Seller from "@/components/Sellers.vue"
import Comments from "@/components/Comments.vue"
import Options from "@/components/Options.vue"
import InnerImageZoom from "vue-inner-image-zoom";
import StarRating from "vue-star-rating";
export default {
  name: "Product",
  components: { Footer, InnerImageZoom, StarRating, Seller, Comments, Options },
  data() {
    return {
      type: "seller",
    };
  },
};
</script>

<style scoped>
.control-buttons button {
  width: 30%;
  padding: 10px 0px;
  color: black;
  font-weight: bolder;
  border: 2px solid gray;
  cursor: pointer;
  background: transparent;
  border-radius: 5px;
}
#active-button {
  border-color: #e11c43;
}
.control-buttons {
  margin: 20px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
}
.options {
  display: flex;
  flex-wrap: wrap;
}
.options div > h4 {
  margin-bottom: 5px;
}
.buttons button:nth-child(2) {
  width: 50%;
  padding: 10px 0px;
  color: black;
  font-weight: bolder;
  border: 2px solid #e11c43;
  cursor: pointer;
  background: transparent;
  border-radius: 100px;
}
.buttons button:nth-child(1) {
  width: 50%;
  padding: 10px 0px;
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
  justify-content: space-between;
}
.price {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.price span:nth-child(2) {
  font-weight: bold;
  font-size: 24px;
}
.star {
  display: flex;
  align-items: center;
  gap: 30px;
}
.raiting {
  display: flex;
  color: gray;
  margin: 10px 0px;
  gap: 10px;
}
.product-action > h1 {
  font-weight: bold;
  font-size: 36px;
  padding: 0;
  margin: 0;
}
.product-action {
  width: 50%;
}
.product-img {
  width: 50%;
}
.product-main {
  padding: 10px 0px;
  display: flex;
  gap: 20px;
}
#product {
  width: 1140px;
  margin: auto;
  padding: 30px 0px;
}
</style>
