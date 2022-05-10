<template>
  <div>
    <h3>Select Car Page</h3>
    <p>{{ message }}</p>
    <p>{{ carList }}</p>
    <p>{{ storeA }}</p>
  </div>
</template>

<script>
import axios from "axios";
import { getMain } from "../../utils/main";
export default {
  name: "SelectCar",
  data() {
    return {
      message: "This is a vue2.0 project with SelectCar page.",
      carList: [],
    };
  },
  computed: {
    storeA: () => window?.store?.getStore()?.a,
  },
  methods: {
    async getCarList() {
      const listRes = await axios.get(
        `http://localhost:3000/vue2/car/getList?cardName=111&color=blue`
      );
      if (listRes.status === 200) {
        this.carList = listRes.data;
      }
    },
  },
  mounted() {
    this.getCarList();

    this.$nextTick(() => {
      //  当前页面隐藏底部
      let main = getMain();
      main?.appInfo?.footer?.changeFooter(false);
    });
  },
};
</script>
