<template>
  <div class="main">
    <div class="container">
      <div>
        <a v-for="l in links" :key="l" href="#">{{ l }}</a>
      </div>
      <div>
        <div v-for="s in social" :key="s.img" class="social">
          <i :class="s.img"></i>
        </div>
      </div>
      <div>
        <img src="@/assets/logo.png" alt="Logo" />
        <br />
        <p>
          © 2021, EZY parts
        </p>
      </div>
    </div>
    <div class="fot">
      <span
        >Используя ezyparts.kz, вы принимаете условия использования сайта</span
      >
      <span
        >Разработка:
        <a href="https://yuldoshev.vercel.app/">yuldoshev.vercel.app</a></span
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      social: [
        {
          img: "fab fa-facebook-square",
        },
        {
          img: "fab fa-vk",
        },
        {
          img: "fab fa-instagram",
        },
      ],
      links: [
        "Каталог автозапчастей",
        "О компании",
        "Помощь",
        "Покупателю",
        "Продавцу",
        "Реклама на сайте",
        "Контакты",
      ],
    };
  },
};
</script>

<style scoped>
.main {
  background: #f7eeec;
}
.fot {
  width: 1140px;
  margin: auto;
  padding: 10px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
}
.container {
  display: grid;
  width: 1140px;
  margin: auto;
  padding: 20px 0px;
  gap: 10px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
}
.container > div {
  padding: 20px 0px;
}
.container > div:nth-child(1) {
  grid-column: span 3 / span 3;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: repeat(4, minmax(0, 1fr));
}
.container > div:nth-child(1) > a {
  font-weight: bold;
  color: black;
}
.container > div:nth-child(1) > a:hover {
  color: red;
}
.container > div:nth-child(2) {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.social {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  cursor: pointer;
  border-radius: 3px;
}
.social i {
  font-size: 20px;
}
.container > div:nth-child(3) > p {
  font-weight: bold;
  padding-top: 20px;
}
</style>
