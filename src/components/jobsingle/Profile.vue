<template>
  <div class="job-detail col-sm-11 col-md-6">
    <div class="intro block">
      <p>{{job.introText}}</p>
    </div>
    <div class="title block">
      <h2>{{job.title}} m/w</h2>
    </div>
    <div class="intro block subtext" v-if="job.subText">
      <p>{{job.subText}}</p>
    </div>
    <hr />
    <div class="working-info block">
      <h3>Aufgabenbereich</h3>
      <ul v-for="response in responsibility">
        <li>{{response}}</li>
      </ul>
    </div>
    <hr />
    <div class="qualifications block">
      <h3>Anforderungen</h3>
      <ul v-for="quali in qualifications">
        <li>{{quali}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import JobMethods from '../../mixins/job'

  export default {
    name: 'jobsingle-profile',
    data() {
      return {
        job: [],
        responsibility: [],
        qualifications: [],
        minSalary: [],
        maxSalary: [],
        loading: false,
      }
    },
    created() {
      this.retrieveJobSingle();
    },
    mixins: [JobMethods]
  }
</script>

<style scoped lang="scss">
  @import "../../styles/util/util.scss";

  .job-detail {
    .block {
      h3 {
        @include rem((margin-bottom: 20px));
        color: $color-red-t2w;
      }
      ul {
        li {
          list-style-type: square;
        }
      }
      &.title {
        h2 {
          @include rem((padding: 20px 0));
          font-weight: bold;
          text-align: center;
        }
      }
      &.intro {
        p {
          @include rem((font-size, 16px));
        }
      }
      &.subtext {
        text-align: center;
      }
    }
  }
</style>
