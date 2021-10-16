<template>
    <div class="buttons">
        <button>Войдите, чтобы оставить отзыв</button>
    </div>
</template>

<style scoped>
.buttons button {
  width: 30%;
  margin: auto;
  padding: 10px 0px;
  color: black;
  font-weight: bolder;
  border: 2px solid gray;
  cursor: pointer;
  background: transparent;
  border-radius: 100px;
}
.buttons button:hover {
  border-color: #e11c43;
}
.buttons {
  gap: 10px;
  padding: 50px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>