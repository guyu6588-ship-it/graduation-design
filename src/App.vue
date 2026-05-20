<template>
  <router-view />
</template>

<style>
* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  color: #172033;
  background:
    radial-gradient(circle at 12% 8%, rgba(14, 118, 111, 0.08), transparent 28%),
    linear-gradient(180deg, #f7f8fb 0%, #ffffff 48%, #f7f8fb 100%);
  font-family:
    Inter,
    "PingFang SC",
    "Hiragino Sans GB",
    "Microsoft YaHei",
    Arial,
    sans-serif;
  text-rendering: geometricPrecision;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
textarea {
  font: inherit;
}

#app {
  min-height: 100vh;
}
</style>
