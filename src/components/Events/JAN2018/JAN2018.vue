<template>
    <div class="schochi-galvanik row center-xs middle-xs">
        <div class="box row center-xs middle-xs" data-tilt>
            <div class="column inner-box">
                <div class="schochi-logo"></div>
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
@import '../../../style/theme.scss';

$articleHeightXs: 300px;
$articleWidthXs: 300px;
$articleHeightMd: 400px;
$articleWidthMd: 400px;
.schochi-galvanik {
  width: $articleHeightXs;
  height: $articleWidthXs;
  background: #FFB5A8;
  text-align: center;
  transform-style: preserve-3d;
  @media #{$break-md} {
    width: $articleHeightMd;
    height: $articleWidthMd;
  }
}

.schochi-logo {
    background-image: url(../../../../static/schochi_stempel.svg);
    width: 150px;
    height: 60px;
    background-size: 100% auto;
    background-repeat: no-repeat;
    @media #{$break-md} {
        width: 200px;
        height: 80px;
    }
}
.divider {
    height: 2px; 
    width: 120%;
    margin-left: -10%;
    background: #181818;
}
.box {
    border: 2px solid #181818;
    width: $articleHeightXs - 60;
    height: $articleWidthXs - 60;
    transform: translateZ(40px);
    @media #{$break-md} {
        width: $articleHeightMd - 60;
        height: $articleWidthMd - 60;
    }
    .inner-box {
        h2 {
            font-family: 'Playfair Display', serif;
            font-size: 30px;
            margin: 10px;
            color: #181818;
            @media #{$break-md} {
                font-size: 40px;
            }
        }
    }
}
</style>
