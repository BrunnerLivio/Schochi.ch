<template>
    <div class="oct2018 row center-xs middle-xs">
        <div class="box row center-xs middle-xs spoiled-logo" data-tilt>
        </div>
    </div>
</template>

<script>
import VanillaTilt from 'vanilla-tilt';
import isMobile from '../../shared/isMobile';

export default {
  name: 'NOV2018',
  mounted() {
    if (!isMobile()) {
      VanillaTilt.init(document.querySelector('.spoiled-logo'), {
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
.spoiled-logo {
  width: $articleHeightXs;
  height: $articleWidthXs;
  background-image: url('../../../../static/spoiled_logo.png');
  background-size: 100% 100%;
  @media #{$break-md} {
    width: $articleHeightMd;
    height: $articleWidthMd;
  }
}

</style>
