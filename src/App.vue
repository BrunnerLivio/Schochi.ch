<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  transition: background 0.5s ease-in-out;
}
body {
  background: #181818;
}
h1, h2 {
  text-transform: uppercase;
}
h1, h2, h3, h4, h5 {
  font-family: 'Playfair Display', serif;
}

.decolines {
	pointer-events: none;
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	pointer-events: none;
}

.decolines--fixed {
	position: fixed;
	width: 100vw;
  height: 100vh;
}

.decoline {
	position: absolute;
}

.layout-margin {
  margin: 8px;
}
</style>
