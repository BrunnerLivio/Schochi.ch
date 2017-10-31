<template>
  <main>
      <div class="row center-xs middle-xs">
          <div class="schochi-galvanik row center-xs middle-xs">
              <div class="box row center-xs middle-xs" data-tilt>
                  <div class="column">
                      <h2>SCHOCHI</h2>
                      <div class="divider"></div>
                      <h2>GALVANIK</h2>
                  </div>
               </div>
          </div>
      </div>
  </main>
</template>
<script>
import VanillaTilt from 'vanilla-tilt';

export default {
  name: 'Home',
  mounted() {
    VanillaTilt.init(document.querySelector('.schochi-galvanik'), {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.2,
    });
  },
};
</script>


<style lang="scss" scoped>
$articleHeight: 400px;
$articleWidth: 400px;
.schochi-galvanik {
  width: $articleHeight;
  height: $articleWidth;
  background: #FFB5A8;
  text-align: center;
  transform-style: preserve-3d;
}

.divider {
    height: 3px; 
    width: 140%;
    margin-left: -20%;
    background: black;
}
.box {
    border: 3px solid black;
    width: $articleHeight - 50;
    height: $articleWidth - 50;
    transform: translateZ(20px);
}
</style>
