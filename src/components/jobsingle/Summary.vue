<template>
  <div class="wrapper">
    <div class="more-info col-sm-11 col-md-4 col-md-offset-1">
      <div class="box">
        <h4>Eckdaten</h4>
        <ul>
          <li>Jobtitel: <span>{{job.title}}</span></li>
          <li>Arbeitszeit: <span>{{job.hours}}</span></li>
          <li>Arbeitsort: <span>{{job.area}}</span></li>
          <li>Bruttomonatsgehalt: <span>{{job.salary}} {{job.salaryText}}</span></li>
          <li>Referenznummer: <span>{{job.referenceId}}</span></li>
        </ul>
      </div>
      <div class="apply-btn">
        <a :href="`mailto:${job.email}?subject=Bewerbung als ${job.title}`" class="btn-more-jobs btn btn-danger btn-block">
          Jetzt bewerben
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import JobMethods from '../../mixins/job'

  export default {
    name: 'jobsingle-summary',
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

  .more-info {
    .box {
      @include rem((padding: 20px));
      background: $color-gray-light;
      h4 {
        @include rem((margin-bottom: 20px));
        font-weight: bold;
      }
      ul {
        @include rem((padding: 0));
        li {
          list-style-type: none;
          font-weight: bold;
          span {
            font-weight: normal;
          }
          &.overpayment {
            @include rem(font-size, 14px);
            @include rem((margin-top: 10px));
            font-weight: normal;
            font-style: italic;
          }
          &.jobtitle {
            color: $color-red-t2w;
            span {
              color: $color-black-medium;
            }
          }
        }
      }
    }
    .apply-btn {
      @include rem((margin-top: 25px));
      a.btn-more-jobs {
        @include rem(font-size, 18px);
      }
    }
  }
</style>
