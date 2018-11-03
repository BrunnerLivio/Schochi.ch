<template>
  <main class="nov2018 center-xs">
  </main>
</template>
<script>
export default {
  name: 'NOV2018-detail',
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

</style>

