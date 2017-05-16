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
      <div class="" v-show="authenticated">
        <router-link :to="{name:'JobEdit', params:{id:job._id}}"  :class="['btn btn-success btn-block']" style="margin-top: 20px;">
          Diesen Job bearbeiten
        </router-link>
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
        authenticated: false,
        loading: false,
      }
    },
    mounted() {
      this.checkAuth();
    },
    methods: {
      checkAuth() {
        if (localStorage.getItem('profile')) {
          this.authenticated = true;
          console.log("authenticated");
        } else {
          this.authenticated = false;
          console.log("not authenticated");
        }
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
    a.edit-job {
    @include rem((margin-top: 20px));
    }
    .apply-btn {
      @include rem((margin-top: 25px));
      a.btn-more-jobs {
        @include rem(font-size, 18px);
      }
    }
  }
</style>
