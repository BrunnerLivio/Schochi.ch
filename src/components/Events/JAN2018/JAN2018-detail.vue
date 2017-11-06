<template>
  <main class="schochi-galvanik">
    <div class="row schochi-galvanik-container">
      <div class="column start-xs stretch">
        <h1>Schochi x Galvanik</h1>
        <section class="column">
          <section class="meta-info">
            <div>
              Pre Sale: CHF 10.-
            </div>
            <div>
              Evening Sale: CHF 15.-
            </div>
            <div>
                Age: 18
            </div>
            <div>
              Location: <a href="https://www.google.ch/maps/place/Kulturzentrum+Galvanik+Zug/@47.1806677,8.4793163,15.63z/data=!4m5!3m4!1s0x4790008287ec52bb:0xe036ad5c7aa272f4!8m2!3d47.1815066!4d8.4841381">Galvanik, 2nd floor, Zug</a>
            </div>
          </section>
          <section class="description">
            <p>
              We have an open bar. You are not allowed to bring your own alcoholic drinks. If you want to come with friends,
              contact us first. No one gets in the club without an invitation.
            </p>
          </section>

          <section>
              <span>Lineup:</span>
              <!-- <ul>
                  <li v-for="dj in djs" v-bind:key="dj.name">
                    <div>
                      <strong>{{ dj.name }}</strong> 
                    </div>
                    <div>
                      <span class="genre">{{ dj.genre }}</span>
                    </div>
                    <span>{{ dj.time }}</span>
                  </li>
              </ul> -->
              <span>To be announced</span>
          </section>
        </section>
      </div>
    </div>
  </main>
</template>
<script>
import LineMaker from '@/components/shared/lineMaker';
import isMobile from '../../shared/isMobile';

export default {
  name: 'JAN2018-detail',
  data() {
    return {
      djs: [
        {
          name: 'Mr. Da-Nos',
          genre: 'House',
          time: '00:00 - 23:59',
        },
      ],
    };
  },
  mounted() {
    window.document.body.style.background = '#FFB5A8';
    let lines = [
      { top: 0, left: '5vw', width: 2, height: '100%', color: '#181818', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 0, direction: 'TopBottom' } },
      { top: 0, left: '20vw', width: 2, height: '100%', color: '#181818', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 40, direction: 'TopBottom' } },
      { top: 0, left: '35vw', width: 2, height: '100%', color: '#181818', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 80, direction: 'TopBottom' } },
      { top: 0, left: '50vw', width: 2, height: '100%', color: '#181818', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 120, direction: 'TopBottom' } },
      { top: 0, left: '65vw', width: 2, height: '100%', color: '#181818', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 160, direction: 'TopBottom' } },
      { top: 0, left: '80vw', width: 2, height: '100%', color: '#181818', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 160, direction: 'TopBottom' } },
      { top: 0, left: '95vw', width: 2, height: '100%', color: '#181818', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 160, direction: 'TopBottom' } },
      { top: '5vh', left: 0, width: '100%', height: 2, color: '#181818', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 20, direction: 'LeftRight' } },
      { top: '25vh', left: 0, width: '100%', height: 2, color: '#181818', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 60, direction: 'LeftRight' } },
      { top: '45vh', left: 0, width: '100%', height: 2, color: '#181818', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 100, direction: 'LeftRight' } },
      { top: '65vh', left: 0, width: '100%', height: 2, color: '#181818', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 140, direction: 'LeftRight' } },
      { top: '85vh', left: 0, width: '100%', height: 2, color: '#181818', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 180, direction: 'LeftRight' } },
    ];

    if (!isMobile()) {
      lines = [
        { top: 0, left: '10vw', width: 2, height: '100%', color: '#181818', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 0, direction: 'TopBottom' } },
        { top: 0, left: '20vw', width: 2, height: '100%', color: '#181818', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 40, direction: 'TopBottom' } },
        { top: 0, left: '30vw', width: 2, height: '100%', color: '#181818', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 40, direction: 'TopBottom' } },
        { top: 0, left: '40vw', width: 2, height: '100%', color: '#181818', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 40, direction: 'TopBottom' } },
        { top: 0, left: '50vw', width: 2, height: '100%', color: '#181818', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 80, direction: 'TopBottom' } },
        { top: 0, left: '60vw', width: 2, height: '100%', color: '#181818', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 80, direction: 'TopBottom' } },
        { top: 0, left: '70vw', width: 2, height: '100%', color: '#181818', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 120, direction: 'TopBottom' } },
        { top: 0, left: '80vw', width: 2, height: '100%', color: '#181818', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 120, direction: 'TopBottom' } },
        { top: 0, left: '90vw', width: 2, height: '100%', color: '#181818', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 160, direction: 'TopBottom' } },
        { top: '10vh', left: 0, width: '100%', height: 2, color: '#181818', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 20, direction: 'LeftRight' } },
        { top: '30vh', left: 0, width: '100%', height: 2, color: '#181818', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 60, direction: 'LeftRight' } },
        { top: '50vh', left: 0, width: '100%', height: 2, color: '#181818', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 100, direction: 'LeftRight' } },
        { top: '70vh', left: 0, width: '100%', height: 2, color: '#181818', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 140, direction: 'LeftRight' } },
        { top: '90vh', left: 0, width: '100%', height: 2, color: '#181818', hidden: true, animation: { duration: 1000, easing: 'easeInOutSine', delay: 180, direction: 'LeftRight' } },
      ];
    }

    this.lineMaker = new LineMaker({
      position: 'fixed',
      lines,
    });
    setTimeout(() => {
      this.lineMaker.animateLinesIn();
    }, 500);
  },
  beforeDestroy() {
    this.lineMaker.hideLines();
    window.document.body.style.background = '';
  },
};
</script>

<style lang="scss" scoped>
@import '../../../style/theme.scss';

.schochi-galvanik {
    color: rgba(255,255,255,0.9);
    position: absolute;
    background: #181818;
    height: auto;
    min-height: calc(100vh - 5vh - 2px);
    top: calc(5vh + 2px);
    left: calc(5vw + 2px);
    width: calc(90vw - 2px);
    @media #{$break-md} {
      min-height: auto;
      width: calc(80vw - 2px);
      left: calc(10vw + 2px);
      margin-bottom: calc(5vh + 2px);
      overflow-y: auto;
      top: calc(10vh + 2px);
      height: calc(80vh - 2px);
    }
    a {
      color: rgba(255,255,255,0.9);
      &:hover {
        color: rgba(255,255,255,1);       
      }
    }
    @media #{$break-md} {
        left: calc(10vw + 2px);
        width: calc(40vw - 2px);
        height: calc(60vh - 2px);
    }
    .meta-info {
      margin-bottom: 20px;
    }
    &-container {
        font-family: 'Roboto Mono', monospace;
        padding: 15px;
        margin-right: 0;
        margin-left: 0;
        font-size: 16px;
        @media #{$break-md} {
          font-size: 18px;
        }
        ul {
          padding-left: 0px;
          list-style: none;
          text-align: center;
          margin-top: -20px;
          @media #{$break-md} {
            text-align: start;
          }  
          li {
            margin-top: 20px;
            .genre {
              font-style: italic;
            }
          }
        }
    }
    h1 {
        margin: 0;
        margin-bottom: 15px;
        font-size: 26px;
        text-align: center;
        @media #{$break-md} {
          font-size: 40px;
          text-align: start;
        }
    }
    .stretch {
      width: 100%;
    }
}
</style>

