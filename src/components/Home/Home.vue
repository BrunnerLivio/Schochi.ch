<template>
  <main class="wrap container-fluid">
    <div class="row center-xs middle-xs">
      <article>
        <div class="date">
          <span class="month">JANUARY</span>
          <span class="day">Fri 12</span>
        </div>
        <router-link to="january2018">
          <jan2018></jan2018>
        </router-link>
      </article>
    </div>
  </main>
</template>
<script>
import JAN2018 from '../Events/JAN2018/JAN2018';

export default {
  name: 'Home',
  components: {
    jan2018: JAN2018,
  },
};
</script>


<style lang="scss" scoped>
main {
    padding-top: 20px;
}

article {
  a{
    text-decoration: none;
  }
  .date {
    margin-bottom: 20px;
    font-family: 'Roboto Mono', monospace;
    .month {
      color: #7A7A7A;
      font-size: 20px;
    }
    .day {
      margin-left: -5px;
      color: rgba(255, 255, 255, 0.8);
      font-size: 26px;
    }
  }
}
</style>
