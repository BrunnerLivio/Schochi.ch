<template>
  <main>
      <div class="row center-xs middle-xs">
          <article>
            <div class="date">
                <span class="month">JANUARY</span> Fri 12
            </div>
            <div class="schochi-galvanik row center-xs middle-xs">
                <div class="box row center-xs middle-xs" data-tilt>
                    <div class="column inner-box">
                        <h2>SCHOCHI</h2>
                        <div class="divider"></div>
                        <h2>GALVANIK</h2>
                    </div>
                </div>
            </div>
          </article>
      </div>
  </main>
</template>
<script>
import VanillaTilt from 'vanilla-tilt';

export default {
  name: 'Home',
  mounted() {
    VanillaTilt.init(document.querySelector('.schochi-galvanik'), {
      max: 15,
      speed: 400,
    });
  },
};
</script>


<style lang="scss" scoped>
$articleHeight: 400px;
$articleWidth: 400px;
.schochi-galvanik {
  width: $articleHeight;
  height: $articleWidth;
  background: #FFB5A8;
  text-align: center;
  transform-style: preserve-3d;
}



main {
    padding-top: 20px;
}

article {
    .date {
        margin-bottom: 20px;
        font-family: 'Raleway', sans-serif;
        color: white;
        font-size: 25px;
        .month {
            color: #7A7A7A;
            font-size: 20px;
        }
    }
}

.divider {
    height: 3px; 
    width: 120%;
    margin-left: -10%;
    background: #181818;
}
.box {
    border: 3px solid #181818;
    width: $articleHeight - 60;
    height: $articleWidth - 60;
    transform: translateZ(40px);
    .inner-box {
        h2 {
            font-family: 'Playfair Display', serif;
            font-size: 40px;
            margin: 10px;
            color: #181818;
        }
    }
}
</style>
