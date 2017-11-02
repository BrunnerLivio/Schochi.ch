<template>
    <div class="schochi-galvanik row center-xs middle-xs">
        <div class="box row center-xs middle-xs" data-tilt>
            <div class="column inner-box">
                <h2>SCHOCHI</h2>
                <div class="divider"></div>
                <h2>GALVANIK</h2>
            </div>
        </div>
    </div>
</template>

<script>
import VanillaTilt from 'vanilla-tilt';
import isMobile from '../../shared/isMobile';

export default {
  name: 'JAN2018',
  mounted() {
    if (!isMobile()) {
      VanillaTilt.init(document.querySelector('.schochi-galvanik'), {
        max: 15,
        speed: 400,
      });
    }
  },
};
</script>
<style lang="scss" scoped>
$articleHeight: 300px;
$articleWidth: 300px;
.schochi-galvanik {
  width: $articleHeight;
  height: $articleWidth;
  background: #FFB5A8;
  text-align: center;
  transform-style: preserve-3d;
}

.divider {
    height: 2px; 
    width: 120%;
    margin-left: -10%;
    background: #181818;
}
.box {
    border: 2px solid #181818;
    width: $articleHeight - 60;
    height: $articleWidth - 60;
    transform: translateZ(40px);
    .inner-box {
        h2 {
            font-family: 'Playfair Display', serif;
            font-size: 30px;
            margin: 10px;
            color: #181818;
        }
    }
}
</style>
