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
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/containers/Footer.vue";
// import CatalogCards from "@/components/CatalogCards.vue";
import InnerImageZoom from "vue-inner-image-zoom";
import StarRating from "vue-star-rating";
export default {
  name: "Product",
  components: { Footer, InnerImageZoom, StarRating },
};
</script>

<style scoped>
.buttons button:nth-child(1) {
  width: 50%;
  padding: 6px 0px;
  color: white;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  background: #e11c43;
  border-radius: 100px;
}
.buttons {
  margin: 10px 0px;
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
