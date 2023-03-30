<template>
    <div class="image">

    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.image {
    width: 300px;
    height: 100%;
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    transition: all 1s ease-in-out;
    position: absolute;
    cursor: pointer;
}

.image:hover {
    transform: translateY(-20px);
}
</style>