<template>
  <div class="options">
    <p class="content">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ipsam
      earum, alias nemo velit ad tempore deleniti saepe maiores aspernatur,
      quasi soluta asperiores placeat reiciendis illum sequi eius tempora.
      Laborum error enim delectus totam placeat consectetur voluptatem
      doloribus, minus numquam dolores quia quidem qui recusandae, non maiores
      magnam! Vel facere architecto sunt id vero perspiciatis. Libero dolor
      veritatis iure repellat sed voluptates corporis adipisci temporibus
      aspernatur nemo eligendi, dolorem dolorum at? Facere eum laudantium
      provident assumenda eos quae atque dolorum ipsa nam tempora corporis
      inventore aperiam ipsam quas vel fuga nostrum perferendis qui pariatur,
      rem ab? Culpa minima quas maiores dolor consectetur temporibus earum
      labore, laborum eius recusandae accusantium aliquid esse debitis deserunt
      rem illum ea commodi optio aperiam ratione. Quos similique sequi sunt
      temporibus aspernatur saepe illum in, nam harum hic voluptate placeat
      facere iusto debitis dolor velit, provident asperiores, maiores
      praesentium. Incidunt, quas dolore! Doloribus quibusdam eveniet fugiat!
    </p>
    <ul class="short">
      <li>
        <p>Производитель</p>
        <span>GAZPROMNEFT</span>
      </li>
      <li>
        <p>Производитель</p>
        <span>GAZPROMNEFT</span>
      </li>
    </ul>
    <div class="main-option">
      <div class="option">
        <h4>Общие характеристики</h4>
        <ul class="option-short">
          <li>
            <p>Производитель</p>
            <span>GAZPROMNEFT</span>
          </li>
          <li>
            <p>Производитель</p>
            <span>GAZPROMNEFT</span>
          </li>
        </ul>
      </div>

      <div class="option">
        <h4>Общие характеристики</h4>
        <ul class="option-short">
          <li>
            <p>Производитель</p>
            <span>GAZPROMNEFT</span>
          </li>
          <li>
            <p>Производитель</p>
            <span>GAZPROMNEFT</span>
          </li>
        </ul>
      </div>


      <div class="option">
        <h4>Общие характеристики</h4>
        <ul class="option-short">
          <li>
            <p>Производитель</p>
            <span>GAZPROMNEFT</span>
          </li>
          <li>
            <p>Производитель</p>
            <span>GAZPROMNEFT</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.option {
  width: 45%;
}
.option-short {
  display: grid;
  width: 100%;
  margin: 20px 0px;
}
.option-short li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0px;
  border-bottom: 2px solid lightgray;
  border-bottom-style: dashed;
}
.main-option {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
}
.short {
  display: grid;
  width: 100%;
  gap: 20px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin: 40px 0px;
}
.short li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0px;
  border-bottom: 2px solid lightgray;
  border-bottom-style: dashed;
}
.options .content {
  text-align: center;
  margin-top: 30px;
  line-height: 20px;
  font-weight: bolder;
}
</style>
