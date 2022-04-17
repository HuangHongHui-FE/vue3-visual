<template>
  <div class="box" :style="{background: `url(${bg})`}">
    <div class="box-left"></div>
    <div class="box-center"></div>
    <div class="box-right"></div>
  </div>
</template>



<script setup lang="ts">
import bg from './assets/1.jpeg'


</script>




<style lang="less">
    html, body, #app{
      height: 100%;

      overflow: hidden;
    }

    .box{
      height: 100%;
      display: flex;
      overflow: hidden;
      &-left{
        width: 400px;
      }
      &-center{
        flex: 1;
      }
      &-right{
        width: 400px;
      }
    }
</style>
