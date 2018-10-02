<template>
<div>
  <HeroSmall title="Dürfen wir einander vorstellen?" template="jobs" />
  <div class="wrapper">
    <b-container>
      <div class="job-block">
        <b-row>
          <b-col cols="12" md="8">
            <div class="job-detail">
              <div class="intro block">
                <vue-markdown :source="job.introText"></vue-markdown>
              </div>
              <div class="title block">
                <h2>
                  {{job.title}} m/w
                </h2>
              </div>
              <div class="title block" v-if="job.subTitle">
                <h2>
                  {{job.subTitle}}
                </h2>
              </div>
              <div class="intro block subtext" v-if="job.subText">
                <vue-markdown :source="job.subText"></vue-markdown>
              </div>
              <hr />
              <div class="working-info block">
                <h3>Aufgabenbereich</h3>
                <ul v-for="response in responsibility" :key="response.id">
                  <li>
                    <vue-markdown :source="response"></vue-markdown>
                  </li>
                </ul>
              </div>
              <hr />
              <div class="qualifications block">
                <h3>Anforderungen</h3>
                <ul v-for="quali in qualifications" :key="quali.id">
                  <li>
                    <vue-markdown :source="quali"></vue-markdown>
                  </li>
                </ul>
              </div>
            </div>
          </b-col>

          <b-col cols="12" md="4">
            <div class="more-info">
              <div class="box t2w-team" v-if="job.contact">
                <h4>Ihre persönliche Ansprechpartnerin</h4>
                <ul>
                  <div v-if="job.contact == 'Martina Brandtmayer'">
                    <li><img src="../assets/images/team/martina-brandtmayer.jpg" class="photo rounded-circle" width="150" /></li>
                    <li><span>{{job.contact}}</span></li>
                    <li>T: <span>+43 (0)676/ 507 45 47</span></li>
                    <li><a href="mailto:martina.brandtmayer@team2work.at">
                        martina.brandtmayer@team<span class="two">2</span>work.at
                      </a></li>
                  </div>
                  <div v-if="job.contact == 'Monika Hrib'">
                    <li><img src="../assets/images/team/monika-hrib.jpg" class="photo rounded-circle" width="150" /></li>
                    <li><span>{{job.contact}}</span></li>
                    <li>T: <span>+43 (0)676/ 754 03 54</span></li>
                    <li><a href="mailto:monika.hrib@team2work.at">
                        monika.hrib@team<span class="two">2</span>work.at
                      </a></li>
                  </div>
                  <div v-if="job.contact == 'Melanie Friedrich'">
                    <li><img src="../assets/images/team/melanie-friedrich.jpg" class="photo rounded-circle" width="150" /></li>
                    <li><span>{{job.contact}}</span></li>
                    <li>T: <span>+43 (0)676/ 758 29 58</span></li>
                    <li><a href="mailto:melanie.friedrich@team2work.at">
                        melanie.friedrich@team<span class="two">2</span>work.at
                      </a></li>
                  </div>
                  <div v-if="job.contact == 'Melanie Friedrich, MA'">
                    <li><img src="../assets/images/team/melanie-friedrich.jpg" class="photo rounded-circle" width="150" /></li>
                    <li><span>{{job.contact}}</span></li>
                    <li>T: <span>+43 (0)676/ 758 29 58</span></li>
                    <li><a href="mailto:melanie.friedrich@team2work.at">
                        melanie.friedrich@team<span class="two">2</span>work.at
                      </a></li>
                  </div>
                  <div v-if="job.contact == 'Irina Friedrich-Ahrer'">
                    <li><img src="../assets/images/team/irina-friedrich.jpg" class="photo rounded-circle" width="150" /></li>
                    <li><span>{{job.contact}}</span></li>
                    <li>T: <span>+43 (0)676/ 404 94 87</span></li>
                    <li><a href="mailto:irina.friedrich@team2work.at">
                        irina.friedrich@team<span class="two">2</span>work.at
                      </a></li>
                  </div>
                </ul>
              </div>
              <div class="box">
                <h4>Eckdaten</h4>
                <ul>
                  <li>Jobtitel: <span>{{job.title}}</span></li>
                  <li>Arbeitszeit: <span>{{job.hours}}</span></li>
                  <li>Arbeitsort: <span>{{job.area}}</span></li>
                  <li>Bruttomonatsgehalt: <span>{{job.salary}} {{job.salaryText}}</span></li>
                  <li v-if="job.referenceId">Referenznummer: <span>{{job.referenceId}}</span></li>
                </ul>
              </div>
              <div class="apply-btn">
                <div v-if="!checked">
                  <a class="btn-more-jobs btn btn-danger btn-block" :disabled="!checked" :class="{ 'disabled': !checked }">
                    Jetzt per E-Mail bewerben
                  </a>
                </div>
                <div v-else>
                  <a :href="`mailto:${job.email}?subject=Bewerbung als ${job.title} (HP)`" class="btn-more-jobs btn btn-danger btn-block">
                    Jetzt per E-Mail bewerben
                  </a>
                </div>
              </div>
              <div class="apply-btn" v-show="authenticated">
                <router-link :to="{name:'jobEdit', params:{id:job._id}}" :class="['btn-edit-job btn btn-success btn-block']">
                  Diesen Job bearbeiten
                </router-link>
              </div>
              <div class="gdpr">
                <input type="checkbox" id="checkbox" v-model="checked"> Ich akzeptiere die <router-link to="/impressum">Datenschutzbestimmungen</router-link>
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <div class="apply-section">
              <div class="salary-block col-sm-5">
                <h3>Gehaltsspanne</h3>
                <div class="salary-box">
                  <b-row>
                    <div class="max col-sm-12">
                      <span class="current">{{job.salary}}</span>
                      <span class="maximal">{{job.maxSalary}}</span>
                    </div>
                  </b-row>
                </div>
              </div>
              <div class="clearfix"></div>
              <div class="apply-section">
                <b-col>
                  <div v-if="job.moreInfoText">
                    <h3>Unser Kunde bietet:</h3>
                    <vue-markdown :source="job.moreInfoText"></vue-markdown>
                  </div>
                  <hr />
                  <div>
                    <vue-markdown :source="job.expectText"></vue-markdown>
                  </div>
                  <hr />
                  <div class="apply-contact">
                    <p>
                      Wenn Sie Interesse an dieser herausfordernden Tätigkeit haben freuen wir uns über Ihre aussagekräftigen Bewerbungsunterlagen mit Lebenslauf samt Foto an
                      <a :href="`mailto:${job.email}?subject=Bewerbung als ${job.title}`" class="mailto">{{job.email}}</a> z.Hd. Frau {{job.contact}}.
                    </p>
                  </div>
                </b-col>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</div>
</template>

<script>
import HeroSmall from '@/components/HeroSmall.vue'
import JobMethods from '../mixin'
import VueMarkdown from 'vue-markdown'
export default {
  name: 'JobSingle',
  components: {
    HeroSmall,
    'vue-markdown': VueMarkdown
  },
  data() {
    return {
      job: [],
      responsibility: [],
      qualifications: [],
      minSalary: [],
      maxSalary: [],
      authenticated: false,
      loading: false,
      checked: false
    }
  },
  created() {
    this.retrieveJobSingle();
  },
  mounted() {
    this.checkAuth();
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
  mixins: [JobMethods],
  metaInfo: {
    title: 'team2work',
    titleTemplate: '%s » Stellenbeschreibung',
    meta: [{
        'property': 'og:title',
        'content': 'team2work',
        'template': chunk => `${chunk} - Stellenbeschreibung`,
        'vmid': 'og:title'
      },
      {
        'property': 'og:site_name',
        'content': 'team2work',
        'template': chunk => `${chunk} - Stellenbeschreibung`,
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
    background: $color-white;
}
.job-block {
    @include rem((padding-top: 60px));
}

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
        &.subtext {
            text-align: center;
        }
    }
}

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
    .t2w-team {
        margin-bottom: 25px;
        text-align: center;
        h4 {
            text-align: left;
        }
        a {
            color: $color-black;
            font-weight: normal;
            &:hover {
                text-decoration: 1px solid $color-red-t2w;
            }
        }
    }
    a.edit-job {
        @include rem((margin-top: 20px));
    }
    .apply-btn {
        @include rem((margin-top: 25px));
        a.btn-more-jobs {
            @extend %ghost-button-red;
        }
        a.btn-edit-job {
            @extend %ghost-button-green;
        }
    }
    .gdpr {
        @include rem((margin-top: 20px));
        @include rem(font-size, 18px);
        a {
            @include rem(font-size, 18px);
            color: $color-red-t2w;
            font-family: $font-regular, "Helvetica Neue", "Helvetica", "Arial", "sans-serif";
            &:disabled {
                border: 2px solid $color-black-medium;
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
            background: linear-gradient(to right, rgba($color-red-t2w, 0.5) 0%,#ffffff 100%);

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
