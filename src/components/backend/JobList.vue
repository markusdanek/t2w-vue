<template>
  <div>
    <backend-hero></backend-hero>
    <div class="wrapper">
      <div class="job-list container" v-show="authenticated">
        <div class="col-sm-10 col-sm-offset-1">
          <router-link to="/backend/add"  :class="['btn btn-primary back-to-list pull-right']">
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
                  <router-link :to="{name:'JobEdit', params:{id:job._id}}" :class="['btn btn-warning btn-xs']">
                    Bearbeiten
                  </router-link>
                  <router-link :to="{name:'JobSingle', params:{id:job._id}}" :class="['btn btn-primary btn-xs']">
                    Ansehen
                  </router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="container nologin" v-show="!authenticated">
        <div class="col-sm-10 col-sm-offset-1">
          <h2>Sie sind nicht angemeldet!</h2>
          <router-link to="/backend/login"  :class="['btn btn-primary back-to-list']">
            Zur Anmeldeseite
          </router-link>
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
        localStorage,
        authenticated: false,
        loading: false,
      }
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
    mounted() {
      this.checkAuth();
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

  a.back-to-list {
    @include rem((margin: 20px 20px 20px 0px));
    background: $color-red-t2w;
    border: none;
  }
  .nologin {
    @include rem((padding: 50px 0));
    text-align: center;
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
