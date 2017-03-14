<template>
  <div class="job-detail col-sm-11 col-md-6">
    <div class="intro block">
      <p>{{job.introText}}</p>
    </div>
    <div class="title block">
      <h2>{{job.title}} m/w</h2>
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
    methods: {
      retrieveJobSingle() {
        this.loading = true;
        this.$http.get('http://t2w-node.herokuapp.com/api/jobs/' + this.$route.params.id + '/json')
          .then(response => {
            this.job = response.data;
            this.responsibility = response.data.responsibility;
            this.qualifications = response.data.qualifications;
            this.maxSalary = response.data.maxSalary;
            this.minSalary = response.data.minSalary;
            if (this.maxSalary == '') {
                this.maxSalary = 'Keine Angabe';
            } else {
                this.maxSalary = response.data.maxSalary;
            }
            if (this.minSalary == '') {
                this.minSalary = 'Laut KV';
            } else {
                this.minSalary = response.data.minSalary;
            }
          }, response => {
            console.log("Error", response);
          });
      }
    }
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
    }
  }
  .salary-block {
    @include rem((padding-left: 0));
    @include rem((margin-bottom: 30px));
    h3 {
      @include rem((margin-bottom: 20px));
      color: $color-red-t2w;
    }
    .salary-box {
      @include rem((margin-left: 0px));
      @include rem((padding: 1px));
      border: 1px solid $color-blue-medium;
      .max,
      .min {
        @include rem((padding: 10px));
      }
      .min {
        background: $color-gray-light;
        text-align: center;
      }
      .max {
        background: rgba($color-red-t2w, 0.5);
        background: -moz-linear-gradient(left, rgba($color-red-t2w, 0.5) 0%, #ffffff 100%);
        background: -webkit-linear-gradient(left, rgba($color-red-t2w, 0.5) 0%,#ffffff 100%);
        background: linear-gradient(to right, rgba($color-red-t2w, 0.5) 0%,#ffffff 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=  '#cc0000', endColorstr='#ffffff',GradientType=1 );
        span {
          &.current {
            @include rem((margin-left: 20px));
            text-align: left;
            font-weight: bold;
          }
          &.maximal {
            @include rem((margin-right: 20px));
            float: right;
          }
        }
      }
    }
    .salary-desc {
      @include rem((margin-top: 20px));
      .min {
        text-align: center;
        span.min {
          @include rem((padding: 3px 5px 5px 5px));
          text-align: center;
          background: $color-gray-dark;
          &:before {
            @include rem((margin-left: -10px));
            content: '';
            display: block;
            position: absolute;
            left: 50%;
            top: -10px;
            width: 0;
            height: 0;
            border-width: 0 15px 15px 15px;
            border-style: solid;
            border-color: transparent transparent $color-gray-dark transparent;
          }
        }
      }
      .actual {
        span.actual {
          @include rem((padding: 5px));
          background: $color-gray-dark;
          &:before {
            content: '';
            display: block;
            position: absolute;
            left: 61px;
            top: -4px;
            width: 0;
            height: 0;
            border-width: 14px 0 14px 10px;
            border-style: solid;
            border-color: transparent transparent transparent $color-gray-dark;
          }
        }
      }
    }
    @media (max-width: $screen-sm) {
      display: none;
    }
  }
</style>
