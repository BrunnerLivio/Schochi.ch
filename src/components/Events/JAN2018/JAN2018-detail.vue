<template>
  <main class="schochi-galvanik">
    <div class="row center-xs schochi-galvanik-container">
      <div class="col-xs-12 col-md-10 col-lg-8">
        <div class="column start-xs">
          <h1>Schochi x Galvanik</h1>
          <section>
            <p>
            Entry: 15.-
            </p>
          </section>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import LineMaker from '@/components/shared/lineMaker';

export default {
  name: 'JAN2018-detail',
  mounted() {
    window.document.body.style.background = '#FFB5A8';
    const lineMaker = new LineMaker({
      position: 'fixed',
      lines: [
        { top: 0, left: '10vw', width: 2, height: '100%', color: '#181818', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 0, direction: 'TopBottom' } },
        { top: 0, left: '30vw', width: 2, height: '100%', color: '#181818', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 40, direction: 'TopBottom' } },
        { top: 0, left: '50vw', width: 2, height: '100%', color: '#181818', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 80, direction: 'TopBottom' } },
        { top: 0, left: '70vw', width: 2, height: '100%', color: '#181818', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 120, direction: 'TopBottom' } },
        { top: 0, left: '90vw', width: 2, height: '100%', color: '#181818', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 160, direction: 'TopBottom' } },
        { top: '10vh', left: 0, width: '100%', height: 2, color: '#181818', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 20, direction: 'LeftRight' } },
        { top: '30vh', left: 0, width: '100%', height: 2, color: '#181818', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 60, direction: 'LeftRight' } },
        { top: '50vh', left: 0, width: '100%', height: 2, color: '#181818', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 100, direction: 'LeftRight' } },
        { top: '70vh', left: 0, width: '100%', height: 2, color: '#181818', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 140, direction: 'LeftRight' } },
        { top: '90vh', left: 0, width: '100%', height: 2, color: '#181818', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 180, direction: 'LeftRight' } },
      ],
    });
    setTimeout(() => {
      lineMaker.animateLinesIn();
    }, 500);
  },
  beforeDestroy() {
    window.document.body.style.background = '';
  },
};
</script>

<style lang="scss" scoped>
$sm: 48em;
$md: 64em;
$lg: 75em;

$break-sm: only screen and (min-width: $sm);
$break-md: only screen and (min-width: $md);
$break-lg: only screen and (min-width: $lg);
.schochi-galvanik {
    color: #181818;
    position: absolute;
    top: calc(10vh + 2px);
    background: #FFB5A8;
    height: calc(60vh - 2px);
    left: 0;
    width: 100vw;
    @media #{$break-md} {
        left: calc(10vw + 2px);
        width: calc(40vw - 2px);
    }
    &-container {
        padding: 10px;
        margin-right: 0;
        margin-left: 0;
    }
}
p {
    font-family: 'Raleway', sans-serif;
}
</style>

