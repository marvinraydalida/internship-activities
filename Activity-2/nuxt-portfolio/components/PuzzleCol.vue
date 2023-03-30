<template>
    <div class="puzzle-col">
        <div class="tile" :data-tile="value"></div>
    </div>
</template>

<script>
export default {
    props: ['value']
}
</script>

<style scoped>
.puzzle-col {
    width: 200px;
    height: 100%;
    padding: 1px;
}

.tile[data-tile="empty"] {
    display: none;
}

.tile {
    width: 100%;
    height: 100%;
    background-size: cover;
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    transition: all 300ms ease-in-out;
    background-color: beige;
}

.tile:active {
    transform: scale(0.95);
}

.tile-grow {
    animation: grow 300ms ease-in-out;
}

@keyframes grow {
    from {
        transform: scale(0.95);
    }

    to {
        transform: scale(1);
    }
}

@media only screen and (max-width: 1024px) {
    .puzzle-col {
        width: 133px;
    }
}

@media only screen and (max-width: 768px) {
    .puzzle-col {
        width: 133px;
    }
}

@media only screen and (max-width: 465px) {
    .puzzle-col {
        width: 116px;
    }
}

@media only screen and (max-width: 375px) {
  .puzzle-col {
    width: 100px;
  }
}
</style>