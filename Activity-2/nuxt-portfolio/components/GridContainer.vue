<template>
    <div>
        <div id="grid-container" class="first-page" v-if="value === 0">
            <Grid v-for="(asset, index) in primaryAssets" :key="index" :image="asset" />
        </div>
        <div id="grid-container" class="second-page" v-if="value === 1">
            <Grid v-for="(asset, index) in secondaryAssets" :key="index" :image="asset" />
        </div>
    </div>
</template>

<script>
export default {
    props: ['value'],
    data() {
        return {
            primaryAssets: ["/assets/html.svg", "/assets/css.svg", "/assets/javascript.svg", "/assets/c.svg", "/assets/php.svg", "/assets/python.svg"],
            secondaryAssets: ["/assets/react.svg", "/assets/codeigniter.svg", "/assets/django.svg", "/assets/fastapi.svg", "/assets/bootstrap.svg", "/assets/express.svg", "/assets/tensorflow.svg", "/assets/mysql.svg", "/assets/mongodb.svg"]
        }
    }
}
</script>

<style scoped>
#grid-container {
    display: grid;
    grid-row-gap: 20px;
    grid-column-gap: 20px;
}

#grid-container.first-page {
    grid-template-rows: repeat(2, 200px);
    grid-template-columns: repeat(3, 200px);
}

#grid-container.second-page {
    grid-template-rows: repeat(3, 200px);
    grid-template-columns: repeat(3, 200px);
}

@media only screen and (max-width: 1024px) {
  #grid-container {
    grid-row-gap: 10px;
    grid-column-gap: 10px;
  }

  #grid-container.first-page{
    grid-template-rows: repeat(2, 120px);
    grid-template-columns: repeat(3, 120px);
  }
  
  #grid-container.second-page{
    grid-template-rows: repeat(3, 120px);
    grid-template-columns: repeat(3, 120px);
  }
}

@media only screen and (max-width: 768px) {
  #grid-container {
    grid-row-gap: 10px;
    grid-column-gap: 10px;
  }

  #grid-container.first-page{
    grid-template-rows: repeat(2, 100px);
    grid-template-columns: repeat(3, 100px);
  }
  
  #grid-container.second-page{
    grid-template-rows: repeat(3, 90px);
    grid-template-columns: repeat(3, 90px);
  }
}
</style>