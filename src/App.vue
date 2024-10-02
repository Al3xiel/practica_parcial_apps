<script>

import {defineComponent} from "vue";
import ToolbarHeader from "./public/components/toolbar-header.component.vue";

export default defineComponent({
  components: {ToolbarHeader}
})
</script>

<template>
  <toolbar-header/>
  <div class="main-content">
    <router-view/>
  </div>
</template>

<style scoped>
  .main-content {
    margin-top: 64px;
  }
</style>
