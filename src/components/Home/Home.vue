<template>
  <main class="wrap container-fluid">
    <div>
      <h2 class="upcoming-events">
        <span class="light">Upcoming</span>
        <span class="dark"> Event</span>
      </h2>
    </div>
    <div class="row center-xs middle-xs">
      <article>
        <router-link to="january2018">
          <div class="date">
            <span class="dark">JANUARY</span>
            <span class="light">FRI 12</span>
          </div>
        </router-link>
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

.upcoming-events {
  text-align: center;
  font-family: 'Roboto Mono', monospace;
  margin-bottom: 10px;
  
}
.light {
  color: rgba(255,255,255, 0.8);
}
.dark {
  color:#7A7A7A;
}
article {
  a{
    text-decoration: none;
  }
  .date {
    margin-bottom: 24px;
    font-family: 'Roboto Mono', monospace;
    font-size: 18px;
  }
}
</style>
