<template>
  <div class="">
    <h1 class="mb-5 text-3xl lg:text-5xl">
      Pesquisou por
      <span class="text-blue-400">{{ query.term }}</span>
    </h1>
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

<script>
import MyAsyncRequest from "../services/my-async-request";
import JobCard from "../components/JobCard.vue";
import Loading from "../components/Loading.vue";

export default {
  components: { JobCard, Loading },
  name: "Search",
  data() {
    return {
      jobs: [],
      query: {
        term: null,
      },
      dataLoaded: false,
    };
  },
  mounted() {},
  async created() {
    let uri = window.location.search.substring(1);
    let params = new URLSearchParams(uri);
    this.query.term = params.get("term");
    if (this.query.term) {
      const response = await MyAsyncRequest.get(
          "/jobs?search=" + this.query.term
        ),
        data = response.data;
        console.log(response);

      this.dataLoaded = true;
      this.jobs = data;
      this.totalJobs = response.total;
    }
  },
};
</script>
