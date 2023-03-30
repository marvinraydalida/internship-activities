<template>
    <section id="skills">
        <div id="skills-grid">
            <GridContainer :value="value" />

            <div id="radio-button-container">
                <div class="radio-button-border" :class="{ 'light-radio-button': disabled }" @click="toggle(0)">
                    <div class="radio-button" :class="{ 'toggled': isPrimary, 'light-radio-button-border': disabled }">
                    </div>
                </div>
                <div class="radio-button-border" :class="{ 'light-radio-button': disabled }" @click="toggle(1)">
                    <div class="radio-button" :class="{ 'toggled': isSecondary, 'light-radio-button-border': disabled }">
                    </div>
                </div>
            </div>
        </div>
        <div id="skills-description">
            <h1 :class="{ 'light-font': disabled }">My {{ title[value] }} <span>Weapons</span></h1>
            <p :class="{ 'light-font': disabled }">
                {{ description[value] }}
            </p>
        </div>
    </section>
</template>

<script>
export default {
    props: ['disabled'],
    data() {
        return {
            value: 0,
            title: ["Primary", "Secondary"],
            description: [`I call these markup and programming languages as my primary weapons
                because these are usually my go to weapons for development. HTML and
                CSS for front-end, JavaScript for web app interaction as well as for
                asyncronous API requests. C for low level craziness, Python for lazy
                developer mode and some magical stuff, and PHP for backend.`, `Throughout my experience as a developer, I have experimented with a wide range of frameworks, libraries, and databases. Some of these tools were employed in the course of school projects and activities, while others were explored purely out of curiosity. Regardless of their origin, each of these resources has proven invaluable in helping me start new projects quickly and efficiently, without the need to create everything from scratch.`]
        }
    },
    methods: {
        toggle(value) {
            this.value = value;
        }
    },
    computed: {
        isPrimary() {
            return this.value === 0;
        },
        isSecondary() {
            return this.value === 1;
        }
    }
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

body {
    transition: all 300ms ease-in-out;
}

.light-font {
    color: var(--font-light) !important;
}

.light-bg {
    background-color: var(--primary-light) !important;
}
</style>

<style scoped>
#skills {
    height: 100vh;
    overflow: hidden;
    display: flex;
}

#skills-grid {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border: 1px solid green; */
}


#skills-description {
    width: 50%;
    height: 100%;
    padding-left: 50px;
    padding-right: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

#skills-description h1 {
    font-size: 3.5rem;
    font-weight: 500;
    margin-bottom: 20px;
    color: var(--font-dark);
    transition: all 250ms ease-in-out;
}

#skills-description h1 span {
    color: var(--secondary);
}

#skills-description p {
    font-size: 1.3rem;
    color: var(--font-dark-secondary);
    transition: all 250ms ease-in-out;
}

#radio-button-container {
    width: 100px;
    height: 30px;
    margin-top: 30px;
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
}

.radio-button-border {
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    border: 1px solid var(--secondary);
    cursor: pointer;
}

.toggled.radio-button {
    width: 70%;
    height: 70%;
    background-color: var(--secondary);
    border-radius: 50px;
}

.light-radio-button {
    border: 1px solid var(--primary-dark) !important;
    background-color: var(--primary-light);
}

.toggled.radio-button.light-radio-button-border {
    background-color: var(--secondary-dark);
}

@media only screen and (max-width: 1024px) {
    #skills-description {
        padding-left: 0px;
    }

    #skills-description h1 {
        font-size: 2.3rem;
    }

    #skills-description p {
        font-size: .9rem;
    }
}

@media only screen and (max-width: 768px) {
    #skills {
        flex-direction: column;
    }

    #skills-grid {
        width: 100%;
    }

    #skills-description {
        width: 100%;
        height: 60%;
        padding-left: 100px;
        padding-right: 100px;
        justify-content: start;
        align-items: center;
    }

    #skills-description h1 {
        font-size: 2rem;
        text-align: center;
    }

    #skills-description p {
        font-size: .9rem;
        text-align: center;
    }
}

@media only screen and (max-width: 465px) {
    #skills-description {
        width: 100%;
        height: 65%;
        padding-left: 30px;
        padding-right: 30px;
        justify-content: start;
        align-items: center;
    }

    #skills-description h1 {
        font-size: 2rem;
        text-align: center;
    }

    #skills-description p {
        font-size: .8rem;
        text-align: center;
    }
}

@media only screen and (max-width: 375px) {
    #skills-description h1 {
        font-size: 1.8rem;
        text-align: center;
        margin-bottom: 10px;
    }

    #skills-description p {
        font-size: .7rem;
        text-align: center;
    }
}
</style>