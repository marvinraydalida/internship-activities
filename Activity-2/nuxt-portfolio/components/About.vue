<template>
    <section id="about">
        <transition name="details">
            <div id="about-details" v-if="display">
                <h1 :class="{ 'light-font': disabled }">About <span>Me</span></h1>
                <h2 :class="{ 'light-font': disabled }">
                    Hi there! My name is Marvin Ray Dalida, but my friends usually call me
                    Amben. Lately, I've been indulging in watching anime series as a
                    hobby. Additionally, I love learning and playing new guitar covers in
                    my spare time.
                </h2>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/marvinraydalida/" target="_blank"><i
                                class="bi bi-linkedin"></i></a>
                    </li>
                    <li>
                        <a href="https://github.com/marvinraydalida" target="_blank"><i class="bi bi-github"></i></a>
                    </li>
                    <li>
                        <a href="https://discord.com/users/692694373460082779" target="_blank"><i
                                class="bi bi-discord"></i></a>
                    </li>
                </ul>
            </div>
        </transition>
        <transition name="puzzle">
            <div id="about-puzzle" v-show="display">
                <div id="puzzle-container">
                    <PuzzleRow :columns="['empty', '1', '2']" />
                    <PuzzleRow :columns="['3', '4', '5']" />
                    <PuzzleRow :columns="['6', '7', '8']" />
                </div>
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
            tileImages: ["./assets/row-1-column-2.jpg", "./assets/row-1-column-3.jpg", "./assets/row-2-column-1.jpg", "./assets/row-2-column-2.jpg", "./assets/row-2-column-3.jpg", "./assets/row-3-column-1.jpg", "./assets/row-3-column-2.jpg", "./assets/row-3-column-3.jpg"]
        }
    },
    mounted() {
        const tiles = document.getElementsByClassName("tile");

        const puzzle = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
        ];

        for (let tile of tiles) {
            if (tile !== document.querySelector('.tile[data-tile="empty"]')) {
                tile.addEventListener("click", clickTile);
                tile.style.backgroundImage = `url(${this.tileImages[tile.dataset.tile - 1]})`;
            }
        }

        function clickTile(event) {
            slideTile(event.target);
        }

        function slideTile(element) {
            const emptyTile = document.querySelector('.tile[data-tile="empty"]');
            const tileValue = element.dataset.tile;
            const [emptyTileRow, emptyTileCol] = emptyTilePosition();
            let row;
            let col;
            let isSwapped = false;
            for (let x = 0; x < 3; x++) {
                for (let y = 0; y < 3; y++) {
                    if (puzzle[x][y] == tileValue) {
                        row = x;
                        col = y;
                        break;
                    }
                }
            }

            //slide left
            if (emptyTileRow === row && emptyTileCol === col - 1) {
                puzzle[row][col] = 0;
                puzzle[emptyTileRow][emptyTileCol] = parseInt(element.dataset.tile);
                isSwapped = true;
            }

            //slide right
            if (emptyTileRow === row && emptyTileCol === col + 1) {
                puzzle[row][col] = 0;
                puzzle[emptyTileRow][emptyTileCol] = parseInt(element.dataset.tile);
                isSwapped = true;
            }

            //slide top
            if (emptyTileRow === row - 1 && emptyTileCol === col) {
                puzzle[row][col] = 0;
                puzzle[emptyTileRow][emptyTileCol] = parseInt(element.dataset.tile);
                isSwapped = true;
            }

            //slide bottom
            if (emptyTileRow === row + 1 && emptyTileCol === col) {
                puzzle[row][col] = 0;
                puzzle[emptyTileRow][emptyTileCol] = parseInt(element.dataset.tile);
                isSwapped = true;
            }

            if (isSwapped) {
                const previousEmptyTileParent = emptyTile.parentNode;
                const previousSlidTileParent = element.parentNode;
                const newEmptyTile = emptyTile.cloneNode(true);
                const slidTileCopy = element.cloneNode(true);
                previousEmptyTileParent.removeChild(emptyTile);
                previousSlidTileParent.removeChild(element);
                const slidTile = previousEmptyTileParent.appendChild(slidTileCopy);
                slidTile.addEventListener("click", clickTile);
                slidTile.classList.toggle("tile-grow");
                previousSlidTileParent.appendChild(newEmptyTile);

                setTimeout(() => {
                    slidTile.classList.toggle("tile-grow");
                }, 300);
            }
        }

        function emptyTilePosition() {
            let row;
            let col;
            for (let x = 0; x < 3; x++) {
                for (let y = 0; y < 3; y++) {
                    if (puzzle[x][y] == 0) {
                        row = x;
                        col = y;
                        break;
                    }
                }
            }

            return [row, col];
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (!this.display) {
                        this.display = !this.display;
                    }
                }
            });
        });

        observer.observe(document.getElementById("about"));
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
    font-family: "Quicksand", sans-serif;
}

.light-font {
    color: var(--font-light) !important;
}

.light-bg {
    background-color: var(--primary-light) !important;
}
</style>

<style scoped>
#about {
    height: 100vh;
    overflow: hidden;
    display: flex;
}

#about-details {
    height: 100%;
    width: 50%;
    padding: 0px 50px 0px 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.details-enter-active {
    transition: all 500ms ease-in-out;
}

.details-enter {
    opacity: 0;
    transform: translateX(30px);
}

#about-details h1 {
    font-size: 4.5rem;
    font-weight: 500;
    color: var(--font-dark);
    margin-bottom: 20px;
    transition: all 500ms ease-in;
}

#about-details h1 span {
    color: var(--secondary);
}

#about-details h2 {
    font-size: 2rem;
    line-height: 2.5rem;
    font-weight: lighter;
    color: var(--font-dark-secondary);
    transition: all 500ms ease-in;
    margin-bottom: 30px;
}

#about-details ul {
    display: inline;
    padding: 0px;
}

#about-details li {
    display: inline;
    margin-right: 30px;
}

#about-details li a {
    color: var(--secondary);
}

#about-details li a i {
    font-size: 2.5rem;
    transition: all 250ms ease-in-out;
}

#about-details li a i:hover {
    color: #915a09;
}

#about-puzzle {
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all 1000ms ease-in-out;
}


.puzzle-enter-active {
    transition: all 1000ms ease-in-out;
}

.puzzle-enter {
    opacity: 0;
    transform: translateX(30px);
}


#puzzle-container {
    width: 600px;
    height: 600px;
    box-sizing: border-box;
}

@media only screen and (max-width: 1024px) {
    #home h1 {
        margin-left: 50px;
        margin-right: 50px;
        font-size: 3.5rem;
    }

    #about-details {
        padding-right: 20px;
    }

    #about-details h1 {
        font-size: 3rem;
        font-weight: 500;
        margin-bottom: 20px;
    }

    #about-details h2 {
        font-size: 1.3rem;
        line-height: 1.6rem;
        margin-bottom: 30px;
    }

    #about-details li {
        margin-right: 20px;
    }

    #about-details li a i {
        font-size: 2rem;
    }

    #puzzle-container {
        width: 400px;
        height: 400px;
    }
}

@media only screen and (max-width: 768px) {
    #about {
        flex-direction: column-reverse;
    }

    #about-details {
        padding: 0px 100px 30px 100px;
        width: 100%;
        height: 40%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #about-details h1 {
        margin-bottom: 0px;
    }

    #about-details h2 {
        font-size: 1.1rem;
        margin-bottom: 10px;
        text-align: center;
    }

    #about-puzzle {
        height: 60%;
        width: 100%;
    }

    #puzzle-container {
        width: 400px;
        height: 400px;
    }
}

@media only screen and (max-width: 465px) {
    #about-details {
        height: 50%;
        padding: 0px 50px 30px 50px;
    }

    #about-details h1 {
        font-size: 2.5rem;
        font-weight: 500;
        margin-bottom: 10px;
    }

    #about-details h2 {
        font-size: 1rem;
        margin-bottom: 30px;
    }

    #about-details li {
        margin-right: 20px;
    }

    #about-details li a i {
        font-size: 1.7rem;
    }

    #about-puzzle {
        height: 50%;
    }

    #puzzle-container {
        width: 350px;
        height: 350px;
    }
}

@media only screen and (max-width: 375px) {
    #puzzle-container {
        width: 300px;
        height: 300px;
    }

    #about-details h2 {
        font-size: .9rem;
        line-height: 1.3rem;
        margin-bottom: 30px;
    }
}
</style>