<template>
<div>
  <HeroSmall title="Jobliste" template="backend" />
  <div class="wrapper">
    <b-container>
      <div class="job-list" v-show="authenticated">
        <b-col>
          <router-link to="/backend/add" :class="['btn btn-primary back-to-list pull-right']">
            Neuen Job anlegen
          </router-link>
          <table class="table table-responsive table-sm">
            <thead>
              <tr>
                <th scope="col">Referenznummer</th>
                <th scope="col">Titel</th>
                <th scope="col">Gebiet</th>
                <th scope="col">Bearbeiten</th>
                <th scope="col">Ansehen</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="job in orderedJobs" :key="job.id">
                <td>{{ job.referenceId }}</td>
                <td class="jobtitle">
                  {{ job.title }} m/w/d
                </td>
                <td>
                  {{ job.area }}
                </td>
                <td>
                  <router-link :to="{name:'jobEdit', params:{id:job._id}}" :class="['btn-edit btn btn-warning btn-xs']">
                    Bearbeiten
                  </router-link>
                </td>
                <td>
                  <router-link :to="{name:'JobSingle', params:{id:job._id}}" :class="['btn-see btn btn-primary btn-xs']">
                    Ansehen
                  </router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </b-col>
      </div>
      <div class="nologin" v-show="!authenticated">
        <b-col>
          <h2>Sie sind nicht angemeldet!</h2>
          <router-link to="/backend/login" :class="['btn-login btn']">
            Zur Anmeldeseite
          </router-link>
        </b-col>
      </div>
    </b-container>
  </div>
</div>
</template>

<script>
import JobMethods from '../../mixin'
import HeroSmall from '@/components/HeroSmall.vue'
import _ from 'lodash';

export default {
  name: 'jobList',
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
      } else {
        this.authenticated = false;
      }
    }
  },
  computed: {
    orderedJobs() {
      return _.orderBy(this.jobs, 'createdAt', ['desc', 'asc'])
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
      return this.checkAuth();
    }
  },
  mixins: [JobMethods],
  components: {
    HeroSmall
  },
  metaInfo: {
    title: 'team2work',
    titleTemplate: '%s » Jobübersicht',
    meta: [{
        'property': 'og:title',
        'content': 'team2work',
        'template': chunk => `${chunk} - Jobübersicht`,
        'vmid': 'og:title'
      },
      {
        'property': 'og:site_name',
        'content': 'team2work',
        'template': chunk => `${chunk} - Jobübersicht`,
        'vmid': 'og:site_name'
      },
      {
        'property': 'og:type',
        'content': 'website'
      },
      {
        'property': 'og:url',
        'content': 'https://team2work.at/#/backend/joblist'
      }
    ]
  }
}
</script>

<style scoped lang="scss">
@import "@/styles/util/util.scss";

.wrapper {
    background: #FFF;
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
a.back-to-list {
    @include rem((margin: 20px 20px 20px 0));
    @extend %ghost-button-red;
}
a.btn-edit {
    @extend %ghost-button-orange-inverted;
}
a.btn-login {
    @include rem((margin-top: 20px));
    @extend %ghost-button-green;
}
a.btn-see {
    @extend %ghost-button-blue-inverted;
}
</style>
