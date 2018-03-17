<template>
  <main class="zug-entgleist">
    <div class="background">
      <div class="stripe"></div>
      
    </div>
    <div class="logo"></div>
    <section class="meta-info">
      <p>
        <div>
          Datum: 13.04.2018
        </div>
        <div>
          Abend Verkauf: CHF 15.-
        </div>
        <div>
          Alter: 18
        </div>
        <div>
          Ort: 
          <a href="https://www.google.ch/maps/place/Lounge+%26+Gallery,+Dammstrasse+25,+6300+Zug/@47.177716,8.514693,17z/data=!4m2!3m1!1s0x479aaa5bf2130ba1:0x2aa6767755afa23e">
            Lounge &amp; Gallery, Zug
          </a>
        </div>
        <div>
          Genres: House, Minimal House
        </div>
      </p>
    </section>
    <section class="description">
      <strong>
Schochibar zu Gast in der Lounge & Gallery. 
      </strong>
      <p>
Schochibar ist ein Kollektiv aus Freunden, die etwas Neues dem Zuger Nacht- und Kulturleben bieten wollen. Zug ist entgleist und wir bringen das Ganze auf eine andere Schiene. 
Freut euch auf einen familiären Abend zu den Klängen von House und Minimal House.

      </p>
<strong>
Schochibar presents: 
</strong>
<div>
  <div>
    <a href="https://www.residentadvisor.net/dj/andre-ch">And.re</a>
  </div>
  Round The Corner, Zürich
</div>

<strong>
Residents:
</strong>
<div>
Leroux
</div>
<div>
Michgail 
</div>

<p>
<div>
Entry: CHF 15
  </div>
<div>
Friendslist: CHF 10
</div>
</p>



See you on the dancefloor
<div>
tanzen ist treumen mit die beine
</div>
      </p>
    </section>
  </main>
</template>
<script>
// import isMobile from '../../shared/isMobile';

export default {
  name: 'JAN2018-detail',
  data() {
    return {
    };
  },
  methods: {
  },
  mounted() {
    window.scrollTo(0, 0);
    window.document.body.style.background = '#ffd3f7';
  },
  beforeDestroy() {
    window.document.body.style.background = '';
  },
};
</script>

<style lang="scss" scoped>
@import '../../../style/theme.scss';
@font-face {
    font-family: 'Futura'; /*a name to be used later*/
    src: url('../../../../static/futura.ttf'); /*URL to font*/
}

.zug-entgleist {
  font-family: 'Futura';
  @media #{$break-md} {
    overflow: hidden;
    height: 100vh;
  }
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll; /* has to be scroll, not auto */
  -webkit-overflow-scrolling: touch;
  width: 100vw;
  h1 {
    font-family: 'Futura';
  }
  @media #{$break-md} {
    animation: fadein 2s;
  }
  animation: fadein 1s;
}

.background {
  top: 0;
  left: 0;
  position: absolute;
  height: 100vh;
  width: 100vw;
  @media #{$break-md} {
    overflow: hidden;
    animation: movein 2s;
  }
  overflow: hidden;
  animation: movein 1s;
}

.logo {
  background-image: url('../../../../static/zug_entgleist.png');
  width: 315px;
  height: 378px;
  @media #{$break-md} {
    transform: rotate(26deg);
    margin-left: 80px;
  }
}

.stripe {
  background: #dd2e44;
  height: 80px;
  position: absolute;
  z-index: -1;
  bottom: 0;
  transform: rotate(-53deg);
  width: 250vh;
  left: -130vh;
  @media #{$break-md} {
    height: 100px;
    width: 250vw;
    left: -120vw;
    transform: rotate(-25deg);
  }
}

a {
  color: #dd2e44;
}

.meta-info {
  background: #ff886c;
  position: absolute;
  text-align: center;
  transform: rotate(-53deg);
  right: -210px;
  width: 500px;
  top: 600px;
  font-size: 24px;
  height: 500px;
  @media #{$break-sm} {
    font-size: 30px;
    top: initial;
    transform: rotate(-53deg);
    bottom: -200px;
    font-size: 18px;
    right: -220px;
    width: 600px;
  }
  @media #{$break-md} {
    font-size: 24px;
    top: initial;
    right: 0;
    bottom: -170px;
    transform: rotate(-25deg);
    width: 800px;
    height: 500px;
  }

  a {
    color: black;
  }
}

.description {
  background: #ff886c;
  position: absolute;
  text-align: center;
  top: 1280px;
  font-size: 18px;
  
  p {
    margin: 20px;
  }
  &:before {
    content: '';
    height: 650px;
    background: #ff886c;
    display: block;
    z-index: -1;
    position: absolute;
    width: 900px;
    top: -140px;
    left: -350px;
    transform: rotate(37deg);
  }
  @media #{$break-sm} {
    font-size: 18px;
    width: 500px;
    left: 35%;
    margin-left: 0;
    top: 200px;
    left: 250px;
    &:before {
      content: none;
    }
  }
  @media #{$break-md} {
    font-size: 18px;
    width:700px;
    margin-left: 0;
    top: 240px;
    left: 20%;
    padding-top: 20px;
  }

}

@keyframes movein {
    from { 
      width: 0;
    }
    to   { 
      width: 100vw;
    }
}

@keyframes fadein {
    from { 
      opacity: 0; 
    }
    to   { 
      opacity: 1; 
    }
}

</style>

