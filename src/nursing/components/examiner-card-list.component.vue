<script>
import ExaminerCard from "./examiner-card.component.vue";
import {Examiner} from "../model/examiner.entity.js";
import {ExaminerService} from "../services/examiner.service.js";
import {MentalStateExam} from "../../shared/model/mental-state-exam.entity.js";
import {MentalStateExamService} from "../../shared/services/mental-state-exam.service.js";

export default {
  name: "examiner-card-list",
  components: {ExaminerCard},
  data(){
    return{
      examiners: [],
      exams: [],
      examsCount: [],
      averagesTotalScores: [],
      examiner: new Examiner({}),
      exam: new MentalStateExam({}),
      examinersService: null,
      mentalStateExamService: null
    }
  },
  methods:{
    getExamsCount() {
      this.examsCount = [];
      this.examiners.forEach((examiner, index) => {
        //this.examsCount[index] = this.exams.filter(exam => exam.examinerId === examiner.id).length;
        this.mentalStateExamService.getExamsByExaminerId(examiner.id).then(response => {
          this.examsCount[index] = response.data.length;
        }).catch(error => console.error(error));
      });
    },
    getAveragesTotalScores() {
      this.averagesTotalScores = [];
      this.examiners.forEach((examiner, index) => {
        let totalScores = this.exams.filter(exam => exam.examinerId === examiner.id).map(exam => exam.orientationScore + exam.registrationScore + exam.attentionAndCalculationScore + exam.recallScore + exam.languageScore);
        this.averagesTotalScores[index] = totalScores.reduce((a, b) => a + b, 0) / totalScores.length;
      });
    }
  },
  created() {
    this.examinersService = new ExaminerService();
    this.mentalStateExamService = new MentalStateExamService();

    this.examinersService.getAll().then(response => {
      this.examiners = response.data.map(examiner => new Examiner(examiner));
      console.log(this.examiners);
      return this.mentalStateExamService.getAll();
    }).then(response => {
      this.exams = response.data.map(exam => new MentalStateExam(exam));
      console.log(this.exams);
      this.getExamsCount();
      this.getAveragesTotalScores();
      console.log(this.examsCount);
      console.log(this.averagesTotalScores);
    }).catch(error => console.error(error));
  }
}
</script>

<template>
  <div class="card-container" aria-label="examiner list">
    <examiner-card
        v-for="(examiner, index) in examiners"
        :key="examiner.id"
        :examiner="examiner"
        :examCount="examsCount[index]"
        :averageExamTotal="averagesTotalScores[index]"
    />
  </div>
</template>

<style scoped>
.card-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
}
.card-container > * {
  flex: 1 1 calc(50% - 1rem);
  max-width: calc(50% - 1rem);
}
</style>