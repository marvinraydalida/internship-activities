<template>
    <header id="home">
        <h1 :class="{ 'light-font': disabled }">Let me showcase my <span>DOM</span> manipulation skills to you.</h1>
        <div class="gallery">
            <GalleryImage />
            <GalleryImage />
            <GalleryImage />
            <GalleryImage />
            <GalleryImage />
            <GalleryImage />
        </div>
    </header>
</template>

<script>

export default {
    props: ['disabled'],
    data() {
        return {
            animate: false,
            imageSources: [
                "https://images.squarespace-cdn.com/content/v1/545a242be4b04f070d49e9eb/1488227862178-M6IUJ1DPGH0FE0CA29GV/image-asset.jpeg?format=1000w",
                "https://www.koreanindie.com/wp-content/uploads/2019/05/Jannabi_Legend.jpg",
                "https://upload.wikimedia.org/wikipedia/en/e/ea/Blackparadecover.jpg",
                "https://www.koreanindie.com/wp-content/uploads/2021/08/jannabi-the-land-of-fantasy-cover.jpg",
                "https://upload.wikimedia.org/wikipedia/en/e/ef/Led_Zeppelin_-_Led_Zeppelin_%281969%29_front_cover.png",
                "https://upload.wikimedia.org/wikipedia/en/2/26/Led_Zeppelin_-_Led_Zeppelin_IV.jpg",
            ],
            spotifyUrl: [
                "https://open.spotify.com/album/6QaVfG1pHYl1z15ZxkvVDW?si=0PkA5v8tSKOPe8404so88w",
                "https://open.spotify.com/album/28GiIRNu9nEugqnUci3aIC?si=x5JfCzzlTH-cc9pt7Wairg",
                "https://open.spotify.com/album/0FZK97MXMm5mUQ8mtudjuK?si=kZ0vzk30TFSTszARVnZCVw",
                "https://open.spotify.com/album/3AqaCmFab2u1su982CnoQE?si=dQmUC3hISTWj0A7alFQmnA",
                "https://open.spotify.com/album/3ycjBixZf7S3WpC5WZhhUK?si=f-T3dnl6T2y-5hU9yEH6Ng",
                "https://open.spotify.com/album/5EyIDBAqhnlkAHqvPRwdbX?si=GXfjnKUWThGobyl7HLFAgg",
            ]
        }
    },
    mounted() {
        const gallery = document.querySelector(".gallery");
        const home = document.getElementById('home');
        const images = gallery.children;

        const galleryLeft = home.getBoundingClientRect().left;
        const galleryRight = home.getBoundingClientRect().right;

        const imageWidth = images[0].getBoundingClientRect().right - images[0].getBoundingClientRect().left;

        let index = 0;
        for (const image of images) {
            // (imageHeight - 10) To decrease the margin between images
            const right = index * (300 + 10);

            image.style.backgroundImage = `url(${this.imageSources[index]})`;
            image.style.right = `${right}px`;
            image.dataset.link = this.spotifyUrl[index];
            image.addEventListener('click', () => {
                window.open(image.dataset.link)
            });
            index++;
        }

        setInterval(() => {
            for (const image of images) {
                const imageRight = `${image.getBoundingClientRect().right}`
                const imageLeft = `${image.getBoundingClientRect().left}`
                const currentImageRight = parseInt(imageRight.replace("px", ""));
                const currentImageLeft = parseInt(imageLeft.replace("px", ""));

                image.style.right = `calc(${image.style.right} - 100px)`;

                if (galleryRight < currentImageLeft) {
                    const parentNode = image.parentNode;
                    const imageCopy = image.cloneNode(true);
                    const previousLastImage = image.parentNode.lastElementChild;
                    parentNode.removeChild(image);
                    const newLastImage = parentNode.appendChild(imageCopy);
                    newLastImage.style.right = `calc(${previousLastImage.style.right} + ${imageWidth + 10}px)`;
                    newLastImage.addEventListener('click', () => {
                        window.open(image.dataset.link)
                    });
                    break;
                }
            }
        }, 1100);
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

body {
    background-color: var(--primary-dark);
    overflow-x: hidden;
}
</style>

<style scoped>
#home {
    height: 100vh;
    overflow: hidden;
}

#home h1 {
    text-align: center;
    font-size: 5rem;
    font-family: var(--font-family);
    font-weight: bold;
    line-height: 6rem;
    color: white;
    margin: 100px 200px;
    transition: all 500ms ease-in;
}

#home h1 span {
    color: var(--secondary) !important;
}

.gallery {
    width: 100vw;
    height: 200px;
    position: relative;
    display: flex;
    justify-content: space-between;
}

.light-font {
    color: var(--font-light) !important;
}

.light-bg {
    background-color: var(--primary-light) !important;
}

@media only screen and (max-width: 1024px) {
    #home h1 {
        margin-left: 50px;
        margin-right: 50px;
        font-size: 3.5rem;
        line-height: 4rem;
    }
}

@media only screen and (max-width: 768px) {
    #home h1 {
        font-size: 2.7rem;
        line-height: 3.3rem;
    }
}

@media only screen and (max-width: 465px) {
    #home h1 {
        font-size: 2rem;
        line-height: 2.8rem;
    }
}
</style>