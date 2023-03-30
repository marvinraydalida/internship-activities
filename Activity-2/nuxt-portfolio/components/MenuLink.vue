<template>
    <li>
        <i :class="icon"></i>
        <a :href="link" class="side-button">{{ title }}</a>
    </li>
</template>

<script>
export default {
    props: ['icon', 'link', 'title']
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;700&display=swap");
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css");

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
</style>

<style scoped>
li {
    list-style: none;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
}

a {
    color: white;
    text-decoration: none !important;
    font-size: 0.9rem;
}

i {
    margin-right: 5px;
    color: var(--secondary);
}
</style>