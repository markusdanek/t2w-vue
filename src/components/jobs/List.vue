<template>
  <div class="job-list">
    <div class="col-sm-11 col-md-7">
      <table class="table table-responsive">
        <thead>
          <tr>
            <th>Jobtitel</th>
            <th>Gebiet</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="job in jobs">
            <td class="jobtitle">
              <router-link to="jobs/job._id">
                {{ job.title }} m/w
              </router-link>
              <p>{{ job.introText | truncate(150) }} </p>
            </td>
            <td>
              {{ job.area }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'jobs-list',
    data() {
      return {
        jobs: [],
        loading: false,
      }
    },
    filters: {
  	  truncate: function(text, length, clamp) {
        clamp = clamp || '...';
        length = length || 30;
        if (text.length <= length) return text;
        var tcText = text.slice(0, length - clamp.length);
        var last = tcText.length - 1;
        while (last > 0 && tcText[last] !== ' ' && tcText[last] !== clamp[0]) last -= 1;
        last = last || length - clamp.length;
        tcText =  tcText.slice(0, last);
        return tcText + clamp;
      }
    },
    created() {
      this.retrieveJobs();
    },
    methods: {
      shuffleArray: function(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
          while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
          }
        return array;
      },
      retrieveJobs() {
        this.loading = true;
        this.$http.get('http://t2w-node.herokuapp.com/api/jobs/json').then(response => {
          this.jobs = response.data;
          this.jobs = this.shuffleArray(this.jobs);
        }, response => {
          console.log("Error", response);
        }).then(_ => {
          this.loading = false;
        });
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../styles/util/util.scss";

  .job-list {
    table.table {
      @include rem((padding: 60px 0));
      tbody {
        tr > td {
          vertical-align: middle;
        }
        tr {
          height: 80px;
          td {
            &.jobtitle {
              a {
                color: $color-red-t2w;
                font-weight: bold;
                cursor: pointer;
              }
            }
            p {
              @include rem(font-size, 14px);
              max-width: 600px;
            }
          }
          &:hover {
            background: $color-gray-light;
          }
        }
      }
    }
  }
</style>
