<template>
  <div class="layout">
    <Topnav class="nav"/>
    <div class="content">
      <aside v-if="asideVisible">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始使用</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/input">Input 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/toast">Toast 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/collapse">Collapse 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/popover">Popover 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
  import Topnav from '../components/Topnav.vue';
  import { inject, Ref } from 'vue';

  export default {
    components: {Topnav},
    setup(){
      const asideVisible = inject<Ref<Boolean>>('asideVisible')
      return {asideVisible}
    }
  };
</script>

<style lang="scss" scoped>
  .layout{
    display: flex;
    flex-direction: column;
    height: 100vh;
    > .nav{
      flex-shrink: 0;
    }
    > .content{
      flex-grow: 1;
      padding-top: 50px;
      padding-left: 156px;
      @media (max-width: 500px) {
        padding-left: 0;
      }
    }
  }
  .content {
    display: flex;
    > aside {
      flex-shrink: 0;
    }
    > main {
      flex-grow: 1;
      padding: 16px;
      background: white;
      margin-top: 6px;
    }
  }
  aside {
    background: linear-gradient(180deg, rgba(255,228,202,1) 0%, rgba(255,251,249,1) 100%);
    width: 150px;
    padding: 70px 0;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 1;
    > h2 {
      margin-bottom: 4px;
      padding-left: 16px;
    }
    > ol {
      > li {
        > a{
          display: block;
          padding: 4px 16px;
        }
        .router-link-active{
          background: white;
        }
      }
    }
  }
  main{
    overflow: auto;
  }
</style>
