<script>
import {Examiner} from "../model/examiner.entity.js";

export default {
  name: "examiner-card",
  props:{
    examiner:{type: Examiner, required: true},
    examCount: {type: Number, required: true},
    averageExamTotal: {type: Number, required: true}
  }
}
</script>

<template>
  <pv-card class="examiner-card">
    <template #header>
      {{examiner.firstName}} {{examiner.lastName}}
    </template>
    <template #title>
      {{$t('examinerCard.cardTitle')}}{{examiner.nationalProviderIdentifier}}
    </template>
    <template #subtitle>
      {{$t('examinerCard.cardSubtitle')}}
    </template>
    <template #content>
      <ul>
        <li>{{$t('examinerCard.examAssignedCount')}} {{examCount}}</li>
        <li>{{$t('examinerCard.averageAssignedExamTotal')}} {{averageExamTotal}}</li>
      </ul>
    </template>
  </pv-card>
</template>

<style scoped>
</style>