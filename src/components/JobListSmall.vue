<template>
<div class="wrapper">
  <div class="jobs-overview">
    <b-container>
      <h2 class="title">{{ title }}</h2>
      <b-row>
        <b-col>
          <div id="job-search">
            <autocomplete
              :source="this.jobs"
              resultsDisplay="title"
              placeholder="Suchen Sie hier nach allen verfügbaren Stellenanzeigen"
              @selected="forwardJob"
              inputClass="form-control"
            />
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" md="6" v-for="job in limitedJobs" :key="job.id">
          <b-button class="job-button">
            <router-link :to="{name:'JobSingle', params:{id:job._id}}">{{ job.title }}
              <icon name="angle-right"></icon>
            </router-link>
          </b-button>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-button class="btn-more-jobs float-right">
            <router-link to="/jobs">
              Alle Stellenanzeigen &nbsp;&nbsp;<icon name="angle-right"></icon>
            </router-link>
          </b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</div>
</template>

<script>
import JobMethods from '../mixin'
import Autocomplete from 'vuejs-auto-complete'


export default {
  name: 'job-list-small',
  components: {
      Autocomplete
  },
  props: {
    title: {
      type: String,
      default: 'Die aktuellsten Stellenanzeigen für Sie'
    }
  },
  data() {
    return {
      jobs: [],
      loading: false,
      limitNumber: 4,
      jobSearch: []
    }
  },
  filters: {
    limit: function(arr, limit) {
      return arr.slice(0, limit)
    }
  },
  computed: {
    limitedJobs() {
      return this.jobs.slice(0, this.limitNumber);
    }
  },
  methods: {
    forwardJob(item) {
      this.$router.push({ name: 'JobSingle', params: { id: item.selectedObject._id }})
    }
  },
  created() {
    this.retrieveJobsRandom();
  },
  mixins: [JobMethods]
}
</script>

<style lang="scss">
@import "@/styles/util/util.scss";

.jobs-overview {
    @include rem((padding-bottom: 60px));
    @include rem((padding-top: 60px));
    background: #fff;
    h2.title {
        @include rem((margin: 60px 0 40px 0));
        text-align: center;
        font-weight: bold;
    }
    button.btn-more-jobs {
        @include rem((margin: 10px 0));
        @extend %ghost-button-red;
        a {
          &:hover {
            text-decoration: none;
              color: $color-white;
          }
        }
    }
    button {
      @extend %ghost-button-gray;
      margin-bottom: 20px;
    }
    button a {
        color: $color-black-medium;
        &:hover {
          text-decoration: none;
            color: $color-black-medium;
        }
    }
}
.autocomplete__box,
.job-search{
  margin: 30px 0 !important;
}
</style>
