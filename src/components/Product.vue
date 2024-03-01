<template>
  <v-row class="ml-3 mt-3">
    <v-col cols="4" sm="6" md="6" lg="2">
      <v-select v-model="SortCategory" density="compact" label="Name" :items="['All']" variant="outlined"
        @change="applyFilters"></v-select>
    </v-col>
    <v-col cols="4" sm="6" md="6" lg="2">
      <v-select v-model="SortPrice" label="Price" density="compact" :items="['Price ↑', 'Price ↓']" variant="outlined"
        @change="applyFilters"></v-select>
    </v-col>
    <v-col cols="4" sm="6" md="6" lg="2">
      <v-select v-model="SortPrice" label="Price" density="compact" :items="['Price ↑', 'Price ↓']" variant="outlined"
        @change="applyFilters"></v-select>
    </v-col>
    <v-col cols="12" sm="6" md="6" lg="6" class="text-right">
      <v-btn style="background-color: rgb(212, 227, 255);color:#0f0f13" class="rounded-1 text-capitalize" variant="tonal">
        Show
        <span class="text-lowercase ml-1"> all</span>
      </v-btn>
      <v-btn style="font-weight: 400;color: rgb(34, 100, 209);" bg-color="white" class="rounded-1 text-capitalize"
        variant="elevated" elevation="3">
        Auction
      </v-btn>
      <v-btn style="background-color:rgb(212, 227, 255);color:#0f0f13" class="rounded-1 text-capitalize" variant="tonal">
        Buy
        <span class="text-lowercase ml-1"> now</span>
      </v-btn>
      <v-btn style="background-color: rgb(212, 227, 255)" class="ml-5" ariant="tonal" elevation="0">
        <v-icon>mdi mdi-menu</v-icon>
      </v-btn>
      <v-btn class="mr-5" variant="elevated">
        <v-icon style="color: #0c5bda;">mdi mdi-microsoft</v-icon>
      </v-btn>
    </v-col>
  </v-row>
  <v-row class="mr-3 ml-1">
    <v-col cols="12">
      <v-chip variant="text"><span class="mt-2" style="font-weight: 550;">Related</span></v-chip>
      <v-chip class="mr-2 mt-2">
        worldwide shipping
      </v-chip>
      <v-chip class="mr-2 mt-2">
        under $50
      </v-chip>
      <v-chip class="mr-2 mt-2">
        kitten
      </v-chip>
      <v-chip class="mr-2 mt-2">
        plastic plugs
      </v-chip>
      <v-chip class="mr-2 mt-2">
        pucker shoes
      </v-chip>
      <v-chip class="mr-2 mt-2">
        vintage typewriter
      </v-chip>
    </v-col>
  </v-row>
  <v-row style="padding-left:50px;" class="custom-shadow">
    <v-col cols="12" sm="6" md="4" lg="3" v-for="(mayanhs, i) in Mayanhs" :key="i">
      <v-card height="472px" width="258px" align="center" variant="flat" hover>
        <v-img :src="mayanhs.image" width="227px" height="224px" contain class="flex-grow-1"
          style="object-fit: cover"></v-img>
        <v-card-text class="mt-n4 text-left" style="font-size: 16px; color: #19191d" height="226px" with="74px">{{
          mayanhs.title }}</v-card-text>
        <v-card-text class="mt-n2 text-left" height="226px" width="36px">
          <v-row>

            <v-col cols="6">
              <v-card-item style="padding-left: 0%;">
                <strong style="font-size: 18px">${{ mayanhs.price }}</strong>
              </v-card-item>
            </v-col>
            <v-col cols="6">
              
              <span v-if="mayanhs.sale > 0"
                style="border-radius: 4px;margin-right: 0.7%;font-size: 12px;float: right;min-width: 70px;min-height: 24px;padding: 2px;background-color: #ECF7ED;text-align: center;color: #37833B;font-weight: 300;font-family: Roboto;">
                {{ mayanhs.sale }}% OFF
              </span>
              <span v-if="mayanhs.cool == true"
                style="border-radius: 4px;margin-right: 0.7%;font-size: 12px;float: right;min-width: 70px;min-height: 24px;padding: 2px;background-color: #FDEDF2;text-align: center;color: #C23564;font-weight: 300;font-family: Roboto;">
                Cool deal!
              </span>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-text class="mt-n4 text-left" style="font-size: 14px; color: #787885" height="226px" width="21px">{{
          mayanhs.reviews }}</v-card-text>
        <v-card-actions>
          <v-rating half-increments hover readonly model-value="4.5" :size="20" color="yellow-darken-3" class="mb-1 mr-3"
            style="padding-bottom: 6px;"></v-rating>4.5
          <v-spacer></v-spacer>
          <v-btn prepend-icon="mdi-heart-outline" variant="outlined" class="text-capitalize" color="primary">Watch</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: "TrangChu",
  data() {
    return {
      showList: false,
      SortCategory: "All",
      SortPrice: "",
      filteredMayanhs: [
        {
          image:
            "https://media.istockphoto.com/id/147873072/photo/old-typewriter-with-copy-space.jpg?b=1&s=170667a&w=0&k=20&c=IMiimim9fpX5d1jl2YcoVz7c2c5PzLm_wTqx__uzbvk=",
          title:
            "Vintage Typewriter to post awesome stories about UI design and webdev.",
          price: "45.59",
          sale: "0",
          cool: "false",
          reviews: "Eligible for Shipping To Mars or somewhere else"
        },
        {
          image:
            "https://5.imimg.com/data5/ST/BI/HC/ANDROID-728498/product-jpeg-500x500.jpg",
          title:
            "Lee Pucker design. Leather botinki for handsome designers. Free shipping.",
          price: "13.95",
          sale: "0",
          cool: "false",
          reviews: "1258 bids, 359 watchers /r $5.95 for shipping"
        },
        {
          image: "https://thumbs.dreamstime.com/b/cat-milk-1080079.jpg",
          title:
            "Timesaving kitten to save months on development. Playful, cute, cheap!",
          price: "128.99",
          sale: "0",
          cool: "false",
          reviews:
            "Eligible for nothing :( Eligible for nothing :( Eligible for nothing :("
        },
        {
          image:
            "https://livingetc.com.au/wp-content/uploads/Ribbed-candle-holder-ochre.jpg",
          title:
            "Plastic useless plugs and tubes for high-fidelity prototyping. Fit & Eat!",
          price: "12.48",
          sale: "50",
          cool: "false",
          reviews: "Wordwide shitting available Buyers protection possible!"
        },
        {
          image: "https://img.thewhiskyexchange.com/900/soft_cha1.jpg",
          title:
            "Creativity stimulating lotion. Drink every morning to generate better ideas!",
          price: "12.48",
          sale: "0",
          cool: "false",
          reviews: "Wordwide shifting available Buyers protection possible!"
        },
        {
          image:
            "https://www.hallmark.com/dw/image/v2/AALB_PRD/on/demandware.static/-/Sites-hallmark-master/default/dwb9e1d546/images/finished-goods/products/1XPX2269/Cozy-Snowman-and-Flurries-Boxed-Christmas-Cards_1XPX2269_07.jpg?sw=1920",
          title:
            "KISTOCHKI & KRASIBO. Top cosmetics brand from Chelyabinsk is here!",
          price: "128.99",
          sale: "0",
          cool: "false",
          reviews: "Eligible for Shipping To Mars or somewhere else"
        },
        {
          image:
            "https://github.com/VanAn02/Bai_Tap_Font_End/blob/main/src/assets/img/Image%206.png?raw=true",
          title:
            "Timesaving kitten to save months on development. Playful, cute, cheap!",
          price: "13.95",
          sale: "0",
          cool: "false",
          reviews: "1258 bids, 359 watchers $5.95 for shipping"
        },
        {
          image:
            "https://github.com/VanAn02/Bai_Tap_Font_End/blob/main/src/assets/img/Image%207.png?raw=true",
          title:
            "Envelope, Stripes, Pencil and etc. Purchase this kit today and feel OKAY",
          price: "9.50",
          sale: "0",
          cool: "false",
          reviews: "Eligible for Shipping To Mars or somewhere else"
        },
        {
          image:
            "https://th.bing.com/th/id/OIP.UfqlZWiQZb1AWbhRpHJ3PAAAAA?w=400&h=400&rs=1&pid=ImgDetMain",
          title:
            "Professional teadrinking set for every designer and developer",
          price: "45.59",
          sale: "0",
          cool: "false",
          reviews: "Wordwide shifting available Buyers protection possible!"
        },
        {
          image:
            "https://th.bing.com/th/id/OIP.SVzWjvLddjvbfkEDJdGFCQHaLE?w=665&h=994&rs=1&pid=ImgDetMain",
          title:
            "KISTOCHKI & KRASIBO. Top cosmetics brand from Chelyabinsk is here!",
          price: "11.68",
          sale: "0",
          cool: "false",
          reviews: "Wordwide shifting available Buyers protection possible!"
        },
        {
          image:
            "https://github.com/VanAn02/Bai_Tap_Font_End/blob/main/src/assets/img/Image%2010.png?raw=true",
          title:
            "Envelope, Stripes, Pencil and etc. Purchase this kit today and feel OKAY",
          price: "1.25",
          sale: "0",
          cool: "true ",
          reviews: " Eligible for Shipping To Mars or somewhere else  else"
        },
        {
          image:
            "https://github.com/VanAn02/Bai_Tap_Font_End/blob/main/src/assets/img/Image%2011.png?raw=true",
          title:
            "Envelope, Stripes, Pencil and etc. Purchase this kit today and feel OKAY",
          price: "23.25",
          sale: "0",
          cool: "false",
          reviews: "KISTOCHKI & KRASIBO. Top cosmetics Chelyabinsk is here!"
        }
      ],
      Mayanhs: []
    };
  },
  methods: {
    toggleList() {
      this.showList = !this.showList;
    },
    filterLoaiSanPham(value) {
      if (value === "All") {
        this.Mayanhs = this.filteredMayanhs;
        return;
      }
      this.Mayanhs = this.filteredMayanhs.filter(item =>
        item.title.includes(value)
      );
    },
    filterPrice() {
      let filtered = [...this.Mayanhs];

      if (this.SortPrice === "Price ↑") {
        this.Mayanhs = filtered.sort(
          (a, b) => parseFloat(a.price) - parseFloat(b.price)
        );
      } else {
        this.Mayanhs = filtered.sort(
          (a, b) => parseFloat(b.price) - parseFloat(a.price)
        );
      }
    }
  },
  watch: {
    SortCategory(newval) {
      this.filterLoaiSanPham(newval);
    },
    SortPrice(newval) {
      this.filterPrice(newval);
    }
  },
  created() {
    this.Mayanhs = this.filteredMayanhs;
  }
};
</script>
<style>
.custom-shadow {
  margin-top: 10px;
  border-radius: 10px;
  box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.2);
}
</style>