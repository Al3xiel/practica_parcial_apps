<script>
import ExaminerCardList from "../components/examiner-card-list.component.vue";

export default {
  name: "examiner-performance-overview",
  components: {ExaminerCardList}
}
</script>

<template>
  <h1>{{$t('pages.examinerPerformanceOverview.title')}}</h1>
  <examiner-card-list/>
</template>

<style scoped>

</style>