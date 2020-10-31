<template>
  <div>
    <Topnav/>
    <div class="banner">
      <div class="banner-main">
        <div class="text">
          <h1>Sprite UI</h1>
          <h2>一个简单实用的 UI 框架</h2>
        </div>
        <p class="actions">
          <a href="https://github.com/linzhengGithub">Github</a>
          <router-link to="/doc/intro">Start</router-link>
        </p>
      </div>
      <div class="features">
        <ul>
          <li>
            <svg class="icon">
              <use xlink:href="#icon-vue"></use>
            </svg>
            <h3>基于 Vue 3</h3>
            <p>骄傲地使用了 Vue 3 Composition API</p>
          </li>
          <li>
            <svg class="icon">
              <use xlink:href="#icon-ts"></use>
            </svg>
            <h3>基于 TypeScript </h3>
            <p>源代码采用 TypeScript 书写（非严格检查）</p>
          </li>
          <li>
            <svg class="icon">
              <use xlink:href="#icon-light"></use>
            </svg>
            <h3>代码易读</h3>
            <p>每个组件的源代码都极其简洁</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Topnav from '../components/Topnav.vue';

  export default {
    components: {Topnav}
  };
</script>

<style lang="scss" scoped>
  $border-radius: 4px;
  .banner {
    padding-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: white;
    color: #2d2438;
    height: 100vh;
    /*clip-path: ellipse(80% 60% at 50% 40%);*/
    > .banner-main {
      display: flex;
      flex-direction: column;
      > .text{
        text-align: center;
      }
      > .actions {
        padding: 8px 0;
        text-align: center;
        a {
          margin: 0 8px;
          background: #f9a086;
          color: white;
          display: inline-block;
          border-radius: $border-radius;
          padding: 8px 24px;
          &:hover {
            text-decoration: none;
            background: darken(#f9a086,5%);
          }
        }
      }
    }
  }
  .features {
    margin: 64px auto;
    width: 400px;
    @media (min-width: 800px) {
      width: 800px;
    }
    @media (min-width: 1200px) {
      width: 1300px;
      > ul{
        margin-left: 100px;
      }
    }
    > ul {
      display: flex;
      flex-wrap: wrap;
      > li {
        width: 400px;
        margin: 16px 0;
        display: grid;
        justify-content: start;
        align-content: space-between;
        grid-template-areas: "icon title" "icon text";
        grid-template-columns: 80px auto;
        grid-template-rows: 1fr auto;
        > svg {
          grid-area: icon;
          width: 64px;
          height: 64px;
        }
        > h3 {
          grid-area: title;
          font-size: 28px;
        }
        > p {
          grid-area: text
        }
      }
    }
  }


  svg {
    width: 64px;
    height: 64px;
  }
</style>
