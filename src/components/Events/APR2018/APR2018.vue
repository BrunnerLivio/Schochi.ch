<template>
    <div class="card zug-entgleist row center-xs middle-xs">
        <div class="logo"></div>
        <div class="stripe"></div>
        <div class="box">
          <p class="headliner">
            And.re
          </p>
          <p>
            (Round The Corner)
          </p>
          <p>
            Zürich
          </p>
          <p class="djs">
            Michgail &nbsp; Leroux
          </p>
          <p>
            (Schochibar)
          </p>
        </div>
        <div class="box2"></div>
        <div class="box3"></div>
    </div>
</template>

<script>
import VanillaTilt from 'vanilla-tilt';
import isMobile from '../../shared/isMobile';

export default {
  name: 'APR2018',
  mounted() {
    if (!isMobile()) {
      VanillaTilt.init(document.querySelector('.zug-entgleist'), {
        max: 15,
        speed: 400,
      });
    }
  },
};
</script>
<style lang="scss" scoped>
@import '../../../style/theme.scss';

@font-face {
    font-family: 'Futura'; /*a name to be used later*/
    src: url('../../../../static/futura.ttf'); /*URL to font*/
}

$articleHeightXs: 300px;
$articleWidthXs: 300px;
$articleHeightMd: 400px;
$articleWidthMd: 400px;
.card {
  width: $articleHeightXs;
  height: $articleWidthXs;
  background: #ffd3f7;
  text-align: center;
  transform-style: preserve-3d;
  overflow: hidden;
  transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);
  @media #{$break-md} {
    width: $articleHeightMd;
    height: $articleWidthMd;
  }
  h2 {
      font-family: 'Futura';
  }
}

.logo {
  background-image: url('../../../../static/zug_entgleist.png');
  width: 100%;
  height: 100%;
  @media #{$break-md} {
    background-size: 280px;
  }
  background-size: 200px;
  display: block;
  background-repeat: no-repeat;
  z-index: 3;
  background-position: center;
  transform: translateZ(40px);
}

.stripe {
  width: 800px;
  @media #{$break-md} {
    height: 50px;
    top: 120px;
  }
  height: 40px;
  top: 30px;
  left: -200px;
  background: #dd2e44;
  display: block;
  transform: rotate(-53deg) translateZ(40px);
  position: absolute;
  z-index: 2;
  
}

p {
  transform: translateZ(900px);
}

.box {
  background: #ff886c;
  position: absolute;
  @media #{$break-md} {
    width: 260px;
    height: 140px;
    left: -30px;
    top: 0;
  }
  width: 220px;
  height: 120px;
  left: -40px;
  top: 5px;
  z-index: 0;
  transform: rotate(37deg);
  @media #{$break-md} {
    padding-top: 10px;
    padding-bottom: 10px;
  }
  padding-top: 5px;
  padding-bottom: 5px;
  p {
    margin: 0;
    font-family: 'Futura', sans-serif;
    color: black;
    @media #{$break-md} {
      font-size: 18px;
    }
    font-size: 14px;
    &.headliner {
      @media #{$break-md} {
        font-size: 30px;
      }
      font-size: 20px;
    }
    &.djs {
      margin-top: 12px;
      @media #{$break-md} {
        font-size: 22px;
      }
      font-size: 16px;
    }
  }
}
.box2 {
  background: #ff886c;
  position: absolute;
  bottom: -0px;
  @media #{$break-md} {
    right: -100px;
    width: 250px;
    height: 200px;
  }
  right: -80px;
  width: 180px;
  height: 150px;
  transform: rotate(-53deg);
}
.box3 {
  background: #ff886c;
  position: absolute;
  @media #{$break-md} {
    left: -80px;
    top: 200px;
  }
  left: -100px;
  top: 150px;
  width: 150px;
  height: 150px;
  transform: rotate(37deg);
}

</style>
