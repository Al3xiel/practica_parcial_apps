<script>
export default {
  name: "not-found",
  data(){
    return{
      currentRoute: "http://localhost:5177"+this.$route.path
    }
  }
}
</script>

<template>
  <h1>{{$t('pageNotFound.message1')}} {{currentRoute}} {{$t('pageNotFound.message2')}}</h1>
  <router-link to="/home">
    <button>{{$t('pageNotFound.return')}}</button>
  </router-link>
</template>

<style scoped>

</style>