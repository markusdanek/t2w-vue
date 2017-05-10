<template>
  <div>
    <backend-hero></backend-hero>
    <div class="wrapper">
      <div class="job-list container">
        <div class="col-sm-12">
          <router-link to="/backend/add">
            Neuer Job
          </router-link>
          <table class="table table-responsive">
            <thead>
              <tr>
                <th>Referenznummer</th>
  							<th>Titel</th>
  							<th>Gebiet</th>
  							<th>Aktion</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="job in jobs">
                <td>{{ job.referenceId }}</td>
                <td class="jobtitle">
                  {{ job.title }} m/w
                </td>
                <td>
                  {{ job.area }}
                </td>
                <td>
                  <router-link :to="{name:'JobAction', params:{id:job._id}}">
                    Details
                  </router-link>
  							</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import JobMethods from '../../mixins/job'

  export default {
    name: 'api-job-list',
    data() {
      return {
        jobs: [],
        loading: false,
      }
    },
    created() {
      this.retrieveJobs();
    },
    route: {
      beforeEnter() {
        return checkAuth();
      }
    },
    mixins: [JobMethods]
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
