<template>
  <div class="body">
    <h2>Inside Open Art</h2>
    <div class="div container">
      <div>
        <p>
          <i class="mdi mdi-pound" style="font-size: 30px;"></i>
        </p>
        <p style="font-size: 24px;">4pt gird system</p>
        <p style="font-size: 16px;">
          Base on 4pt grid system. Our UI kit help you create perfect white
          space
        </p>
      </div>
      <div>
        <p>
          <i class="mdi mdi-pencil-outline" style="font-size: 30px;"></i>
        </p>
        <p style="font-size: 24px;">Color style</p>
        <p style="font-size: 16px;">
          All color in OpenArt are styled. You can change all design color with
          one click
        </p>
      </div>
      <div>
        <p>
          <i class="mdi mdi-caps-lock" style="font-size: 30px;"></i>
        </p>
        <p style="font-size: 24px;">Free font</p>
        <p style="font-size: 16px;">
          OpenArt use Epilogue font family Available with open licence in
          gooogle font
        </p>
      </div>
      <div>
        <p>
          <i class="mdi mdi-toggle-switch" style="font-size: 30px;"></i>
        </p>
        <p style="font-size: 24px;">Darkmode avaiable</p>
        <p style="font-size: 16px;">
          Our UI Kit support darkmode Chage your design to dark mode with one
          click
        </p>
      </div>
      <div>
        <p>
          <i class="mdi mdi-pencil-ruler" style="font-size: 30px;"></i>
        </p>
        <p style="font-size: 24px;">Easy to customize</p>
        <p style="font-size: 16px;">Create any design with OpenArt UI kits </p>
      </div>
      <div>
        <p>
          <i class="mdi mdi-arrow-all" style="font-size: 30px;"></i>
        </p>
        <p style="font-size: 24px;">Variant components</p>
        <p style="font-size: 16px;">All component art variant, easy to design, easy to control</p>
      </div>
    </div>
  </div>
</template>
    
<script>
export default {
  name: "IndexView"
};
</script>
    
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-shadow: 0;
  font-family: Epilogue, sans-serif;
}

.body {
  background-image: url('../assets/img/anh.png');
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
  border-radius: 5px;
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
  width: 20px;
  margin-left: 10px;
}

.container>div p {
  font-size: 16px;
  line-height: 21px;
}</style>