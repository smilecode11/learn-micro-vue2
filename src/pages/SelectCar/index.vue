<template>
  <div>
    <h3>Select Car Page</h3>
    <p>{{ message }}</p>
    <p>{{ carList }}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SelectCar",
  data() {
    return {
      message: "This is a vue2.0 project with SelectCar page.",
      carList: [],
    };
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
  },
};
</script>
