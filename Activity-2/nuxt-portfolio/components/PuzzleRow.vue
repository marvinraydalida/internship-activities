<template>
    <div class="puzzle-row">
        <PuzzleCol :value="columns[0]" />
        <PuzzleCol :value="columns[1]" />
        <PuzzleCol :value="columns[2]" />
    </div>
</template>

<script>
export default {
    props: ['columns']
}
</script>

<style scoped>
.puzzle-row {
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: row;
}

@media only screen and (max-width: 1024px) {
    .puzzle-row {
        height: 133px;
    }
}

@media only screen and (max-width: 768px) {
    .puzzle-row {
        height: 133px;
    }
}

@media only screen and (max-width: 465px) {
    .puzzle-row {
        height: 116px;
    }
}

@media only screen and (max-width: 375px) {
  .puzzle-row {
    height: 100px;
  }
}
</style>