<template>
    <section id="projects">
        <transition name="project">
            <div id="grid-container" v-if="display">
                <div class="card">
                    <h1 :class="{ 'light-font': disabled }">My <span>Projects</span></h1>
                    <p :class="{ 'light-font': disabled }">Here are some of the projects that I have developed and have been
                        involved in developing.</p>
                </div>

                <ProjectGrid v-for="(title, index) in titles" :key="index" :src="sources[index]" :title="title"
                    :description="descriptions[index]" :stack="stacks[index]" :disabled="disabled" />
            </div>
        </transition>
    </section>
</template>

<script>

export default {
    props: ['disabled'],
    data() {
        return {
            display: false,
            titles: [
                "Spot: Music mood prediction",
                "Nudeny API: Image based nudity content detector",
                "Salin: Filipino speech to Baybayin"
            ],
            descriptions: [
                "Spot Music Mood Prediction is a Django-based web app that predicts a track's mood using a machine learning model based on logistic regression. It extracts information like tempo, mode, danceability, energy, and valence from the Spotify API and predicts the mood as happy, sad, calm, or energetic. Users can search for a track directly within the app.",
                "Nudeny API is an image-based nudity content detector that uses object detection and classification models to identify and censor inappropriate content. It can be integrated into various applications, including a Discord bot and a browser extension, making it easy to detect and censor inappropriate images within online communities.",
                "\"Salin\" is a web app that transcribes spoken Filipino into the Baybayin script using advanced speech recognition and regular expression technologies, promoting the use of this ancient writing system in a modern, accessible way."
            ],
            sources: [
                "/assets/spot.png",
                "/assets/nudeny.png",
                "/assets/baybayin.png"
            ],
            stacks: [
                ['/assets/python.svg', '/assets/django.svg', '/assets/javascript.svg', '/assets/html.svg', '/assets/css.svg'],
                ['/assets/python.svg', '/assets/tensorflow.svg', '/assets/fastapi.svg'],
                ['/assets/javascript.svg', '/assets/html.svg', '/assets/css.svg'],
            ]
        };
    },
    mounted() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (!this.display) {
                        this.display = !this.display;
                    }
                }
            });
        });

        observer.observe(document.getElementById("projects"));
    }
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
#projects {
    width: 100vw;
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.project-enter {
    opacity: 0;
    transform: translateX(20px);
}

.project-enter-active {
    transition: all 500ms ease-in-out;
}

#grid-container {
    display: grid;
    grid-auto-rows: 385px;
    grid-template-columns: repeat(2, 700px);
    grid-row-gap: 20px;
    grid-column-gap: 20px;
    /* border: 1px solid pink; */
}

.card {
    width: 100%;
    height: 100%;
}

.card h1 {
    font-size: 4rem;
    color: var(--font-dark);
    margin: 0px;
}

.card h1 span {
    color: var(--secondary);
}

.card p {
    color: var(--font-dark-secondary);
    font-size: 2rem;
    line-height: 2.5rem;
}

.card:first-of-type {
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

@media only screen and (max-width: 1440px) {
    #grid-container {
        grid-auto-rows: 340px;
        grid-template-columns: repeat(2, 600px);
        grid-row-gap: 20px;
        grid-column-gap: 20px;
        /* border: 1px solid pink; */
    }
}

@media only screen and (max-width: 1024px) {

    .card h1,
    .card p {
        text-align: center;
    }

    #grid-container {
        grid-auto-rows: 340px;
        grid-template-columns: repeat(1, 600px);
        grid-row-gap: 20px;
        grid-column-gap: 20px;
    }
}

@media only screen and (max-width: 425px) {
    .card h1 {
        font-size: 3rem;
    }

    .card p {
        font-size: 1rem;
        line-height: 1.5rem;
    }

    #grid-container {
        grid-auto-rows: 230px;
        grid-template-columns: repeat(1, 370px);
        grid-row-gap: 20px;
        grid-column-gap: 20px;
    }
}

@media only screen and (max-width: 375px) {
    .card:first-of-type {
        padding: 20px;
    }

    .card h1 {
        font-size: 3rem;
    }

    .card p {
        font-size: 1rem;
        line-height: 1.5rem;
    }

    #grid-container {
        grid-template-columns: repeat(1, 320px);
        grid-row-gap: 20px;
        grid-column-gap: 20px;
    }
}
</style>