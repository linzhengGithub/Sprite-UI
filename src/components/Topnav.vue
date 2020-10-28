<template>
  <div class="topnav">
    <div class="logo">
        <svg class="icon">
          <router-link to="/">
          <use xlink:href="#icon-hotSprite"></use>
          </router-link>
        </svg>
      <div class="logo-name">
        <router-link to="/"><strong><i>Sprite</i></strong></router-link>
      </div>
    </div>
    <ul class="menu">
      <li><router-link to="/Doc"><strong>文档</strong></router-link></li>
    </ul>
    <span class="toggleAside" @click="toggleAside">
      <svg class="icon">
        <use xlink:href="#icon-hotSprite"></use>
      </svg>
    </span>
  </div>
</template>

<script lang="ts">
  import {inject, Ref} from 'vue'
  export default {
    name: 'Topnav',
    setup(){
      const asideVisible = inject<Ref<Boolean>>('asideVisible') //get
      const toggleAside = () => {
        asideVisible.value = !asideVisible.value
      }
      return {toggleAside}
    }
  };
</script>

<style lang="scss" scoped>
  .topnav {
    background: #ffe4cb;
    display: flex;
    padding: 16px;
    position: fixed;
    width: 100%;
    z-index: 10;
    > .logo {
      max-width: 6em;
      margin-right: auto;
    }
    > .menu {
      display: flex;
      white-space: nowrap;
      flex-wrap: nowrap;
      > li {
        margin: 7px 1em;
        color: #fa6a47;
        > a:hover{
          text-decoration: none;
        }
      }
    }
    > .toggleAside{
      width: 30px;
      height: 30px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      display: none;
    }
    @media (max-width: 500px) {
      > .menu{
        display: none;
      }
      > .logo{
        margin: 0 auto;
        > .icon{
          display: none;
        }
        > .logo-name{
          display: block;
        }
      }
      >.toggleAside{
        display: inline-block;
      }
    }
    @media (min-width: 50px) {
      .logo-name{
        display: none;
      }
    }
  }
  svg{
    width: 34px;
    height: 34px;
  }
</style>