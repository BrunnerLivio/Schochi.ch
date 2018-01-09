<template>
  <main class="schochi-galvanik">
    <div class="row schochi-galvanik-container">
      <div class="column start-xs stretch">
        <h1>Schochi x Galvanik</h1>
        <section class="column">
          <section class="description">
            <p>
              We have an open bar with your favourite drinks like <i>VodkaMate</i>, <i>Berliner Luft</i> and <i>Beer</i>. You are not allowed to bring your own alcoholic drinks. 
              
            </p>
            <p>
              If you want to come with friends, contact one of the organizers. No one gets in the club without an invitation.
            </p>
            <p>
              There is no garderobe, but there are sofas.
            </p>
          </section>
          <section class="meta-info">
            <div>
              Date: 12.01.2018
            </div>
            <div>
              Pre Sale: CHF 10.-
            </div>
            <div>
              Evening Sale: CHF 13.-
            </div>
            <div>
                Age: 18
            </div>
            <div>
              Location: <a href="https://www.google.ch/maps/place/Kulturzentrum+Galvanik+Zug/@47.1806677,8.4793163,15.63z/data=!4m5!3m4!1s0x4790008287ec52bb:0xe036ad5c7aa272f4!8m2!3d47.1815066!4d8.4841381">Galvanik, 2nd floor, Zug</a>
            </div>
            <div>
              Genres: House, Minimal House
            </div>
          </section>
          <section>
              <span>Lineup:</span>
              <ul>
                  <li v-for="dj in djs" v-bind:key="dj.name" class="column ">
                    <span>{{ dj.time }}</span>
                    <strong>{{ dj.name }}</strong> 
                  </li>
              </ul>
          </section>
          <section class="contact">
            <a href="mailto:hello@schochi.ch">
              <button>
                Contact
              </button>
            </a>
            <!-- <button v-on:click="buyTicket()">
              Buy Ticket
            </button> -->
          </section>
          <!-- <section class="buy-ticket" v-bind:class="{ active: isBuyTicketOpened }">
            <form id="gform" method="POST" action="https://formspree.io/livio.brunner.lb1@gmail.com">
              <section class="personal-information">
                <div>
                    <strong>Personal Information</strong>
                </div>
                <div>
                  <label for="name">Fullname:</label><input required v-model="fullname" name="name" type="name" />
                </div>
                <div>
                  <label for="email">Email:</label><input required name="email" type="email" />
                </div>
                
              </section>
              <section class="banking-information">
                <strong>Banking Information</strong>
                <div>
                  NAME: Livio Fabian Brunner
                </div>
                <div>
                  BANK: UBS AG
                </div>
                <div>
                  IBAN: CH750 0273 2731 2879 8M2Z
                </div>
                <div>
                  BIC: UBSWCHZH80A
                </div>
                <div>
                  AMOUNT: CHF 10.-
                </div>
                <div>
                  PAYMENT PURPOSE: {{fullname}}<i v-if="!fullname">your name</i>
                </div>
              </section>
              <section class="banking-problems">
                <strong>
                  Contact For Questions
                </strong>
                <div>
                  MAIL: <a href="mail:livio.brunner.lb1@gmail.com">livio.brunner.lb1@gmail.com</a>
                </div>
                <div>
                  PHONE: +41793189773
                </div>
              </section>
              <div class="on-guestlist">
                  <label for="on-guestlist">Yes, I am on the Guestlist / Facebook Group</label><input id="on-guestlist" required name="on-guestlist" type="checkbox" />
               </div>
              <input type="submit" value="Buy" />
            </form>
            <div ref="bottom-bank"></div>
          </section> -->
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
      fullname: '',
      isBuyTicketOpened: false,
      djs: [
        {
          name: 'Juhani',
          time: '23:00',
        },
        {
          name: 'Migu',
          time: '00:00',
        },
        {
          name: 'Ismail',
          time: '01:30',
        },
        {
          name: 'Nicola Leroux',
          time: '04:00',
        },
      ],
    };
  },
  methods: {
    buyTicket() {
      this.isBuyTicketOpened = true;
      setTimeout(() => {
        const element = this.$refs['bottom-bank'];
        const top = element.offsetTop;
        window.scrollTo(0, top);
      });
    },
  },
  mounted() {
    window.scrollTo(0, 0);
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
    color: rgba(255,255,255,0.93);
    position: absolute;
    background: #181818;
    height: auto;
    min-height: calc(100vh - 5vh - 2px);
    top: calc(5vh + 2px);
    margin-bottom: calc(5vh + 2px);
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
        margin-right: 0;
        margin-left: 0;
        font-size: 16px;
        padding: 10px;
        @media #{$break-md} {
          font-size: 18px;
          padding: 15px;
        }
        ul {
          padding-left: 0px;
          list-style: none;
          li {
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
    .contact {
      margin-top: 25px;
      margin-bottom: 10px;
    }
    button, input[type="submit"] {
      height: 50px;
      background: #181818;
      transition: 0.1s ease-in-out all;
      color: #FFB5A8;
      font-family: 'Roboto Mono', monospace;
      border: 1px solid #FFB5A8;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 18px;
      cursor: pointer;
      outline: none;
      width: calc(50% - 5px);
      border-radius: 0px !important;
      -webkit-appearance: none;
      @media #{$break-md} {
        width: 150px;
      }
      &:hover, &.active {
        background: #FFB5A8;
        color: #181818;
      }
    }
    .buy-ticket {
      background: #FFB5A8;
      color: #181818;
      margin-left: -10px;
      width: 100%;
      padding: 10px;
      display: none;
      .on-guestlist {
        margin-top: 25px;
        label {
          font-weight: bold;
        }
        input[type="checkbox"] {
          margin-left: 20px;
          width: 15px;
          height: 15px;
          top: 2px;
          position: relative;
        }
      }
      @media #{$break-md} {
        margin-left: 0;
        width: calc(100% - 30px);
      }
      input[type="submit"] {
        border: none;
        margin-top: 12px;
        &:hover {
          background: #181818;
          color: #FFB5A8;
        }
      }
      .personal-information {
        input {
          border: 2px solid #181818;
          background: transparent;
          outline: none;
          font-family: 'Roboto Mono', monospace;
          padding: 5px;
          font-size: 16px;
          width: 230px;
          margin: 5px 0;
          border-radius: 0px !important;
        }
        label {
          width: 100px;
          display: inline-block;
        }
      } 
      strong {
        text-transform: uppercase;
      }
      &.active {
        display: block;
      }
      .banking-problems, .banking-information {
        margin-top: 20px;
      }
      a {
        color: #181818;
        &:hover {
          color: #181818;
        }
      }
    }
}
</style>

