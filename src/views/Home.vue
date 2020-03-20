<template>
  <div class="home">
    <calculator></calculator>
  </div>
</template>

<script>
// @ is an alias to /src
import calculator from "../components/calculation/calculator.vue";

export default {
  name: "Home",
  components: {
    calculator
  },
};
</script>
