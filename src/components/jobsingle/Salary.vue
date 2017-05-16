<template>

    <div class="salary-block col-sm-5">
      <h3>Gehaltsspanne</h3>
      <div class="salary-box row">
        <!-- <div class="min col-sm-4">
          {{job.minSalary}}
        </div> -->
        <div class="max col-sm-12">
          <span class="current">{{job.salary}}</span>
          <span class="maximal">{{job.maxSalary}}</span>
        </div>
      </div>
      <div class="salary-desc row">
        <!-- <div class="col-sm-4 min">
          <span class="min">Mindestgehalt</span>
        </div> -->
        <div class="col-sm-12 actual">
          <span class="actual">Gehalt</span>
        </div>
      </div>
    </div>

</template>

<script>
  import JobMethods from '../../mixins/job'

  export default {
    name: 'jobsingle-salary',
    data() {
      return {
        job: [],
        minSalary: [],
        maxSalary: [],
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
