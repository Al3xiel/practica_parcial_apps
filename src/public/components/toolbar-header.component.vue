<script>

import LanguageSwitcher from "./language-switcher.component.vue";

export default {
  name: "toolbar-header",
  components: {LanguageSwitcher},
  data(){
    return {
      drawer: false,
      items: [
        {label: "Home", to: '/home'},
        {label: "Examiner Performance Overview", to: '/nursing/examiner-performance-overview'}
      ]
    }
  },
  methods: {
    toggleDrawer(){
      this.drawer = !this.drawer;
    }
  }
}
</script>

<template>
  <header class = "header-toolbar">
    <pv-toolbar style="padding: 5px; background-color: #D1E4FA; border-style: none; color: black;">
      <template #start>
        <img src="https://hign.org/sites/default/files/2022-01/HIGN-logo-1200.png" alt="HIGN-logo" class="toolbar-img">
        <p style="font-weight: bold; padding-left: 10px;">Hartford Institute for Geriatric Nursing</p>
      </template>
      <template #end>
        <div>
          <router-link v-for="item in items" :keys="item.label" v-slot="{navigate, href}" :to="item.to" custom>
            <pv-button :href="href" severity="secondary" class="custom-button" @click="navigate" text plain><p style="margin:0;">{{item.label}}</p></pv-button>
          </router-link>
        </div>
        <language-switcher/>
      </template>
    </pv-toolbar>
  </header>
</template>

<style scoped>
  .toolbar-img{
    height: 30px;
  }
  .header-toolbar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    height: fit-content;
  }
  .custom-button p{
    color: black;
    background-color: #D1E4FA;
  }
</style>