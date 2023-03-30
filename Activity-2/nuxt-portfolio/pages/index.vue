<template>
  <div>
    <Navigation @on-switch="onSwitch"/>
    <HeaderContainer :disabled="disabled"/>
    <About :disabled="disabled"/>
    <Skills :disabled="disabled"/>
  </div>
</template>

<script>

export default {
  data() {
    return {
      disabled: false
    }
  },
  methods: {
    onSwitch() {
      this.disabled = !this.disabled;
      console.log(this.disabled)
    }
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;700&display=swap");
/* @import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;700&display=swap"); */
:root {
  --font-family: "Quicksand", sans-serif;
  --primary-dark: #1a1a1a;
  --secondary-dark: #282828;
  --secondary: #f3a229;
  --primary-light: white;
  --font-dark: white;
  --font-light: black;
  --font-dark-secondary: #d3d3d3;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--primary-dark);
}
</style>

<style scoped>

</style>