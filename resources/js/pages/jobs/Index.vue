<template>
  <div class="">
    <div class="text-xl mb-5">
      Lista de vagas <span v-if="dataLoaded">({{ totalJobs }})</span>
    </div>
    <div class="job-list">
      <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
        <JobCard
          v-for="job in jobs"
          :job="job"
          :key="job.id"
          class="shadow"
        ></JobCard>
      </div>
      <Loading v-if="!dataLoaded" />
    </div>
  </div>
</template>

<script lang="ts">
import JobCard from "../../components/JobCard.vue";
import Loading from "../../components/Loading.vue";
// import IJob from "../../app/interface/IJob";
import MyAsyncRequest from "../../services/my-async-request.js";

export default {
  components: { JobCard, Loading },
  name: "JobList",
  data() {
    return {
      jobs: [],
      totalJobs: 0,
      dataLoaded: false,
    };
  },
  mounted() {
    // console.log("Component");
  },
  async created() {
    const response = await MyAsyncRequest.get("/jobs");
    console.log(response);
    this.dataLoaded = true;
    this.jobs = response.data;
    this.totalJobs = response.total;
  },
};
</script>
