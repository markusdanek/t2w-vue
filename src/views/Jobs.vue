<template>
<div>
  <HeroSmall title="Jobs" template="jobs" />
  <div class="wrapper">
    <div class="jobs">
      <b-container>
        <b-row>
          <b-col>
            <b-row>
              <b-col cols="12" md="9">
                <div class="job-list">
                  <b-col>
                    <table class="table table-responsive">
                      <thead>
                        <tr>
                          <th class="col-md-9">Jobtitel</th>
                          <th class="col-md-3">Gebiet</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="job in jobs" :key="job.id">
                          <td class="jobtitle">
                            <router-link :to="{name:'JobSingle', params:{id:job._id}}">
                              {{ job.title }} m/w/d
                            </router-link>
                            <vue-markdown :source="job.introText | truncate(150)"></vue-markdown>
                          </td>
                          <td>
                            {{ job.area }}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </b-col>
                </div>
              </b-col>
              <b-col cols="12" md="3">
                <JobPool />
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</div>
</template>

<script>
import HeroSmall from '@/components/HeroSmall.vue'
import JobPool from '@/components/JobPool.vue'
import JobMethods from '../mixin'
import VueMarkdown from 'vue-markdown'

export default {
  name: 'jobs',
  components: {
    HeroSmall,
    JobPool,
    'vue-markdown': VueMarkdown
  },
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
      tcText = tcText.slice(0, last);
      return tcText + clamp;
    }
  },
  created() {
    this.retrieveJobsRandom();
  },
  mixins: [JobMethods],
  metaInfo: {
    title: 'team2work',
    titleTemplate: '%s » Jobs',
    meta: [{
        'property': 'og:title',
        'content': 'team2work',
        'template': chunk => `${chunk} - Jobs`,
        'vmid': 'og:title'
      },
      {
        'property': 'og:site_name',
        'content': 'team2work',
        'template': chunk => `${chunk} - Jobs`,
        'vmid': 'og:site_name'
      },
      {
        'property': 'og:type',
        'content': 'website'
      },
      {
        'property': 'og:url',
        'content': 'https://team2work.at/#/jobs'
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
