<template>
  <div class="job-card p-4 bg-white">
    <div class="border-b mb-2 pb-2 font-semibold">{{ job.title }}</div>
    <div class="">
      Empregador: <span class="font-semibold"> {{ job.company.name }}</span>
    </div>
    <div class="text-sm"><i class="bi-clock"></i> {{ job.start_time }}</div>
    <div class="flex gap-2">
      <router-link to="/"></router-link>
    </div>
  </div>
</template>

<script>
// import { defineComponent } from "@vue/composition-api";
// import DateControl from "../utils/date_control";
export default {
  name: "JobCard",
  props: {
    job: Object,
  },
  created() {
    const date = new Date(this.job.start_time);
    this.job.start_time = date.getDate()+'/'+date.getMonth()+'/'+date.getUTCFullYear()
  },
};
</script>
