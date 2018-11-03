<template>
  <div class="column">
    <main class="wrap container-fluid">
        <div>
          <h2 class="upcoming-events">
            <span class="light">Upcoming</span>
            <span class="dark"> Event</span>
          </h2>
        </div>
        <div class="row center-xs middle-xs">
          <article>
            <router-link to="nov2018">
              <div class="date">
                <span class="dark">NOV</span>
                <span class="light">FRI 09</span>
              </div>
            </router-link>
            <div class="row center-xs middle-xs">
              <router-link class="row center-xs middle-xs" to="nov2018">
                <nov2018></nov2018>
              </router-link>
            </div>
          </article>
        </div>
        <div>
          <h2 class="upcoming-events">
            <span class="light">Past</span>
            <span class="dark"> Events</span>
          </h2>
        </div>
        <div class="row center-xs middle-xs">
          <article>
            <router-link to="oct2018">
              <div class="date">
                <span class="dark">OCT</span>
                <span class="light">SA 06</span>
              </div>
            </router-link>
            <div class="row center-xs middle-xs">
              <router-link class="row center-xs middle-xs" to="oct2018">
                <oct2018></oct2018>
              </router-link>
            </div>
          </article>
        </div>
        <div class="column center-xs middle-xs">
          <article>
            <router-link to="april2018">
              <div class="date">
                <span class="dark">APRIL</span>
                <span class="light">FRI 13</span>
              </div>
            </router-link>
            <div class="row center-xs middle-xs">
              <router-link class="row center-xs middle-xs" to="april2018">
                <apr2018></apr2018>
              </router-link>
            </div>
          </article>
          <article>
            <router-link to="january2018">
              <div class="date">
                <span class="dark">JANUARY</span>
                <span class="light">FRI 12</span>
              </div>
            </router-link>
            <div class="row center-xs middle-xs">
              <router-link to="january2018">
                <jan2018></jan2018>
              </router-link>
            </div>
          </article>
        </div>
      </main>
      <footer class="column">

        <div class="layout-margin">
          <span class="light">Schochibar on</span>
          <a href="https://www.facebook.com/Schochibar/">Facebook</a>
          <span class="light">-</span>
          <a href="https://www.instagram.com/schochibar/">Instagram</a>
        </div>
        <div>
          <span class="light">Website by </span> <a class="dark" href="https://brunnerliv.io" target="_blank">Livio Brunner</a>
        </div>
      </footer>
  </div>
</template>
<script>
import JAN2018 from '../Events/JAN2018/JAN2018';
import APR2018 from '../Events/APR2018/APR2018';
import OCT2018 from '../Events/OCT2018/OCT2018';
import NOV2018 from '../Events/NOV2018/NOV2018';

export default {
  name: 'Home',
  components: {
    apr2018: APR2018,
    jan2018: JAN2018,
    oct2018: OCT2018,
    nov2018: NOV2018,
  },
};
</script>


<style lang="scss" scoped>
$footer-height : 80px;
main {
    padding-top: 20px;
    min-height: calc(100vh - #{$footer-height});
}

article {
  margin-bottom: 30px;
}

footer {
  width: 100%;
  text-align: center;
  font-family: 'Roboto Mono', monospace;
  color: #7A7A7A;
  margin-top: 20px;
  margin-bottom: 20px;
  a{
    color: #7A7A7A;
  }
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
