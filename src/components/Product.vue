<template>
  <v-row class="ml-3 mt-3">
    <v-col cols="4" sm="4" md="6" lg="2">
      <v-select v-model="SelectedCategory" density="compact" label="SORT BY"
        :items="['All']" variant="outlined"></v-select>
    </v-col>
    <v-col cols="4" sm="4" md="6" lg="2">
      <v-select v-model="selectedSort" density="compact" label="Sắp xếp"
      :items="['Price ↓', 'Price ↑']"
        variant="outlined"></v-select>
    </v-col>
    <v-col cols="4" sm="4" md="6" lg="2">
      <v-select v-model="selectedThree" density="compact" label="Địa điểm"
      :items="['Hà Nội', 'Sài Gòn', 'Thành phố Hồ Chí Minh', 'Khác']"
        variant="outlined"></v-select>
    </v-col>
    <v-col cols="12" sm="12" md="6" lg="6" class="text-right">
      <v-btn style="background-color: rgb(212, 227, 255);color:#0f0f13" class="rounded-1 text-capitalize" variant="tonal">
        Show
        <span class="text-lowercase ml-1"> all</span>
      </v-btn>
      <v-btn style="font-weight: 400;color: rgb(34, 100, 209);" bg-color="white" class="rounded-1 text-capitalize"
        variant="elevated" elevation="3">
        Login
      </v-btn>
      <v-btn style="background-color:rgb(212, 227, 255);color:#0f0f13" class="rounded-1 text-capitalize" variant="tonal">
        Buy
        <span class="text-lowercase ml-1"> now</span>
      </v-btn>
      <v-btn style="background-color: rgb(212, 227, 255)" class="ml-5" variant="tonal" elevation="0">
        <v-icon>mdi mdi-menu</v-icon>
      </v-btn>
      <v-btn class="mr-5" variant="elevated">
        <v-icon style="color: #0c5bda;">mdi mdi-cart-arrow-down</v-icon>
      </v-btn>
    </v-col>
  </v-row>
  
  
  <v-parallax src="https://images.pexels.com/photos/1408221/pexels-photo-1408221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" style=" max-width: 100%;border-bottom: 90px;height: 50vh"></v-parallax>
  <v-row class="mr-3 ml-1">
    <v-col cols="12">
      <v-chip variant="text"><span class="mt-2" style="font-weight: 550;">Gợi ý</span></v-chip>
      <v-chip class="mr-2 mt-2">Hoa sinh nhật</v-chip>
      <v-chip class="mr-2 mt-2">Hoa tình yêu</v-chip>
      <v-chip class="mr-2 mt-2">Hoa khai trương</v-chip>
      <v-chip class="mr-2 mt-2">Giỏ hoa</v-chip>
      <v-chip class="mr-2 mt-2">Lan hồ điệp</v-chip>
      <v-chip class="mr-2 mt-2">Hoa tang lễ</v-chip>
    </v-col>
  </v-row>
  <v-card class="custom-shadow">
    <v-row class="mr-3 ml-3 mt-1">
      <v-col class="d-flex flex-column justify-center align-center" v-for="item in filteredProducts" :key="item.id" cols="12" sm="6" md="4" lg="3">
        <v-card hover variant="flat" style="min-height: 472px;width: 250px;" class="mb-3 my-card">
          <v-img class="mx-auto mt-2" width="220px" height="224px" :src="item.image" alt="Product Image"></v-img>
          <v-card-text class="my-card-text" style="max-width: 227px;padding-left:40px;font-size: 16px;line-height: 24px; height: 90px;font-family: 'Inter', sans-serif;color: #19191D;">{{ item.name }}</v-card-text>
          <v-card-text class="mt-2 mx-auto" style="font-family: 'Inter', sans-serif;color:#000000;max-width: 250px;font-size: 24px;font-weight: 700;padding: auto;height: 36px;">
            {{ formatPrice(item.price) }} VNĐ
          </v-card-text>
          <p class="ml-4" style="margin-top: 8px;height: 41px;font-size: 14px;font-family: 'Inter', sans-serif;color: #787885;">{{ item.description }}</p>
          <v-row style="margin-top: 5px;margin-left: -6px;">
            <v-col class="ml-3 mt-1" cols="5" style="display: flex;">
              <v-icon color="amber" size="x-small">mdi mdi-star</v-icon>
              <v-icon color="amber" size="x-small">mdi mdi-star</v-icon>
              <v-icon color="amber" size="x-small">mdi mdi-star</v-icon>
              <v-icon color="amber" size="x-small">mdi mdi-star</v-icon>
              <v-icon v-if="item.feedback < 5 && item.feedback > 4" color="amber" size="x-small">mdi mdi-star-half</v-icon>
              <v-icon v-else color="amber" size="x-small">mdi mdi-star</v-icon>
              <span style="font-size: 14px;"></span>
            </v-col>
            <v-col class="text-right" cols="6">
              <v-btn class="text-capitalize" style="margin-right: 6px;font-family: 'Inter', sans-serif;font-size: 14px;" color="red" size="small" prepend-icon="mdi-heart-outline" variant="outlined">
                Mua
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useProduct } from "../views/Admin/Product/product"; 

const SelectedCategory = ref('All');
const selectedSort = ref('Price ↓');
const selectedThree = ref('Hà Nội');

const props = defineProps({
  item: Object
});

const formatPrice = (price) => {
  if (typeof price === 'number') {
    return price.toLocaleString('vi-VN');
  }
  return price;
};

const { products, query, getAllProducts } = useProduct();
products.value = []; // Initialize products as an empty array

const filteredProducts = computed(() => {
  let filtered = [...products.value];

  if (SelectedCategory.value !== 'All') {
    filtered = filtered.filter(product => product.name.includes(SelectedCategory.value));
  }

  if (selectedSort.value === "Price ↓") {
    return filtered.sort((a, b) => b.price - a.price);
  } else {
    return filtered.sort((a, b) => a.price - b.price);
  }
});

const getData = async () => {
  try {
    const res = await getAllProducts();
    if (res && res.data) {
      products.value = res.data;
    } else {
      console.error("Data not found in response:", res);
      products.value = []; // Set an empty array if no data found
    }
  } catch (error) {
    console.error("Failed to fetch products:", error);
    products.value = []; // Set an empty array in case of error
  }
  console.log(products.value);
};

onMounted(() => {
  query.keyword = "";
  query.page = 1;
  query.limit = 100;
  getData();
});

</script>

<style>
.custom-shadow {
  margin-top: 10px;
  margin-bottom: 25px;
  border-radius: 15px;
  box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.2);
}
.my-card {
  max-height: 200px; 
  overflow: hidden;  
}

.my-card-text {
  overflow-y: hidden;
}
@media (max-width: 830px) {
  .footer{
    flex-direction: column;
  }
  .footer .card{
    margin: 0 auto;
    margin-bottom: 20px;
    width: 95% !important;
  }
}
</style>
