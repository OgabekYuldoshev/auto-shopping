<template>
  <nav>
    <div class="nav">
      <div>
        <span><i class="fas fa-map-marker-alt"></i> Алматы</span>
        <p>Бесплатная доставка заказов до конца декабря!</p>
      </div>
    </div>
    <div>
      <div class="navbar">
        <img src="@/assets/logo.png" alt="Logo" />
        <ul class="links">
          <li v-for="link in links" :key="link">
            <a class="link" href="#">{{ link }}</a>
          </li>
        </ul>
        <div class="search">
          <input
            type="text"
            placeholder="Введите номер детали, название или VIN"
          />
          <i class="fas fa-history"></i>
          <i class="fas fa-search"></i>
        </div>
        <div class="action">
          <div class="action-ch">
            <i class="fas fa-shopping-cart"></i>
          </div>
          <div class="action-ch">
            <i class="far fa-user"></i>
          </div>
        </div>
      </div>
    </div>
    <CatalogNav />
  </nav>
</template>

<script>
import CatalogNav from "./CatalogNav.vue";
export default {
  components: { CatalogNav },
  name: "Navbar",
  data() {
    return {
      links: ["О нас", "Помощь", "Продавцу", "Покупателю", "Контакты"],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav {
  padding: 10px 0px;
  background: #3f3f3f;
}
.nav div {
  width: 1140px;
  margin: auto;
  color: white;
  display: flex;
  align-items: center;
  position: relative;
}
.nav span {
  cursor: pointer;
}
.nav div p {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.navbar {
  width: 1140px;
  margin: auto;
  padding: 10px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.links {
  display: flex;
  align-items: center;
  gap: 10px;
}
.link {
  color: black;
}

.link:hover {
  color: red;
}
.search {
  padding: 10px;
  width: 400px;
  display: flex;
  color: gray;
  gap: 10px;
  border-bottom: 1px solid black;
}
.search input {
  width: 100%;
  border: none;
  background: transparent;
}
.search i {
  cursor: pointer;
}
.search input:focus {
  outline: none;
}
.action {
  display: flex;
  align-items: center;
  gap: 20px;
}
.action-ch {
  background: #3baeab;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  color: white;
  cursor: pointer;
  align-items: center;
  justify-content: center;
}
</style>
