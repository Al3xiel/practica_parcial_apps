<script>
import {MentalStateExamService} from "../../shared/services/mental-state-exam.service.js";
import {MentalStateExam} from "../../shared/model/mental-state-exam.entity.js";

export default {
  name: "home",
  data(){
    return{
      exams: [],
      totalScores: [],
      exam: new MentalStateExam({}),
      mentalStateExamService: null,
    }
  },
  methods:{
    getTotalScores() {
      this.totalScores = [];
      this.exams.forEach((exam, index) => {
        this.totalScores[index] = exam.orientationScore + exam.registrationScore + exam.attentionAndCalculationScore + exam.recallScore + exam.languageScore;
      });
    },
    getHighestScore() {
      this.getTotalScores();
      if (this.totalScores.length === 0) return 0;
      return Math.max(...this.totalScores);
    },
    getLowestScore() {
      this.getTotalScores();
      if (this.totalScores.length === 0) return 0;
      return Math.min(...this.totalScores);
    },
    getAverageScore() {
      this.getTotalScores();
      if (this.totalScores.length === 0) return 0;
      return this.totalScores.reduce((a, b) => a + b, 0) / this.totalScores.length;
    }
  },
  created() {
    this.mentalStateExamService = new MentalStateExamService();
    this.mentalStateExamService.getAll().then(response =>{
      if (Array.isArray(response.data)) {
        this.exams = response.data.map(exam => new MentalStateExam(exam));
      } else {
        console.error('Unexpected response format:', response.data);
      }
      console.log(this.exams);
    }).catch(error => console.error(error));
  }
}
</script>

<template>
  <h1>Welcome to HIGN</h1>
  <pv-card class="card">
    <template #title>{{$t('homeCard.cardTitle')}}</template>
    <template #subtitle>{{$t('homeCard.cardSubtitle')}}</template>
    <template #content>
      <ul>
        <li>{{$t('homeCard.examCount')}} {{exams.length}}</li>
        <li>{{$t('homeCard.highestScore')}} {{getHighestScore()}}</li>
        <li>{{$t('homeCard.lowestScore')}} {{getLowestScore()}}</li>
        <li>{{$t('homeCard.averageScore')}} {{getAverageScore()}}</li>
      </ul>
    </template>
  </pv-card>
</template>

<style scoped>
  .card{
    background: #D1E4FA;
    border-radius: 10px;
    color: black;
  }
</style>