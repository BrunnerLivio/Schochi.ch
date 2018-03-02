<template>
  <main class="schochi-galvanik">
        <h1>Zug Entgleist</h1>
  </main>
</template>
<script>
// import isMobile from '../../shared/isMobile';

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
    window.document.body.style.background = '#ffd3f7';
  },
  beforeDestroy() {
    window.document.body.style.background = '';
  },
};
</script>

<style lang="scss" scoped>
@import '../../../style/theme.scss';

</style>

