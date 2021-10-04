<template>
  <div class="container">
    <img class="one" src="@/assets/wheel.png" alt="img" />
    <h1>Начните продавать на EZY Parts!</h1>
    <button>СТАТЬ ПРОДАВЦОМ</button>
    <img class="two" src="@/assets/Transmission.png" alt="img" />
  </div>
</template>

<style scoped>
.container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0px;
  background: #F7EEEC;
}
.container > h1 {
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  color: #18a7a7;
}
.container > button {
  padding: 17px 32px 18px;
  background: #18a7a7;
  border: none;
  box-sizing: border-box;
  border-radius: 3px;
  color: white;
  font-weight: bold;
}
.one {
  position: absolute;
  top: -5%;
  left: 1%;
}
.two {
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
