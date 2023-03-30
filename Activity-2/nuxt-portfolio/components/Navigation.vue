<template>
    <div>
        <nav>
            <div id="logo-container">
                <a href="#" id="logo">Amben</a>
                <a-switch v-model:checked="disabled" />
            </div>
            <ul>
                <li><a href="#home" class="nav-button" :class="{ 'light-font': disabled }">Home</a></li>
                <li><a href="#about" class="nav-button" :class="{ 'light-font': disabled }">About</a></li>
                <li><a href="#skills" class="nav-button" :class="{ 'light-font': disabled }">Skills</a></li>
            </ul>
            <div id="menu-button" @click="toggleSideMenu">
                <i class="bi bi-list" :class="{ 'light-font': disabled }"></i>
            </div>
        </nav>
        <div id="side-menu" :class="{ 'side-menu-show': showMenu }">
            <div id="close-menu" @click="toggleSideMenu">
                <i class="bi bi-plus-lg"></i>
            </div>
            <ul>
                <MenuLink title="Home" icon="bi bi-house" link="#home"/>
                <MenuLink title="About" icon="bi bi-person" link="#about"/>
                <MenuLink title="Skills" icon="bi bi-code-slash" link="#skills"/>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    emits: ['on-switch'],
    data() {
        return {
            disabled: false,
            showMenu: false
        };
    },
    watch: {
        disabled(newValue) {
            if (newValue) {
                document.body.style.backgroundColor = "var(--primary-light)";
                this.$emit('on-switch');
            }
            else {
                document.body.style.backgroundColor = "var(--primary-dark)";
                this.$emit('on-switch');
            }
        }
    },
    methods: {
        toggleSideMenu() {
            this.showMenu = !this.showMenu;
        },
    },
};
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

body{
    transition: all 300ms ease-in-out;
}
</style>

<style scoped>
nav {
    width: 100vw;
    padding: 30px 100px 30px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

#logo-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 170px;
}

#logo {
    font-family: var(--font-family);
    color: var(--secondary);
    font-size: 2rem;
    font-weight: bold;
}

.ant-switch {
    height: 23px;
    width: 50px;
    background-color: rgb(66, 66, 66);
    border-color: #dbdbdb;
    border: 0.13rem solid #dbdbdb;
}

.ant-switch::after {
    width: 12px;
    height: 12px;
    background-color: var(--secondary);
    box-shadow: none;
    top: 3px;
    left: 3px;
}

.ant-switch-checked {
    background-color: rgb(229, 229, 229);
    border-color: rgb(180, 180, 180);
}

.ant-switch-checked::after {
    left: 96%;
}

nav ul {
    display: inline;
}

nav li {
    display: inline;
    margin-left: 20px;
}

nav li a {
    color: var(--font-dark);
}

nav a {
    font-size: 1.2rem;
    text-decoration: none !important;
}

#menu-button {
    width: 40px;
    height: 40px;
    /* background-color: #2c2c2c; */
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    display: none;
    transition: all 250ms ease-in-out;
}

#menu-button i {
    color: white;
    font-size: 2rem;
    cursor: pointer;
}

#logo-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 170px;
}

#logo {
    color: var(--secondary);
    font-size: 2rem;
    font-weight: bold;
}

#toggle-container {
    background-color: #424242;
    width: 50px;
    height: 23px;
    border-radius: 50px;
    border: 0.13rem solid #dbdbdb;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px;
    cursor: pointer;
    transition: all 250ms ease-in-out;
}

#toggle-switch {
    width: 12px;
    height: 12px;
    border-radius: 50px;
    background-color: var(--secondary);
}

.slide-animate {
    animation: slide 300ms ease-in-out;
}

.light-font {
    color: var(--font-light) !important;
}

.light-bg {
    background-color: var(--primary-light) !important;
}

#side-menu {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    background-color: #292929;
    height: 100vh;
    width: 150px;
    padding: 30px 40px;
    transform: translateX(200px);
    z-index: 999;
    transition: all 300ms ease-in-out;
}

#side-menu ul {
    padding: 0px;
}

#side-menu i {
    margin-right: 5px;
    color: var(--secondary);
}

#close-menu {
    width: 40px;
    height: 40px;
    background-color: #292929;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateX(-60px) rotate(45deg);
}

#close-menu i {
    font-size: 1.5rem;
    font-weight: lighter;
    cursor: pointer;
}

#side-menu.side-menu-show {
    transform: translateX(0px) !important;
}

@keyframes slide {
    0% {
        width: 100%;
    }

    25% {
        width: 75%;
    }

    50% {
        width: 50%;
    }

    75% {
        width: 25%;
    }

    100% {
        width: 12px;
    }
}

@media only screen and (max-width: 768px) {
    nav {
        padding: 30px 40px 30px 40px;
    }
}

@media only screen and (max-width: 465px) {
    nav ul {
        display: none;
    }

    #menu-button {
        display: flex;
    }

    #side-menu {
        display: flex;
    }
}
</style>