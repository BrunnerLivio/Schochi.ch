<template>
  <main class="oct2018 center-xs">
    <section class="description col-xs-12 col-md-8 col-lg-5">
      <img width="100%" src="../../../../static/spoiled_logo_title.png"/>
      <p>
Join us for the premiere of "$poiled", the first Skateboard Film to come out of beautiful Zugerland in quite a while!

Filmed and edited by Nino Bieri, featuring local Zug skateboarders and city legends, this is definitely not one to miss!

Hosted in the upper floor of Galvanik Zug and followed by a proper RAVE to complete the weekend.
        </p>
        <img src="../../../../static/spoiled_bone.png" width="100%"/>
        <div class="detail-desc">
          <div>
            Location: Galvanik, Zug
          </div>
          <div>
            Entry: 15.-
          </div>
          <div>
            Friends List: 10.-
          </div>
        </div>
    </section>
  </main>
</template>
<script>
// import isMobile from '../../shared/isMobile';

export default {
  name: 'OCT2018-detail',
  mounted() {
    window.scrollTo(0, 0);
    window.document.body.style.background = 'black';
  },
  beforeDestroy() {
    window.document.body.style.background = '';
  },
};
</script>

<style lang="scss" scoped>
@import "../../../style/theme.scss";
$primary: #E3267A;
@font-face {
    font-family: 'Futura'; /*a name to be used later*/
    src: url('../../../../static/futura.ttf'); /*URL to font*/
}

.description {
  color: $primary;
  font-family: 'Futura';
  margin: auto;
  font-size: 20px;
  @media #{$break-md} {
    margin-top: 80px;
    font-size: 25px;
    margin-bottom: 80px;
    padding: 40px;
  }
  @media #{$break-lg} {
    font-size: 30px;
  }
  padding: 60px;
  border: 4px solid $primary;
  img {
    margin-top: 40px;
  }
}
.detail-desc{
  margin-bottom: 40px;
}
</style>

