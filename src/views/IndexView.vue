<template>
  <div class="body">
    <h2>Inside Open Art</h2>
    <div class="container">
      <div>
        <img :src="icon1" alt="">
        <p style="font-size: 24px;color:#333333">4pt grid system</p>
        <p style="color:#555555;">Base on 4pt gird system. Our UI KIT help you crate perfect white space</p>
      </div>
      <div>
        <img :src="icon2" alt="">
        <p style="font-size: 24px;color:#333333">Color style</p>
        <p style="color:#555555;">All color in OpenArt are styled. You can change all
          design color with one click</p>
      </div>
      <div>
        <img :src="icon3" alt="">
        <p style="font-size: 24px;color:#333333">Free font</p>
        <p style="color:#555555;">OpenArt use Epilogue font family</p>
        <p style="color:#555555;">Available with open licence in gooogle font</p>
      </div>
      <div>
        <img :src="icon4" alt="">
        <p style="font-size: 24px;color:#333333">Darkmode avaiable</p>
        <p style="color:#555555;">Our UI Kit support darkmode</p>
        <p style="color:#555555;">Chage your design to dark mode with one click</p>
      </div>
      <div>
        <img :src="icon5" alt="">
        <p style="font-size: 24px;color:#333333">Easy to customize</p>
        <p style="color:#555555;">Create any design with OpenArt UI kits </p>
      </div>
      <div>
        <img :src="icon6" alt="">
        <p style="font-size: 24px;color:#333333">Variant components</p>
        <p style="color:#555555;">All component art variant, easy to design,
          easy to control</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import icon1 from '../assets/Prison.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import icon4 from '../assets/icon4.png'
import icon5 from '../assets/icon5.png'
import icon6 from '../assets/icon6.png'
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-shadow: 0;
  font-family: Epilogue, sans-serif;
}

.body {
  background-image: url('../assets/3.png');
  width: 100%;
  background-size: cover;
  background-position: center center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h2 {
  margin-top: 60px;
  font-size: 40px;
  font-weight: 700;
  text-align: center;
}

.container>div {
  width: 30%;
  background-color: white;
  height: auto;
  margin: 10px;
  color: black;
  border-radius: 16px;
  padding: 20px;
}

.container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  margin-top: 30px;
}

.container>div p:nth-child(2) {
  margin: 10px;
  font-weight: 500;
}

.container>div p:last-child,
.container>div p:nth-child(3) {
  opacity: 0.7;
  margin-left: 10px;
}

.container>div img {
  width: 30px;
  margin-left: 10px;
}

.container>div p {
  font-size: 16px;
  line-height: 21px;
}

/* Responsive */

@media (max-width: 768px) {
  .container>div {
    width: 45%;
  }
}

@media (max-width: 576px) {
  .container>div {
    width: 90%;
  }
}</style>