<template>
    <div class="grid">
        <img :src="image" alt="" />
    </div>
</template>

<script>
export default {
    props: ['image']
}
</script>

<style scoped>
.grid {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--secondary-dark);
    border-radius: 10px;
    box-shadow: 1px 2px 14px 5px rgba(0, 0, 0, 0.32);
    -webkit-box-shadow: 1px 2px 14px 5px rgba(0, 0, 0, 0.32);
    -moz-box-shadow: 1px 2px 14px 5px rgba(0, 0, 0, 0.32);
    transition: all 250ms ease-in;
}

.grid img {
    width: 50%;
}

.grid:hover {
    transform: translateY(-5px);
    box-shadow: -2px 58px 140px -67px rgba(243, 162, 41, 1);
    -webkit-box-shadow: -2px 58px 140px -67px rgba(243, 162, 41, 1);
    -moz-box-shadow: -2px 58px 140px -67px rgba(243, 162, 41, 1);
}
</style>

