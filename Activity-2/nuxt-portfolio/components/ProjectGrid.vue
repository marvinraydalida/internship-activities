<template>
    <div class="card" :class="{ 'light-bg': disabled }">
        <div class="image-container">
            <img :src="src" alt="">
        </div>
        <div class="description">
            <h1 :class="{ 'light-font': disabled }">{{ title }}</h1>
            <p :class="{ 'light-font': disabled }">{{ description }}</p>
            <div class="tech-stack">
                <img v-for="(src, index) in stack" :key="index" :src="src" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['disabled', 'src', 'title', 'description', 'stack']
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;700&display=swap");

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
.card {
    width: 100%;
    height: 100%;
    /* border: 1px solid blue; */
    display: flex;
    flex-direction: row;
    background-color: var(--secondary-dark);
    border-radius: 10px;
    box-shadow: 1px 2px 14px 5px rgba(0, 0, 0, 0.32);
    -webkit-box-shadow: 1px 2px 14px 5px rgba(0, 0, 0, 0.32);
    -moz-box-shadow: 1px 2px 14px 5px rgba(0, 0, 0, 0.32);
    cursor: pointer;
    transition: all 250ms ease-in-out;
}

.card.light-bg {
    background-color: white !important;
    box-shadow: none;
    box-shadow: 0px 2px 7px 1px rgba(0, 0, 0, 0.49);
    -webkit-box-shadow: 0px 2px 7px 1px rgba(0, 0, 0, 0.49);
    -moz-box-shadow: 0px 2px 7px 1px rgba(0, 0, 0, 0.49);
}

.image-container {
    width: 40%;
    height: 100%;
    position: relative;
    overflow: hidden;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    box-sizing: border-box;
}

.image-container img {
    height: 140%;
    transform: rotate(-20deg);
    position: absolute;
    top: -110px;
    left: -160px;
}

.description {
    width: 60%;
    padding: 40px;
    position: relative;
    box-sizing: border-box;
}

.description h1 {
    color: var(--font-dark);
}

.description p {
    color: var(--font-dark-secondary);
}

.tech-stack {
    height: 25px;
    box-sizing: border-box;
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
}

.tech-stack img {
    height: 100%;
    margin-left: 5px;
    margin-right: 5px;
}

@media only screen and (max-width: 1440px) {
    .image-container img {
        height: 140%;
        transform: rotate(-20deg);
        position: absolute;
        top: -100px;
        left: -130px;
    }

    .description {
        width: 60%;
        padding: 20px;
        position: relative;
        box-sizing: border-box;
    }

    .tech-stack {
        bottom: 20px;
    }
}

@media only screen and (max-width: 465px) {

    .image-container{
        width: 50%;
    }

    .image-container img {
        top: -60px;
        left: -100px;
    }

    .description {
        padding: 10px;
        width: 50%;
    }

    .description h1 {
      text-align: center;
      margin-top: 50px;
      font-size: 1rem;
    }
    .description p {
        display: none;
    }

    .tech-stack {
        width: 100%;
        height: 20px;
        position: inherit;
        display: flex;
        justify-content: center;
        margin-top: 50px;
    }
}

@media only screen and (max-width: 375px) {

    .image-container img {
        top: -70px;
        left: -130px;
    }

    .tech-stack {
        width: 100%;
        height: 20px;
    }
}
</style>