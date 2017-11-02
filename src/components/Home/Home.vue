<template>
  <main class="wrap container-fluid">
    <div class="row center-xs middle-xs">
      <article>
        <div class="date">
          <span class="month">JANUARY</span> Fri 12
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
    font-family: 'Raleway', sans-serif;
    color: white;
    font-size: 25px;
    .month {
      color: #7A7A7A;
      font-size: 20px;
    }
  }
}
</style>
