<template>
  <div>
    <backend-hero></backend-hero>
    <div class="wrapper">
      <div class="job-list container" v-show="authenticated">
        <div class="col-sm-10 col-sm-offset-1">
          <router-link to="/backend/add"  :class="['btn btn-primary back-to-list']">
            Neuen Job anlegen
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
                  <router-link :to="{name:'JobEdit', params:{id:job._id}}">
                    Details
                  </router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="notloggedin" v-show="!authenticated">
        <router-link to="/backend/login"  :class="['btn btn-primary back-to-list']">
          Bitte melden Sie sich zuerst an!
        </router-link>
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
        authenticated: false,
        localStorage,
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

  function checkAuth() {
    return !!localStorage.getItem('id_token');
  }
</script>

<style scoped lang="scss">
  @import "../../styles/util/util.scss";

  a.back-to-list {
    @include rem((margin: 20px 20px 20px 0px));
    background: $color-red-t2w;
    border: none;
  }
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
